<template>
  <div class="h-full flex flex-col bg-white">
    <div class="p-4 border-b border-gray-200">
      <h2 class="text-lg font-semibold text-gray-900">Parcel Lockers</h2>
    </div>

    <!-- Filters -->
    <div class="p-4 border-b border-gray-200 space-y-3">
      <UInput
        v-model="searchQuery"
        icon="i-heroicons-magnifying-glass"
        placeholder="Search by address or ID..."
      />
      <USelect
        v-model="statusFilter"
        :options="statusFilterOptions"
        placeholder="Filter by status"
      />
    </div>

    <!-- Lockers List -->
    <div class="flex-1 overflow-auto p-4">
      <UAccordion :items="filteredLockers" :multiple="true">
        <template #content="{ item }">
          <!-- <UButton
            color="neutral"
            variant="ghost"
            class="w-full justify-between"
          > -->
          <!-- :ui="{ rounded: 'rounded-lg' }" -->
          <div class="flex items-center gap-3">
            <div
              class="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold text-sm"
            >
              {{ item.id }}
            </div>
            <div class="text-left">
              <p class="font-medium text-gray-900">Locker #{{ item.id }}</p>
              <p class="text-sm text-gray-600">
                {{ item.address }}
              </p>
            </div>
          </div>
          <!-- <UIcon
              :name="
                open ? 'i-heroicons-chevron-up' : 'i-heroicons-chevron-down'
              "
              class="w-5 h-5 text-gray-400"
            /> -->
          <!-- </UButton> -->
        </template>

        <template #body="{ item }">
          <div class="p-4 bg-gray-50 rounded-b-lg">
            <UTable :rows="item.cells" :columns="cellColumns">
              <template #size-cell="{ row }">
                <UBadge
                  :color="getSizeBadgeColor(row.original.size)"
                  variant="subtle"
                >
                  {{ row.original.size }}
                </UBadge>
              </template>

              <template #status-cell="{ row }">
                <UBadge
                  :color="getStatusBadgeColor(row.original.status)"
                  variant="subtle"
                >
                  {{ getStatusLabel(row.original.status) }}
                </UBadge>
              </template>

              <template #actions-cell="{ row }">
                <UButton
                  color="primary"
                  variant="ghost"
                  size="xs"
                  @click="openCellDetails(row.original)"
                >
                  Details
                </UButton>
              </template>
            </UTable>
          </div>
        </template>
      </UAccordion>
    </div>

    <!-- Cell Details Modal -->
    <UModal v-model="isModalOpen">
      <UCard>
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-lg font-semibold text-gray-900">Cell Details</h3>
            <UButton
              color="neutral"
              variant="ghost"
              icon="i-heroicons-x-mark"
              @click="isModalOpen = false"
            />
          </div>
        </template>

        <div v-if="selectedCell" class="space-y-4">
          <div class="grid grid-cols-2 gap-4">
            <div>
              <p class="text-sm text-gray-600">Cell Number</p>
              <p class="font-semibold text-gray-900">
                {{ selectedCell.number }}
              </p>
            </div>
            <div>
              <p class="text-sm text-gray-600">Size</p>
              <UBadge :color="getSizeBadgeColor(selectedCell.size)">
                {{ selectedCell.size }}
              </UBadge>
            </div>
            <div>
              <p class="text-sm text-gray-600">Status</p>
              <UBadge :color="getStatusBadgeColor(selectedCell.status)">
                {{ getStatusLabel(selectedCell.status) }}
              </UBadge>
            </div>
            <div>
              <p class="text-sm text-gray-600">Locker ID</p>
              <p class="font-semibold text-gray-900">
                {{ selectedCell.locker_id }}
              </p>
            </div>
          </div>

          <div class="border-t border-gray-200 pt-4">
            <p class="text-sm font-medium text-gray-900 mb-2">Orders in Cell</p>
            <div v-if="selectedCell.status === 'occupied'" class="space-y-2">
              <div class="p-3 bg-gray-50 rounded-lg">
                <p class="text-sm font-medium text-gray-900">Order #12345</p>
                <p class="text-xs text-gray-600">Package from Store A</p>
              </div>
            </div>
            <p v-else class="text-sm text-gray-600">No orders in this cell</p>
          </div>
        </div>
      </UCard>
    </UModal>
  </div>
</template>

<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui'
import { computed, ref } from 'vue'
import { useMockData } from '~/composables/useMockData'
import type { Cell } from '~/types/fsm'

const searchQuery = ref('')
const statusFilter = ref(null)
const isModalOpen = ref(false)
const selectedCell = ref<Cell | null>(null)

const { parcelLockers } = useMockData()

const statusFilterOptions = [
  { label: 'All', value: null },
  { label: 'Free', value: 'free' },
  { label: 'Occupied', value: 'occupied' },
  { label: 'In Repair', value: 'repair' },
]

const cellColumns: TableColumn<Cell>[] = [
  { accessorKey: 'number', header: 'Cell #' },
  { accessorKey: 'size', header: 'Size' },
  { accessorKey: 'status', header: 'Status' },
  { accessorKey: 'actions', header: '' },
]

const filteredLockers = computed(() => {
  let filtered = parcelLockers

  // Search filter
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(
      (locker) =>
        locker.address.toLowerCase().includes(query) ||
        locker.id.toString().includes(query),
    )
  }

  // Status filter
  if (statusFilter.value) {
    filtered = filtered
      .map((locker) => ({
        ...locker,
        cells: locker.cells.filter(
          (cell) => cell.status === statusFilter.value,
        ),
      }))
      .filter((locker) => locker.cells.length > 0)
  }

  return filtered.map((locker) => ({
    ...locker,
    label: `${locker.id} - ${locker.address}`,
  }))
})

const getSizeBadgeColor = (size: string) => {
  switch (size) {
    case 'S':
      return 'info'
    case 'M':
      return 'success'
    case 'L':
      return 'warning'
    default:
      return 'neutral'
  }
}

const getStatusBadgeColor = (status: string) => {
  switch (status) {
    case 'free':
      return 'success'
    case 'occupied':
      return 'warning'
    case 'repair':
      return 'error'
    default:
      return 'neutral'
  }
}

const getStatusLabel = (status: string) => {
  switch (status) {
    case 'free':
      return 'Free'
    case 'occupied':
      return 'Occupied'
    case 'repair':
      return 'In Repair'
    default:
      return status
  }
}

const openCellDetails = (cell: Cell) => {
  selectedCell.value = cell
  isModalOpen.value = true
  console.log('[v0] Opening cell details:', cell)
}
</script>
