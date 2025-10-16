// useVModel.ts
import { ref, watch } from 'vue'

export function useVModel(props: any, emit: any, name = 'modelValue') {
  const innerValue = ref(props[name])

  watch(
    () => props[name],
    (val) => (innerValue.value = val),
  )
  watch(innerValue, (val) => emit(`update:${name}`, val))

  return innerValue
}
