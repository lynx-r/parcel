<template>
  <div class="h-full flex flex-col bg-white">
    <div class="p-4 border-b border-gray-200">
      <h2 class="text-lg font-semibold text-gray-900">Role Interfaces & FSM</h2>
    </div>
    <div class="flex-1 overflow-auto">
      <UTabs :items="tabs" class="w-full">
        <!-- Client Tab -->
        <template #client>
          <div class="p-4 space-y-4">
            <UForm :state="clientForm" class="space-y-3">
              <UFormGroup label="Order ID">
                <UInput
                  v-model="clientForm.orderId"
                  placeholder="Enter order ID"
                />
              </UFormGroup>

              <UFormGroup label="Parcel Locker">
                <USelect
                  v-model="clientForm.lockerId"
                  :options="lockerOptions"
                />
              </UFormGroup>

              <UFormGroup label="Cell">
                <USelect v-model="clientForm.cellId" :options="cellOptions" />
              </UFormGroup>

              <UFormGroup label="Order Status">
                <USelect
                  v-model="clientForm.orderStatus"
                  :options="orderStatusOptions"
                />
              </UFormGroup>

              <div class="flex gap-2">
                <UButton
                  color="primary"
                  @click="handleClientAction('create_order')"
                >
                  Create Order
                </UButton>
                <UButton
                  color="red"
                  variant="outline"
                  @click="handleClientAction('cancel_order')"
                >
                  Cancel Order
                </UButton>
              </div>
            </UForm>
          </div>
        </template>

        <!-- Recipient Tab -->
        <template #recipient>
          <div class="p-4 space-y-4">
            <UForm :state="recipientForm" class="space-y-3">
              <UFormGroup label="Order ID">
                <UInput
                  v-model="recipientForm.orderId"
                  placeholder="Enter order ID"
                />
              </UFormGroup>

              <UFormGroup label="Parcel Locker">
                <USelect
                  v-model="recipientForm.lockerId"
                  :options="lockerOptions"
                />
              </UFormGroup>

              <UFormGroup label="Cell">
                <USelect
                  v-model="recipientForm.cellId"
                  :options="cellOptions"
                />
              </UFormGroup>

              <div class="flex flex-col gap-2">
                <UButton
                  color="primary"
                  @click="handleRecipientAction('pickup_from_locker')"
                >
                  Pickup from Parcel Locker
                </UButton>
                <UButton
                  color="green"
                  variant="outline"
                  @click="handleRecipientAction('confirm_from_courier')"
                >
                  Confirm Receipt from Courier
                </UButton>
              </div>
            </UForm>
          </div>
        </template>

        <!-- City Courier Tab -->
        <template #courier>
          <div class="p-4 space-y-4">
            <UForm :state="courierForm" class="space-y-3">
              <UFormGroup label="Order ID">
                <UInput
                  v-model="courierForm.orderId"
                  placeholder="Enter order ID"
                />
              </UFormGroup>

              <UFormGroup label="Parcel Locker">
                <USelect
                  v-model="courierForm.lockerId"
                  :options="lockerOptions"
                />
              </UFormGroup>

              <UFormGroup label="Cell">
                <USelect v-model="courierForm.cellId" :options="cellOptions" />
              </UFormGroup>

              <div class="grid grid-cols-2 gap-2">
                <UButton
                  color="primary"
                  size="sm"
                  @click="handleCourierAction('take_order')"
                >
                  Take Order
                </UButton>
                <UButton
                  color="red"
                  variant="outline"
                  size="sm"
                  @click="handleCourierAction('cancel_order')"
                >
                  Cancel Order
                </UButton>
                <UButton
                  color="yellow"
                  variant="outline"
                  size="sm"
                  @click="handleCourierAction('mark_absent')"
                >
                  Mark Absent
                </UButton>
                <UButton
                  color="green"
                  size="sm"
                  @click="handleCourierAction('place_in_cell')"
                >
                  Place in Cell
                </UButton>
                <UButton
                  color="blue"
                  size="sm"
                  @click="handleCourierAction('take_from_cell')"
                >
                  Take from Cell
                </UButton>
              </div>
            </UForm>
          </div>
        </template>

        <!-- Driver Tab -->
        <template #driver>
          <div class="p-4 space-y-4">
            <UForm :state="driverForm" class="space-y-3">
              <UFormGroup label="Order IDs (comma-separated)">
                <UInput v-model="driverForm.orderIds" placeholder="1,2,3" />
              </UFormGroup>

              <UFormGroup label="Parcel Locker">
                <USelect
                  v-model="driverForm.lockerId"
                  :options="lockerOptions"
                />
              </UFormGroup>

              <div class="grid grid-cols-2 gap-2">
                <UButton
                  color="primary"
                  size="sm"
                  @click="handleDriverAction('take_orders')"
                >
                  Take Orders
                </UButton>
                <UButton
                  color="red"
                  variant="outline"
                  size="sm"
                  @click="handleDriverAction('cancel_orders')"
                >
                  Cancel Orders
                </UButton>
                <UButton
                  color="blue"
                  size="sm"
                  @click="handleDriverAction('pickup_all')"
                >
                  Pickup All from Locker
                </UButton>
                <UButton
                  color="green"
                  size="sm"
                  @click="handleDriverAction('place_all')"
                >
                  Place All in Cells
                </UButton>
              </div>
            </UForm>
          </div>
        </template>

        <!-- Operator Tab -->
        <template #operator>
          <div class="p-4 space-y-4">
            <UCard>
              <div class="flex justify-between items-center">
                <div>
                  <p class="text-sm text-gray-600">Orders in Queue</p>
                  <p class="text-2xl font-bold text-gray-900">
                    {{ systemStats.ordersInQueue }}
                  </p>
                </div>
                <div>
                  <p class="text-sm text-gray-600">Lockers in Repair</p>
                  <p class="text-2xl font-bold text-red-600">
                    {{ systemStats.lockersInRepair }}
                  </p>
                </div>
              </div>
            </UCard>

            <UForm :state="operatorForm" class="space-y-3">
              <UFormGroup label="Order/Trip ID">
                <UInput
                  v-model="operatorForm.entityId"
                  placeholder="Enter ID"
                />
              </UFormGroup>

              <UFormGroup label="Courier ID">
                <UInput
                  v-model="operatorForm.courierId"
                  placeholder="Enter courier ID"
                />
              </UFormGroup>

              <UFormGroup label="Cell ID">
                <UInput
                  v-model="operatorForm.cellId"
                  placeholder="Enter cell ID"
                />
              </UFormGroup>

              <div class="grid grid-cols-2 gap-2">
                <UButton
                  color="primary"
                  size="sm"
                  @click="handleOperatorAction('assign_courier')"
                >
                  Assign Courier
                </UButton>
                <UButton
                  color="red"
                  variant="outline"
                  size="sm"
                  @click="handleOperatorAction('cancel_courier')"
                >
                  Cancel Courier
                </UButton>
                <UButton
                  color="blue"
                  size="sm"
                  @click="handleOperatorAction('assign_trip')"
                >
                  Assign Trip
                </UButton>
                <UButton
                  color="red"
                  variant="outline"
                  size="sm"
                  @click="handleOperatorAction('cancel_trip')"
                >
                  Cancel Trip
                </UButton>
                <UButton
                  color="green"
                  size="sm"
                  @click="handleOperatorAction('open_cell')"
                >
                  Open Cell
                </UButton>
                <UButton
                  color="yellow"
                  variant="outline"
                  size="sm"
                  @click="handleOperatorAction('close_cell')"
                >
                  Close Cell
                </UButton>
                <UButton
                  color="orange"
                  size="sm"
                  @click="handleOperatorAction('mark_repair')"
                >
                  Mark Repair
                </UButton>
              </div>
            </UForm>
          </div>
        </template>

        <!-- FSM Emulator Tab -->
        <template #fsm>
          <div class="p-4 space-y-4">
            <div class="flex gap-2 mb-4">
              <USelect
                v-model="fsmFilters.entityType"
                :options="entityTypeOptions"
                placeholder="Filter by Entity Type"
              />
              <USelect
                v-model="fsmFilters.state"
                :options="stateOptions"
                placeholder="Filter by State"
              />
            </div>

            <UTable :rows="filteredFsmEntities" :columns="fsmColumns">
              <template #actions-data="{ row }">
                <div class="flex gap-2 items-center">
                  <USelect
                    v-model="row.selectedAction"
                    :options="getAvailableActions(row)"
                    placeholder="Select action"
                    size="sm"
                  />
                  <UButton
                    color="primary"
                    size="sm"
                    @click="performFsmAction(row)"
                  >
                    Perform
                  </UButton>
                </div>
              </template>
            </UTable>
          </div>
        </template>
      </UTabs>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue"
