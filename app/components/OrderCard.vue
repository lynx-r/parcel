<script lang="ts" setup>
import type {
  FsmActionEnum,
  TOrder,
} from '~~/shared/utils/validators/orderFormSchema'

const props = defineProps<{ modelValue: TOrder }>()

const emit = defineEmits(['update:modelValue', 'delete'])
const state = useVModelObject<TOrder>(props, emit)

async function onPerformAction(action: FsmActionEnum) {
  const res = await $fetch('/api/fsm/perform_action', {
    method: 'PUT',
    body: { orderId: state.id, action, userId: 100 },
  })
  Object.assign(state, res)
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
    <div>Статус: {{ state.status }}</div>
    <div>Описание: {{ state.description }}</div>
    <div class="flex gap-2">
      <!-- <UButton @click="onPerformAction()">Получатель забрал</UButton> -->
      <!-- <UButton @click="onPerformAction('')">Срок хранения истек</UButton> -->
      <UButton
        v-if="state.status === 'created'"
        @click="onPerformAction('reserve_cell')"
      >
        Забронировать ячейку</UButton
      >
      <UButton
        v-else-if="state.status === 'reserved'"
        @click="onPerformAction('assign_courier')"
      >
        Назначить курьера</UButton
      >
      <UButton
        v-else-if="state.status === 'assigned'"
        @click="onPerformAction('start_trip')"
      >
        Начать поездку
      </UButton>
      <UButton
        v-else-if="state.status === 'completed'"
        @click="onPerformAction('complete_trip')"
      >
        Завершить поездку</UButton
      >
      <UButton @click="onDelete">Удалит</UButton>
      <!-- <UButton>Курьер доставил</UButton> -->
      <!-- <UButton>Курьер забрал</UButton> -->
    </div>
  </UCard>
</template>
