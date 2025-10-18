<script lang="ts" setup>
import type { TOrder } from '~~/shared/utils/validators/orderFormSchema'

const props = defineProps<{
  modelValue: TOrder
}>()
const emit = defineEmits(['update:modelValue'])
const state = useVModelObject(props, emit)
</script>

<template>
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
</template>
