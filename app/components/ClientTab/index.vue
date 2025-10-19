<template>
  <UPageCard
    title="Создать новый заказ"
    description="Заполните детали для доставки посылки"
    class="m-auto mt-8"
  >
    <UForm
      class="gap-4 flex flex-col"
      :state="state"
      @submit.prevent="onSubmitOrder"
    >
      <!-- <UserInformation
        v-model="state.sender_id"
        title="Информация отправителя"
        type="sender"
      />
      <UserInformation
        v-model="state.recipient"
        title="Информация получателя"
        type="recipient"
      /> -->
      <ShipmentDetails v-model="state.shipment" />
      <!-- <template v-if="state.package">
        <PackageDetails
          v-show="state.shipment.type === 'package'"
          v-model="state.package"
        />
      </template>
      <template v-if="state.letterValue">
        <LetterDetails
          v-show="state.shipment.type === 'letter'"
          v-model="state.letterValue"
        />
      </template> -->
      <!-- <GeneralComments v-model="state" /> -->
      <!-- <PaymentCard v-model="state" /> -->

      <!-- <USelect v-model="state.status" :items="stateItems" /> -->
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
import type { FormSubmitEvent } from '@nuxt/ui'
import { initialOrder } from '~/stores/useClientOrdersStore'
import type { FsmState } from '~/types/fsm'
import type { TCreateOrder } from '~~/shared/utils/validators/orderFormSchema'
import ShipmentDetails from './ShipmentDetails/index.vue'

const { createOrder } = useClientOrdersStore()
const { data: fsmStates } = await useFetch<FsmState[]>('/api/fsm/state')
console.log(fsmStates.value)
// const stateItems = computed<SelectItem[] | undefined>(() =>
// fsmStates.value?.map((state) => ({ label: state.label, value: state.name })),
// )
const state = reactive<TCreateOrder>(initialOrder())

function onSubmitOrder(event: FormSubmitEvent<TCreateOrder>) {
  console.log(event.data)
  createOrder(event.data)
  // router.push('/client')
}
</script>
