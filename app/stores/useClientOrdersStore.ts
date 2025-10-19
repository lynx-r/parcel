import { defineStore, skipHydrate } from 'pinia'
import type { TCreateOrder } from '~~/shared/utils/validators/orderFormSchema'

export const initialOrder = (): TCreateOrder => ({
  sender_id: 100,
  recipient_id: 101,
  shipment: {
    pickup_id: 0,
    delivery_id: 0,
    type: 'package',
  },
  status: 'created',
  description: '',
})

const useClientOrdersStore = defineStore('clientOrders', () => {
  // const order = ref<TOrder>(initialOrder())
  const orders = useLocalStorage<TCreateOrder[]>('pinia/client-orders', [])

  // const orders = ref<TCreateOrder[]>([])
  // const router = useRouter()
  const toast = useToast()

  function createOrder(order: TCreateOrder) {
    toast.add({
      title: 'Success',
      description: 'The form has been submitted.',
      color: 'success',
    })

    // orders.value.push(order)
    orders.value.push(order)
    const res = useFetch('/api/orders', { method: 'POST', body: order })
    console.log(res)

    console.log(orders.value)
  }

  return {
    orders: skipHydrate(orders),
    createOrder,
  }
})

// const useClientCreateOrdersStore = defineStore('clientCreateOrders', {
//   state: () => ({
//     orders: useStorage<TCreateOrder[]>('client-orders', []),
//   }),
//   actions: {
//     createOrder(order: TOrder) {
//       this.orders.push(order)
//     },
//   },
// })

export default useClientOrdersStore
