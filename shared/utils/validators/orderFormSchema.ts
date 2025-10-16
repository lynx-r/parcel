import z from 'zod'

// Схема Zod для валидации IOrder
const userSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(2),
  // добавьте другие поля интерфейса IUser
})

export type TUser = z.output<typeof userSchema>

const packageSchema = z.object({
  width: z.number().positive(),
  depth: z.number().positive(),
  height: z.number().positive(),
  weight: z.number().positive(),
  value: z.number().positive(),
})
export type TPackage = z.output<typeof packageSchema>

const commentsSchema = z.object({
  fragile: z.boolean(),
  protectFromMoisture: z.boolean(),
  callBeforeDelivery: z.boolean(),
  notRotate: z.boolean(),
  urgentDelivery: z.boolean(),
  leaveAtDoor: z.boolean(),
  comment: z.string(),
})

const logisticOptionsSchema = z.enum(['parcel', 'courier'])

const logisticSchema = z.object({
  type: logisticOptionsSchema,
  cell: z.string(),
  address: z.string().optional().nullable(),
})

export type TLogistic = z.output<typeof logisticSchema>

const shipmentSchema = z.object({
  type: z.enum(['package', 'letter']),
  delivery: logisticSchema,
  pickup: logisticSchema,
})

export type TShipment = z.output<typeof shipmentSchema>

const orderFormSchema = z.object({
  status: z.enum([
    'created',
    'reserved',
    'assigned',
    'in_progress',
    'completed',
  ]),
  description: z.string(),
  sender: userSchema,
  recipient: userSchema,
  shipment: shipmentSchema,
  package: packageSchema.optional(),
  letterValue: z.number().positive().optional(),
  comments: commentsSchema,
  paymentType: z.enum(['ya', 'sbp']),
})

export type TOrder = z.output<typeof orderFormSchema>

export default orderFormSchema
