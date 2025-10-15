<template>
  <UCard>
    <template #header>
      <h3>Rolls & FSM Emulator</h3>
    </template>
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
        :options="tests"
        option-label="name"
        option-value="id"
        placeholder="Select Test"
        class="w-64"
        @update:model-value="loadTest"
      />
      <div v-if="mode === 'view'" class="flex flex-col space-y-2">
        <UProgress :value="currentStep" :max="totalSteps" />
        <div class="flex space-x-2">
          <span>Step {{ currentStep }} of {{ totalSteps }}</span>
          <UButton @click="prevStep">Previous</UButton>
          <UButton @click="nextStep">Next</UButton>
          <UButton @click="autoPlay">Auto Play</UButton>
        </div>
      </div>
    </div>
    <UTabs v-model="activeTab" :items="tabs">
      <template #client>
        <UInput v-model="orderId" placeholder="Order ID" class="mb-2" />
        <UButton
          :class="{ 'animate-pulse': highlightButton === 'create_order' }"
          @click="performAction('create_order')"
          >Create Order</UButton
        >
        <UButton
          :class="{ 'animate-pulse': highlightButton === 'cancel_order' }"
          @click="performAction('cancel_order')"
          >Cancel Order</UButton
        >
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
              v-model="row.selectedAction"
              :options="row.available_actions"
              :class="{
                'animate-pulse': highlightButton === row.selectedAction,
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

<script setup>
const mode = ref('create')
const selectedTest = ref(null)
const tests = ref([]) // Mock: [{ id: 1, name: "Test 1", steps: [...] }, ...]
const currentStep = ref(0)
const totalSteps = ref(0)
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

const filteredEntities = computed(() =>
  entities.value.filter(
    (entity) =>
      (filterEntityType.value === 'all' ||
        entity.entity_type === filterEntityType.value) &&
      (filterState.value === 'all' ||
        entity.current_state === filterState.value),
  ),
)

const tabs = [
  { label: 'Client', value: 'client', slot: 'client' },
  { label: 'Recipient', value: 'recipient', slot: 'recipient' },
  { label: 'Courier', value: 'courier', slot: 'courier' },
  { label: 'Driver', value: 'driver', slot: 'driver' },
  { label: 'Operator', value: 'operator', slot: 'operator' },
  { label: 'FSM Emulator', value: 'fsm', slot: 'fsm' },
]

async function applyFilters() {
  const { data } = await useFetch('/fsm/entities', {
    query: { entity_type: filterEntityType.value, state: filterState.value },
  })
  entities.value = data.value || []
}

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

async function performFsmAction(row) {
  if (mode.value === 'create') {
    const { data } = await useFetch('/fsm/perform', {
      method: 'POST',
      body: {
        entity_type: row.entity_type,
        entity_id: row.entity_id,
        action_name: row.selectedAction,
        user_id: 100,
      },
    })
    console.log(data.value)
    emit('add-test-step', {
      entity_type: row.entity_type,
      entity_id: row.entity_id,
      action_name: row.selectedAction,
    })
    await applyFilters()
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
