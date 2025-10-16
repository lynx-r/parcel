<script lang="ts" setup>
import type { TOrder } from '~~/shared/utils/validators/orderFormSchema'

const props = defineProps<{
  modelValue: TOrder
}>()
const emit = defineEmits(['update:modelValue'])
const state = useVModelObject(props, emit)
</script>

<template>
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
</template>
