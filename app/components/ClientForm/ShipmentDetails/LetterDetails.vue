<script lang="ts" setup>
const props = defineProps<{
  modelValue: number
}>()
const emit = defineEmits(['update:modelValue'])
const state = useVModel(props, emit)
</script>

<template>
  <div class="flex flex-col gap-2">
    <h3>Детали посылки</h3>
    <UFormField label="Ценность (руб.)" class="w-full" name="letterValue">
      <UInput
        v-model="state"
        placeholder="Ценность (руб.)"
        type="number"
        class="w-full"
      />
    </UFormField>
    <UCheckbox label="Добавить страховку (2% от ценности)" />
  </div>
</template>
