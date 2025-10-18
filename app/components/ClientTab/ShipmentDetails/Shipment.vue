<script lang="ts" setup>
import type { TLogistic } from '~~/shared/utils/validators/orderFormSchema'

const availableCells = ref([
  { label: 'Постомат M-P - Москва, Центра', id: 'moscow' },
  { label: 'Постомат L - Санкт-Петербург, Невский', id: 'spb' },
  { label: 'Постамат S - Казань, Баума', id: 'kazan' },
])

const props = defineProps<{
  modelValue: TLogistic
  shipment: 'delivery' | 'pickup'
}>()
const emit = defineEmits(['update:modelValue'])
const state = useVModelObject(props, emit)
</script>

<template>
  <div class="flex flex-col gap-2">
    <UFormField label="Тип получения" :name="`${shipment}.type`" class="w-full">
      <USelect
        v-model="state.type"
        :items="[
          { label: 'Постомат', id: 'parcel' },
          { label: 'Письмо', id: 'courier' },
        ]"
        value-key="id"
        class="w-full"
      />
    </UFormField>
    <UFormField
      v-show="state.type === 'parcel'"
      label="Постомат отправки"
      :name="`${shipment}.cell`"
      class="w-full"
    >
      <USelect
        v-model="state.cell"
        :items="availableCells"
        value-key="id"
        class="w-full"
      />
    </UFormField>
    <UFormField
      v-show="state.type === 'courier'"
      label="Адресс отправки"
      :name="`${shipment}.address`"
      class="w-full"
    >
      <UInput v-model="state.address" />
    </UFormField>
  </div>
</template>
