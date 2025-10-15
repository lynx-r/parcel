<template>
  <UCard>
    <div class="flex flex-col space-y-4 mb-4">
      <URadioGroup
        v-model="mode"
        orientation="horizontal"
        :items="[
          { label: 'Create Test', value: 'create' },
          { label: 'View Test', value: 'view' },
        ]"
      />
      <USelect
        v-if="mode === 'view'"
        v-model="selectedTest"
        :items="tests"
        option-label="name"
        option-value="id"
        placeholder="Select Test"
        class="w-64"
        @update:model-value="loadTest"
      />
      <div v-if="mode === 'view'" class="flex flex-col space-y-2">
        <h3>Rolls & FSM Emulator</h3>
        <UProgress :value="currentStep" :max="totalSteps" />
        <div class="flex space-x-2">
          <span>Step {{ currentStep }} of {{ totalSteps }}</span>
          <UButton @click="prevStep">Previous</UButton>
          <UButton @click="nextStep">Next</UButton>
          <UButton @click="autoPlay">Auto Play</UButton>
          <USelect v-model="intervalBetweenSteps" :items="stepIntervals" />
        </div>
      </div>
    </div>
    <UTabs v-model="activeTab" :items="tabs">
      <template #client>
        <UInput v-model="orderId" placeholder="User" class="mr-2" />
        <UButton
          :class="{ 'animate-pulse': highlightButton === 'create_order' }"
          @click="performAction('create_order')"
          >Create Order</UButton
        >
      </template>
      <template #recipient>
        <div class="p-4 space-y-4">
          <UForm :state="recipientForm" class="space-y-3">
            <UFormField label="Order ID">
              <UInput
                v-model="recipientForm.orderId"
                placeholder="Enter order ID"
              />
            </UFormField>

            <UFormField label="Parcel Locker">
              <USelect
                v-model="recipientForm.lockerId"
                :items="lockerOptions"
              />
            </UFormField>

            <UFormField label="Cell">
              <USelect v-model="recipientForm.cellId" :items="cellOptions" />
            </UFormField>

            <div class="flex flex-col gap-2">
              <UButton
                color="primary"
                @click="handleRecipientAction('pickup_from_locker')"
              >
                Pickup from Parcel Locker
              </UButton>
              <UButton
                color="success"
                variant="outline"
                @click="handleRecipientAction('confirm_from_courier')"
              >
                Confirm Receipt from Courier
              </UButton>
            </div>
          </UForm>
        </div>
      </template>
      <template #fsm>
        <div class="flex space-x-4 mb-4">
          <USelect
            v-model="filterEntityType"
            :items="['all', 'order', 'stage_order', 'trip']"
            placeholder="Filter by Entity Type"
            @update:model-value="applyFilters"
          />
          <USelect
            v-model="filterState"
            :items="states"
            placeholder="Filter by State"
            @update:model-value="applyFilters"
          />
        </div>
        <UTable
          :columns="fsmHeaders"
          :rows="filteredEntities"
          @row-click="showHistory"
        >
          <template #actions="{ row }">
            <USelect
              v-model="row.original.selectedAction"
              :items="row.original.available_actions"
              :class="{
                'animate-pulse':
                  highlightButton === row.original.selectedAction,
              }"
              placeholder="Select Action"
              class="w-40"
            />
            <UButton @click="performFsmAction(row)">Perform</UButton>
          </template>
        </UTable>
        <UModal v-model="dialog">
          <UCard>
            <template #header>
              <h3>
                Action History for {{ selectedEntity.entity_type }} #{{
                  selectedEntity.entity_id
                }}
              </h3>
            </template>
            <UTable :columns="historyHeaders" :rows="actionHistory" />
          </UCard>
        </UModal>
      </template>
    </UTabs>

    <!-- Other tabs (Recipient, Courier, etc.) similar -->
  </UCard>
</template>

<script setup lang="ts">
import type { TabsItem } from '@nuxt/ui'
import { useMockData } from '~/composables/useMockData'

