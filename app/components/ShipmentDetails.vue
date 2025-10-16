<script lang="ts" setup>
import type { TOrder } from '~~/shared/utils/validators/orderFormSchema'

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

const props = defineProps<{
  modelValue: TOrder
}>()
const emit = defineEmits(['update:modelValue'])
const state = useVModelObject(props, emit)
</script>

<template>
  <div>
    <h3 class="text-xl font-bold">Детали доставки</h3>
    <UPageGrid class="gap-4">
      <UFormField label="Тип отправления" name="typeOfShipment" class="w-full">
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
      <UFormField label="Тип получения" name="typeOfReceiving" class="w-full">
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
      <UFormField label="Постомат отправления" name="sendCell" class="w-full">
        <USelect
          v-model="state.sendCell"
          :items="availableSendCells"
          value-key="id"
          class="w-full"
        />
      </UFormField>
      <UFormField label="Постомат получения" name="receiveCell" class="w-full">
        <USelect
          v-model="state.receiveCell"
          :items="availableReceiveCells"
          value-key="id"
          class="w-full"
        />
      </UFormField>
    </UPageGrid>
  </div>
</template>
