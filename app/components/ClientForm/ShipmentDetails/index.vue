<script lang="ts" setup>
import type { TShipment } from '~~/shared/utils/validators/orderFormSchema'
import Shipment from './Shipment.vue'

const props = defineProps<{
  modelValue: TShipment
}>()
const emit = defineEmits(['update:modelValue'])
const state = useVModelObject(props, emit)
</script>

<template>
  <div>
    <h3 class="text-xl font-bold">Детали доставки</h3>
    <UFormField label="Тип отправления" name="typeOfShipment" class="w-full">
      <USelect
        v-model="state.type"
        :items="[
          { label: 'Посылка', id: 'package' as const },
          { label: 'Письмо', id: 'letter' as const },
        ]"
        value-key="id"
        class="w-full"
      />
    </UFormField>
    <div class="flex gap-4">
      <Shipment v-model="state.delivery" />
      <Shipment v-model="state.pickup" />
    </div>
  </div>
</template>