const {
  // fsmStates,
  // fsmActions,
  // fsmTransitions,
  orders,
  stageOrders,
  trips,
  parcelLockers,
} = useMockData()
const mode = ref('create')
const selectedTest = ref('1')
const tests = ref([]) // Mock: [{ id: 1, name: "Test 1", steps: [...] }, ...]
const totalSteps = ref(0)
const currentStep = ref(0)
const intervalBetweenSteps = ref(5)
const testSteps = ref([])
const highlightButton = ref(null)
const activeTab = ref('client')
const orderId = ref('')
const filterEntityType = ref('all')
const filterState = ref('all')
const states = ['created', 'reserved', 'assigned', 'in_progress', 'completed']
const dialog = ref(false)
const selectedEntity = ref({})
const actionHistory = ref([])

const filteredEntities = computed(() =>
  entities.value.filter(
    (entity) =>
      (filterEntityType.value === 'all' ||
        entity.entity_type === filterEntityType.value) &&
      (filterState.value === 'all' ||
        entity.current_state === filterState.value),
  ),
)

const tabs: TabsItem[] = [
  { value: 'client', label: 'Client', slot: 'client' },
  { value: 'recipient', label: 'Recipient', slot: 'recipient' },
  { value: 'courier', label: 'City Courier', slot: 'courier' },
  { value: 'driver', label: 'Driver', slot: 'driver' },
  { value: 'operator', label: 'Operator', slot: 'operator' },
  { value: 'fsm', label: 'FSM Emulator', slot: 'fsm' },
]

async function applyFilters() {
  const { data } = await useFetch('/fsm/entities', {
    query: { entity_type: filterEntityType.value, state: filterState.value },
  })
  entities.value = data.value || []
}

// Form states
// const clientForm = ref({
//   orderId: '',
//   lockerId: null,
//   cellId: null,
//   orderStatus: 'created',
// })
const stepIntervals = [
  [
    { label: '5 сек', value: 5 },
    { label: '10 сек', value: 10 },
    { label: '30 сек', value: 30 },
  ],
]

const lockerOptions = parcelLockers.map((locker) => ({
  label: `${locker.id} - ${locker.address}`,
  value: locker.id,
}))
const cellOptions = computed(() => {
  const allCells = parcelLockers.flatMap((locker) => locker.cells)
  return allCells.map((cell) => ({
    label: `Cell ${cell.number} (${cell.size}) - ${cell.status}`,
    value: cell.id,
  }))
})

const recipientForm = ref({
  orderId: '',
  lockerId: lockerOptions[0]?.value,
  cellId: cellOptions.value[0]?.value,
})

// const courierForm = ref({
//   orderId: '',
//   lockerId: null,
//   cellId: null,
// })

// const driverForm = ref({
//   orderIds: '',
//   lockerId: null,
// })

// const operatorForm = ref({
//   entityId: '',
//   courierId: '',
//   cellId: '',
// })

const fsmHeaders = [
  { accessorKey: 'entity_type', header: 'Entity Type' },
  { accessorKey: 'entity_id', header: 'Entity ID' },
  { accessorKey: 'current_state', header: 'Current State' },
  { accessorKey: 'description', header: 'Description' },
  { accessorKey: 'actions', header: 'Actions' },
]

const historyHeaders = [
  { accessorKey: 'action_name', header: 'Action' },
  { accessorKey: 'from_state', header: 'From State' },
  { accessorKey: 'to_state', header: 'To State' },
  { accessorKey: 'created_at', header: 'Time' },
]

const entities = ref([
  {
    entity_type: 'order',
    entity_id: 1,
    current_state: 'created',
    description: 'Order 1',
    available_actions: ['reserve_cell'],
    selectedAction: null,
  },
  // Mock data...
])

// Options

// const orderStatusOptions = [
//   { label: 'Created', value: 'created' },
//   { label: 'In Delivery', value: 'in_progress' },
//   { label: 'Delivered', value: 'completed' },
//   { label: 'Cancelled', value: 'cancelled' },
// ]

// const systemStats = ref({
//   ordersInQueue: 12,
//   lockersInRepair: 2,
// })

