<template>
  <div class="h-full flex flex-col bg-white">
    <div class="p-4 border-b border-gray-200">
      <h2 class="text-lg font-semibold text-gray-900">Test Queue</h2>
    </div>

    <!-- Filters -->
    <div class="p-3 border-b border-gray-200 space-y-2">
      <USelect
        v-model="statusFilter"
        :options="statusFilterOptions"
        size="xs"
        placeholder="Filter by status"
      />
      <USelect
        v-model="typeFilter"
        :options="typeFilterOptions"
        size="xs"
        placeholder="Filter by type"
      />
      <UInput
        v-model="searchQuery"
        icon="i-heroicons-magnifying-glass"
        size="xs"
        placeholder="Search tests..."
      />
    </div>

    <!-- Tests Table -->
    <div class="flex-1 overflow-auto">
      <UTable
        v-model="selectedRows"
        :rows="filteredTests"
        :columns="testColumns"
        @select="selectTest"
      >
        <template #name-data="{ row }">
          <button
            class="text-left hover:text-primary transition-colors"
            :class="{
              'font-semibold text-primary': selectedTest?.id === row.id,
            }"
            @click="selectTest(row)"
          >
            {{ row.name }}
          </button>
        </template>

        <template #status-data="{ row }">
          <UBadge
            :color="getStatusColor(row.status)"
            variant="subtle"
            size="xs"
          >
            {{ getStatusLabel(row.status) }}
          </UBadge>
        </template>

        <template #type-data="{ row }">
          <UBadge
            :color="row.type === 'fsm' ? 'purple' : 'blue'"
            variant="subtle"
            size="xs"
          >
            {{ row.type === "fsm" ? "FSM" : "Normal" }}
          </UBadge>
        </template>

        <template #progress-data="{ row }">
          <span class="text-xs text-gray-600">{{ row.progress }}</span>
        </template>
      </UTable>
    </div>

    <!-- Test Details Panel -->
    <div v-if="selectedTest" class="border-t border-gray-200 bg-gray-50">
      <div class="p-3">
        <div class="flex items-center justify-between mb-3">
          <h3 class="text-sm font-semibold text-gray-900">Test Details</h3>
          <UButton
            color="gray"
            variant="ghost"
            icon="i-heroicons-x-mark"
            size="xs"
            @click="selectedTest = null"
          />
        </div>

        <UCard class="mb-3">
          <div class="space-y-2">
            <div>
              <p class="text-xs text-gray-600">Name</p>
              <p class="text-sm font-medium text-gray-900">
                {{ selectedTest.name }}
              </p>
            </div>
            <div>
              <p class="text-xs text-gray-600">Description</p>
              <p class="text-sm text-gray-700">
                {{ selectedTest.description }}
              </p>
            </div>
            <div>
              <p class="text-xs text-gray-600">Progress</p>
              <p class="text-sm font-medium text-gray-900">
                {{ selectedTest.progress }}
              </p>
            </div>
            <div>
              <p class="text-xs text-gray-600 mb-1">JSON Data</p>
              <pre
                class="text-xs bg-gray-900 text-green-400 p-2 rounded overflow-auto max-h-32"
                >{{ JSON.stringify(selectedTest.json_data, null, 2) }}</pre
              >
            </div>
          </div>
        </UCard>

        <div class="flex gap-2">
          <UButton color="primary" size="xs" block @click="runTestStep">
            Run Step
          </UButton>
          <UButton color="green" size="xs" block @click="runFullTest">
            Run Full Test
          </UButton>
        </div>
      </div>
    </div>

    <!-- Action Buttons -->
    <div class="p-3 border-t border-gray-200">
      <UButton color="primary" size="xs" block @click="openAddTestModal">
        Add Test
      </UButton>
    </div>

    <!-- Add Test Modal -->
    <UModal v-model="isAddTestModalOpen">
      <UCard>
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-lg font-semibold text-gray-900">Add New Test</h3>
            <UButton
              color="gray"
              variant="ghost"
              icon="i-heroicons-x-mark"
              @click="isAddTestModalOpen = false"
            />
          </div>
        </template>

        <UForm :state="newTestForm" class="space-y-3">
          <UFormGroup label="Test Name">
            <UInput v-model="newTestForm.name" placeholder="Enter test name" />
          </UFormGroup>

          <UFormGroup label="Description">
            <UTextarea
              v-model="newTestForm.description"
              placeholder="Enter description"
            />
          </UFormGroup>

          <UFormGroup label="Type">
            <USelect v-model="newTestForm.type" :options="typeOptions" />
          </UFormGroup>

          <UFormGroup label="JSON Data">
            <UTextarea
              v-model="newTestForm.jsonData"
              placeholder='{"entity_type": "order", "entity_id": 1, "action_name": "reserve_cell"}'
              rows="4"
            />
          </UFormGroup>
        </UForm>

        <template #footer>
          <div class="flex justify-end gap-2">
            <UButton
              color="gray"
              variant="ghost"
              @click="isAddTestModalOpen = false"
            >
              Cancel
            </UButton>
            <UButton color="primary" @click="addTest"> Add Test </UButton>
          </div>
        </template>
      </UCard>
    </UModal>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue"
