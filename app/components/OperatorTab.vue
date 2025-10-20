<script lang="ts" setup>
import type { TOrder } from '~~/shared/utils/validators/orderFormSchema'

const { data } = await useFetch<TOrder[]>('/api/orders')

const showCount = ref('1')
const originOrders = data.value?.reverse() || []
const orders = reactive(data)

watch(
  showCount,
  () => {
    if (showCount.value === 'all') {
      orders.value = [...originOrders]
    } else {
      orders.value = originOrders?.slice(0, +showCount.value)
    }
  },
  {
    immediate: true,
  },
)
function onDelete(orderId: number) {
  orders.value = orders.value?.filter((order) => order.id !== orderId)
}
</script>

<template>
  <div v-if="orders" class="flex flex-col gap-4">
    <USelect
      v-model="showCount"
      :items="[
        { label: '1', id: '1' },
        { label: '2', id: '2' },
        { label: 'Все', id: 'all' },
      ]"
      value-key="id"
      class="w-1/2"
      label="Показать заказов"
    />
    <template v-for="(order, i) in orders" :key="order.id">
      <template v-if="orders[i]">
        <OrderCard v-model="orders[i]" @delete="onDelete" />
      </template>
    </template>
  </div>
</template>
