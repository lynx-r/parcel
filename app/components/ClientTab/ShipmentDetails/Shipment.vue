<script lang="ts" setup>
import type {
  TLogistic,
  TParcel,
} from '~~/shared/utils/validators/orderFormSchema'

const props = defineProps<{
  modelValue: TLogistic
  shipment: 'delivery' | 'pickup'
  parcels: TParcel[]
}>()
const emit = defineEmits(['update:modelValue'])
const state = useVModelObject<TLogistic>(props, emit)
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
      v-if="state.cell_id"
      v-show="state.type === 'parcel'"
      label="Постомат отправки"
      :name="`${shipment}.cell`"
      class="w-full"
    >
      <USelect
        v-model="state.cell_id"
        :items="parcels"
        value-key="value"
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
