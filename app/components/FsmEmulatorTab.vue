<script lang="ts" setup>
const actionLogHeaders = [
  { accessorKey: 'entity_type', header: 'Entity Type' },
  { accessorKey: 'entity_id', header: 'Entity ID' },
  { accessorKey: 'from_state', header: 'From State' },
  { accessorKey: 'to_state', header: 'To State' },
  { accessorKey: 'action_name', header: 'Action' },
  { accessorKey: 'created_at', header: 'Created at' },
]

const errorLogHeaders = [
  { accessorKey: 'error_time', header: 'Error time' },
  { accessorKey: 'error_message', header: 'Error message' },
  { accessorKey: 'entity_type', header: 'Entity type' },
  { accessorKey: 'entity_id', header: 'Entity ID' },
  { accessorKey: 'action_name', header: 'Action name' },
  { accessorKey: 'user_id', header: 'User ID' },
]

const actionLogData = ref([])
async function getActionLog() {
  actionLogData.value = await $fetch('/api/fsm_logs/action')
}

const errorLogData = ref([])

async function getErrorLogs() {
  errorLogData.value = await $fetch('/api/fsm_logs/error')
}

onMounted(() => {
  getActionLog()
  getErrorLogs()
})
</script>

<template>
  <div class="flex flex-col gap-2">
    <p>Actions Logs</p>
    <UTable :columns="actionLogHeaders" :data="actionLogData" />
    <p>Errors Logs</p>
    <UTable :columns="errorLogHeaders" :data="errorLogData" />
  </div>
</template>
