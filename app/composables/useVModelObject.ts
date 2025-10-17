// composables/useVModelObject.ts
import { reactive, watch } from 'vue'

export function useVModelObject<T>(props: any, emit: any, name = 'modelValue') {
  const local = reactive({ ...props[name] })

  watch(
    () => props[name],
    (newVal) => {
      Object.assign(local, newVal)
    },
  )

  watch(
    local,
    (newVal) => {
      emit(`update:${name}`, { ...newVal })
    },
    { deep: true },
  )

  return local as T
}
