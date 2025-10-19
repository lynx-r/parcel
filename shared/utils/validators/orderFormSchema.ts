import { z } from 'zod'

// Схема Zod для валидации IOrder

export const userSchema = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  phone: z.string(),
})

export type TUser = z.output<typeof userSchema>

export const parcelSchema = z.object({
  id: z.number().int(),
  location: z.string().max(1000),
  value: z.string().max(255),
})

export type TParcel = z.output<typeof parcelSchema>

export const createLogisticSchema = z.object({
  type: z.enum(['parcel', 'courier']),
  cell_id: z.number().int().nullable(),
  cell_size: z.string().max(10).default('S').nullable(),
  address: z.string().nullable(),
})

export type TLogistic = z.output<typeof createLogisticSchema>

// Базовая схема Shipment, которая включает id
export const shipmentSchema = z.object({
  id: z.number().int(),
  type: z.enum(['package', 'letter']),
  delivery_id: z.number().int(),
  pickup_id: z.number().int(),
})

export type TShipment = z.output<typeof shipmentSchema>

// Схема для создания Shipment, без id
export const createShipmentSchema = z.object({
  type: z.enum(['package', 'letter']),
  delivery: createLogisticSchema,
  pickup: createLogisticSchema,
})

export type TCreateShipment = z.output<typeof createShipmentSchema>

// Схема Order для получения данных
export const orderSchema = z.object({
  id: z.number().int(),
  status: z.enum([
    'created',
    'reserved',
    'assigned',
    'in_progress',
    'completed',
  ]),
  description: z.string().max(255).nullable(),
  sender_id: z.number().int().nullable(),
  recipient_id: z.number().int().nullable(),
  shipment_id: z.number().int().nullable(),
})

export type TOrder = z.output<typeof orderSchema>

// Схема для создания нового Order
// Поля id и shipment_id отсутствуют
// Поле shipment используется для вложенной записи
export const createOrderSchema = z.object({
  status: z
    // .enum(['created', 'reserved', 'assigned', 'in_progress', 'completed'])
    .string()
    // .optional()
    .default('created'),
  description: z.string().max(255).nullable(),
  sender_id: z.number().int(),
  recipient_id: z.number().int(),
  shipment: createShipmentSchema, // Вложенная запись
})

export type TCreateOrder = z.output<typeof createOrderSchema>

// Схемы с реляционными полями (используя z.lazy() для циклических ссылок)
export const orderWithRelationsSchema = orderSchema.extend({
  shipment: z.lazy(() => shipmentSchema).nullable(),
  sender: z.lazy(() => userSchema).nullable(),
  recipient: z.lazy(() => userSchema).nullable(),
})
export type TOrderWithRelationsSchema = z.output<
  typeof orderWithRelationsSchema
>

export const fsmActionEnumSchema = z.enum([
  'reserve_cell',
  'assign_courier',
  'start_trip',
  'complete_trip',
])

export type FsmActionEnum = z.output<typeof fsmActionEnumSchema>

export const fsmActionSchema = z.object({
  orderId: z.number().positive(),
  action: fsmActionEnumSchema,
  userId: z.number().positive(),
})

export type TFsmAction = z.output<typeof fsmActionSchema>

// Схемы с реляционными полями (используя z.lazy() для циклических ссылок)
export const OrderWithRelationsSchema = orderSchema.extend({
  shipment: z.lazy(() => shipmentSchema).nullable(),
  sender: z.lazy(() => userSchema).nullable(),
  recipient: z.lazy(() => userSchema).nullable(),
})
