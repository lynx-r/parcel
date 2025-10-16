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
})

const commentsSchema = z.object({
  fragile: z.boolean(),
  protectFromMoisture: z.boolean(),
  callBeforeDelivery: z.boolean(),
  notRotate: z.boolean(),
  urgentDelivery: z.boolean(),
  leaveAtDoor: z.boolean(),
  comment: z.string(),
})

const orderFormSchema = z.object({
  sender: userSchema,
  recipient: userSchema,
  typeOfShipment: z.enum(['package', 'letter']),
  typeOfDelivery: z.enum(['pickup-point', 'letterCourier']),
  typeOfReceiving: z.enum(['pickup-point', 'letterCourier']),
  sendCell: z.string(),
  receiveCell: z.string(),
  package: packageSchema,
  packageValue: z.number().positive(),
  comments: commentsSchema,
  paymentType: z.enum(['ya', 'sbp']),
})

export type TOrder = z.output<typeof orderFormSchema>

export default orderFormSchema