import { useMockData } from "~/composables/useMockData"

const {
  fsmStates,
  fsmActions,
  fsmTransitions,
  orders,
  stageOrders,
  trips,
  parcelLockers,
} = useMockData();

const tabs = [
  { key: "client", label: "Client", slot: "client" },
  { key: "recipient", label: "Recipient", slot: "recipient" },
  { key: "courier", label: "City Courier", slot: "courier" },
  { key: "driver", label: "Driver", slot: "driver" },
  { key: "operator", label: "Operator", slot: "operator" },
  { key: "fsm", label: "FSM Emulator", slot: "fsm" },
];

// Form states
const clientForm = ref({
  orderId: "",
  lockerId: null,
  cellId: null,
  orderStatus: "created",
});

const recipientForm = ref({
  orderId: "",
  lockerId: null,
  cellId: null,
});

const courierForm = ref({
  orderId: "",
  lockerId: null,
  cellId: null,
});

const driverForm = ref({
  orderIds: "",
  lockerId: null,
});

const operatorForm = ref({
  entityId: "",
  courierId: "",
  cellId: "",
});

// Options
const lockerOptions = parcelLockers.map((locker) => ({
  label: `${locker.id} - ${locker.address}`,
  value: locker.id,
}));

const cellOptions = computed(() => {
  const allCells = parcelLockers.flatMap((locker) => locker.cells);
  return allCells.map((cell) => ({
    label: `Cell ${cell.number} (${cell.size}) - ${cell.status}`,
    value: cell.id,
  }));
});

