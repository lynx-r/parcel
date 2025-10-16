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
      <PackageDetails
        v-show="state.shipment.type === 'package'"
        v-model="state.package"
      />
      <LetterDetails
        v-show="state.shipment.type === 'letter'"
        v-model="state.letterValue"
      />
      <GeneralComments v-model="state" />
      <PaymentCard v-model="state" />
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
import orderFormSchema, {
  type TOrder,
} from '~~/shared/utils/validators/orderFormSchema'
import GeneralComments from './GeneralComments.vue'
import PackageDetails from './PackageDetails.vue'
import PaymentCard from './PaymentCard.vue'
import ShipmentDetails from './ShipmentDetails/index.vue'
import LetterDetails from './ShipmentDetails/LetterDetails.vue'
import UserInformation from './UserInformation.vue'

const { createOrder } = useClientOrdersStore()

const state = reactive<TOrder>(initialOrder())

const router = useRouter()
const toast = useToast()
function onSubmitOrder(event: FormSubmitEvent<TOrder>) {
  toast.add({
    title: 'Success',
    description: 'The form has been submitted.',
    color: 'success',
  })
  console.log(event.data)
  createOrder(event.data)
  router.push('/client')
}
</script>
