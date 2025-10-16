import { defineStore, skipHydrate } from 'pinia'
import type { TOrder } from '~~/shared/utils/validators/orderFormSchema'

export const initialOrder = (): TOrder => ({
  sender: {
    name: '',
    phone: '',
  },
  recipient: {
    name: '',
    phone: '',
  },
  shipment: {
    pickup: {
      type: 'parcel',
      cell: '',
    },
    delivery: {
      type: 'parcel',
      cell: '',
    },
    type: 'package',
  },
  letterValue: 0,
  package: {
    width: 0,
    depth: 0,
    height: 0,
    weight: 0,
    value: 0,
  },
  comments: {
    fragile: false,
    protectFromMoisture: false,
    callBeforeDelivery: false,
    comment: '',
    leaveAtDoor: false,
    notRotate: false,
    urgentDelivery: false,
  },
  paymentType: 'ya',
})

const useClientOrdersStore = defineStore('clientOrders', () => {
  // const order = ref<TOrder>(initialOrder())
  const orders = useLocalStorage<TOrder[]>('pinia/client-orders', [])

  // const orders = ref<TOrder[]>([])

  function createOrder(order: TOrder) {
    // orders.value.push(order)
    orders.value.push(order)

    console.log(orders.value)
  }

  return {
    orders: skipHydrate(orders),
    createOrder,
  }
})

// const useClientOrdersStore = defineStore('clientOrders', {
//   state: () => ({
//     orders: useStorage<TOrder[]>('client-orders', []),
//   }),
//   actions: {
//     createOrder(order: TOrder) {
//       this.orders.push(order)
//     },
//   },
// })

export default useClientOrdersStore
