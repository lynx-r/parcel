<script lang="ts" setup>
const { data: orders } = useFetch('/api/orders')

const onPerformAction = (orderId: number) => {
  useFetch('/api/fsm/perform_action', { method: 'PUT', body: { orderId } })
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <UCard v-for="order in orders" :key="order.id">
      <div>{{ order.status }}</div>
      <div>{{ order.description }}</div>
      <div>
        <UButton @click="onPerformAction(order.id)">Получатель забрал</UButton>
        <UButton>Срок хранения истек</UButton>
        <UButton>Забронировать ячейку</UButton>
        <UButton>Отменить</UButton>
        <UButton>Подтвердить загрузку</UButton>
        <UButton>Бронь истекла</UButton>
        <UButton>Курьер доставил</UButton>
        <UButton>Курьер забрал</UButton>
      </div>
    </UCard>
  </div>
</template>
