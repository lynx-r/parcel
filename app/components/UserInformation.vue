<script lang="ts" setup>
import type { TUser } from '~~/shared/utils/validators/orderFormSchema'

const props = defineProps<{
  modelValue: TUser
  title: string
  type: string
}>()
const emit = defineEmits(['update:modelValue'])
const localUser = useVModelObject(props, emit)
</script>

<template>
  <div>
    <h3 class="text-xl font-bold">{{ title }}</h3>
    <div class="flex justify-between gap-4">
      <UFormField label="Имя" :name="`${type}Name`" class="w-full">
        <UInput v-model="localUser.name" required class="w-full" />
      </UFormField>
      <UFormField label="Телефон" :name="`${type}Phone`" class="w-full">
        <UInput v-model="localUser.phone" required class="w-full" />
      </UFormField>
    </div>
  </div>
</template>