// // Action handlers
// const handleClientAction = (action: string) => {
//   console.log('[v0] Client action:', {
//     action,
//     orderId: clientForm.value.orderId,
//     lockerId: clientForm.value.lockerId,
//     role: 'client',
//   })
//   // REST API stub: POST /order/create or PUT /order/cancel
// }

const handleRecipientAction = (action: string) => {
  console.log('[v0] Recipient action:', {
    action,
    orderId: recipientForm.value.orderId,
    lockerId: recipientForm.value.lockerId,
    cellId: recipientForm.value.cellId,
    role: 'recipient',
  })
  // REST API stub: POST /recipient/pickup or POST /recipient/confirm
}

// FSM Emulator
const fsmFilters = ref({
  entityType: null,
  state: null,
})

// const entityTypeOptions = [
//   { label: 'Order', value: 'order' },
//   { label: 'Stage Order', value: 'stage_order' },
//   { label: 'Trip', value: 'trip' },
// ]

// const stateOptions = fsmStates.map((state) => ({
//   label: state.label,
//   value: state.name,
// }))

// const fsmColumns: TableColumn<never>[] = [
//   { accessorKey: 'entity_type', header: 'Entity Type' },
//   { accessorKey: 'entity_id', header: 'Entity ID' },
//   { accessorKey: 'current_state', header: 'Current State' },
//   { accessorKey: 'description', header: 'Description' },
//   { accessorKey: 'actions', header: 'Actions' },
// ]

const allFsmEntities = computed(() => {
  const entities = []

  orders.forEach((order) => {
    entities.push({
      entity_type: 'order',
      entity_id: order.id,
      current_state: order.status,
      description: order.description,
      selectedAction: null,
    })
  })

  stageOrders.forEach((stageOrder) => {
    entities.push({
      entity_type: 'stage_order',
      entity_id: stageOrder.id,
      current_state: stageOrder.status,
      description: stageOrder.description,
      selectedAction: null,
    })
  })

  trips.forEach((trip) => {
    entities.push({
      entity_type: 'trip',
      entity_id: trip.id,
      current_state: trip.status,
      description: trip.description,
      selectedAction: null,
    })
  })

  return entities
})

async function performAction(action) {
  if (mode.value === 'create') {
    const { data } = await useFetch('/action', {
      method: 'POST',
      body: { action, order_id: orderId.value },
    })
    console.log(data.value)
    // Emit to parent for test creation
    emit('add-test-step', { action, order_id: orderId.value })
  }
}

const performFsmAction = (row: any) => {
  if (!row.selectedAction) return

  console.log('[v0] FSM action:', {
    entity_type: row.entity_type,
    entity_id: row.entity_id,
    action_name: row.selectedAction,
    user_id: 100,
  })
  // REST API stub: POST /fsm/perform
}

async function loadTest(testId) {
  const { data } = await useFetch(`/tests/${testId}`)
  testSteps.value = data.value.steps || []
  totalSteps.value = testSteps.value.length
  currentStep.value = 0
  playStep()
}

function playStep() {
  if (currentStep.value < totalSteps.value) {
    const step = testSteps.value[currentStep.value]
    highlightButton.value = step.action_name || step.action
    setTimeout(() => (highlightButton.value = null), 1000) // Pulse for 1s
  }
}

function prevStep() {
  if (currentStep.value > 0) {
    currentStep.value--
    playStep()
  }
}

function nextStep() {
  if (currentStep.value < totalSteps.value - 1) {
    currentStep.value++
    playStep()
  }
}

function autoPlay() {
  const interval = setInterval(() => {
    if (currentStep.value < totalSteps.value - 1) {
      nextStep()
    } else {
      clearInterval(interval)
    }
  }, 2000)
}

async function showHistory(row) {
  selectedEntity.value = row
  const { data } = await useFetch('/fsm/logs', {
    query: { entity_type: row.entity_type, entity_id: row.entity_id },
  })
  actionHistory.value = data.value || []
  dialog.value = true
}

onMounted(() => {
  applyFilters()
})
</script>
