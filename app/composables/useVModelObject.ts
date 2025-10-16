// composables/useVModelObject.ts
import { reactive, watch } from 'vue'

export function useVModelObject<T extends object>(
  props: { modelValue: T },
  emit: any,
) {
  const local = reactive({ ...props['modelValue'] })

  watch(
    () => props['modelValue'],
    (newVal) => {
      Object.assign(local, newVal)
    },
  )

  watch(
    local,
    (newVal) => {
      emit('update:modelValue', { ...newVal })
    },
    { deep: true },
  )

  return local
}
