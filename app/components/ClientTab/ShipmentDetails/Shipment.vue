<script lang="ts" setup>
import type { SelectItem } from '@nuxt/ui'
import type { TLogistic } from '~~/shared/utils/validators/orderFormSchema'

const props = defineProps<{
  modelValue: TLogistic
  shipment: 'delivery' | 'pickup'
  parcels: SelectItem[]
}>()

const emit = defineEmits(['update:modelValue'])
const state = useVModelObject<TLogistic>(props, emit)

function onTypeChange() {
  state.address = null
  state.cell_id = null
  state.cell_size = null
}
</script>

<template>
  <div class="flex flex-col gap-2">
    <UFormField label="Тип получения" :name="`${shipment}.type`" class="w-full">
      <USelect
        v-model="state.type"
        :items="[
          { label: 'Постомат', id: 'parcel' },
          { label: 'Курьер', id: 'courier' },
        ]"
        value-key="id"
        class="w-full"
        @change="onTypeChange"
      />
    </UFormField>
    <UFormField
      v-show="state.type === 'parcel'"
      label="Постомат отправки"
      :name="`${shipment}.cell`"
      class="w-full"
    >
      <USelect
        v-model="state.cell_id"
        :items="parcels"
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