import { useMockData } from "~/composables/useMockData"
import type { Test } from "~/types/fsm"

const { tests } = useMockData();

const searchQuery = ref("");
const statusFilter = ref(null);
const typeFilter = ref(null);
const selectedTest = ref<Test | null>(null);
const selectedRows = ref([]);
const isAddTestModalOpen = ref(false);

const newTestForm = ref({
  name: "",
  description: "",
  type: "normal",
  jsonData: "",
});

const statusFilterOptions = [
  { label: "All", value: null },
  { label: "Success", value: "success" },
  { label: "Error", value: "error" },
  { label: "In Progress", value: "in_progress" },
];

const typeFilterOptions = [
  { label: "All", value: null },
  { label: "Normal", value: "normal" },
  { label: "FSM", value: "fsm" },
];

const typeOptions = [
  { label: "Normal", value: "normal" },
  { label: "FSM", value: "fsm" },
];

const testColumns = [
  { key: "name", label: "Test Name" },
  { key: "status", label: "Status" },
  { key: "type", label: "Type" },
  { key: "progress", label: "Progress" },
];

const filteredTests = computed(() => {
  let filtered = tests;

  // Search filter
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    filtered = filtered.filter(
      (test) =>
        test.name.toLowerCase().includes(query) ||
        test.description.toLowerCase().includes(query),
    );
  }

  // Status filter
  if (statusFilter.value) {
    filtered = filtered.filter((test) => test.status === statusFilter.value);
  }

  // Type filter
  if (typeFilter.value) {
    filtered = filtered.filter((test) => test.type === typeFilter.value);
  }

  return filtered;
});

const getStatusColor = (status: string) => {
  switch (status) {
    case "success":
      return "green";
    case "error":
      return "red";
    case "in_progress":
      return "yellow";
    default:
      return "gray";
  }
};

const getStatusLabel = (status: string) => {
  switch (status) {
    case "success":
      return "Success";
    case "error":
      return "Error";
    case "in_progress":
      return "In Progress";
    default:
      return status;
  }
};

const selectTest = (test: Test) => {
  selectedTest.value = test;
  console.log("[v0] Selected test:", test);
};

const runTestStep = () => {
  if (!selectedTest.value) return;
  console.log("[v0] Running test step:", selectedTest.value);
  // REST API stub: POST /test/run-step
};

const runFullTest = () => {
  if (!selectedTest.value) return;
  console.log("[v0] Running full test:", selectedTest.value);
  // REST API stub: POST /test/run-full
};

const openAddTestModal = () => {
  isAddTestModalOpen.value = true;
};

const addTest = () => {
  try {
    const jsonData = JSON.parse(newTestForm.value.jsonData);
    console.log("[v0] Adding new test:", {
      name: newTestForm.value.name,
      description: newTestForm.value.description,
      type: newTestForm.value.type,
      json_data: jsonData,
    });
    // REST API stub: POST /test/create
    isAddTestModalOpen.value = false;
    // Reset form
    newTestForm.value = {
      name: "",
      description: "",
      type: "normal",
      jsonData: "",
    };
  } catch (e) {
    console.error("[v0] Invalid JSON data:", e);
  }
};
</script>
