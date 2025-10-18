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
        <ClientTab />
      </template>
      <template #recipient>
        <RecipientTab />
      </template>
      <template #operator>
        <OperatorTab />
      </template>
      <template #fsm>
        <FsmEmulatorTab />
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
const router = useRouter()
const route = useRoute()

const orderId = ref('')

const tabs: TabsItem[] = [
  { value: 'client', label: 'Client', slot: 'client' },
  { value: 'recipient', label: 'Recipient', slot: 'recipient' },
  { value: 'courier', label: 'City Courier', slot: 'courier' },
  { value: 'driver', label: 'Driver', slot: 'driver' },
  { value: 'operator', label: 'Operator', slot: 'operator' },
  { value: 'fsm', label: 'FSM Emulator', slot: 'fsm' },
]

const activeTab = computed({
  get() {
    return route.query.tab || 'client'
  },
  set(tab) {
    // Hash is specified here to prevent the page from scrolling to the top
    router.push({
      path: '/',
      query: { tab },
      // hash: '#control-active-item',
    })
  },
})

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
</script>
