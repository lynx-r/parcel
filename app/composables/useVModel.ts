// useVModel.ts
import { ref, watch } from 'vue'

export function useVModel<T>(props: { modelValue: T }, emit: any) {
  const innerValue = ref(props['modelValue'])

  watch(
    () => props['modelValue'],
    (val) => (innerValue.value = val),
  )
  watch(innerValue, (val) => emit(`update:modelValue`, val))

  return innerValue
}
