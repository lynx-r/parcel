<script lang="ts" setup>
const {
  // fsmStates,
  // fsmActions,
  // fsmTransitions,
  parcelLockers,
} = useMockData()

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
</script>

<template>
  <div class="p-4 space-y-4">
    <UForm :state="recipientForm" class="space-y-3">
      <UFormField label="Order ID">
        <UInput v-model="recipientForm.orderId" placeholder="Enter order ID" />
      </UFormField>

      <UFormField label="Parcel Locker">
        <USelect v-model="recipientForm.lockerId" :items="lockerOptions" />
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
