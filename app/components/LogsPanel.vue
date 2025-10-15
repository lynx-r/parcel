<template>
  <div class="h-full flex flex-col bg-white">
    <div class="p-4 border-b border-gray-200">
      <h2 class="text-lg font-semibold text-gray-900">Logs</h2>
    </div>

    <!-- Tabs for Action Logs and Errors -->
    <UTabs :items="logTabs" class="flex-1 flex flex-col">
      <!-- Action Logs Tab -->
      <template #actions>
        <div class="flex-1 flex flex-col">
          <!-- Filters -->
          <div class="p-3 border-b border-gray-200 space-y-2">
            <USelect
              v-model="actionFilters.role"
              :options="roleFilterOptions"
              size="xs"
              placeholder="Filter by role"
            />
            <USelect
              v-model="actionFilters.result"
              :options="resultFilterOptions"
              size="xs"
              placeholder="Filter by result"
            />
            <UInput
              v-model="actionFilters.search"
              icon="i-heroicons-magnifying-glass"
              size="xs"
              placeholder="Search logs..."
            />
          </div>

          <!-- Action Logs Table -->
          <div class="flex-1 overflow-auto">
            <UTable :rows="filteredActionLogs" :columns="actionLogColumns">
              <template #step-data="{ row, index }">
                <span class="text-xs font-mono text-gray-600">{{
                  index + 1
                }}</span>
              </template>

              <template #role-data="{ row }">
                <UBadge
                  :color="getRoleBadgeColor(row.role)"
                  variant="subtle"
                  size="xs"
                >
                  {{ row.role }}
                </UBadge>
              </template>

              <template #action_name-data="{ row }">
                <span class="text-xs text-gray-900">{{ row.action_name }}</span>
              </template>

              <template #states-data="{ row }">
                <div class="flex items-center gap-1 text-xs">
                  <span class="text-gray-600">{{ row.from_state }}</span>
                  <UIcon
                    name="i-heroicons-arrow-right"
                    class="w-3 h-3 text-gray-400"
                  />
                  <span class="text-gray-900 font-medium">{{
                    row.to_state
                  }}</span>
                </div>
              </template>

              <template #result-data="{ row }">
                <UBadge
                  :color="row.result === 'OK' ? 'green' : 'gray'"
                  variant="subtle"
                  size="xs"
                >
                  {{ row.result }}
                </UBadge>
              </template>
            </UTable>
          </div>

          <!-- Export Button -->
          <div class="p-3 border-t border-gray-200">
            <UButton
              color="primary"
              variant="outline"
              size="xs"
              block
              icon="i-heroicons-arrow-down-tray"
              @click="exportLogs"
            >
              Export to CSV
            </UButton>
          </div>
        </div>
      </template>

      <!-- Error Logs Tab -->
      <template #errors>
        <div class="flex-1 flex flex-col">
          <!-- Filters -->
          <div class="p-3 border-b border-gray-200 space-y-2">
            <USelect
              v-model="errorFilters.entityType"
              :options="entityTypeFilterOptions"
              size="xs"
              placeholder="Filter by entity type"
            />
            <UInput
              v-model="errorFilters.search"
              icon="i-heroicons-magnifying-glass"
              size="xs"
              placeholder="Search errors..."
            />
          </div>

          <!-- Error Logs Table -->
          <div class="flex-1 overflow-auto">
            <UTable :rows="filteredErrorLogs" :columns="errorLogColumns">
              <template #error_time-data="{ row }">
                <span class="text-xs text-gray-600">{{
                  formatTime(row.error_time)
                }}</span>
              </template>

              <template #error_message-data="{ row }">
                <span class="text-xs text-red-700">{{
                  row.error_message
                }}</span>
              </template>

              <template #entity_type-data="{ row }">
                <UBadge color="purple" variant="subtle" size="xs">
                  {{ row.entity_type }}
                </UBadge>
              </template>

              <template #entity_id-data="{ row }">
                <span class="text-xs font-mono text-gray-900">{{
                  row.entity_id
                }}</span>
              </template>

              <template #action_name-data="{ row }">
                <span class="text-xs text-gray-700">{{ row.action_name }}</span>
              </template>
            </UTable>
          </div>

          <!-- Export Button -->
          <div class="p-3 border-t border-gray-200">
            <UButton
              color="red"
              variant="outline"
              size="xs"
              block
              icon="i-heroicons-arrow-down-tray"
              @click="exportErrors"
            >
              Export Errors
            </UButton>
          </div>
        </div>
      </template>
    </UTabs>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue"
