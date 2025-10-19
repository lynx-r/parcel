<script lang="ts" setup>
import type { SelectItem } from '@nuxt/ui'
import type { TCreateShipment } from '~~/shared/utils/validators/orderFormSchema'
import Shipment from './Shipment.vue'

const props = defineProps<{
  modelValue: TCreateShipment
}>()
const emit = defineEmits(['update:modelValue'])
const state = useVModelObject<TCreateShipment>(props, emit)

const { data: parcels } = await useFetch('/api/parcels')
const deliveryParcels = computed<SelectItem[]>(
  () =>
    parcels.value
      ?.map((parcel) => ({
        label: parcel.location,
        value: parcel.value,
        id: parcel.id,
      }))
      .filter((parcel) => parcel.id !== state.pickup.cell_id) || [],
)
const pickupParcels = computed<SelectItem[]>(
  () =>
    parcels.value
      ?.map((parcel) => ({
        label: parcel.location,
        value: parcel.value,
        id: parcel.id,
      }))
      .filter((parcel) => parcel.id !== state.delivery.cell_id) || [],
)
</script>

<template>
  <div>
    <h3 class="text-xl font-bold">Детали доставки</h3>
    <UFormField label="Тип отправления" name="shipment.type" class="w-full">
      <USelect
        v-model="state.type"
        :items="[
          { label: 'Посылка', id: 'package' as const },
          { label: 'Письмо', id: 'letter' as const },
        ]"
        value-key="id"
        class="w-full"
      />
    </UFormField>
    <div v-if="parcels" class="flex gap-4">
      <Shipment
        v-model="state.delivery"
        :parcels="deliveryParcels"
        shipment="delivery"
      />
      <Shipment
        v-model="state.pickup"
        :parcels="pickupParcels"
        shipment="pickup"
      />
    </div>
  </div>
</template>