const orderStatusOptions = [
  { label: "Created", value: "created" },
  { label: "In Delivery", value: "in_progress" },
  { label: "Delivered", value: "completed" },
  { label: "Cancelled", value: "cancelled" },
];

const systemStats = ref({
  ordersInQueue: 12,
  lockersInRepair: 2,
});

// Action handlers
const handleClientAction = (action: string) => {
  console.log("[v0] Client action:", {
    action,
    orderId: clientForm.value.orderId,
    lockerId: clientForm.value.lockerId,
    role: "client",
  });
  // REST API stub: POST /order/create or PUT /order/cancel
};

const handleRecipientAction = (action: string) => {
  console.log("[v0] Recipient action:", {
    action,
    orderId: recipientForm.value.orderId,
    lockerId: recipientForm.value.lockerId,
    cellId: recipientForm.value.cellId,
    role: "recipient",
  });
  // REST API stub: POST /recipient/pickup or POST /recipient/confirm
};

const handleCourierAction = (action: string) => {
  console.log("[v0] Courier action:", {
    action,
    orderId: courierForm.value.orderId,
    lockerId: courierForm.value.lockerId,
    cellId: courierForm.value.cellId,
    role: "courier",
  });
  // REST API stub: POST /courier/{action}
};

const handleDriverAction = (action: string) => {
  console.log("[v0] Driver action:", {
    action,
    orderIds: driverForm.value.orderIds,
    lockerId: driverForm.value.lockerId,
    role: "driver",
  });
  // REST API stub: POST /driver/{action}
};

const handleOperatorAction = (action: string) => {
  console.log("[v0] Operator action:", {
    action,
    entityId: operatorForm.value.entityId,
    courierId: operatorForm.value.courierId,
    cellId: operatorForm.value.cellId,
    role: "operator",
  });
  // REST API stub: POST /operator/{action}
};

// FSM Emulator
const fsmFilters = ref({
  entityType: null,
  state: null,
});

const entityTypeOptions = [
  { label: "Order", value: "order" },
  { label: "Stage Order", value: "stage_order" },
  { label: "Trip", value: "trip" },
];

const stateOptions = fsmStates.map((state) => ({
  label: state.label,
  value: state.name,
}));

const fsmColumns = [
  { key: "entity_type", label: "Entity Type" },
  { key: "entity_id", label: "Entity ID" },
  { key: "current_state", label: "Current State" },
  { key: "description", label: "Description" },
  { key: "actions", label: "Actions" },
];

const allFsmEntities = computed(() => {
  const entities = [];

  orders.forEach((order) => {
    entities.push({
      entity_type: "order",
      entity_id: order.id,
      current_state: order.status,
      description: order.description,
      selectedAction: null,
    });
  });

  stageOrders.forEach((stageOrder) => {
    entities.push({
      entity_type: "stage_order",
      entity_id: stageOrder.id,
      current_state: stageOrder.status,
      description: stageOrder.description,
      selectedAction: null,
    });
  });

  trips.forEach((trip) => {
    entities.push({
      entity_type: "trip",
      entity_id: trip.id,
      current_state: trip.status,
      description: trip.description,
      selectedAction: null,
    });
  });

  return entities;
});

const filteredFsmEntities = computed(() => {
  let filtered = allFsmEntities.value;

  if (fsmFilters.value.entityType) {
    filtered = filtered.filter(
      (e) => e.entity_type === fsmFilters.value.entityType,
    );
  }

  if (fsmFilters.value.state) {
    filtered = filtered.filter(
      (e) => e.current_state === fsmFilters.value.state,
    );
  }

  return filtered;
});

const getAvailableActions = (row: any) => {
  const currentState = fsmStates.find((s) => s.name === row.current_state);
  if (!currentState) return [];

  const availableTransitions = fsmTransitions.filter(
    (t) => t.from_state_id === currentState.id,
  );
  const actions = availableTransitions
    .map((t) => {
      const action = fsmActions.find((a) => a.id === t.action_id);
      return action ? { label: action.label, value: action.name } : null;
    })
    .filter(Boolean);

  return actions;
};

const performFsmAction = (row: any) => {
  if (!row.selectedAction) return;

  console.log("[v0] FSM action:", {
    entity_type: row.entity_type,
    entity_id: row.entity_id,
    action_name: row.selectedAction,
    user_id: 100,
  });
  // REST API stub: POST /fsm/perform
};
</script>
