<script lang="ts" setup>
import type { TPackage } from '~~/shared/utils/validators/orderFormSchema'

const props = defineProps<{
  modelValue: TPackage
}>()
const emit = defineEmits(['update:modelValue'])
const state = useVModelObject(props, emit)
</script>

<template>
  <div class="flex flex-col gap-2">
    <h3>Детали посылки</h3>
    <UPageGrid class="gap-4">
      <UFormField label="Ширина (см)" class="w-full" name="package.width">
        <UInput
          v-model="state.width"
          placeholder="Ширина (см)"
          type="number"
          required
          class="w-full"
        />
      </UFormField>
      <UFormField label="Глубина (см)" name="package.depth" class="w-full">
        <UInput
          v-model="state.depth"
          placeholder="Глубина (см)"
          type="number"
          required
          class="w-full"
        />
      </UFormField>
      <UFormField label="Высота (см)" class="w-full" name="package.height">
        <UInput
          v-model="state.height"
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
        name="package.weight"
      >
        <UInput
          v-model="state.weight"
          placeholder="Вес (кг)"
          type="number"
          required
          class="w-full"
        />
      </UFormField>
      <UFormField
        label="Ценность (руб.)"
        class="w-full"
        name="package.value"
        :ui="{ label: 'font-bold' }"
      >
        <UInput
          v-model="state.value"
          placeholder="Ценность (руб.)"
          type="number"
          class="w-full"
        />
      </UFormField>
    </div>
    <!-- <UCheckbox label="Добавить страховку (2% от ценности)" /> -->
  </div>
</template>
