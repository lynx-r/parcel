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
      <ShipmentDetails v-model="state" />
      <PackageDetails v-model="state" />
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
import type z from 'zod'
import { initialOrder } from '~/stores/useClientOrdersStore'
import orderFormSchema from '~~/shared/utils/validators/orderFormSchema'

const { createOrder } = useClientOrdersStore()

type Schema = z.output<typeof orderFormSchema>

const state = reactive<Schema>(initialOrder())

const router = useRouter()
const toast = useToast()
function onSubmitOrder(event: FormSubmitEvent<Schema>) {
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
