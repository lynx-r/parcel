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
    <h3>Типовые комментарии</h3>
    <div class="flex gap-4">
      <div class="w-1/2 flex flex-col">
        <UCheckbox
          id="fragile"
          v-model="state.comments.fragile"
          label="Хрупкое"
        />
        <UCheckbox
          id="protectFromMoisture"
          v-model="state.comments.protectFromMoisture"
          label="Беречь от влаги"
        />
        <UCheckbox
          id="callBeforeDelivery"
          v-model="state.comments.callBeforeDelivery"
          label="Позвонить перед доставкой"
        />
      </div>
      <div class="flex flex-col">
        <UCheckbox
          id="fragile"
          v-model="state.comments.notRotate"
          label="Не переворачивать"
        />
        <UCheckbox
          id="protectFromMoisture"
          v-model="state.comments.urgentDelivery"
          label="Срочная доставка"
        />
        <UCheckbox
          id="callBeforeDelivery"
          v-model="state.comments.leaveAtDoor"
          label="Оставить у двери"
        />
      </div>
    </div>
    <label for="comment">Дополнительный комментарий</label>
    <UFormField name="comment" class="w-full">
      <UTextarea v-model="state.comments.comment" size="xl" class="w-full" />
    </UFormField>
  </div>
</template>
