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
      <!-- Информация отправителя -->
      <div>
        <h3 class="text-xl font-bold">Информация отправителя</h3>
        <div class="flex justify-between gap-4">
          <UFormField label="Имя" name="senderName" class="w-full">
            <UInput v-model="state.sender.name" required class="w-full" />
          </UFormField>
          <UFormField label="Телефон" name="senderPhone" class="w-full">
            <UInput v-model="state.sender.phone" required class="w-full" />
          </UFormField>
        </div>
      </div>
      <!-- Информация получателя -->
      <div>
        <h3 class="text-xl font-bold">Информация получателя</h3>
        <div class="flex justify-between gap-4">
          <UFormField label="Имя" name="recipientName" class="w-full">
            <UInput v-model="state.recipient.name" required class="w-full" />
          </UFormField>
          <UFormField label="Телефон" name="recipientPhone" class="w-full">
            <UInput v-model="state.recipient.phone" required class="w-full" />
          </UFormField>
        </div>
      </div>
      <!-- Детали доставки -->
      <div>
        <h3 class="text-xl font-bold">Детали доставки</h3>
        <UPageGrid class="gap-4">
          <UFormField
            label="Тип отправления"
            name="typeOfShipment"
            class="w-full"
          >
            <USelect
              v-model="state.typeOfShipment"
              :items="[
                { label: 'Посылка', id: 'package' as const },
                { label: 'Письмо', id: 'letter' as const },
              ]"
              value-key="id"
              class="w-full"
            />
          </UFormField>
          <UFormField label="Тип доставки" name="typeOfDelivery" class="w-full">
            <USelect
              v-model="state.typeOfDelivery"
              :items="[
                { label: 'Постомат', id: 'pickup-point' },
                { label: 'Письмо', id: 'letterCourier' },
              ]"
              value-key="id"
              class="w-full"
            />
          </UFormField>
          <UFormField
            label="Тип получения"
            name="typeOfReceiving"
            class="w-full"
          >
            <USelect
              v-model="state.typeOfReceiving"
              :items="[
                { label: 'Постомат', id: 'pickup-point' },
                { label: 'Письмо', id: 'letterCourier' },
              ]"
              value-key="id"
              class="w-full"
            />
          </UFormField>
        </UPageGrid>
        <UPageGrid class="gap-4">
          <UFormField
            label="Постомат отправления"
            name="sendCell"
            class="w-full"
          >
            <USelect
              v-model="state.sendCell"
              :items="availableSendCells"
              value-key="id"
              class="w-full"
            />
          </UFormField>
          <UFormField
            label="Постомат получения"
            name="receiveCell"
            class="w-full"
          >
            <USelect
              v-model="state.receiveCell"
              :items="availableReceiveCells"
              value-key="id"
              class="w-full"
            />
          </UFormField>
        </UPageGrid>
      </div>
      <!-- Детали посылки -->
      <div class="flex flex-col gap-2">
        <h3>Детали посылки</h3>
        <UPageGrid class="gap-4">
          <UFormField label="Ширина (см)" class="w-full" name="packageWidth">
            <UInput
              v-model="state.package.width"
              placeholder="Ширина (см)"
              type="number"
              required
              class="w-full"
            />
          </UFormField>
          <UFormField label="Глубина (см)" name="packageDepth" class="w-full">
            <UInput
              v-model="state.package.depth"
              placeholder="Глубина (см)"
              type="number"
              required
              class="w-full"
            />
          </UFormField>
          <UFormField label="Высота (см)" class="w-full" name="packageHeight">
            <UInput
              v-model="state.package.height"
              placeholder="Высота (см)"
              type="number"
              required
              class="w-full"
            />
          </UFormField>
        </UPageGrid>
        <div class="flex justify-between gap-4">
          <UFormField
            label="Вес (кг)"
            class="w-full"
            :ui="{ label: 'font-bold' }"
            name="packageWeight"
          >
            <UInput
              v-model="state.package.weight"
              placeholder="Вес (кг)"
              type="number"
              required
              class="w-full"
            />
          </UFormField>
          <UFormField
            label="Ценность (руб.)"
            class="w-full"
            name="packageValue"
            :ui="{ label: 'font-bold' }"
          >
            <UInput
              v-model="state.packageValue"
              placeholder="Ценность (руб.)"
              type="number"
              class="w-full"
            />
          </UFormField>
        </div>
        <UCheckbox label="Добавить страховку (2% от ценности)" />
      </div>
      <!-- Типовые комментарии -->
      <div class="flex flex-col gap-2">
        <h3>Типовые комментарии</h3>
        <div class="flex gap-4">
          <div class="w-1/2 flex flex-col">
            <UCheckbox
              id="fragile"
              v-model="state.comments.fragile"
              label="Хрупкое"
            />
            <UCheckbox
              id="protectFromMoisture"
              v-model="state.comments.protectFromMoisture"
              label="Беречь от влаги"
            />
            <UCheckbox
              id="callBeforeDelivery"
              v-model="state.comments.callBeforeDelivery"
              label="Позвонить перед доставкой"
            />
          </div>
          <div class="flex flex-col">
            <UCheckbox
              id="fragile"
              v-model="state.comments.notRotate"
              label="Не переворачивать"
            />
            <UCheckbox
              id="protectFromMoisture"
              v-model="state.comments.urgentDelivery"
              label="Срочная доставка"
            />
            <UCheckbox
              id="callBeforeDelivery"
              v-model="state.comments.leaveAtDoor"
              label="Оставить у двери"
            />
          </div>
        </div>
        <label for="comment">Дополнительный комментарий</label>
        <UFormField name="comment" class="w-full">
          <UTextarea
            v-model="state.comments.comment"
            size="xl"
            class="w-full"
          />
        </UFormField>
      </div>
      <div>
        <h3 class="text-xl font-bold">Оплата</h3>
        <UFormField name="paymentType" label="Способ оплаты">
          <USelect
            v-model="state.paymentType"
            value-key="id"
            :items="[
              { label: 'Яндекс.Касса', id: 'ya' },
              { label: 'СБП (скидка 5%)', id: 'sbp' },
            ]"
          />
        </UFormField>
      </div>
      <UCard variant="subtle" class="text-right text-2xl font-bold">
        Итого: 150 ₽
      </UCard>
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

const availableSendCells = ref([
  { label: 'Постомат M-P - Москва, Центра', id: 'moscow' },
  { label: 'Постомат L - Санкт-Петербург, Невский', id: 'spb' },
  { label: 'Постамат S - Казань, Баума', id: 'kazan' },
])
const availableReceiveCells = ref([
  { label: 'Постомат M-P - Москва, Центра', id: 'moscow' },
  { label: 'Постомат L - Санкт-Петербург, Невский', id: 'spb' },
  { label: 'Постамат S - Казань, Баума', id: 'kazan' },
])

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
