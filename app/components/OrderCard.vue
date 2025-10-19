<script lang="ts" setup>
import type {
  FsmActionEnum,
  TOrderWithRelationsSchema,
} from '~~/shared/utils/validators/orderFormSchema'

const props = defineProps<{ modelValue: TOrderWithRelationsSchema }>()

const emit = defineEmits(['update:modelValue', 'delete'])
const state = useVModelObject<TOrderWithRelationsSchema>(props, emit)

const loading = ref(false)
async function onPerformAction(action: FsmActionEnum) {
  loading.value = true
  const res = await $fetch('/api/fsm/perform_action', {
    method: 'PUT',
    body: { orderId: state.id, action, userId: 100 },
  })
  Object.assign(state, res)
  loading.value = false
}

async function onDelete() {
  await $fetch('/api/orders', {
    method: 'DELETE',
    query: {
      orderId: state.id,
    },
  })
  emit('delete', state.id)
}
</script>

<template>
  <UCard>
    <div>ID: {{ state.id }}</div>
    <div>Статус: {{ state.status }}</div>
    <div>Описание: {{ state.description }}</div>
    <div>От: {{ state.sender?.name }}</div>
    <div>Кому: {{ state.recipient?.name }}</div>
    <div v-if="state.shipment?.delivery?.cell?.location">
      Откуда постомат: {{ state.shipment?.delivery?.cell?.location }}
    </div>
    <div v-if="state.shipment?.delivery?.address">
      Откуда адресс: {{ state.shipment?.delivery?.address }}
    </div>
    <div v-if="state.shipment?.pickup?.cell?.location">
      Куда постомат: {{ state.shipment?.pickup?.cell?.location }}
    </div>
    <div v-if="state.shipment?.pickup?.address">
      Куда адресс: {{ state.shipment?.pickup?.address }}
    </div>
    <div class="flex gap-2">
      <!-- <UButton @click="onPerformAction()">Получатель забрал</UButton> -->
      <!-- <UButton @click="onPerformAction('')">Срок хранения истек</UButton> -->
      <UButton
        v-if="state.status === 'created'"
        :loading="loading"
        @click="onPerformAction('reserve_cell')"
      >
        Забронировать ячейку</UButton
      >
      <UButton
        v-else-if="state.status === 'reserved'"
        :loading="loading"
        @click="onPerformAction('assign_courier')"
      >
        Назначить курьера</UButton
      >
      <UButton
        v-else-if="state.status === 'assigned'"
        :loading="loading"
        @click="onPerformAction('start_trip')"
      >
        Начать поездку
      </UButton>
      <UButton
        v-else-if="state.status === 'completed'"
        :loading="loading"
        @click="onPerformAction('complete_trip')"
      >
        Завершить поездку</UButton
      >
      <UButton :loading="loading" @click="onDelete">Удалит</UButton>
      <!-- <UButton>Курьер доставил</UButton> -->
      <!-- <UButton>Курьер забрал</UButton> -->
    </div>
  </UCard>
</template>
