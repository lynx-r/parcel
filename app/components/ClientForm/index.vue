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
      <UserInformation
        v-model="state.sender"
        title="Информация отправителя"
        type="sender"
      />
      <UserInformation
        v-model="state.recipient"
        title="Информация получателя"
        type="recipient"
      />
      <ShipmentDetails v-model="state.shipment" />
      <template v-if="state.package">
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
      </template>
      <!-- <GeneralComments v-model="state" /> -->
      <!-- <PaymentCard v-model="state" /> -->
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
import type { TOrder } from '~~/shared/utils/validators/orderFormSchema'
import orderFormSchema from '~~/shared/utils/validators/orderFormSchema'
import PackageDetails from './PackageDetails.vue'
import ShipmentDetails from './ShipmentDetails/index.vue'
import LetterDetails from './ShipmentDetails/LetterDetails.vue'
import UserInformation from './UserInformation.vue'

const { createOrder } = useClientOrdersStore()

const state = reactive<TOrder>(initialOrder())

function onSubmitOrder(event: FormSubmitEvent<TOrder>) {
  console.log(event.data)
  createOrder(event.data)
  // router.push('/client')
}
</script>
