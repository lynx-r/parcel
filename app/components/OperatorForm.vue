<script lang="ts" setup>
import type { TOrder } from '~~/shared/utils/validators/orderFormSchema'

const { data } = await useFetch<TOrder[]>('/api/orders')

const orders = reactive(data)

function onDelete(orderId: number) {
  orders.value = orders.value?.filter((order) => order.id !== orderId)
}
</script>

<template>
  <div v-if="orders" class="flex flex-col gap-4">
    <template v-for="(order, i) in orders" :key="order.id">
      <template v-if="orders[i]">
        <OrderCard v-model="orders[i]" @delete="onDelete" />
      </template>
    </template>
  </div>
</template>
