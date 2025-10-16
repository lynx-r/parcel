<template>
  <UPageCard
    title="Создать новый заказ"
    description="Заполните детали для доставки посылки"
    class="m-auto mt-8"
  >
    <UForm
      class="gap-4 flex flex-col"
      :state="state"
      :schema="orderFormSchema"
      @submit.prevent="onSubmitOrder"
    >
      <USelect v-model="state.status" :items="stateItems" />
      <UInput v-model="state.description" placeholder="Описание заказа" />
      <UButton
        class="flex justify-center"
        icon="i-lucide-credit-card"
        type="submit"
        :ui="{ label: 'text-center' }"
        label="Оплатить 100% - 150.00 ₽"
      />
    </UForm>
  </UPageCard>
</template>

<script setup lang="ts">
import type { FormSubmitEvent, SelectItem } from '@nuxt/ui'
import { initialOrder } from '~/stores/useClientOrdersStore'
import type { FsmState } from '~/types/fsm'
import type { TOrder } from '~~/shared/utils/validators/orderFormSchema'
import orderFormSchema from '~~/shared/utils/validators/orderFormSchema'

const { createOrder } = useClientOrdersStore()
const { data: fsmStates } = await useFetch<FsmState[]>('/api/fsm/state')
console.log(fsmStates.value)
const stateItems = computed<SelectItem[] | undefined>(() =>
  fsmStates.value?.map((state) => ({ label: state.label, value: state.name })),
)
const state = reactive<TOrder>(initialOrder())

function onSubmitOrder(event: FormSubmitEvent<TOrder>) {
  console.log(event.data)
  createOrder(event.data)
  // router.push('/client')
}
</script>