import { useMockData } from "~/composables/useMockData"

const { actionLogs, errorLogs } = useMockData();

const logTabs = [
  { key: "actions", label: "Action Logs", slot: "actions" },
  { key: "errors", label: "Errors", slot: "errors" },
];

// Action Logs
const actionFilters = ref({
  role: null,
  result: null,
  search: "",
});

const roleFilterOptions = [
  { label: "All", value: null },
  { label: "FSM", value: "fsm" },
  { label: "Client", value: "client" },
  { label: "Recipient", value: "recipient" },
  { label: "Courier", value: "courier" },
  { label: "Driver", value: "driver" },
  { label: "Operator", value: "operator" },
];

const resultFilterOptions = [
  { label: "All", value: null },
  { label: "OK", value: "OK" },
  { label: "Empty", value: "Empty" },
];

const actionLogColumns = [
  { key: "step", label: "Step" },
  { key: "role", label: "Role" },
  { key: "action_name", label: "Action" },
  { key: "states", label: "Status Change" },
  { key: "result", label: "Result" },
];

// Transform action logs to include role and result
const enrichedActionLogs = computed(() => {
  return actionLogs.map((log, index) => ({
    ...log,
    role: "FSM", // All logs from fsm_action_logs are FSM actions
    result: "OK", // Successful actions
    step: index + 1,
  }));
});

const filteredActionLogs = computed(() => {
  let filtered = enrichedActionLogs.value;

  // Role filter
  if (actionFilters.value.role) {
    filtered = filtered.filter(
      (log) =>
        log.role.toLowerCase() === actionFilters.value.role.toLowerCase(),
    );
  }

  // Result filter
  if (actionFilters.value.result) {
    filtered = filtered.filter(
      (log) => log.result === actionFilters.value.result,
    );
  }

  // Search filter
  if (actionFilters.value.search) {
    const query = actionFilters.value.search.toLowerCase();
    filtered = filtered.filter(
      (log) =>
        log.action_name.toLowerCase().includes(query) ||
        log.from_state.toLowerCase().includes(query) ||
        log.to_state.toLowerCase().includes(query),
    );
  }

  return filtered;
});

// Error Logs
const errorFilters = ref({
  entityType: null,
  search: "",
});

const entityTypeFilterOptions = [
  { label: "All", value: null },
  { label: "Order", value: "order" },
  { label: "Stage Order", value: "stage_order" },
  { label: "Trip", value: "trip" },
];

const errorLogColumns = [
  { key: "error_time", label: "Time" },
  { key: "error_message", label: "Error Message" },
  { key: "entity_type", label: "Entity Type" },
  { key: "entity_id", label: "Entity ID" },
  { key: "action_name", label: "Action" },
];

const filteredErrorLogs = computed(() => {
  let filtered = errorLogs;

  // Entity type filter
  if (errorFilters.value.entityType) {
    filtered = filtered.filter(
      (log) => log.entity_type === errorFilters.value.entityType,
    );
  }

  // Search filter
  if (errorFilters.value.search) {
    const query = errorFilters.value.search.toLowerCase();
    filtered = filtered.filter(
      (log) =>
        log.error_message.toLowerCase().includes(query) ||
        log.action_name.toLowerCase().includes(query),
    );
  }

  return filtered;
});

const getRoleBadgeColor = (role: string) => {
  switch (role.toLowerCase()) {
    case "fsm":
      return "purple";
    case "client":
      return "blue";
    case "recipient":
      return "green";
    case "courier":
      return "yellow";
    case "driver":
      return "orange";
    case "operator":
      return "red";
    default:
      return "gray";
  }
};

const formatTime = (timestamp: string) => {
  const date = new Date(timestamp);
  return date.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

const exportLogs = () => {
  console.log("[v0] Exporting action logs to CSV:", filteredActionLogs.value);
  // REST API stub: GET /logs/export
};

const exportErrors = () => {
  console.log("[v0] Exporting error logs to CSV:", filteredErrorLogs.value);
  // REST API stub: GET /errors/export
};
</script>
