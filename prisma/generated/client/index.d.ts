
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model FsmState
 * 
 */
export type FsmState = $Result.DefaultSelection<Prisma.$FsmStatePayload>
/**
 * Model FsmAction
 * 
 */
export type FsmAction = $Result.DefaultSelection<Prisma.$FsmActionPayload>
/**
 * Model FsmTransition
 * 
 */
export type FsmTransition = $Result.DefaultSelection<Prisma.$FsmTransitionPayload>
/**
 * Model FsmActionLog
 * 
 */
export type FsmActionLog = $Result.DefaultSelection<Prisma.$FsmActionLogPayload>
/**
 * Model FsmErrorLog
 * 
 */
export type FsmErrorLog = $Result.DefaultSelection<Prisma.$FsmErrorLogPayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model StageOrder
 * 
 */
export type StageOrder = $Result.DefaultSelection<Prisma.$StageOrderPayload>
/**
 * Model Trip
 * 
 */
export type Trip = $Result.DefaultSelection<Prisma.$TripPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more FsmStates
 * const fsmStates = await prisma.fsmState.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more FsmStates
   * const fsmStates = await prisma.fsmState.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.fsmState`: Exposes CRUD operations for the **FsmState** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FsmStates
    * const fsmStates = await prisma.fsmState.findMany()
    * ```
    */
  get fsmState(): Prisma.FsmStateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fsmAction`: Exposes CRUD operations for the **FsmAction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FsmActions
    * const fsmActions = await prisma.fsmAction.findMany()
    * ```
    */
  get fsmAction(): Prisma.FsmActionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fsmTransition`: Exposes CRUD operations for the **FsmTransition** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FsmTransitions
    * const fsmTransitions = await prisma.fsmTransition.findMany()
    * ```
    */
  get fsmTransition(): Prisma.FsmTransitionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fsmActionLog`: Exposes CRUD operations for the **FsmActionLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FsmActionLogs
    * const fsmActionLogs = await prisma.fsmActionLog.findMany()
    * ```
    */
  get fsmActionLog(): Prisma.FsmActionLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fsmErrorLog`: Exposes CRUD operations for the **FsmErrorLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FsmErrorLogs
    * const fsmErrorLogs = await prisma.fsmErrorLog.findMany()
    * ```
    */
  get fsmErrorLog(): Prisma.FsmErrorLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stageOrder`: Exposes CRUD operations for the **StageOrder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StageOrders
    * const stageOrders = await prisma.stageOrder.findMany()
    * ```
    */
  get stageOrder(): Prisma.StageOrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trip`: Exposes CRUD operations for the **Trip** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Trips
    * const trips = await prisma.trip.findMany()
    * ```
    */
  get trip(): Prisma.TripDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.17.1
   * Query Engine version: 272a37d34178c2894197e17273bf937f25acdeac
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    FsmState: 'FsmState',
    FsmAction: 'FsmAction',
    FsmTransition: 'FsmTransition',
    FsmActionLog: 'FsmActionLog',
    FsmErrorLog: 'FsmErrorLog',
    Order: 'Order',
    StageOrder: 'StageOrder',
    Trip: 'Trip'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "fsmState" | "fsmAction" | "fsmTransition" | "fsmActionLog" | "fsmErrorLog" | "order" | "stageOrder" | "trip"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      FsmState: {
        payload: Prisma.$FsmStatePayload<ExtArgs>
        fields: Prisma.FsmStateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FsmStateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FsmStatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FsmStateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FsmStatePayload>
          }
          findFirst: {
            args: Prisma.FsmStateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FsmStatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FsmStateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FsmStatePayload>
          }
          findMany: {
            args: Prisma.FsmStateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FsmStatePayload>[]
          }
          create: {
            args: Prisma.FsmStateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FsmStatePayload>
          }
          createMany: {
            args: Prisma.FsmStateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FsmStateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FsmStatePayload>
          }
          update: {
            args: Prisma.FsmStateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FsmStatePayload>
          }
          deleteMany: {
            args: Prisma.FsmStateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FsmStateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FsmStateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FsmStatePayload>
          }
          aggregate: {
            args: Prisma.FsmStateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFsmState>
          }
          groupBy: {
            args: Prisma.FsmStateGroupByArgs<ExtArgs>
            result: $Utils.Optional<FsmStateGroupByOutputType>[]
          }
          count: {
            args: Prisma.FsmStateCountArgs<ExtArgs>
            result: $Utils.Optional<FsmStateCountAggregateOutputType> | number
          }
        }
      }
      FsmAction: {
        payload: Prisma.$FsmActionPayload<ExtArgs>
        fields: Prisma.FsmActionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FsmActionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FsmActionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FsmActionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FsmActionPayload>
          }
          findFirst: {
            args: Prisma.FsmActionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FsmActionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FsmActionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FsmActionPayload>
          }
          findMany: {
            args: Prisma.FsmActionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FsmActionPayload>[]
          }
          create: {
            args: Prisma.FsmActionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FsmActionPayload>
          }
          createMany: {
            args: Prisma.FsmActionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FsmActionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FsmActionPayload>
          }
          update: {
            args: Prisma.FsmActionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FsmActionPayload>
          }
          deleteMany: {
            args: Prisma.FsmActionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FsmActionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FsmActionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FsmActionPayload>
          }
          aggregate: {
            args: Prisma.FsmActionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFsmAction>
          }
          groupBy: {
            args: Prisma.FsmActionGroupByArgs<ExtArgs>
            result: $Utils.Optional<FsmActionGroupByOutputType>[]
          }
          count: {
            args: Prisma.FsmActionCountArgs<ExtArgs>
            result: $Utils.Optional<FsmActionCountAggregateOutputType> | number
          }
        }
      }
      FsmTransition: {
        payload: Prisma.$FsmTransitionPayload<ExtArgs>
        fields: Prisma.FsmTransitionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FsmTransitionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FsmTransitionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FsmTransitionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FsmTransitionPayload>
          }
          findFirst: {
            args: Prisma.FsmTransitionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FsmTransitionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FsmTransitionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FsmTransitionPayload>
          }
          findMany: {
            args: Prisma.FsmTransitionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FsmTransitionPayload>[]
          }
          create: {
            args: Prisma.FsmTransitionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FsmTransitionPayload>
          }
          createMany: {
            args: Prisma.FsmTransitionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FsmTransitionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FsmTransitionPayload>
          }
          update: {
            args: Prisma.FsmTransitionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FsmTransitionPayload>
          }
          deleteMany: {
            args: Prisma.FsmTransitionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FsmTransitionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FsmTransitionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FsmTransitionPayload>
          }
          aggregate: {
            args: Prisma.FsmTransitionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFsmTransition>
          }
          groupBy: {
            args: Prisma.FsmTransitionGroupByArgs<ExtArgs>
            result: $Utils.Optional<FsmTransitionGroupByOutputType>[]
          }
          count: {
            args: Prisma.FsmTransitionCountArgs<ExtArgs>
            result: $Utils.Optional<FsmTransitionCountAggregateOutputType> | number
          }
        }
      }
      FsmActionLog: {
        payload: Prisma.$FsmActionLogPayload<ExtArgs>
        fields: Prisma.FsmActionLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FsmActionLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FsmActionLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FsmActionLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FsmActionLogPayload>
          }
          findFirst: {
            args: Prisma.FsmActionLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FsmActionLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FsmActionLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FsmActionLogPayload>
          }
          findMany: {
            args: Prisma.FsmActionLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FsmActionLogPayload>[]
          }
          create: {
            args: Prisma.FsmActionLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FsmActionLogPayload>
          }
          createMany: {
            args: Prisma.FsmActionLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FsmActionLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FsmActionLogPayload>
          }
          update: {
            args: Prisma.FsmActionLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FsmActionLogPayload>
          }
          deleteMany: {
            args: Prisma.FsmActionLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FsmActionLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FsmActionLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FsmActionLogPayload>
          }
          aggregate: {
            args: Prisma.FsmActionLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFsmActionLog>
          }
          groupBy: {
            args: Prisma.FsmActionLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<FsmActionLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.FsmActionLogCountArgs<ExtArgs>
            result: $Utils.Optional<FsmActionLogCountAggregateOutputType> | number
          }
        }
      }
      FsmErrorLog: {
        payload: Prisma.$FsmErrorLogPayload<ExtArgs>
        fields: Prisma.FsmErrorLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FsmErrorLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FsmErrorLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FsmErrorLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FsmErrorLogPayload>
          }
          findFirst: {
            args: Prisma.FsmErrorLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FsmErrorLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FsmErrorLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FsmErrorLogPayload>
          }
          findMany: {
            args: Prisma.FsmErrorLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FsmErrorLogPayload>[]
          }
          create: {
            args: Prisma.FsmErrorLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FsmErrorLogPayload>
          }
          createMany: {
            args: Prisma.FsmErrorLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FsmErrorLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FsmErrorLogPayload>
          }
          update: {
            args: Prisma.FsmErrorLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FsmErrorLogPayload>
          }
          deleteMany: {
            args: Prisma.FsmErrorLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FsmErrorLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FsmErrorLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FsmErrorLogPayload>
          }
          aggregate: {
            args: Prisma.FsmErrorLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFsmErrorLog>
          }
          groupBy: {
            args: Prisma.FsmErrorLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<FsmErrorLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.FsmErrorLogCountArgs<ExtArgs>
            result: $Utils.Optional<FsmErrorLogCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      StageOrder: {
        payload: Prisma.$StageOrderPayload<ExtArgs>
        fields: Prisma.StageOrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StageOrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StageOrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StageOrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StageOrderPayload>
          }
          findFirst: {
            args: Prisma.StageOrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StageOrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StageOrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StageOrderPayload>
          }
          findMany: {
            args: Prisma.StageOrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StageOrderPayload>[]
          }
          create: {
            args: Prisma.StageOrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StageOrderPayload>
          }
          createMany: {
            args: Prisma.StageOrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StageOrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StageOrderPayload>
          }
          update: {
            args: Prisma.StageOrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StageOrderPayload>
          }
          deleteMany: {
            args: Prisma.StageOrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StageOrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StageOrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StageOrderPayload>
          }
          aggregate: {
            args: Prisma.StageOrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStageOrder>
          }
          groupBy: {
            args: Prisma.StageOrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<StageOrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.StageOrderCountArgs<ExtArgs>
            result: $Utils.Optional<StageOrderCountAggregateOutputType> | number
          }
        }
      }
      Trip: {
        payload: Prisma.$TripPayload<ExtArgs>
        fields: Prisma.TripFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TripFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TripFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          findFirst: {
            args: Prisma.TripFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TripFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          findMany: {
            args: Prisma.TripFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>[]
          }
          create: {
            args: Prisma.TripCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          createMany: {
            args: Prisma.TripCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TripDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          update: {
            args: Prisma.TripUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          deleteMany: {
            args: Prisma.TripDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TripUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TripUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          aggregate: {
            args: Prisma.TripAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrip>
          }
          groupBy: {
            args: Prisma.TripGroupByArgs<ExtArgs>
            result: $Utils.Optional<TripGroupByOutputType>[]
          }
          count: {
            args: Prisma.TripCountArgs<ExtArgs>
            result: $Utils.Optional<TripCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    fsmState?: FsmStateOmit
    fsmAction?: FsmActionOmit
    fsmTransition?: FsmTransitionOmit
    fsmActionLog?: FsmActionLogOmit
    fsmErrorLog?: FsmErrorLogOmit
    order?: OrderOmit
    stageOrder?: StageOrderOmit
    trip?: TripOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type FsmStateCountOutputType
   */

  export type FsmStateCountOutputType = {
    transitions_from: number
    transitions_to: number
  }

  export type FsmStateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transitions_from?: boolean | FsmStateCountOutputTypeCountTransitions_fromArgs
    transitions_to?: boolean | FsmStateCountOutputTypeCountTransitions_toArgs
  }

  // Custom InputTypes
  /**
   * FsmStateCountOutputType without action
   */
  export type FsmStateCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FsmStateCountOutputType
     */
    select?: FsmStateCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FsmStateCountOutputType without action
   */
  export type FsmStateCountOutputTypeCountTransitions_fromArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FsmTransitionWhereInput
  }

  /**
   * FsmStateCountOutputType without action
   */
  export type FsmStateCountOutputTypeCountTransitions_toArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FsmTransitionWhereInput
  }


  /**
   * Count Type FsmActionCountOutputType
   */

  export type FsmActionCountOutputType = {
    transitions: number
  }

  export type FsmActionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transitions?: boolean | FsmActionCountOutputTypeCountTransitionsArgs
  }

  // Custom InputTypes
  /**
   * FsmActionCountOutputType without action
   */
  export type FsmActionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FsmActionCountOutputType
     */
    select?: FsmActionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FsmActionCountOutputType without action
   */
  export type FsmActionCountOutputTypeCountTransitionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FsmTransitionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model FsmState
   */

  export type AggregateFsmState = {
    _count: FsmStateCountAggregateOutputType | null
    _avg: FsmStateAvgAggregateOutputType | null
    _sum: FsmStateSumAggregateOutputType | null
    _min: FsmStateMinAggregateOutputType | null
    _max: FsmStateMaxAggregateOutputType | null
  }

  export type FsmStateAvgAggregateOutputType = {
    id: number | null
  }

  export type FsmStateSumAggregateOutputType = {
    id: number | null
  }

  export type FsmStateMinAggregateOutputType = {
    id: number | null
    name: string | null
    label: string | null
  }

  export type FsmStateMaxAggregateOutputType = {
    id: number | null
    name: string | null
    label: string | null
  }

  export type FsmStateCountAggregateOutputType = {
    id: number
    name: number
    label: number
    _all: number
  }


  export type FsmStateAvgAggregateInputType = {
    id?: true
  }

  export type FsmStateSumAggregateInputType = {
    id?: true
  }

  export type FsmStateMinAggregateInputType = {
    id?: true
    name?: true
    label?: true
  }

  export type FsmStateMaxAggregateInputType = {
    id?: true
    name?: true
    label?: true
  }

  export type FsmStateCountAggregateInputType = {
    id?: true
    name?: true
    label?: true
    _all?: true
  }

  export type FsmStateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FsmState to aggregate.
     */
    where?: FsmStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FsmStates to fetch.
     */
    orderBy?: FsmStateOrderByWithRelationInput | FsmStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FsmStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FsmStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FsmStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FsmStates
    **/
    _count?: true | FsmStateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FsmStateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FsmStateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FsmStateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FsmStateMaxAggregateInputType
  }

  export type GetFsmStateAggregateType<T extends FsmStateAggregateArgs> = {
        [P in keyof T & keyof AggregateFsmState]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFsmState[P]>
      : GetScalarType<T[P], AggregateFsmState[P]>
  }




  export type FsmStateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FsmStateWhereInput
    orderBy?: FsmStateOrderByWithAggregationInput | FsmStateOrderByWithAggregationInput[]
    by: FsmStateScalarFieldEnum[] | FsmStateScalarFieldEnum
    having?: FsmStateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FsmStateCountAggregateInputType | true
    _avg?: FsmStateAvgAggregateInputType
    _sum?: FsmStateSumAggregateInputType
    _min?: FsmStateMinAggregateInputType
    _max?: FsmStateMaxAggregateInputType
  }

  export type FsmStateGroupByOutputType = {
    id: number
    name: string
    label: string | null
    _count: FsmStateCountAggregateOutputType | null
    _avg: FsmStateAvgAggregateOutputType | null
    _sum: FsmStateSumAggregateOutputType | null
    _min: FsmStateMinAggregateOutputType | null
    _max: FsmStateMaxAggregateOutputType | null
  }

  type GetFsmStateGroupByPayload<T extends FsmStateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FsmStateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FsmStateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FsmStateGroupByOutputType[P]>
            : GetScalarType<T[P], FsmStateGroupByOutputType[P]>
        }
      >
    >


  export type FsmStateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    label?: boolean
    transitions_from?: boolean | FsmState$transitions_fromArgs<ExtArgs>
    transitions_to?: boolean | FsmState$transitions_toArgs<ExtArgs>
    _count?: boolean | FsmStateCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fsmState"]>



  export type FsmStateSelectScalar = {
    id?: boolean
    name?: boolean
    label?: boolean
  }

  export type FsmStateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "label", ExtArgs["result"]["fsmState"]>
  export type FsmStateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transitions_from?: boolean | FsmState$transitions_fromArgs<ExtArgs>
    transitions_to?: boolean | FsmState$transitions_toArgs<ExtArgs>
    _count?: boolean | FsmStateCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $FsmStatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FsmState"
    objects: {
      transitions_from: Prisma.$FsmTransitionPayload<ExtArgs>[]
      transitions_to: Prisma.$FsmTransitionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      label: string | null
    }, ExtArgs["result"]["fsmState"]>
    composites: {}
  }

  type FsmStateGetPayload<S extends boolean | null | undefined | FsmStateDefaultArgs> = $Result.GetResult<Prisma.$FsmStatePayload, S>

  type FsmStateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FsmStateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FsmStateCountAggregateInputType | true
    }

  export interface FsmStateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FsmState'], meta: { name: 'FsmState' } }
    /**
     * Find zero or one FsmState that matches the filter.
     * @param {FsmStateFindUniqueArgs} args - Arguments to find a FsmState
     * @example
     * // Get one FsmState
     * const fsmState = await prisma.fsmState.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FsmStateFindUniqueArgs>(args: SelectSubset<T, FsmStateFindUniqueArgs<ExtArgs>>): Prisma__FsmStateClient<$Result.GetResult<Prisma.$FsmStatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FsmState that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FsmStateFindUniqueOrThrowArgs} args - Arguments to find a FsmState
     * @example
     * // Get one FsmState
     * const fsmState = await prisma.fsmState.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FsmStateFindUniqueOrThrowArgs>(args: SelectSubset<T, FsmStateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FsmStateClient<$Result.GetResult<Prisma.$FsmStatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FsmState that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FsmStateFindFirstArgs} args - Arguments to find a FsmState
     * @example
     * // Get one FsmState
     * const fsmState = await prisma.fsmState.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FsmStateFindFirstArgs>(args?: SelectSubset<T, FsmStateFindFirstArgs<ExtArgs>>): Prisma__FsmStateClient<$Result.GetResult<Prisma.$FsmStatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FsmState that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FsmStateFindFirstOrThrowArgs} args - Arguments to find a FsmState
     * @example
     * // Get one FsmState
     * const fsmState = await prisma.fsmState.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FsmStateFindFirstOrThrowArgs>(args?: SelectSubset<T, FsmStateFindFirstOrThrowArgs<ExtArgs>>): Prisma__FsmStateClient<$Result.GetResult<Prisma.$FsmStatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FsmStates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FsmStateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FsmStates
     * const fsmStates = await prisma.fsmState.findMany()
     * 
     * // Get first 10 FsmStates
     * const fsmStates = await prisma.fsmState.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fsmStateWithIdOnly = await prisma.fsmState.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FsmStateFindManyArgs>(args?: SelectSubset<T, FsmStateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FsmStatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FsmState.
     * @param {FsmStateCreateArgs} args - Arguments to create a FsmState.
     * @example
     * // Create one FsmState
     * const FsmState = await prisma.fsmState.create({
     *   data: {
     *     // ... data to create a FsmState
     *   }
     * })
     * 
     */
    create<T extends FsmStateCreateArgs>(args: SelectSubset<T, FsmStateCreateArgs<ExtArgs>>): Prisma__FsmStateClient<$Result.GetResult<Prisma.$FsmStatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FsmStates.
     * @param {FsmStateCreateManyArgs} args - Arguments to create many FsmStates.
     * @example
     * // Create many FsmStates
     * const fsmState = await prisma.fsmState.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FsmStateCreateManyArgs>(args?: SelectSubset<T, FsmStateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FsmState.
     * @param {FsmStateDeleteArgs} args - Arguments to delete one FsmState.
     * @example
     * // Delete one FsmState
     * const FsmState = await prisma.fsmState.delete({
     *   where: {
     *     // ... filter to delete one FsmState
     *   }
     * })
     * 
     */
    delete<T extends FsmStateDeleteArgs>(args: SelectSubset<T, FsmStateDeleteArgs<ExtArgs>>): Prisma__FsmStateClient<$Result.GetResult<Prisma.$FsmStatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FsmState.
     * @param {FsmStateUpdateArgs} args - Arguments to update one FsmState.
     * @example
     * // Update one FsmState
     * const fsmState = await prisma.fsmState.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FsmStateUpdateArgs>(args: SelectSubset<T, FsmStateUpdateArgs<ExtArgs>>): Prisma__FsmStateClient<$Result.GetResult<Prisma.$FsmStatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FsmStates.
     * @param {FsmStateDeleteManyArgs} args - Arguments to filter FsmStates to delete.
     * @example
     * // Delete a few FsmStates
     * const { count } = await prisma.fsmState.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FsmStateDeleteManyArgs>(args?: SelectSubset<T, FsmStateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FsmStates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FsmStateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FsmStates
     * const fsmState = await prisma.fsmState.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FsmStateUpdateManyArgs>(args: SelectSubset<T, FsmStateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FsmState.
     * @param {FsmStateUpsertArgs} args - Arguments to update or create a FsmState.
     * @example
     * // Update or create a FsmState
     * const fsmState = await prisma.fsmState.upsert({
     *   create: {
     *     // ... data to create a FsmState
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FsmState we want to update
     *   }
     * })
     */
    upsert<T extends FsmStateUpsertArgs>(args: SelectSubset<T, FsmStateUpsertArgs<ExtArgs>>): Prisma__FsmStateClient<$Result.GetResult<Prisma.$FsmStatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FsmStates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FsmStateCountArgs} args - Arguments to filter FsmStates to count.
     * @example
     * // Count the number of FsmStates
     * const count = await prisma.fsmState.count({
     *   where: {
     *     // ... the filter for the FsmStates we want to count
     *   }
     * })
    **/
    count<T extends FsmStateCountArgs>(
      args?: Subset<T, FsmStateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FsmStateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FsmState.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FsmStateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FsmStateAggregateArgs>(args: Subset<T, FsmStateAggregateArgs>): Prisma.PrismaPromise<GetFsmStateAggregateType<T>>

    /**
     * Group by FsmState.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FsmStateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FsmStateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FsmStateGroupByArgs['orderBy'] }
        : { orderBy?: FsmStateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FsmStateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFsmStateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FsmState model
   */
  readonly fields: FsmStateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FsmState.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FsmStateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transitions_from<T extends FsmState$transitions_fromArgs<ExtArgs> = {}>(args?: Subset<T, FsmState$transitions_fromArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FsmTransitionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transitions_to<T extends FsmState$transitions_toArgs<ExtArgs> = {}>(args?: Subset<T, FsmState$transitions_toArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FsmTransitionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FsmState model
   */
  interface FsmStateFieldRefs {
    readonly id: FieldRef<"FsmState", 'Int'>
    readonly name: FieldRef<"FsmState", 'String'>
    readonly label: FieldRef<"FsmState", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FsmState findUnique
   */
  export type FsmStateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FsmState
     */
    select?: FsmStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FsmState
     */
    omit?: FsmStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FsmStateInclude<ExtArgs> | null
    /**
     * Filter, which FsmState to fetch.
     */
    where: FsmStateWhereUniqueInput
  }

  /**
   * FsmState findUniqueOrThrow
   */
  export type FsmStateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FsmState
     */
    select?: FsmStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FsmState
     */
    omit?: FsmStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FsmStateInclude<ExtArgs> | null
    /**
     * Filter, which FsmState to fetch.
     */
    where: FsmStateWhereUniqueInput
  }

  /**
   * FsmState findFirst
   */
  export type FsmStateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FsmState
     */
    select?: FsmStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FsmState
     */
    omit?: FsmStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FsmStateInclude<ExtArgs> | null
    /**
     * Filter, which FsmState to fetch.
     */
    where?: FsmStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FsmStates to fetch.
     */
    orderBy?: FsmStateOrderByWithRelationInput | FsmStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FsmStates.
     */
    cursor?: FsmStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FsmStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FsmStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FsmStates.
     */
    distinct?: FsmStateScalarFieldEnum | FsmStateScalarFieldEnum[]
  }

  /**
   * FsmState findFirstOrThrow
   */
  export type FsmStateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FsmState
     */
    select?: FsmStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FsmState
     */
    omit?: FsmStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FsmStateInclude<ExtArgs> | null
    /**
     * Filter, which FsmState to fetch.
     */
    where?: FsmStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FsmStates to fetch.
     */
    orderBy?: FsmStateOrderByWithRelationInput | FsmStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FsmStates.
     */
    cursor?: FsmStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FsmStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FsmStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FsmStates.
     */
    distinct?: FsmStateScalarFieldEnum | FsmStateScalarFieldEnum[]
  }

  /**
   * FsmState findMany
   */
  export type FsmStateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FsmState
     */
    select?: FsmStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FsmState
     */
    omit?: FsmStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FsmStateInclude<ExtArgs> | null
    /**
     * Filter, which FsmStates to fetch.
     */
    where?: FsmStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FsmStates to fetch.
     */
    orderBy?: FsmStateOrderByWithRelationInput | FsmStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FsmStates.
     */
    cursor?: FsmStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FsmStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FsmStates.
     */
    skip?: number
    distinct?: FsmStateScalarFieldEnum | FsmStateScalarFieldEnum[]
  }

  /**
   * FsmState create
   */
  export type FsmStateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FsmState
     */
    select?: FsmStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FsmState
     */
    omit?: FsmStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FsmStateInclude<ExtArgs> | null
    /**
     * The data needed to create a FsmState.
     */
    data: XOR<FsmStateCreateInput, FsmStateUncheckedCreateInput>
  }

  /**
   * FsmState createMany
   */
  export type FsmStateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FsmStates.
     */
    data: FsmStateCreateManyInput | FsmStateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FsmState update
   */
  export type FsmStateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FsmState
     */
    select?: FsmStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FsmState
     */
    omit?: FsmStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FsmStateInclude<ExtArgs> | null
    /**
     * The data needed to update a FsmState.
     */
    data: XOR<FsmStateUpdateInput, FsmStateUncheckedUpdateInput>
    /**
     * Choose, which FsmState to update.
     */
    where: FsmStateWhereUniqueInput
  }

  /**
   * FsmState updateMany
   */
  export type FsmStateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FsmStates.
     */
    data: XOR<FsmStateUpdateManyMutationInput, FsmStateUncheckedUpdateManyInput>
    /**
     * Filter which FsmStates to update
     */
    where?: FsmStateWhereInput
    /**
     * Limit how many FsmStates to update.
     */
    limit?: number
  }

  /**
   * FsmState upsert
   */
  export type FsmStateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FsmState
     */
    select?: FsmStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FsmState
     */
    omit?: FsmStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FsmStateInclude<ExtArgs> | null
    /**
     * The filter to search for the FsmState to update in case it exists.
     */
    where: FsmStateWhereUniqueInput
    /**
     * In case the FsmState found by the `where` argument doesn't exist, create a new FsmState with this data.
     */
    create: XOR<FsmStateCreateInput, FsmStateUncheckedCreateInput>
    /**
     * In case the FsmState was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FsmStateUpdateInput, FsmStateUncheckedUpdateInput>
  }

  /**
   * FsmState delete
   */
  export type FsmStateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FsmState
     */
    select?: FsmStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FsmState
     */
    omit?: FsmStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FsmStateInclude<ExtArgs> | null
    /**
     * Filter which FsmState to delete.
     */
    where: FsmStateWhereUniqueInput
  }

  /**
   * FsmState deleteMany
   */
  export type FsmStateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FsmStates to delete
     */
    where?: FsmStateWhereInput
    /**
     * Limit how many FsmStates to delete.
     */
    limit?: number
  }

  /**
   * FsmState.transitions_from
   */
  export type FsmState$transitions_fromArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FsmTransition
     */
    select?: FsmTransitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FsmTransition
     */
    omit?: FsmTransitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FsmTransitionInclude<ExtArgs> | null
    where?: FsmTransitionWhereInput
    orderBy?: FsmTransitionOrderByWithRelationInput | FsmTransitionOrderByWithRelationInput[]
    cursor?: FsmTransitionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FsmTransitionScalarFieldEnum | FsmTransitionScalarFieldEnum[]
  }

  /**
   * FsmState.transitions_to
   */
  export type FsmState$transitions_toArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FsmTransition
     */
    select?: FsmTransitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FsmTransition
     */
    omit?: FsmTransitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FsmTransitionInclude<ExtArgs> | null
    where?: FsmTransitionWhereInput
    orderBy?: FsmTransitionOrderByWithRelationInput | FsmTransitionOrderByWithRelationInput[]
    cursor?: FsmTransitionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FsmTransitionScalarFieldEnum | FsmTransitionScalarFieldEnum[]
  }

  /**
   * FsmState without action
   */
  export type FsmStateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FsmState
     */
    select?: FsmStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FsmState
     */
    omit?: FsmStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FsmStateInclude<ExtArgs> | null
  }


  /**
   * Model FsmAction
   */

  export type AggregateFsmAction = {
    _count: FsmActionCountAggregateOutputType | null
    _avg: FsmActionAvgAggregateOutputType | null
    _sum: FsmActionSumAggregateOutputType | null
    _min: FsmActionMinAggregateOutputType | null
    _max: FsmActionMaxAggregateOutputType | null
  }

  export type FsmActionAvgAggregateOutputType = {
    id: number | null
  }

  export type FsmActionSumAggregateOutputType = {
    id: number | null
  }

  export type FsmActionMinAggregateOutputType = {
    id: number | null
    name: string | null
    label: string | null
  }

  export type FsmActionMaxAggregateOutputType = {
    id: number | null
    name: string | null
    label: string | null
  }

  export type FsmActionCountAggregateOutputType = {
    id: number
    name: number
    label: number
    _all: number
  }


  export type FsmActionAvgAggregateInputType = {
    id?: true
  }

  export type FsmActionSumAggregateInputType = {
    id?: true
  }

  export type FsmActionMinAggregateInputType = {
    id?: true
    name?: true
    label?: true
  }

  export type FsmActionMaxAggregateInputType = {
    id?: true
    name?: true
    label?: true
  }

  export type FsmActionCountAggregateInputType = {
    id?: true
    name?: true
    label?: true
    _all?: true
  }

  export type FsmActionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FsmAction to aggregate.
     */
    where?: FsmActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FsmActions to fetch.
     */
    orderBy?: FsmActionOrderByWithRelationInput | FsmActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FsmActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FsmActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FsmActions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FsmActions
    **/
    _count?: true | FsmActionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FsmActionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FsmActionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FsmActionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FsmActionMaxAggregateInputType
  }

  export type GetFsmActionAggregateType<T extends FsmActionAggregateArgs> = {
        [P in keyof T & keyof AggregateFsmAction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFsmAction[P]>
      : GetScalarType<T[P], AggregateFsmAction[P]>
  }




  export type FsmActionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FsmActionWhereInput
    orderBy?: FsmActionOrderByWithAggregationInput | FsmActionOrderByWithAggregationInput[]
    by: FsmActionScalarFieldEnum[] | FsmActionScalarFieldEnum
    having?: FsmActionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FsmActionCountAggregateInputType | true
    _avg?: FsmActionAvgAggregateInputType
    _sum?: FsmActionSumAggregateInputType
    _min?: FsmActionMinAggregateInputType
    _max?: FsmActionMaxAggregateInputType
  }

  export type FsmActionGroupByOutputType = {
    id: number
    name: string
    label: string | null
    _count: FsmActionCountAggregateOutputType | null
    _avg: FsmActionAvgAggregateOutputType | null
    _sum: FsmActionSumAggregateOutputType | null
    _min: FsmActionMinAggregateOutputType | null
    _max: FsmActionMaxAggregateOutputType | null
  }

  type GetFsmActionGroupByPayload<T extends FsmActionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FsmActionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FsmActionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FsmActionGroupByOutputType[P]>
            : GetScalarType<T[P], FsmActionGroupByOutputType[P]>
        }
      >
    >


  export type FsmActionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    label?: boolean
    transitions?: boolean | FsmAction$transitionsArgs<ExtArgs>
    _count?: boolean | FsmActionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fsmAction"]>



  export type FsmActionSelectScalar = {
    id?: boolean
    name?: boolean
    label?: boolean
  }

  export type FsmActionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "label", ExtArgs["result"]["fsmAction"]>
  export type FsmActionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transitions?: boolean | FsmAction$transitionsArgs<ExtArgs>
    _count?: boolean | FsmActionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $FsmActionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FsmAction"
    objects: {
      transitions: Prisma.$FsmTransitionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      label: string | null
    }, ExtArgs["result"]["fsmAction"]>
    composites: {}
  }

  type FsmActionGetPayload<S extends boolean | null | undefined | FsmActionDefaultArgs> = $Result.GetResult<Prisma.$FsmActionPayload, S>

  type FsmActionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FsmActionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FsmActionCountAggregateInputType | true
    }

  export interface FsmActionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FsmAction'], meta: { name: 'FsmAction' } }
    /**
     * Find zero or one FsmAction that matches the filter.
     * @param {FsmActionFindUniqueArgs} args - Arguments to find a FsmAction
     * @example
     * // Get one FsmAction
     * const fsmAction = await prisma.fsmAction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FsmActionFindUniqueArgs>(args: SelectSubset<T, FsmActionFindUniqueArgs<ExtArgs>>): Prisma__FsmActionClient<$Result.GetResult<Prisma.$FsmActionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FsmAction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FsmActionFindUniqueOrThrowArgs} args - Arguments to find a FsmAction
     * @example
     * // Get one FsmAction
     * const fsmAction = await prisma.fsmAction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FsmActionFindUniqueOrThrowArgs>(args: SelectSubset<T, FsmActionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FsmActionClient<$Result.GetResult<Prisma.$FsmActionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FsmAction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FsmActionFindFirstArgs} args - Arguments to find a FsmAction
     * @example
     * // Get one FsmAction
     * const fsmAction = await prisma.fsmAction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FsmActionFindFirstArgs>(args?: SelectSubset<T, FsmActionFindFirstArgs<ExtArgs>>): Prisma__FsmActionClient<$Result.GetResult<Prisma.$FsmActionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FsmAction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FsmActionFindFirstOrThrowArgs} args - Arguments to find a FsmAction
     * @example
     * // Get one FsmAction
     * const fsmAction = await prisma.fsmAction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FsmActionFindFirstOrThrowArgs>(args?: SelectSubset<T, FsmActionFindFirstOrThrowArgs<ExtArgs>>): Prisma__FsmActionClient<$Result.GetResult<Prisma.$FsmActionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FsmActions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FsmActionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FsmActions
     * const fsmActions = await prisma.fsmAction.findMany()
     * 
     * // Get first 10 FsmActions
     * const fsmActions = await prisma.fsmAction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fsmActionWithIdOnly = await prisma.fsmAction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FsmActionFindManyArgs>(args?: SelectSubset<T, FsmActionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FsmActionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FsmAction.
     * @param {FsmActionCreateArgs} args - Arguments to create a FsmAction.
     * @example
     * // Create one FsmAction
     * const FsmAction = await prisma.fsmAction.create({
     *   data: {
     *     // ... data to create a FsmAction
     *   }
     * })
     * 
     */
    create<T extends FsmActionCreateArgs>(args: SelectSubset<T, FsmActionCreateArgs<ExtArgs>>): Prisma__FsmActionClient<$Result.GetResult<Prisma.$FsmActionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FsmActions.
     * @param {FsmActionCreateManyArgs} args - Arguments to create many FsmActions.
     * @example
     * // Create many FsmActions
     * const fsmAction = await prisma.fsmAction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FsmActionCreateManyArgs>(args?: SelectSubset<T, FsmActionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FsmAction.
     * @param {FsmActionDeleteArgs} args - Arguments to delete one FsmAction.
     * @example
     * // Delete one FsmAction
     * const FsmAction = await prisma.fsmAction.delete({
     *   where: {
     *     // ... filter to delete one FsmAction
     *   }
     * })
     * 
     */
    delete<T extends FsmActionDeleteArgs>(args: SelectSubset<T, FsmActionDeleteArgs<ExtArgs>>): Prisma__FsmActionClient<$Result.GetResult<Prisma.$FsmActionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FsmAction.
     * @param {FsmActionUpdateArgs} args - Arguments to update one FsmAction.
     * @example
     * // Update one FsmAction
     * const fsmAction = await prisma.fsmAction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FsmActionUpdateArgs>(args: SelectSubset<T, FsmActionUpdateArgs<ExtArgs>>): Prisma__FsmActionClient<$Result.GetResult<Prisma.$FsmActionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FsmActions.
     * @param {FsmActionDeleteManyArgs} args - Arguments to filter FsmActions to delete.
     * @example
     * // Delete a few FsmActions
     * const { count } = await prisma.fsmAction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FsmActionDeleteManyArgs>(args?: SelectSubset<T, FsmActionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FsmActions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FsmActionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FsmActions
     * const fsmAction = await prisma.fsmAction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FsmActionUpdateManyArgs>(args: SelectSubset<T, FsmActionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FsmAction.
     * @param {FsmActionUpsertArgs} args - Arguments to update or create a FsmAction.
     * @example
     * // Update or create a FsmAction
     * const fsmAction = await prisma.fsmAction.upsert({
     *   create: {
     *     // ... data to create a FsmAction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FsmAction we want to update
     *   }
     * })
     */
    upsert<T extends FsmActionUpsertArgs>(args: SelectSubset<T, FsmActionUpsertArgs<ExtArgs>>): Prisma__FsmActionClient<$Result.GetResult<Prisma.$FsmActionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FsmActions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FsmActionCountArgs} args - Arguments to filter FsmActions to count.
     * @example
     * // Count the number of FsmActions
     * const count = await prisma.fsmAction.count({
     *   where: {
     *     // ... the filter for the FsmActions we want to count
     *   }
     * })
    **/
    count<T extends FsmActionCountArgs>(
      args?: Subset<T, FsmActionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FsmActionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FsmAction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FsmActionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FsmActionAggregateArgs>(args: Subset<T, FsmActionAggregateArgs>): Prisma.PrismaPromise<GetFsmActionAggregateType<T>>

    /**
     * Group by FsmAction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FsmActionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FsmActionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FsmActionGroupByArgs['orderBy'] }
        : { orderBy?: FsmActionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FsmActionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFsmActionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FsmAction model
   */
  readonly fields: FsmActionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FsmAction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FsmActionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transitions<T extends FsmAction$transitionsArgs<ExtArgs> = {}>(args?: Subset<T, FsmAction$transitionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FsmTransitionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FsmAction model
   */
  interface FsmActionFieldRefs {
    readonly id: FieldRef<"FsmAction", 'Int'>
    readonly name: FieldRef<"FsmAction", 'String'>
    readonly label: FieldRef<"FsmAction", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FsmAction findUnique
   */
  export type FsmActionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FsmAction
     */
    select?: FsmActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FsmAction
     */
    omit?: FsmActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FsmActionInclude<ExtArgs> | null
    /**
     * Filter, which FsmAction to fetch.
     */
    where: FsmActionWhereUniqueInput
  }

  /**
   * FsmAction findUniqueOrThrow
   */
  export type FsmActionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FsmAction
     */
    select?: FsmActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FsmAction
     */
    omit?: FsmActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FsmActionInclude<ExtArgs> | null
    /**
     * Filter, which FsmAction to fetch.
     */
    where: FsmActionWhereUniqueInput
  }

  /**
   * FsmAction findFirst
   */
  export type FsmActionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FsmAction
     */
    select?: FsmActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FsmAction
     */
    omit?: FsmActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FsmActionInclude<ExtArgs> | null
    /**
     * Filter, which FsmAction to fetch.
     */
    where?: FsmActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FsmActions to fetch.
     */
    orderBy?: FsmActionOrderByWithRelationInput | FsmActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FsmActions.
     */
    cursor?: FsmActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FsmActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FsmActions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FsmActions.
     */
    distinct?: FsmActionScalarFieldEnum | FsmActionScalarFieldEnum[]
  }

  /**
   * FsmAction findFirstOrThrow
   */
  export type FsmActionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FsmAction
     */
    select?: FsmActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FsmAction
     */
    omit?: FsmActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FsmActionInclude<ExtArgs> | null
    /**
     * Filter, which FsmAction to fetch.
     */
    where?: FsmActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FsmActions to fetch.
     */
    orderBy?: FsmActionOrderByWithRelationInput | FsmActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FsmActions.
     */
    cursor?: FsmActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FsmActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FsmActions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FsmActions.
     */
    distinct?: FsmActionScalarFieldEnum | FsmActionScalarFieldEnum[]
  }

  /**
   * FsmAction findMany
   */
  export type FsmActionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FsmAction
     */
    select?: FsmActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FsmAction
     */
    omit?: FsmActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FsmActionInclude<ExtArgs> | null
    /**
     * Filter, which FsmActions to fetch.
     */
    where?: FsmActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FsmActions to fetch.
     */
    orderBy?: FsmActionOrderByWithRelationInput | FsmActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FsmActions.
     */
    cursor?: FsmActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FsmActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FsmActions.
     */
    skip?: number
    distinct?: FsmActionScalarFieldEnum | FsmActionScalarFieldEnum[]
  }

  /**
   * FsmAction create
   */
  export type FsmActionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FsmAction
     */
    select?: FsmActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FsmAction
     */
    omit?: FsmActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FsmActionInclude<ExtArgs> | null
    /**
     * The data needed to create a FsmAction.
     */
    data: XOR<FsmActionCreateInput, FsmActionUncheckedCreateInput>
  }

  /**
   * FsmAction createMany
   */
  export type FsmActionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FsmActions.
     */
    data: FsmActionCreateManyInput | FsmActionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FsmAction update
   */
  export type FsmActionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FsmAction
     */
    select?: FsmActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FsmAction
     */
    omit?: FsmActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FsmActionInclude<ExtArgs> | null
    /**
     * The data needed to update a FsmAction.
     */
    data: XOR<FsmActionUpdateInput, FsmActionUncheckedUpdateInput>
    /**
     * Choose, which FsmAction to update.
     */
    where: FsmActionWhereUniqueInput
  }

  /**
   * FsmAction updateMany
   */
  export type FsmActionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FsmActions.
     */
    data: XOR<FsmActionUpdateManyMutationInput, FsmActionUncheckedUpdateManyInput>
    /**
     * Filter which FsmActions to update
     */
    where?: FsmActionWhereInput
    /**
     * Limit how many FsmActions to update.
     */
    limit?: number
  }

  /**
   * FsmAction upsert
   */
  export type FsmActionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FsmAction
     */
    select?: FsmActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FsmAction
     */
    omit?: FsmActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FsmActionInclude<ExtArgs> | null
    /**
     * The filter to search for the FsmAction to update in case it exists.
     */
    where: FsmActionWhereUniqueInput
    /**
     * In case the FsmAction found by the `where` argument doesn't exist, create a new FsmAction with this data.
     */
    create: XOR<FsmActionCreateInput, FsmActionUncheckedCreateInput>
    /**
     * In case the FsmAction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FsmActionUpdateInput, FsmActionUncheckedUpdateInput>
  }

  /**
   * FsmAction delete
   */
  export type FsmActionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FsmAction
     */
    select?: FsmActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FsmAction
     */
    omit?: FsmActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FsmActionInclude<ExtArgs> | null
    /**
     * Filter which FsmAction to delete.
     */
    where: FsmActionWhereUniqueInput
  }

  /**
   * FsmAction deleteMany
   */
  export type FsmActionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FsmActions to delete
     */
    where?: FsmActionWhereInput
    /**
     * Limit how many FsmActions to delete.
     */
    limit?: number
  }

  /**
   * FsmAction.transitions
   */
  export type FsmAction$transitionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FsmTransition
     */
    select?: FsmTransitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FsmTransition
     */
    omit?: FsmTransitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FsmTransitionInclude<ExtArgs> | null
    where?: FsmTransitionWhereInput
    orderBy?: FsmTransitionOrderByWithRelationInput | FsmTransitionOrderByWithRelationInput[]
    cursor?: FsmTransitionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FsmTransitionScalarFieldEnum | FsmTransitionScalarFieldEnum[]
  }

  /**
   * FsmAction without action
   */
  export type FsmActionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FsmAction
     */
    select?: FsmActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FsmAction
     */
    omit?: FsmActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FsmActionInclude<ExtArgs> | null
  }


  /**
   * Model FsmTransition
   */

  export type AggregateFsmTransition = {
    _count: FsmTransitionCountAggregateOutputType | null
    _avg: FsmTransitionAvgAggregateOutputType | null
    _sum: FsmTransitionSumAggregateOutputType | null
    _min: FsmTransitionMinAggregateOutputType | null
    _max: FsmTransitionMaxAggregateOutputType | null
  }

  export type FsmTransitionAvgAggregateOutputType = {
    id: number | null
    from_state_id: number | null
    action_id: number | null
    to_state_id: number | null
  }

  export type FsmTransitionSumAggregateOutputType = {
    id: number | null
    from_state_id: number | null
    action_id: number | null
    to_state_id: number | null
  }

  export type FsmTransitionMinAggregateOutputType = {
    id: number | null
    from_state_id: number | null
    action_id: number | null
    to_state_id: number | null
  }

  export type FsmTransitionMaxAggregateOutputType = {
    id: number | null
    from_state_id: number | null
    action_id: number | null
    to_state_id: number | null
  }

  export type FsmTransitionCountAggregateOutputType = {
    id: number
    from_state_id: number
    action_id: number
    to_state_id: number
    _all: number
  }


  export type FsmTransitionAvgAggregateInputType = {
    id?: true
    from_state_id?: true
    action_id?: true
    to_state_id?: true
  }

  export type FsmTransitionSumAggregateInputType = {
    id?: true
    from_state_id?: true
    action_id?: true
    to_state_id?: true
  }

  export type FsmTransitionMinAggregateInputType = {
    id?: true
    from_state_id?: true
    action_id?: true
    to_state_id?: true
  }

  export type FsmTransitionMaxAggregateInputType = {
    id?: true
    from_state_id?: true
    action_id?: true
    to_state_id?: true
  }

  export type FsmTransitionCountAggregateInputType = {
    id?: true
    from_state_id?: true
    action_id?: true
    to_state_id?: true
    _all?: true
  }

  export type FsmTransitionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FsmTransition to aggregate.
     */
    where?: FsmTransitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FsmTransitions to fetch.
     */
    orderBy?: FsmTransitionOrderByWithRelationInput | FsmTransitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FsmTransitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FsmTransitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FsmTransitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FsmTransitions
    **/
    _count?: true | FsmTransitionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FsmTransitionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FsmTransitionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FsmTransitionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FsmTransitionMaxAggregateInputType
  }

  export type GetFsmTransitionAggregateType<T extends FsmTransitionAggregateArgs> = {
        [P in keyof T & keyof AggregateFsmTransition]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFsmTransition[P]>
      : GetScalarType<T[P], AggregateFsmTransition[P]>
  }




  export type FsmTransitionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FsmTransitionWhereInput
    orderBy?: FsmTransitionOrderByWithAggregationInput | FsmTransitionOrderByWithAggregationInput[]
    by: FsmTransitionScalarFieldEnum[] | FsmTransitionScalarFieldEnum
    having?: FsmTransitionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FsmTransitionCountAggregateInputType | true
    _avg?: FsmTransitionAvgAggregateInputType
    _sum?: FsmTransitionSumAggregateInputType
    _min?: FsmTransitionMinAggregateInputType
    _max?: FsmTransitionMaxAggregateInputType
  }

  export type FsmTransitionGroupByOutputType = {
    id: number
    from_state_id: number
    action_id: number
    to_state_id: number
    _count: FsmTransitionCountAggregateOutputType | null
    _avg: FsmTransitionAvgAggregateOutputType | null
    _sum: FsmTransitionSumAggregateOutputType | null
    _min: FsmTransitionMinAggregateOutputType | null
    _max: FsmTransitionMaxAggregateOutputType | null
  }

  type GetFsmTransitionGroupByPayload<T extends FsmTransitionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FsmTransitionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FsmTransitionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FsmTransitionGroupByOutputType[P]>
            : GetScalarType<T[P], FsmTransitionGroupByOutputType[P]>
        }
      >
    >


  export type FsmTransitionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    from_state_id?: boolean
    action_id?: boolean
    to_state_id?: boolean
    from_state?: boolean | FsmStateDefaultArgs<ExtArgs>
    to_state?: boolean | FsmStateDefaultArgs<ExtArgs>
    action?: boolean | FsmActionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fsmTransition"]>



  export type FsmTransitionSelectScalar = {
    id?: boolean
    from_state_id?: boolean
    action_id?: boolean
    to_state_id?: boolean
  }

  export type FsmTransitionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "from_state_id" | "action_id" | "to_state_id", ExtArgs["result"]["fsmTransition"]>
  export type FsmTransitionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    from_state?: boolean | FsmStateDefaultArgs<ExtArgs>
    to_state?: boolean | FsmStateDefaultArgs<ExtArgs>
    action?: boolean | FsmActionDefaultArgs<ExtArgs>
  }

  export type $FsmTransitionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FsmTransition"
    objects: {
      from_state: Prisma.$FsmStatePayload<ExtArgs>
      to_state: Prisma.$FsmStatePayload<ExtArgs>
      action: Prisma.$FsmActionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      from_state_id: number
      action_id: number
      to_state_id: number
    }, ExtArgs["result"]["fsmTransition"]>
    composites: {}
  }

  type FsmTransitionGetPayload<S extends boolean | null | undefined | FsmTransitionDefaultArgs> = $Result.GetResult<Prisma.$FsmTransitionPayload, S>

  type FsmTransitionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FsmTransitionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FsmTransitionCountAggregateInputType | true
    }

  export interface FsmTransitionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FsmTransition'], meta: { name: 'FsmTransition' } }
    /**
     * Find zero or one FsmTransition that matches the filter.
     * @param {FsmTransitionFindUniqueArgs} args - Arguments to find a FsmTransition
     * @example
     * // Get one FsmTransition
     * const fsmTransition = await prisma.fsmTransition.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FsmTransitionFindUniqueArgs>(args: SelectSubset<T, FsmTransitionFindUniqueArgs<ExtArgs>>): Prisma__FsmTransitionClient<$Result.GetResult<Prisma.$FsmTransitionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FsmTransition that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FsmTransitionFindUniqueOrThrowArgs} args - Arguments to find a FsmTransition
     * @example
     * // Get one FsmTransition
     * const fsmTransition = await prisma.fsmTransition.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FsmTransitionFindUniqueOrThrowArgs>(args: SelectSubset<T, FsmTransitionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FsmTransitionClient<$Result.GetResult<Prisma.$FsmTransitionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FsmTransition that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FsmTransitionFindFirstArgs} args - Arguments to find a FsmTransition
     * @example
     * // Get one FsmTransition
     * const fsmTransition = await prisma.fsmTransition.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FsmTransitionFindFirstArgs>(args?: SelectSubset<T, FsmTransitionFindFirstArgs<ExtArgs>>): Prisma__FsmTransitionClient<$Result.GetResult<Prisma.$FsmTransitionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FsmTransition that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FsmTransitionFindFirstOrThrowArgs} args - Arguments to find a FsmTransition
     * @example
     * // Get one FsmTransition
     * const fsmTransition = await prisma.fsmTransition.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FsmTransitionFindFirstOrThrowArgs>(args?: SelectSubset<T, FsmTransitionFindFirstOrThrowArgs<ExtArgs>>): Prisma__FsmTransitionClient<$Result.GetResult<Prisma.$FsmTransitionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FsmTransitions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FsmTransitionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FsmTransitions
     * const fsmTransitions = await prisma.fsmTransition.findMany()
     * 
     * // Get first 10 FsmTransitions
     * const fsmTransitions = await prisma.fsmTransition.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fsmTransitionWithIdOnly = await prisma.fsmTransition.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FsmTransitionFindManyArgs>(args?: SelectSubset<T, FsmTransitionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FsmTransitionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FsmTransition.
     * @param {FsmTransitionCreateArgs} args - Arguments to create a FsmTransition.
     * @example
     * // Create one FsmTransition
     * const FsmTransition = await prisma.fsmTransition.create({
     *   data: {
     *     // ... data to create a FsmTransition
     *   }
     * })
     * 
     */
    create<T extends FsmTransitionCreateArgs>(args: SelectSubset<T, FsmTransitionCreateArgs<ExtArgs>>): Prisma__FsmTransitionClient<$Result.GetResult<Prisma.$FsmTransitionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FsmTransitions.
     * @param {FsmTransitionCreateManyArgs} args - Arguments to create many FsmTransitions.
     * @example
     * // Create many FsmTransitions
     * const fsmTransition = await prisma.fsmTransition.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FsmTransitionCreateManyArgs>(args?: SelectSubset<T, FsmTransitionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FsmTransition.
     * @param {FsmTransitionDeleteArgs} args - Arguments to delete one FsmTransition.
     * @example
     * // Delete one FsmTransition
     * const FsmTransition = await prisma.fsmTransition.delete({
     *   where: {
     *     // ... filter to delete one FsmTransition
     *   }
     * })
     * 
     */
    delete<T extends FsmTransitionDeleteArgs>(args: SelectSubset<T, FsmTransitionDeleteArgs<ExtArgs>>): Prisma__FsmTransitionClient<$Result.GetResult<Prisma.$FsmTransitionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FsmTransition.
     * @param {FsmTransitionUpdateArgs} args - Arguments to update one FsmTransition.
     * @example
     * // Update one FsmTransition
     * const fsmTransition = await prisma.fsmTransition.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FsmTransitionUpdateArgs>(args: SelectSubset<T, FsmTransitionUpdateArgs<ExtArgs>>): Prisma__FsmTransitionClient<$Result.GetResult<Prisma.$FsmTransitionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FsmTransitions.
     * @param {FsmTransitionDeleteManyArgs} args - Arguments to filter FsmTransitions to delete.
     * @example
     * // Delete a few FsmTransitions
     * const { count } = await prisma.fsmTransition.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FsmTransitionDeleteManyArgs>(args?: SelectSubset<T, FsmTransitionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FsmTransitions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FsmTransitionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FsmTransitions
     * const fsmTransition = await prisma.fsmTransition.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FsmTransitionUpdateManyArgs>(args: SelectSubset<T, FsmTransitionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FsmTransition.
     * @param {FsmTransitionUpsertArgs} args - Arguments to update or create a FsmTransition.
     * @example
     * // Update or create a FsmTransition
     * const fsmTransition = await prisma.fsmTransition.upsert({
     *   create: {
     *     // ... data to create a FsmTransition
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FsmTransition we want to update
     *   }
     * })
     */
    upsert<T extends FsmTransitionUpsertArgs>(args: SelectSubset<T, FsmTransitionUpsertArgs<ExtArgs>>): Prisma__FsmTransitionClient<$Result.GetResult<Prisma.$FsmTransitionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FsmTransitions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FsmTransitionCountArgs} args - Arguments to filter FsmTransitions to count.
     * @example
     * // Count the number of FsmTransitions
     * const count = await prisma.fsmTransition.count({
     *   where: {
     *     // ... the filter for the FsmTransitions we want to count
     *   }
     * })
    **/
    count<T extends FsmTransitionCountArgs>(
      args?: Subset<T, FsmTransitionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FsmTransitionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FsmTransition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FsmTransitionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FsmTransitionAggregateArgs>(args: Subset<T, FsmTransitionAggregateArgs>): Prisma.PrismaPromise<GetFsmTransitionAggregateType<T>>

    /**
     * Group by FsmTransition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FsmTransitionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FsmTransitionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FsmTransitionGroupByArgs['orderBy'] }
        : { orderBy?: FsmTransitionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FsmTransitionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFsmTransitionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FsmTransition model
   */
  readonly fields: FsmTransitionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FsmTransition.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FsmTransitionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    from_state<T extends FsmStateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FsmStateDefaultArgs<ExtArgs>>): Prisma__FsmStateClient<$Result.GetResult<Prisma.$FsmStatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    to_state<T extends FsmStateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FsmStateDefaultArgs<ExtArgs>>): Prisma__FsmStateClient<$Result.GetResult<Prisma.$FsmStatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    action<T extends FsmActionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FsmActionDefaultArgs<ExtArgs>>): Prisma__FsmActionClient<$Result.GetResult<Prisma.$FsmActionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FsmTransition model
   */
  interface FsmTransitionFieldRefs {
    readonly id: FieldRef<"FsmTransition", 'Int'>
    readonly from_state_id: FieldRef<"FsmTransition", 'Int'>
    readonly action_id: FieldRef<"FsmTransition", 'Int'>
    readonly to_state_id: FieldRef<"FsmTransition", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * FsmTransition findUnique
   */
  export type FsmTransitionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FsmTransition
     */
    select?: FsmTransitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FsmTransition
     */
    omit?: FsmTransitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FsmTransitionInclude<ExtArgs> | null
    /**
     * Filter, which FsmTransition to fetch.
     */
    where: FsmTransitionWhereUniqueInput
  }

  /**
   * FsmTransition findUniqueOrThrow
   */
  export type FsmTransitionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FsmTransition
     */
    select?: FsmTransitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FsmTransition
     */
    omit?: FsmTransitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FsmTransitionInclude<ExtArgs> | null
    /**
     * Filter, which FsmTransition to fetch.
     */
    where: FsmTransitionWhereUniqueInput
  }

  /**
   * FsmTransition findFirst
   */
  export type FsmTransitionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FsmTransition
     */
    select?: FsmTransitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FsmTransition
     */
    omit?: FsmTransitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FsmTransitionInclude<ExtArgs> | null
    /**
     * Filter, which FsmTransition to fetch.
     */
    where?: FsmTransitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FsmTransitions to fetch.
     */
    orderBy?: FsmTransitionOrderByWithRelationInput | FsmTransitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FsmTransitions.
     */
    cursor?: FsmTransitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FsmTransitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FsmTransitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FsmTransitions.
     */
    distinct?: FsmTransitionScalarFieldEnum | FsmTransitionScalarFieldEnum[]
  }

  /**
   * FsmTransition findFirstOrThrow
   */
  export type FsmTransitionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FsmTransition
     */
    select?: FsmTransitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FsmTransition
     */
    omit?: FsmTransitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FsmTransitionInclude<ExtArgs> | null
    /**
     * Filter, which FsmTransition to fetch.
     */
    where?: FsmTransitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FsmTransitions to fetch.
     */
    orderBy?: FsmTransitionOrderByWithRelationInput | FsmTransitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FsmTransitions.
     */
    cursor?: FsmTransitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FsmTransitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FsmTransitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FsmTransitions.
     */
    distinct?: FsmTransitionScalarFieldEnum | FsmTransitionScalarFieldEnum[]
  }

  /**
   * FsmTransition findMany
   */
  export type FsmTransitionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FsmTransition
     */
    select?: FsmTransitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FsmTransition
     */
    omit?: FsmTransitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FsmTransitionInclude<ExtArgs> | null
    /**
     * Filter, which FsmTransitions to fetch.
     */
    where?: FsmTransitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FsmTransitions to fetch.
     */
    orderBy?: FsmTransitionOrderByWithRelationInput | FsmTransitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FsmTransitions.
     */
    cursor?: FsmTransitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FsmTransitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FsmTransitions.
     */
    skip?: number
    distinct?: FsmTransitionScalarFieldEnum | FsmTransitionScalarFieldEnum[]
  }

  /**
   * FsmTransition create
   */
  export type FsmTransitionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FsmTransition
     */
    select?: FsmTransitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FsmTransition
     */
    omit?: FsmTransitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FsmTransitionInclude<ExtArgs> | null
    /**
     * The data needed to create a FsmTransition.
     */
    data: XOR<FsmTransitionCreateInput, FsmTransitionUncheckedCreateInput>
  }

  /**
   * FsmTransition createMany
   */
  export type FsmTransitionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FsmTransitions.
     */
    data: FsmTransitionCreateManyInput | FsmTransitionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FsmTransition update
   */
  export type FsmTransitionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FsmTransition
     */
    select?: FsmTransitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FsmTransition
     */
    omit?: FsmTransitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FsmTransitionInclude<ExtArgs> | null
    /**
     * The data needed to update a FsmTransition.
     */
    data: XOR<FsmTransitionUpdateInput, FsmTransitionUncheckedUpdateInput>
    /**
     * Choose, which FsmTransition to update.
     */
    where: FsmTransitionWhereUniqueInput
  }

  /**
   * FsmTransition updateMany
   */
  export type FsmTransitionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FsmTransitions.
     */
    data: XOR<FsmTransitionUpdateManyMutationInput, FsmTransitionUncheckedUpdateManyInput>
    /**
     * Filter which FsmTransitions to update
     */
    where?: FsmTransitionWhereInput
    /**
     * Limit how many FsmTransitions to update.
     */
    limit?: number
  }

  /**
   * FsmTransition upsert
   */
  export type FsmTransitionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FsmTransition
     */
    select?: FsmTransitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FsmTransition
     */
    omit?: FsmTransitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FsmTransitionInclude<ExtArgs> | null
    /**
     * The filter to search for the FsmTransition to update in case it exists.
     */
    where: FsmTransitionWhereUniqueInput
    /**
     * In case the FsmTransition found by the `where` argument doesn't exist, create a new FsmTransition with this data.
     */
    create: XOR<FsmTransitionCreateInput, FsmTransitionUncheckedCreateInput>
    /**
     * In case the FsmTransition was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FsmTransitionUpdateInput, FsmTransitionUncheckedUpdateInput>
  }

  /**
   * FsmTransition delete
   */
  export type FsmTransitionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FsmTransition
     */
    select?: FsmTransitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FsmTransition
     */
    omit?: FsmTransitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FsmTransitionInclude<ExtArgs> | null
    /**
     * Filter which FsmTransition to delete.
     */
    where: FsmTransitionWhereUniqueInput
  }

  /**
   * FsmTransition deleteMany
   */
  export type FsmTransitionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FsmTransitions to delete
     */
    where?: FsmTransitionWhereInput
    /**
     * Limit how many FsmTransitions to delete.
     */
    limit?: number
  }

  /**
   * FsmTransition without action
   */
  export type FsmTransitionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FsmTransition
     */
    select?: FsmTransitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FsmTransition
     */
    omit?: FsmTransitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FsmTransitionInclude<ExtArgs> | null
  }


  /**
   * Model FsmActionLog
   */

  export type AggregateFsmActionLog = {
    _count: FsmActionLogCountAggregateOutputType | null
    _avg: FsmActionLogAvgAggregateOutputType | null
    _sum: FsmActionLogSumAggregateOutputType | null
    _min: FsmActionLogMinAggregateOutputType | null
    _max: FsmActionLogMaxAggregateOutputType | null
  }

  export type FsmActionLogAvgAggregateOutputType = {
    id: number | null
    entity_id: number | null
    user_id: number | null
  }

  export type FsmActionLogSumAggregateOutputType = {
    id: number | null
    entity_id: number | null
    user_id: number | null
  }

  export type FsmActionLogMinAggregateOutputType = {
    id: number | null
    entity_type: string | null
    entity_id: number | null
    action_name: string | null
    from_state: string | null
    to_state: string | null
    user_id: number | null
    created_at: Date | null
  }

  export type FsmActionLogMaxAggregateOutputType = {
    id: number | null
    entity_type: string | null
    entity_id: number | null
    action_name: string | null
    from_state: string | null
    to_state: string | null
    user_id: number | null
    created_at: Date | null
  }

  export type FsmActionLogCountAggregateOutputType = {
    id: number
    entity_type: number
    entity_id: number
    action_name: number
    from_state: number
    to_state: number
    user_id: number
    created_at: number
    _all: number
  }


  export type FsmActionLogAvgAggregateInputType = {
    id?: true
    entity_id?: true
    user_id?: true
  }

  export type FsmActionLogSumAggregateInputType = {
    id?: true
    entity_id?: true
    user_id?: true
  }

  export type FsmActionLogMinAggregateInputType = {
    id?: true
    entity_type?: true
    entity_id?: true
    action_name?: true
    from_state?: true
    to_state?: true
    user_id?: true
    created_at?: true
  }

  export type FsmActionLogMaxAggregateInputType = {
    id?: true
    entity_type?: true
    entity_id?: true
    action_name?: true
    from_state?: true
    to_state?: true
    user_id?: true
    created_at?: true
  }

  export type FsmActionLogCountAggregateInputType = {
    id?: true
    entity_type?: true
    entity_id?: true
    action_name?: true
    from_state?: true
    to_state?: true
    user_id?: true
    created_at?: true
    _all?: true
  }

  export type FsmActionLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FsmActionLog to aggregate.
     */
    where?: FsmActionLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FsmActionLogs to fetch.
     */
    orderBy?: FsmActionLogOrderByWithRelationInput | FsmActionLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FsmActionLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FsmActionLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FsmActionLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FsmActionLogs
    **/
    _count?: true | FsmActionLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FsmActionLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FsmActionLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FsmActionLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FsmActionLogMaxAggregateInputType
  }

  export type GetFsmActionLogAggregateType<T extends FsmActionLogAggregateArgs> = {
        [P in keyof T & keyof AggregateFsmActionLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFsmActionLog[P]>
      : GetScalarType<T[P], AggregateFsmActionLog[P]>
  }




  export type FsmActionLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FsmActionLogWhereInput
    orderBy?: FsmActionLogOrderByWithAggregationInput | FsmActionLogOrderByWithAggregationInput[]
    by: FsmActionLogScalarFieldEnum[] | FsmActionLogScalarFieldEnum
    having?: FsmActionLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FsmActionLogCountAggregateInputType | true
    _avg?: FsmActionLogAvgAggregateInputType
    _sum?: FsmActionLogSumAggregateInputType
    _min?: FsmActionLogMinAggregateInputType
    _max?: FsmActionLogMaxAggregateInputType
  }

  export type FsmActionLogGroupByOutputType = {
    id: number
    entity_type: string
    entity_id: number
    action_name: string
    from_state: string
    to_state: string
    user_id: number
    created_at: Date
    _count: FsmActionLogCountAggregateOutputType | null
    _avg: FsmActionLogAvgAggregateOutputType | null
    _sum: FsmActionLogSumAggregateOutputType | null
    _min: FsmActionLogMinAggregateOutputType | null
    _max: FsmActionLogMaxAggregateOutputType | null
  }

  type GetFsmActionLogGroupByPayload<T extends FsmActionLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FsmActionLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FsmActionLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FsmActionLogGroupByOutputType[P]>
            : GetScalarType<T[P], FsmActionLogGroupByOutputType[P]>
        }
      >
    >


  export type FsmActionLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    entity_type?: boolean
    entity_id?: boolean
    action_name?: boolean
    from_state?: boolean
    to_state?: boolean
    user_id?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["fsmActionLog"]>



  export type FsmActionLogSelectScalar = {
    id?: boolean
    entity_type?: boolean
    entity_id?: boolean
    action_name?: boolean
    from_state?: boolean
    to_state?: boolean
    user_id?: boolean
    created_at?: boolean
  }

  export type FsmActionLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "entity_type" | "entity_id" | "action_name" | "from_state" | "to_state" | "user_id" | "created_at", ExtArgs["result"]["fsmActionLog"]>

  export type $FsmActionLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FsmActionLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      entity_type: string
      entity_id: number
      action_name: string
      from_state: string
      to_state: string
      user_id: number
      created_at: Date
    }, ExtArgs["result"]["fsmActionLog"]>
    composites: {}
  }

  type FsmActionLogGetPayload<S extends boolean | null | undefined | FsmActionLogDefaultArgs> = $Result.GetResult<Prisma.$FsmActionLogPayload, S>

  type FsmActionLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FsmActionLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FsmActionLogCountAggregateInputType | true
    }

  export interface FsmActionLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FsmActionLog'], meta: { name: 'FsmActionLog' } }
    /**
     * Find zero or one FsmActionLog that matches the filter.
     * @param {FsmActionLogFindUniqueArgs} args - Arguments to find a FsmActionLog
     * @example
     * // Get one FsmActionLog
     * const fsmActionLog = await prisma.fsmActionLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FsmActionLogFindUniqueArgs>(args: SelectSubset<T, FsmActionLogFindUniqueArgs<ExtArgs>>): Prisma__FsmActionLogClient<$Result.GetResult<Prisma.$FsmActionLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FsmActionLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FsmActionLogFindUniqueOrThrowArgs} args - Arguments to find a FsmActionLog
     * @example
     * // Get one FsmActionLog
     * const fsmActionLog = await prisma.fsmActionLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FsmActionLogFindUniqueOrThrowArgs>(args: SelectSubset<T, FsmActionLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FsmActionLogClient<$Result.GetResult<Prisma.$FsmActionLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FsmActionLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FsmActionLogFindFirstArgs} args - Arguments to find a FsmActionLog
     * @example
     * // Get one FsmActionLog
     * const fsmActionLog = await prisma.fsmActionLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FsmActionLogFindFirstArgs>(args?: SelectSubset<T, FsmActionLogFindFirstArgs<ExtArgs>>): Prisma__FsmActionLogClient<$Result.GetResult<Prisma.$FsmActionLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FsmActionLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FsmActionLogFindFirstOrThrowArgs} args - Arguments to find a FsmActionLog
     * @example
     * // Get one FsmActionLog
     * const fsmActionLog = await prisma.fsmActionLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FsmActionLogFindFirstOrThrowArgs>(args?: SelectSubset<T, FsmActionLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__FsmActionLogClient<$Result.GetResult<Prisma.$FsmActionLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FsmActionLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FsmActionLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FsmActionLogs
     * const fsmActionLogs = await prisma.fsmActionLog.findMany()
     * 
     * // Get first 10 FsmActionLogs
     * const fsmActionLogs = await prisma.fsmActionLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fsmActionLogWithIdOnly = await prisma.fsmActionLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FsmActionLogFindManyArgs>(args?: SelectSubset<T, FsmActionLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FsmActionLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FsmActionLog.
     * @param {FsmActionLogCreateArgs} args - Arguments to create a FsmActionLog.
     * @example
     * // Create one FsmActionLog
     * const FsmActionLog = await prisma.fsmActionLog.create({
     *   data: {
     *     // ... data to create a FsmActionLog
     *   }
     * })
     * 
     */
    create<T extends FsmActionLogCreateArgs>(args: SelectSubset<T, FsmActionLogCreateArgs<ExtArgs>>): Prisma__FsmActionLogClient<$Result.GetResult<Prisma.$FsmActionLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FsmActionLogs.
     * @param {FsmActionLogCreateManyArgs} args - Arguments to create many FsmActionLogs.
     * @example
     * // Create many FsmActionLogs
     * const fsmActionLog = await prisma.fsmActionLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FsmActionLogCreateManyArgs>(args?: SelectSubset<T, FsmActionLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FsmActionLog.
     * @param {FsmActionLogDeleteArgs} args - Arguments to delete one FsmActionLog.
     * @example
     * // Delete one FsmActionLog
     * const FsmActionLog = await prisma.fsmActionLog.delete({
     *   where: {
     *     // ... filter to delete one FsmActionLog
     *   }
     * })
     * 
     */
    delete<T extends FsmActionLogDeleteArgs>(args: SelectSubset<T, FsmActionLogDeleteArgs<ExtArgs>>): Prisma__FsmActionLogClient<$Result.GetResult<Prisma.$FsmActionLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FsmActionLog.
     * @param {FsmActionLogUpdateArgs} args - Arguments to update one FsmActionLog.
     * @example
     * // Update one FsmActionLog
     * const fsmActionLog = await prisma.fsmActionLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FsmActionLogUpdateArgs>(args: SelectSubset<T, FsmActionLogUpdateArgs<ExtArgs>>): Prisma__FsmActionLogClient<$Result.GetResult<Prisma.$FsmActionLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FsmActionLogs.
     * @param {FsmActionLogDeleteManyArgs} args - Arguments to filter FsmActionLogs to delete.
     * @example
     * // Delete a few FsmActionLogs
     * const { count } = await prisma.fsmActionLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FsmActionLogDeleteManyArgs>(args?: SelectSubset<T, FsmActionLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FsmActionLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FsmActionLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FsmActionLogs
     * const fsmActionLog = await prisma.fsmActionLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FsmActionLogUpdateManyArgs>(args: SelectSubset<T, FsmActionLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FsmActionLog.
     * @param {FsmActionLogUpsertArgs} args - Arguments to update or create a FsmActionLog.
     * @example
     * // Update or create a FsmActionLog
     * const fsmActionLog = await prisma.fsmActionLog.upsert({
     *   create: {
     *     // ... data to create a FsmActionLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FsmActionLog we want to update
     *   }
     * })
     */
    upsert<T extends FsmActionLogUpsertArgs>(args: SelectSubset<T, FsmActionLogUpsertArgs<ExtArgs>>): Prisma__FsmActionLogClient<$Result.GetResult<Prisma.$FsmActionLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FsmActionLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FsmActionLogCountArgs} args - Arguments to filter FsmActionLogs to count.
     * @example
     * // Count the number of FsmActionLogs
     * const count = await prisma.fsmActionLog.count({
     *   where: {
     *     // ... the filter for the FsmActionLogs we want to count
     *   }
     * })
    **/
    count<T extends FsmActionLogCountArgs>(
      args?: Subset<T, FsmActionLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FsmActionLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FsmActionLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FsmActionLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FsmActionLogAggregateArgs>(args: Subset<T, FsmActionLogAggregateArgs>): Prisma.PrismaPromise<GetFsmActionLogAggregateType<T>>

    /**
     * Group by FsmActionLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FsmActionLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FsmActionLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FsmActionLogGroupByArgs['orderBy'] }
        : { orderBy?: FsmActionLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FsmActionLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFsmActionLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FsmActionLog model
   */
  readonly fields: FsmActionLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FsmActionLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FsmActionLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FsmActionLog model
   */
  interface FsmActionLogFieldRefs {
    readonly id: FieldRef<"FsmActionLog", 'Int'>
    readonly entity_type: FieldRef<"FsmActionLog", 'String'>
    readonly entity_id: FieldRef<"FsmActionLog", 'Int'>
    readonly action_name: FieldRef<"FsmActionLog", 'String'>
    readonly from_state: FieldRef<"FsmActionLog", 'String'>
    readonly to_state: FieldRef<"FsmActionLog", 'String'>
    readonly user_id: FieldRef<"FsmActionLog", 'Int'>
    readonly created_at: FieldRef<"FsmActionLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FsmActionLog findUnique
   */
  export type FsmActionLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FsmActionLog
     */
    select?: FsmActionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FsmActionLog
     */
    omit?: FsmActionLogOmit<ExtArgs> | null
    /**
     * Filter, which FsmActionLog to fetch.
     */
    where: FsmActionLogWhereUniqueInput
  }

  /**
   * FsmActionLog findUniqueOrThrow
   */
  export type FsmActionLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FsmActionLog
     */
    select?: FsmActionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FsmActionLog
     */
    omit?: FsmActionLogOmit<ExtArgs> | null
    /**
     * Filter, which FsmActionLog to fetch.
     */
    where: FsmActionLogWhereUniqueInput
  }

  /**
   * FsmActionLog findFirst
   */
  export type FsmActionLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FsmActionLog
     */
    select?: FsmActionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FsmActionLog
     */
    omit?: FsmActionLogOmit<ExtArgs> | null
    /**
     * Filter, which FsmActionLog to fetch.
     */
    where?: FsmActionLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FsmActionLogs to fetch.
     */
    orderBy?: FsmActionLogOrderByWithRelationInput | FsmActionLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FsmActionLogs.
     */
    cursor?: FsmActionLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FsmActionLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FsmActionLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FsmActionLogs.
     */
    distinct?: FsmActionLogScalarFieldEnum | FsmActionLogScalarFieldEnum[]
  }

  /**
   * FsmActionLog findFirstOrThrow
   */
  export type FsmActionLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FsmActionLog
     */
    select?: FsmActionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FsmActionLog
     */
    omit?: FsmActionLogOmit<ExtArgs> | null
    /**
     * Filter, which FsmActionLog to fetch.
     */
    where?: FsmActionLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FsmActionLogs to fetch.
     */
    orderBy?: FsmActionLogOrderByWithRelationInput | FsmActionLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FsmActionLogs.
     */
    cursor?: FsmActionLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FsmActionLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FsmActionLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FsmActionLogs.
     */
    distinct?: FsmActionLogScalarFieldEnum | FsmActionLogScalarFieldEnum[]
  }

  /**
   * FsmActionLog findMany
   */
  export type FsmActionLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FsmActionLog
     */
    select?: FsmActionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FsmActionLog
     */
    omit?: FsmActionLogOmit<ExtArgs> | null
    /**
     * Filter, which FsmActionLogs to fetch.
     */
    where?: FsmActionLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FsmActionLogs to fetch.
     */
    orderBy?: FsmActionLogOrderByWithRelationInput | FsmActionLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FsmActionLogs.
     */
    cursor?: FsmActionLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FsmActionLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FsmActionLogs.
     */
    skip?: number
    distinct?: FsmActionLogScalarFieldEnum | FsmActionLogScalarFieldEnum[]
  }

  /**
   * FsmActionLog create
   */
  export type FsmActionLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FsmActionLog
     */
    select?: FsmActionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FsmActionLog
     */
    omit?: FsmActionLogOmit<ExtArgs> | null
    /**
     * The data needed to create a FsmActionLog.
     */
    data: XOR<FsmActionLogCreateInput, FsmActionLogUncheckedCreateInput>
  }

  /**
   * FsmActionLog createMany
   */
  export type FsmActionLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FsmActionLogs.
     */
    data: FsmActionLogCreateManyInput | FsmActionLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FsmActionLog update
   */
  export type FsmActionLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FsmActionLog
     */
    select?: FsmActionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FsmActionLog
     */
    omit?: FsmActionLogOmit<ExtArgs> | null
    /**
     * The data needed to update a FsmActionLog.
     */
    data: XOR<FsmActionLogUpdateInput, FsmActionLogUncheckedUpdateInput>
    /**
     * Choose, which FsmActionLog to update.
     */
    where: FsmActionLogWhereUniqueInput
  }

  /**
   * FsmActionLog updateMany
   */
  export type FsmActionLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FsmActionLogs.
     */
    data: XOR<FsmActionLogUpdateManyMutationInput, FsmActionLogUncheckedUpdateManyInput>
    /**
     * Filter which FsmActionLogs to update
     */
    where?: FsmActionLogWhereInput
    /**
     * Limit how many FsmActionLogs to update.
     */
    limit?: number
  }

  /**
   * FsmActionLog upsert
   */
  export type FsmActionLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FsmActionLog
     */
    select?: FsmActionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FsmActionLog
     */
    omit?: FsmActionLogOmit<ExtArgs> | null
    /**
     * The filter to search for the FsmActionLog to update in case it exists.
     */
    where: FsmActionLogWhereUniqueInput
    /**
     * In case the FsmActionLog found by the `where` argument doesn't exist, create a new FsmActionLog with this data.
     */
    create: XOR<FsmActionLogCreateInput, FsmActionLogUncheckedCreateInput>
    /**
     * In case the FsmActionLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FsmActionLogUpdateInput, FsmActionLogUncheckedUpdateInput>
  }

  /**
   * FsmActionLog delete
   */
  export type FsmActionLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FsmActionLog
     */
    select?: FsmActionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FsmActionLog
     */
    omit?: FsmActionLogOmit<ExtArgs> | null
    /**
     * Filter which FsmActionLog to delete.
     */
    where: FsmActionLogWhereUniqueInput
  }

  /**
   * FsmActionLog deleteMany
   */
  export type FsmActionLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FsmActionLogs to delete
     */
    where?: FsmActionLogWhereInput
    /**
     * Limit how many FsmActionLogs to delete.
     */
    limit?: number
  }

  /**
   * FsmActionLog without action
   */
  export type FsmActionLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FsmActionLog
     */
    select?: FsmActionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FsmActionLog
     */
    omit?: FsmActionLogOmit<ExtArgs> | null
  }


  /**
   * Model FsmErrorLog
   */

  export type AggregateFsmErrorLog = {
    _count: FsmErrorLogCountAggregateOutputType | null
    _avg: FsmErrorLogAvgAggregateOutputType | null
    _sum: FsmErrorLogSumAggregateOutputType | null
    _min: FsmErrorLogMinAggregateOutputType | null
    _max: FsmErrorLogMaxAggregateOutputType | null
  }

  export type FsmErrorLogAvgAggregateOutputType = {
    id: number | null
    entity_id: number | null
    user_id: number | null
  }

  export type FsmErrorLogSumAggregateOutputType = {
    id: number | null
    entity_id: number | null
    user_id: number | null
  }

  export type FsmErrorLogMinAggregateOutputType = {
    id: number | null
    error_time: Date | null
    error_message: string | null
    entity_type: string | null
    entity_id: number | null
    action_name: string | null
    user_id: number | null
  }

  export type FsmErrorLogMaxAggregateOutputType = {
    id: number | null
    error_time: Date | null
    error_message: string | null
    entity_type: string | null
    entity_id: number | null
    action_name: string | null
    user_id: number | null
  }

  export type FsmErrorLogCountAggregateOutputType = {
    id: number
    error_time: number
    error_message: number
    entity_type: number
    entity_id: number
    action_name: number
    user_id: number
    _all: number
  }


  export type FsmErrorLogAvgAggregateInputType = {
    id?: true
    entity_id?: true
    user_id?: true
  }

  export type FsmErrorLogSumAggregateInputType = {
    id?: true
    entity_id?: true
    user_id?: true
  }

  export type FsmErrorLogMinAggregateInputType = {
    id?: true
    error_time?: true
    error_message?: true
    entity_type?: true
    entity_id?: true
    action_name?: true
    user_id?: true
  }

  export type FsmErrorLogMaxAggregateInputType = {
    id?: true
    error_time?: true
    error_message?: true
    entity_type?: true
    entity_id?: true
    action_name?: true
    user_id?: true
  }

  export type FsmErrorLogCountAggregateInputType = {
    id?: true
    error_time?: true
    error_message?: true
    entity_type?: true
    entity_id?: true
    action_name?: true
    user_id?: true
    _all?: true
  }

  export type FsmErrorLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FsmErrorLog to aggregate.
     */
    where?: FsmErrorLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FsmErrorLogs to fetch.
     */
    orderBy?: FsmErrorLogOrderByWithRelationInput | FsmErrorLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FsmErrorLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FsmErrorLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FsmErrorLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FsmErrorLogs
    **/
    _count?: true | FsmErrorLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FsmErrorLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FsmErrorLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FsmErrorLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FsmErrorLogMaxAggregateInputType
  }

  export type GetFsmErrorLogAggregateType<T extends FsmErrorLogAggregateArgs> = {
        [P in keyof T & keyof AggregateFsmErrorLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFsmErrorLog[P]>
      : GetScalarType<T[P], AggregateFsmErrorLog[P]>
  }




  export type FsmErrorLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FsmErrorLogWhereInput
    orderBy?: FsmErrorLogOrderByWithAggregationInput | FsmErrorLogOrderByWithAggregationInput[]
    by: FsmErrorLogScalarFieldEnum[] | FsmErrorLogScalarFieldEnum
    having?: FsmErrorLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FsmErrorLogCountAggregateInputType | true
    _avg?: FsmErrorLogAvgAggregateInputType
    _sum?: FsmErrorLogSumAggregateInputType
    _min?: FsmErrorLogMinAggregateInputType
    _max?: FsmErrorLogMaxAggregateInputType
  }

  export type FsmErrorLogGroupByOutputType = {
    id: number
    error_time: Date
    error_message: string
    entity_type: string
    entity_id: number
    action_name: string
    user_id: number
    _count: FsmErrorLogCountAggregateOutputType | null
    _avg: FsmErrorLogAvgAggregateOutputType | null
    _sum: FsmErrorLogSumAggregateOutputType | null
    _min: FsmErrorLogMinAggregateOutputType | null
    _max: FsmErrorLogMaxAggregateOutputType | null
  }

  type GetFsmErrorLogGroupByPayload<T extends FsmErrorLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FsmErrorLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FsmErrorLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FsmErrorLogGroupByOutputType[P]>
            : GetScalarType<T[P], FsmErrorLogGroupByOutputType[P]>
        }
      >
    >


  export type FsmErrorLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    error_time?: boolean
    error_message?: boolean
    entity_type?: boolean
    entity_id?: boolean
    action_name?: boolean
    user_id?: boolean
  }, ExtArgs["result"]["fsmErrorLog"]>



  export type FsmErrorLogSelectScalar = {
    id?: boolean
    error_time?: boolean
    error_message?: boolean
    entity_type?: boolean
    entity_id?: boolean
    action_name?: boolean
    user_id?: boolean
  }

  export type FsmErrorLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "error_time" | "error_message" | "entity_type" | "entity_id" | "action_name" | "user_id", ExtArgs["result"]["fsmErrorLog"]>

  export type $FsmErrorLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FsmErrorLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      error_time: Date
      error_message: string
      entity_type: string
      entity_id: number
      action_name: string
      user_id: number
    }, ExtArgs["result"]["fsmErrorLog"]>
    composites: {}
  }

  type FsmErrorLogGetPayload<S extends boolean | null | undefined | FsmErrorLogDefaultArgs> = $Result.GetResult<Prisma.$FsmErrorLogPayload, S>

  type FsmErrorLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FsmErrorLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FsmErrorLogCountAggregateInputType | true
    }

  export interface FsmErrorLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FsmErrorLog'], meta: { name: 'FsmErrorLog' } }
    /**
     * Find zero or one FsmErrorLog that matches the filter.
     * @param {FsmErrorLogFindUniqueArgs} args - Arguments to find a FsmErrorLog
     * @example
     * // Get one FsmErrorLog
     * const fsmErrorLog = await prisma.fsmErrorLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FsmErrorLogFindUniqueArgs>(args: SelectSubset<T, FsmErrorLogFindUniqueArgs<ExtArgs>>): Prisma__FsmErrorLogClient<$Result.GetResult<Prisma.$FsmErrorLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FsmErrorLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FsmErrorLogFindUniqueOrThrowArgs} args - Arguments to find a FsmErrorLog
     * @example
     * // Get one FsmErrorLog
     * const fsmErrorLog = await prisma.fsmErrorLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FsmErrorLogFindUniqueOrThrowArgs>(args: SelectSubset<T, FsmErrorLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FsmErrorLogClient<$Result.GetResult<Prisma.$FsmErrorLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FsmErrorLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FsmErrorLogFindFirstArgs} args - Arguments to find a FsmErrorLog
     * @example
     * // Get one FsmErrorLog
     * const fsmErrorLog = await prisma.fsmErrorLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FsmErrorLogFindFirstArgs>(args?: SelectSubset<T, FsmErrorLogFindFirstArgs<ExtArgs>>): Prisma__FsmErrorLogClient<$Result.GetResult<Prisma.$FsmErrorLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FsmErrorLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FsmErrorLogFindFirstOrThrowArgs} args - Arguments to find a FsmErrorLog
     * @example
     * // Get one FsmErrorLog
     * const fsmErrorLog = await prisma.fsmErrorLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FsmErrorLogFindFirstOrThrowArgs>(args?: SelectSubset<T, FsmErrorLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__FsmErrorLogClient<$Result.GetResult<Prisma.$FsmErrorLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FsmErrorLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FsmErrorLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FsmErrorLogs
     * const fsmErrorLogs = await prisma.fsmErrorLog.findMany()
     * 
     * // Get first 10 FsmErrorLogs
     * const fsmErrorLogs = await prisma.fsmErrorLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fsmErrorLogWithIdOnly = await prisma.fsmErrorLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FsmErrorLogFindManyArgs>(args?: SelectSubset<T, FsmErrorLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FsmErrorLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FsmErrorLog.
     * @param {FsmErrorLogCreateArgs} args - Arguments to create a FsmErrorLog.
     * @example
     * // Create one FsmErrorLog
     * const FsmErrorLog = await prisma.fsmErrorLog.create({
     *   data: {
     *     // ... data to create a FsmErrorLog
     *   }
     * })
     * 
     */
    create<T extends FsmErrorLogCreateArgs>(args: SelectSubset<T, FsmErrorLogCreateArgs<ExtArgs>>): Prisma__FsmErrorLogClient<$Result.GetResult<Prisma.$FsmErrorLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FsmErrorLogs.
     * @param {FsmErrorLogCreateManyArgs} args - Arguments to create many FsmErrorLogs.
     * @example
     * // Create many FsmErrorLogs
     * const fsmErrorLog = await prisma.fsmErrorLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FsmErrorLogCreateManyArgs>(args?: SelectSubset<T, FsmErrorLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FsmErrorLog.
     * @param {FsmErrorLogDeleteArgs} args - Arguments to delete one FsmErrorLog.
     * @example
     * // Delete one FsmErrorLog
     * const FsmErrorLog = await prisma.fsmErrorLog.delete({
     *   where: {
     *     // ... filter to delete one FsmErrorLog
     *   }
     * })
     * 
     */
    delete<T extends FsmErrorLogDeleteArgs>(args: SelectSubset<T, FsmErrorLogDeleteArgs<ExtArgs>>): Prisma__FsmErrorLogClient<$Result.GetResult<Prisma.$FsmErrorLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FsmErrorLog.
     * @param {FsmErrorLogUpdateArgs} args - Arguments to update one FsmErrorLog.
     * @example
     * // Update one FsmErrorLog
     * const fsmErrorLog = await prisma.fsmErrorLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FsmErrorLogUpdateArgs>(args: SelectSubset<T, FsmErrorLogUpdateArgs<ExtArgs>>): Prisma__FsmErrorLogClient<$Result.GetResult<Prisma.$FsmErrorLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FsmErrorLogs.
     * @param {FsmErrorLogDeleteManyArgs} args - Arguments to filter FsmErrorLogs to delete.
     * @example
     * // Delete a few FsmErrorLogs
     * const { count } = await prisma.fsmErrorLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FsmErrorLogDeleteManyArgs>(args?: SelectSubset<T, FsmErrorLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FsmErrorLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FsmErrorLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FsmErrorLogs
     * const fsmErrorLog = await prisma.fsmErrorLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FsmErrorLogUpdateManyArgs>(args: SelectSubset<T, FsmErrorLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FsmErrorLog.
     * @param {FsmErrorLogUpsertArgs} args - Arguments to update or create a FsmErrorLog.
     * @example
     * // Update or create a FsmErrorLog
     * const fsmErrorLog = await prisma.fsmErrorLog.upsert({
     *   create: {
     *     // ... data to create a FsmErrorLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FsmErrorLog we want to update
     *   }
     * })
     */
    upsert<T extends FsmErrorLogUpsertArgs>(args: SelectSubset<T, FsmErrorLogUpsertArgs<ExtArgs>>): Prisma__FsmErrorLogClient<$Result.GetResult<Prisma.$FsmErrorLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FsmErrorLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FsmErrorLogCountArgs} args - Arguments to filter FsmErrorLogs to count.
     * @example
     * // Count the number of FsmErrorLogs
     * const count = await prisma.fsmErrorLog.count({
     *   where: {
     *     // ... the filter for the FsmErrorLogs we want to count
     *   }
     * })
    **/
    count<T extends FsmErrorLogCountArgs>(
      args?: Subset<T, FsmErrorLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FsmErrorLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FsmErrorLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FsmErrorLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FsmErrorLogAggregateArgs>(args: Subset<T, FsmErrorLogAggregateArgs>): Prisma.PrismaPromise<GetFsmErrorLogAggregateType<T>>

    /**
     * Group by FsmErrorLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FsmErrorLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FsmErrorLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FsmErrorLogGroupByArgs['orderBy'] }
        : { orderBy?: FsmErrorLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FsmErrorLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFsmErrorLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FsmErrorLog model
   */
  readonly fields: FsmErrorLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FsmErrorLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FsmErrorLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FsmErrorLog model
   */
  interface FsmErrorLogFieldRefs {
    readonly id: FieldRef<"FsmErrorLog", 'Int'>
    readonly error_time: FieldRef<"FsmErrorLog", 'DateTime'>
    readonly error_message: FieldRef<"FsmErrorLog", 'String'>
    readonly entity_type: FieldRef<"FsmErrorLog", 'String'>
    readonly entity_id: FieldRef<"FsmErrorLog", 'Int'>
    readonly action_name: FieldRef<"FsmErrorLog", 'String'>
    readonly user_id: FieldRef<"FsmErrorLog", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * FsmErrorLog findUnique
   */
  export type FsmErrorLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FsmErrorLog
     */
    select?: FsmErrorLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FsmErrorLog
     */
    omit?: FsmErrorLogOmit<ExtArgs> | null
    /**
     * Filter, which FsmErrorLog to fetch.
     */
    where: FsmErrorLogWhereUniqueInput
  }

  /**
   * FsmErrorLog findUniqueOrThrow
   */
  export type FsmErrorLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FsmErrorLog
     */
    select?: FsmErrorLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FsmErrorLog
     */
    omit?: FsmErrorLogOmit<ExtArgs> | null
    /**
     * Filter, which FsmErrorLog to fetch.
     */
    where: FsmErrorLogWhereUniqueInput
  }

  /**
   * FsmErrorLog findFirst
   */
  export type FsmErrorLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FsmErrorLog
     */
    select?: FsmErrorLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FsmErrorLog
     */
    omit?: FsmErrorLogOmit<ExtArgs> | null
    /**
     * Filter, which FsmErrorLog to fetch.
     */
    where?: FsmErrorLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FsmErrorLogs to fetch.
     */
    orderBy?: FsmErrorLogOrderByWithRelationInput | FsmErrorLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FsmErrorLogs.
     */
    cursor?: FsmErrorLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FsmErrorLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FsmErrorLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FsmErrorLogs.
     */
    distinct?: FsmErrorLogScalarFieldEnum | FsmErrorLogScalarFieldEnum[]
  }

  /**
   * FsmErrorLog findFirstOrThrow
   */
  export type FsmErrorLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FsmErrorLog
     */
    select?: FsmErrorLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FsmErrorLog
     */
    omit?: FsmErrorLogOmit<ExtArgs> | null
    /**
     * Filter, which FsmErrorLog to fetch.
     */
    where?: FsmErrorLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FsmErrorLogs to fetch.
     */
    orderBy?: FsmErrorLogOrderByWithRelationInput | FsmErrorLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FsmErrorLogs.
     */
    cursor?: FsmErrorLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FsmErrorLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FsmErrorLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FsmErrorLogs.
     */
    distinct?: FsmErrorLogScalarFieldEnum | FsmErrorLogScalarFieldEnum[]
  }

  /**
   * FsmErrorLog findMany
   */
  export type FsmErrorLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FsmErrorLog
     */
    select?: FsmErrorLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FsmErrorLog
     */
    omit?: FsmErrorLogOmit<ExtArgs> | null
    /**
     * Filter, which FsmErrorLogs to fetch.
     */
    where?: FsmErrorLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FsmErrorLogs to fetch.
     */
    orderBy?: FsmErrorLogOrderByWithRelationInput | FsmErrorLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FsmErrorLogs.
     */
    cursor?: FsmErrorLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FsmErrorLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FsmErrorLogs.
     */
    skip?: number
    distinct?: FsmErrorLogScalarFieldEnum | FsmErrorLogScalarFieldEnum[]
  }

  /**
   * FsmErrorLog create
   */
  export type FsmErrorLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FsmErrorLog
     */
    select?: FsmErrorLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FsmErrorLog
     */
    omit?: FsmErrorLogOmit<ExtArgs> | null
    /**
     * The data needed to create a FsmErrorLog.
     */
    data: XOR<FsmErrorLogCreateInput, FsmErrorLogUncheckedCreateInput>
  }

  /**
   * FsmErrorLog createMany
   */
  export type FsmErrorLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FsmErrorLogs.
     */
    data: FsmErrorLogCreateManyInput | FsmErrorLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FsmErrorLog update
   */
  export type FsmErrorLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FsmErrorLog
     */
    select?: FsmErrorLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FsmErrorLog
     */
    omit?: FsmErrorLogOmit<ExtArgs> | null
    /**
     * The data needed to update a FsmErrorLog.
     */
    data: XOR<FsmErrorLogUpdateInput, FsmErrorLogUncheckedUpdateInput>
    /**
     * Choose, which FsmErrorLog to update.
     */
    where: FsmErrorLogWhereUniqueInput
  }

  /**
   * FsmErrorLog updateMany
   */
  export type FsmErrorLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FsmErrorLogs.
     */
    data: XOR<FsmErrorLogUpdateManyMutationInput, FsmErrorLogUncheckedUpdateManyInput>
    /**
     * Filter which FsmErrorLogs to update
     */
    where?: FsmErrorLogWhereInput
    /**
     * Limit how many FsmErrorLogs to update.
     */
    limit?: number
  }

  /**
   * FsmErrorLog upsert
   */
  export type FsmErrorLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FsmErrorLog
     */
    select?: FsmErrorLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FsmErrorLog
     */
    omit?: FsmErrorLogOmit<ExtArgs> | null
    /**
     * The filter to search for the FsmErrorLog to update in case it exists.
     */
    where: FsmErrorLogWhereUniqueInput
    /**
     * In case the FsmErrorLog found by the `where` argument doesn't exist, create a new FsmErrorLog with this data.
     */
    create: XOR<FsmErrorLogCreateInput, FsmErrorLogUncheckedCreateInput>
    /**
     * In case the FsmErrorLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FsmErrorLogUpdateInput, FsmErrorLogUncheckedUpdateInput>
  }

  /**
   * FsmErrorLog delete
   */
  export type FsmErrorLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FsmErrorLog
     */
    select?: FsmErrorLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FsmErrorLog
     */
    omit?: FsmErrorLogOmit<ExtArgs> | null
    /**
     * Filter which FsmErrorLog to delete.
     */
    where: FsmErrorLogWhereUniqueInput
  }

  /**
   * FsmErrorLog deleteMany
   */
  export type FsmErrorLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FsmErrorLogs to delete
     */
    where?: FsmErrorLogWhereInput
    /**
     * Limit how many FsmErrorLogs to delete.
     */
    limit?: number
  }

  /**
   * FsmErrorLog without action
   */
  export type FsmErrorLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FsmErrorLog
     */
    select?: FsmErrorLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FsmErrorLog
     */
    omit?: FsmErrorLogOmit<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    id: number | null
  }

  export type OrderSumAggregateOutputType = {
    id: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: number | null
    status: string | null
    description: string | null
  }

  export type OrderMaxAggregateOutputType = {
    id: number | null
    status: string | null
    description: string | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    status: number
    description: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    id?: true
  }

  export type OrderSumAggregateInputType = {
    id?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    status?: true
    description?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    status?: true
    description?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    status?: true
    description?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: number
    status: string
    description: string | null
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    description?: boolean
  }, ExtArgs["result"]["order"]>



  export type OrderSelectScalar = {
    id?: boolean
    status?: boolean
    description?: boolean
  }

  export type OrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "status" | "description", ExtArgs["result"]["order"]>

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      status: string
      description: string | null
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Order model
   */
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'Int'>
    readonly status: FieldRef<"Order", 'String'>
    readonly description: FieldRef<"Order", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
  }


  /**
   * Model StageOrder
   */

  export type AggregateStageOrder = {
    _count: StageOrderCountAggregateOutputType | null
    _avg: StageOrderAvgAggregateOutputType | null
    _sum: StageOrderSumAggregateOutputType | null
    _min: StageOrderMinAggregateOutputType | null
    _max: StageOrderMaxAggregateOutputType | null
  }

  export type StageOrderAvgAggregateOutputType = {
    id: number | null
  }

  export type StageOrderSumAggregateOutputType = {
    id: number | null
  }

  export type StageOrderMinAggregateOutputType = {
    id: number | null
    status: string | null
    description: string | null
  }

  export type StageOrderMaxAggregateOutputType = {
    id: number | null
    status: string | null
    description: string | null
  }

  export type StageOrderCountAggregateOutputType = {
    id: number
    status: number
    description: number
    _all: number
  }


  export type StageOrderAvgAggregateInputType = {
    id?: true
  }

  export type StageOrderSumAggregateInputType = {
    id?: true
  }

  export type StageOrderMinAggregateInputType = {
    id?: true
    status?: true
    description?: true
  }

  export type StageOrderMaxAggregateInputType = {
    id?: true
    status?: true
    description?: true
  }

  export type StageOrderCountAggregateInputType = {
    id?: true
    status?: true
    description?: true
    _all?: true
  }

  export type StageOrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StageOrder to aggregate.
     */
    where?: StageOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StageOrders to fetch.
     */
    orderBy?: StageOrderOrderByWithRelationInput | StageOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StageOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StageOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StageOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StageOrders
    **/
    _count?: true | StageOrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StageOrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StageOrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StageOrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StageOrderMaxAggregateInputType
  }

  export type GetStageOrderAggregateType<T extends StageOrderAggregateArgs> = {
        [P in keyof T & keyof AggregateStageOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStageOrder[P]>
      : GetScalarType<T[P], AggregateStageOrder[P]>
  }




  export type StageOrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StageOrderWhereInput
    orderBy?: StageOrderOrderByWithAggregationInput | StageOrderOrderByWithAggregationInput[]
    by: StageOrderScalarFieldEnum[] | StageOrderScalarFieldEnum
    having?: StageOrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StageOrderCountAggregateInputType | true
    _avg?: StageOrderAvgAggregateInputType
    _sum?: StageOrderSumAggregateInputType
    _min?: StageOrderMinAggregateInputType
    _max?: StageOrderMaxAggregateInputType
  }

  export type StageOrderGroupByOutputType = {
    id: number
    status: string
    description: string | null
    _count: StageOrderCountAggregateOutputType | null
    _avg: StageOrderAvgAggregateOutputType | null
    _sum: StageOrderSumAggregateOutputType | null
    _min: StageOrderMinAggregateOutputType | null
    _max: StageOrderMaxAggregateOutputType | null
  }

  type GetStageOrderGroupByPayload<T extends StageOrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StageOrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StageOrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StageOrderGroupByOutputType[P]>
            : GetScalarType<T[P], StageOrderGroupByOutputType[P]>
        }
      >
    >


  export type StageOrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    description?: boolean
  }, ExtArgs["result"]["stageOrder"]>



  export type StageOrderSelectScalar = {
    id?: boolean
    status?: boolean
    description?: boolean
  }

  export type StageOrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "status" | "description", ExtArgs["result"]["stageOrder"]>

  export type $StageOrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StageOrder"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      status: string
      description: string | null
    }, ExtArgs["result"]["stageOrder"]>
    composites: {}
  }

  type StageOrderGetPayload<S extends boolean | null | undefined | StageOrderDefaultArgs> = $Result.GetResult<Prisma.$StageOrderPayload, S>

  type StageOrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StageOrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StageOrderCountAggregateInputType | true
    }

  export interface StageOrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StageOrder'], meta: { name: 'StageOrder' } }
    /**
     * Find zero or one StageOrder that matches the filter.
     * @param {StageOrderFindUniqueArgs} args - Arguments to find a StageOrder
     * @example
     * // Get one StageOrder
     * const stageOrder = await prisma.stageOrder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StageOrderFindUniqueArgs>(args: SelectSubset<T, StageOrderFindUniqueArgs<ExtArgs>>): Prisma__StageOrderClient<$Result.GetResult<Prisma.$StageOrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StageOrder that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StageOrderFindUniqueOrThrowArgs} args - Arguments to find a StageOrder
     * @example
     * // Get one StageOrder
     * const stageOrder = await prisma.stageOrder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StageOrderFindUniqueOrThrowArgs>(args: SelectSubset<T, StageOrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StageOrderClient<$Result.GetResult<Prisma.$StageOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StageOrder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StageOrderFindFirstArgs} args - Arguments to find a StageOrder
     * @example
     * // Get one StageOrder
     * const stageOrder = await prisma.stageOrder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StageOrderFindFirstArgs>(args?: SelectSubset<T, StageOrderFindFirstArgs<ExtArgs>>): Prisma__StageOrderClient<$Result.GetResult<Prisma.$StageOrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StageOrder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StageOrderFindFirstOrThrowArgs} args - Arguments to find a StageOrder
     * @example
     * // Get one StageOrder
     * const stageOrder = await prisma.stageOrder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StageOrderFindFirstOrThrowArgs>(args?: SelectSubset<T, StageOrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__StageOrderClient<$Result.GetResult<Prisma.$StageOrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StageOrders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StageOrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StageOrders
     * const stageOrders = await prisma.stageOrder.findMany()
     * 
     * // Get first 10 StageOrders
     * const stageOrders = await prisma.stageOrder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stageOrderWithIdOnly = await prisma.stageOrder.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StageOrderFindManyArgs>(args?: SelectSubset<T, StageOrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StageOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StageOrder.
     * @param {StageOrderCreateArgs} args - Arguments to create a StageOrder.
     * @example
     * // Create one StageOrder
     * const StageOrder = await prisma.stageOrder.create({
     *   data: {
     *     // ... data to create a StageOrder
     *   }
     * })
     * 
     */
    create<T extends StageOrderCreateArgs>(args: SelectSubset<T, StageOrderCreateArgs<ExtArgs>>): Prisma__StageOrderClient<$Result.GetResult<Prisma.$StageOrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StageOrders.
     * @param {StageOrderCreateManyArgs} args - Arguments to create many StageOrders.
     * @example
     * // Create many StageOrders
     * const stageOrder = await prisma.stageOrder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StageOrderCreateManyArgs>(args?: SelectSubset<T, StageOrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a StageOrder.
     * @param {StageOrderDeleteArgs} args - Arguments to delete one StageOrder.
     * @example
     * // Delete one StageOrder
     * const StageOrder = await prisma.stageOrder.delete({
     *   where: {
     *     // ... filter to delete one StageOrder
     *   }
     * })
     * 
     */
    delete<T extends StageOrderDeleteArgs>(args: SelectSubset<T, StageOrderDeleteArgs<ExtArgs>>): Prisma__StageOrderClient<$Result.GetResult<Prisma.$StageOrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StageOrder.
     * @param {StageOrderUpdateArgs} args - Arguments to update one StageOrder.
     * @example
     * // Update one StageOrder
     * const stageOrder = await prisma.stageOrder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StageOrderUpdateArgs>(args: SelectSubset<T, StageOrderUpdateArgs<ExtArgs>>): Prisma__StageOrderClient<$Result.GetResult<Prisma.$StageOrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StageOrders.
     * @param {StageOrderDeleteManyArgs} args - Arguments to filter StageOrders to delete.
     * @example
     * // Delete a few StageOrders
     * const { count } = await prisma.stageOrder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StageOrderDeleteManyArgs>(args?: SelectSubset<T, StageOrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StageOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StageOrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StageOrders
     * const stageOrder = await prisma.stageOrder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StageOrderUpdateManyArgs>(args: SelectSubset<T, StageOrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StageOrder.
     * @param {StageOrderUpsertArgs} args - Arguments to update or create a StageOrder.
     * @example
     * // Update or create a StageOrder
     * const stageOrder = await prisma.stageOrder.upsert({
     *   create: {
     *     // ... data to create a StageOrder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StageOrder we want to update
     *   }
     * })
     */
    upsert<T extends StageOrderUpsertArgs>(args: SelectSubset<T, StageOrderUpsertArgs<ExtArgs>>): Prisma__StageOrderClient<$Result.GetResult<Prisma.$StageOrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StageOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StageOrderCountArgs} args - Arguments to filter StageOrders to count.
     * @example
     * // Count the number of StageOrders
     * const count = await prisma.stageOrder.count({
     *   where: {
     *     // ... the filter for the StageOrders we want to count
     *   }
     * })
    **/
    count<T extends StageOrderCountArgs>(
      args?: Subset<T, StageOrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StageOrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StageOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StageOrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StageOrderAggregateArgs>(args: Subset<T, StageOrderAggregateArgs>): Prisma.PrismaPromise<GetStageOrderAggregateType<T>>

    /**
     * Group by StageOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StageOrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StageOrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StageOrderGroupByArgs['orderBy'] }
        : { orderBy?: StageOrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StageOrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStageOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StageOrder model
   */
  readonly fields: StageOrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StageOrder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StageOrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StageOrder model
   */
  interface StageOrderFieldRefs {
    readonly id: FieldRef<"StageOrder", 'Int'>
    readonly status: FieldRef<"StageOrder", 'String'>
    readonly description: FieldRef<"StageOrder", 'String'>
  }
    

  // Custom InputTypes
  /**
   * StageOrder findUnique
   */
  export type StageOrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StageOrder
     */
    select?: StageOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StageOrder
     */
    omit?: StageOrderOmit<ExtArgs> | null
    /**
     * Filter, which StageOrder to fetch.
     */
    where: StageOrderWhereUniqueInput
  }

  /**
   * StageOrder findUniqueOrThrow
   */
  export type StageOrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StageOrder
     */
    select?: StageOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StageOrder
     */
    omit?: StageOrderOmit<ExtArgs> | null
    /**
     * Filter, which StageOrder to fetch.
     */
    where: StageOrderWhereUniqueInput
  }

  /**
   * StageOrder findFirst
   */
  export type StageOrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StageOrder
     */
    select?: StageOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StageOrder
     */
    omit?: StageOrderOmit<ExtArgs> | null
    /**
     * Filter, which StageOrder to fetch.
     */
    where?: StageOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StageOrders to fetch.
     */
    orderBy?: StageOrderOrderByWithRelationInput | StageOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StageOrders.
     */
    cursor?: StageOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StageOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StageOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StageOrders.
     */
    distinct?: StageOrderScalarFieldEnum | StageOrderScalarFieldEnum[]
  }

  /**
   * StageOrder findFirstOrThrow
   */
  export type StageOrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StageOrder
     */
    select?: StageOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StageOrder
     */
    omit?: StageOrderOmit<ExtArgs> | null
    /**
     * Filter, which StageOrder to fetch.
     */
    where?: StageOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StageOrders to fetch.
     */
    orderBy?: StageOrderOrderByWithRelationInput | StageOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StageOrders.
     */
    cursor?: StageOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StageOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StageOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StageOrders.
     */
    distinct?: StageOrderScalarFieldEnum | StageOrderScalarFieldEnum[]
  }

  /**
   * StageOrder findMany
   */
  export type StageOrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StageOrder
     */
    select?: StageOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StageOrder
     */
    omit?: StageOrderOmit<ExtArgs> | null
    /**
     * Filter, which StageOrders to fetch.
     */
    where?: StageOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StageOrders to fetch.
     */
    orderBy?: StageOrderOrderByWithRelationInput | StageOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StageOrders.
     */
    cursor?: StageOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StageOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StageOrders.
     */
    skip?: number
    distinct?: StageOrderScalarFieldEnum | StageOrderScalarFieldEnum[]
  }

  /**
   * StageOrder create
   */
  export type StageOrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StageOrder
     */
    select?: StageOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StageOrder
     */
    omit?: StageOrderOmit<ExtArgs> | null
    /**
     * The data needed to create a StageOrder.
     */
    data: XOR<StageOrderCreateInput, StageOrderUncheckedCreateInput>
  }

  /**
   * StageOrder createMany
   */
  export type StageOrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StageOrders.
     */
    data: StageOrderCreateManyInput | StageOrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StageOrder update
   */
  export type StageOrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StageOrder
     */
    select?: StageOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StageOrder
     */
    omit?: StageOrderOmit<ExtArgs> | null
    /**
     * The data needed to update a StageOrder.
     */
    data: XOR<StageOrderUpdateInput, StageOrderUncheckedUpdateInput>
    /**
     * Choose, which StageOrder to update.
     */
    where: StageOrderWhereUniqueInput
  }

  /**
   * StageOrder updateMany
   */
  export type StageOrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StageOrders.
     */
    data: XOR<StageOrderUpdateManyMutationInput, StageOrderUncheckedUpdateManyInput>
    /**
     * Filter which StageOrders to update
     */
    where?: StageOrderWhereInput
    /**
     * Limit how many StageOrders to update.
     */
    limit?: number
  }

  /**
   * StageOrder upsert
   */
  export type StageOrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StageOrder
     */
    select?: StageOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StageOrder
     */
    omit?: StageOrderOmit<ExtArgs> | null
    /**
     * The filter to search for the StageOrder to update in case it exists.
     */
    where: StageOrderWhereUniqueInput
    /**
     * In case the StageOrder found by the `where` argument doesn't exist, create a new StageOrder with this data.
     */
    create: XOR<StageOrderCreateInput, StageOrderUncheckedCreateInput>
    /**
     * In case the StageOrder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StageOrderUpdateInput, StageOrderUncheckedUpdateInput>
  }

  /**
   * StageOrder delete
   */
  export type StageOrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StageOrder
     */
    select?: StageOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StageOrder
     */
    omit?: StageOrderOmit<ExtArgs> | null
    /**
     * Filter which StageOrder to delete.
     */
    where: StageOrderWhereUniqueInput
  }

  /**
   * StageOrder deleteMany
   */
  export type StageOrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StageOrders to delete
     */
    where?: StageOrderWhereInput
    /**
     * Limit how many StageOrders to delete.
     */
    limit?: number
  }

  /**
   * StageOrder without action
   */
  export type StageOrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StageOrder
     */
    select?: StageOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StageOrder
     */
    omit?: StageOrderOmit<ExtArgs> | null
  }


  /**
   * Model Trip
   */

  export type AggregateTrip = {
    _count: TripCountAggregateOutputType | null
    _avg: TripAvgAggregateOutputType | null
    _sum: TripSumAggregateOutputType | null
    _min: TripMinAggregateOutputType | null
    _max: TripMaxAggregateOutputType | null
  }

  export type TripAvgAggregateOutputType = {
    id: number | null
  }

  export type TripSumAggregateOutputType = {
    id: number | null
  }

  export type TripMinAggregateOutputType = {
    id: number | null
    status: string | null
    description: string | null
  }

  export type TripMaxAggregateOutputType = {
    id: number | null
    status: string | null
    description: string | null
  }

  export type TripCountAggregateOutputType = {
    id: number
    status: number
    description: number
    _all: number
  }


  export type TripAvgAggregateInputType = {
    id?: true
  }

  export type TripSumAggregateInputType = {
    id?: true
  }

  export type TripMinAggregateInputType = {
    id?: true
    status?: true
    description?: true
  }

  export type TripMaxAggregateInputType = {
    id?: true
    status?: true
    description?: true
  }

  export type TripCountAggregateInputType = {
    id?: true
    status?: true
    description?: true
    _all?: true
  }

  export type TripAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trip to aggregate.
     */
    where?: TripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trips to fetch.
     */
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Trips
    **/
    _count?: true | TripCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TripAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TripSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TripMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TripMaxAggregateInputType
  }

  export type GetTripAggregateType<T extends TripAggregateArgs> = {
        [P in keyof T & keyof AggregateTrip]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrip[P]>
      : GetScalarType<T[P], AggregateTrip[P]>
  }




  export type TripGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripWhereInput
    orderBy?: TripOrderByWithAggregationInput | TripOrderByWithAggregationInput[]
    by: TripScalarFieldEnum[] | TripScalarFieldEnum
    having?: TripScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TripCountAggregateInputType | true
    _avg?: TripAvgAggregateInputType
    _sum?: TripSumAggregateInputType
    _min?: TripMinAggregateInputType
    _max?: TripMaxAggregateInputType
  }

  export type TripGroupByOutputType = {
    id: number
    status: string
    description: string | null
    _count: TripCountAggregateOutputType | null
    _avg: TripAvgAggregateOutputType | null
    _sum: TripSumAggregateOutputType | null
    _min: TripMinAggregateOutputType | null
    _max: TripMaxAggregateOutputType | null
  }

  type GetTripGroupByPayload<T extends TripGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TripGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TripGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TripGroupByOutputType[P]>
            : GetScalarType<T[P], TripGroupByOutputType[P]>
        }
      >
    >


  export type TripSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    description?: boolean
  }, ExtArgs["result"]["trip"]>



  export type TripSelectScalar = {
    id?: boolean
    status?: boolean
    description?: boolean
  }

  export type TripOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "status" | "description", ExtArgs["result"]["trip"]>

  export type $TripPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Trip"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      status: string
      description: string | null
    }, ExtArgs["result"]["trip"]>
    composites: {}
  }

  type TripGetPayload<S extends boolean | null | undefined | TripDefaultArgs> = $Result.GetResult<Prisma.$TripPayload, S>

  type TripCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TripFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TripCountAggregateInputType | true
    }

  export interface TripDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Trip'], meta: { name: 'Trip' } }
    /**
     * Find zero or one Trip that matches the filter.
     * @param {TripFindUniqueArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TripFindUniqueArgs>(args: SelectSubset<T, TripFindUniqueArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Trip that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TripFindUniqueOrThrowArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TripFindUniqueOrThrowArgs>(args: SelectSubset<T, TripFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trip that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripFindFirstArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TripFindFirstArgs>(args?: SelectSubset<T, TripFindFirstArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trip that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripFindFirstOrThrowArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TripFindFirstOrThrowArgs>(args?: SelectSubset<T, TripFindFirstOrThrowArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Trips that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Trips
     * const trips = await prisma.trip.findMany()
     * 
     * // Get first 10 Trips
     * const trips = await prisma.trip.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tripWithIdOnly = await prisma.trip.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TripFindManyArgs>(args?: SelectSubset<T, TripFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Trip.
     * @param {TripCreateArgs} args - Arguments to create a Trip.
     * @example
     * // Create one Trip
     * const Trip = await prisma.trip.create({
     *   data: {
     *     // ... data to create a Trip
     *   }
     * })
     * 
     */
    create<T extends TripCreateArgs>(args: SelectSubset<T, TripCreateArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Trips.
     * @param {TripCreateManyArgs} args - Arguments to create many Trips.
     * @example
     * // Create many Trips
     * const trip = await prisma.trip.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TripCreateManyArgs>(args?: SelectSubset<T, TripCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Trip.
     * @param {TripDeleteArgs} args - Arguments to delete one Trip.
     * @example
     * // Delete one Trip
     * const Trip = await prisma.trip.delete({
     *   where: {
     *     // ... filter to delete one Trip
     *   }
     * })
     * 
     */
    delete<T extends TripDeleteArgs>(args: SelectSubset<T, TripDeleteArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Trip.
     * @param {TripUpdateArgs} args - Arguments to update one Trip.
     * @example
     * // Update one Trip
     * const trip = await prisma.trip.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TripUpdateArgs>(args: SelectSubset<T, TripUpdateArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Trips.
     * @param {TripDeleteManyArgs} args - Arguments to filter Trips to delete.
     * @example
     * // Delete a few Trips
     * const { count } = await prisma.trip.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TripDeleteManyArgs>(args?: SelectSubset<T, TripDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Trips
     * const trip = await prisma.trip.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TripUpdateManyArgs>(args: SelectSubset<T, TripUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Trip.
     * @param {TripUpsertArgs} args - Arguments to update or create a Trip.
     * @example
     * // Update or create a Trip
     * const trip = await prisma.trip.upsert({
     *   create: {
     *     // ... data to create a Trip
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trip we want to update
     *   }
     * })
     */
    upsert<T extends TripUpsertArgs>(args: SelectSubset<T, TripUpsertArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Trips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripCountArgs} args - Arguments to filter Trips to count.
     * @example
     * // Count the number of Trips
     * const count = await prisma.trip.count({
     *   where: {
     *     // ... the filter for the Trips we want to count
     *   }
     * })
    **/
    count<T extends TripCountArgs>(
      args?: Subset<T, TripCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TripCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Trip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TripAggregateArgs>(args: Subset<T, TripAggregateArgs>): Prisma.PrismaPromise<GetTripAggregateType<T>>

    /**
     * Group by Trip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TripGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TripGroupByArgs['orderBy'] }
        : { orderBy?: TripGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TripGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTripGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Trip model
   */
  readonly fields: TripFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Trip.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TripClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Trip model
   */
  interface TripFieldRefs {
    readonly id: FieldRef<"Trip", 'Int'>
    readonly status: FieldRef<"Trip", 'String'>
    readonly description: FieldRef<"Trip", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Trip findUnique
   */
  export type TripFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Filter, which Trip to fetch.
     */
    where: TripWhereUniqueInput
  }

  /**
   * Trip findUniqueOrThrow
   */
  export type TripFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Filter, which Trip to fetch.
     */
    where: TripWhereUniqueInput
  }

  /**
   * Trip findFirst
   */
  export type TripFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Filter, which Trip to fetch.
     */
    where?: TripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trips to fetch.
     */
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trips.
     */
    cursor?: TripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trips.
     */
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * Trip findFirstOrThrow
   */
  export type TripFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Filter, which Trip to fetch.
     */
    where?: TripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trips to fetch.
     */
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trips.
     */
    cursor?: TripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trips.
     */
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * Trip findMany
   */
  export type TripFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Filter, which Trips to fetch.
     */
    where?: TripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trips to fetch.
     */
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Trips.
     */
    cursor?: TripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trips.
     */
    skip?: number
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * Trip create
   */
  export type TripCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * The data needed to create a Trip.
     */
    data: XOR<TripCreateInput, TripUncheckedCreateInput>
  }

  /**
   * Trip createMany
   */
  export type TripCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Trips.
     */
    data: TripCreateManyInput | TripCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Trip update
   */
  export type TripUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * The data needed to update a Trip.
     */
    data: XOR<TripUpdateInput, TripUncheckedUpdateInput>
    /**
     * Choose, which Trip to update.
     */
    where: TripWhereUniqueInput
  }

  /**
   * Trip updateMany
   */
  export type TripUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Trips.
     */
    data: XOR<TripUpdateManyMutationInput, TripUncheckedUpdateManyInput>
    /**
     * Filter which Trips to update
     */
    where?: TripWhereInput
    /**
     * Limit how many Trips to update.
     */
    limit?: number
  }

  /**
   * Trip upsert
   */
  export type TripUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * The filter to search for the Trip to update in case it exists.
     */
    where: TripWhereUniqueInput
    /**
     * In case the Trip found by the `where` argument doesn't exist, create a new Trip with this data.
     */
    create: XOR<TripCreateInput, TripUncheckedCreateInput>
    /**
     * In case the Trip was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TripUpdateInput, TripUncheckedUpdateInput>
  }

  /**
   * Trip delete
   */
  export type TripDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Filter which Trip to delete.
     */
    where: TripWhereUniqueInput
  }

  /**
   * Trip deleteMany
   */
  export type TripDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trips to delete
     */
    where?: TripWhereInput
    /**
     * Limit how many Trips to delete.
     */
    limit?: number
  }

  /**
   * Trip without action
   */
  export type TripDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const FsmStateScalarFieldEnum: {
    id: 'id',
    name: 'name',
    label: 'label'
  };

  export type FsmStateScalarFieldEnum = (typeof FsmStateScalarFieldEnum)[keyof typeof FsmStateScalarFieldEnum]


  export const FsmActionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    label: 'label'
  };

  export type FsmActionScalarFieldEnum = (typeof FsmActionScalarFieldEnum)[keyof typeof FsmActionScalarFieldEnum]


  export const FsmTransitionScalarFieldEnum: {
    id: 'id',
    from_state_id: 'from_state_id',
    action_id: 'action_id',
    to_state_id: 'to_state_id'
  };

  export type FsmTransitionScalarFieldEnum = (typeof FsmTransitionScalarFieldEnum)[keyof typeof FsmTransitionScalarFieldEnum]


  export const FsmActionLogScalarFieldEnum: {
    id: 'id',
    entity_type: 'entity_type',
    entity_id: 'entity_id',
    action_name: 'action_name',
    from_state: 'from_state',
    to_state: 'to_state',
    user_id: 'user_id',
    created_at: 'created_at'
  };

  export type FsmActionLogScalarFieldEnum = (typeof FsmActionLogScalarFieldEnum)[keyof typeof FsmActionLogScalarFieldEnum]


  export const FsmErrorLogScalarFieldEnum: {
    id: 'id',
    error_time: 'error_time',
    error_message: 'error_message',
    entity_type: 'entity_type',
    entity_id: 'entity_id',
    action_name: 'action_name',
    user_id: 'user_id'
  };

  export type FsmErrorLogScalarFieldEnum = (typeof FsmErrorLogScalarFieldEnum)[keyof typeof FsmErrorLogScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    status: 'status',
    description: 'description'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const StageOrderScalarFieldEnum: {
    id: 'id',
    status: 'status',
    description: 'description'
  };

  export type StageOrderScalarFieldEnum = (typeof StageOrderScalarFieldEnum)[keyof typeof StageOrderScalarFieldEnum]


  export const TripScalarFieldEnum: {
    id: 'id',
    status: 'status',
    description: 'description'
  };

  export type TripScalarFieldEnum = (typeof TripScalarFieldEnum)[keyof typeof TripScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const FsmStateOrderByRelevanceFieldEnum: {
    name: 'name',
    label: 'label'
  };

  export type FsmStateOrderByRelevanceFieldEnum = (typeof FsmStateOrderByRelevanceFieldEnum)[keyof typeof FsmStateOrderByRelevanceFieldEnum]


  export const FsmActionOrderByRelevanceFieldEnum: {
    name: 'name',
    label: 'label'
  };

  export type FsmActionOrderByRelevanceFieldEnum = (typeof FsmActionOrderByRelevanceFieldEnum)[keyof typeof FsmActionOrderByRelevanceFieldEnum]


  export const FsmActionLogOrderByRelevanceFieldEnum: {
    entity_type: 'entity_type',
    action_name: 'action_name',
    from_state: 'from_state',
    to_state: 'to_state'
  };

  export type FsmActionLogOrderByRelevanceFieldEnum = (typeof FsmActionLogOrderByRelevanceFieldEnum)[keyof typeof FsmActionLogOrderByRelevanceFieldEnum]


  export const FsmErrorLogOrderByRelevanceFieldEnum: {
    error_message: 'error_message',
    entity_type: 'entity_type',
    action_name: 'action_name'
  };

  export type FsmErrorLogOrderByRelevanceFieldEnum = (typeof FsmErrorLogOrderByRelevanceFieldEnum)[keyof typeof FsmErrorLogOrderByRelevanceFieldEnum]


  export const OrderOrderByRelevanceFieldEnum: {
    status: 'status',
    description: 'description'
  };

  export type OrderOrderByRelevanceFieldEnum = (typeof OrderOrderByRelevanceFieldEnum)[keyof typeof OrderOrderByRelevanceFieldEnum]


  export const StageOrderOrderByRelevanceFieldEnum: {
    status: 'status',
    description: 'description'
  };

  export type StageOrderOrderByRelevanceFieldEnum = (typeof StageOrderOrderByRelevanceFieldEnum)[keyof typeof StageOrderOrderByRelevanceFieldEnum]


  export const TripOrderByRelevanceFieldEnum: {
    status: 'status',
    description: 'description'
  };

  export type TripOrderByRelevanceFieldEnum = (typeof TripOrderByRelevanceFieldEnum)[keyof typeof TripOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type FsmStateWhereInput = {
    AND?: FsmStateWhereInput | FsmStateWhereInput[]
    OR?: FsmStateWhereInput[]
    NOT?: FsmStateWhereInput | FsmStateWhereInput[]
    id?: IntFilter<"FsmState"> | number
    name?: StringFilter<"FsmState"> | string
    label?: StringNullableFilter<"FsmState"> | string | null
    transitions_from?: FsmTransitionListRelationFilter
    transitions_to?: FsmTransitionListRelationFilter
  }

  export type FsmStateOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    label?: SortOrderInput | SortOrder
    transitions_from?: FsmTransitionOrderByRelationAggregateInput
    transitions_to?: FsmTransitionOrderByRelationAggregateInput
    _relevance?: FsmStateOrderByRelevanceInput
  }

  export type FsmStateWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: FsmStateWhereInput | FsmStateWhereInput[]
    OR?: FsmStateWhereInput[]
    NOT?: FsmStateWhereInput | FsmStateWhereInput[]
    label?: StringNullableFilter<"FsmState"> | string | null
    transitions_from?: FsmTransitionListRelationFilter
    transitions_to?: FsmTransitionListRelationFilter
  }, "id" | "name">

  export type FsmStateOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    label?: SortOrderInput | SortOrder
    _count?: FsmStateCountOrderByAggregateInput
    _avg?: FsmStateAvgOrderByAggregateInput
    _max?: FsmStateMaxOrderByAggregateInput
    _min?: FsmStateMinOrderByAggregateInput
    _sum?: FsmStateSumOrderByAggregateInput
  }

  export type FsmStateScalarWhereWithAggregatesInput = {
    AND?: FsmStateScalarWhereWithAggregatesInput | FsmStateScalarWhereWithAggregatesInput[]
    OR?: FsmStateScalarWhereWithAggregatesInput[]
    NOT?: FsmStateScalarWhereWithAggregatesInput | FsmStateScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FsmState"> | number
    name?: StringWithAggregatesFilter<"FsmState"> | string
    label?: StringNullableWithAggregatesFilter<"FsmState"> | string | null
  }

  export type FsmActionWhereInput = {
    AND?: FsmActionWhereInput | FsmActionWhereInput[]
    OR?: FsmActionWhereInput[]
    NOT?: FsmActionWhereInput | FsmActionWhereInput[]
    id?: IntFilter<"FsmAction"> | number
    name?: StringFilter<"FsmAction"> | string
    label?: StringNullableFilter<"FsmAction"> | string | null
    transitions?: FsmTransitionListRelationFilter
  }

  export type FsmActionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    label?: SortOrderInput | SortOrder
    transitions?: FsmTransitionOrderByRelationAggregateInput
    _relevance?: FsmActionOrderByRelevanceInput
  }

  export type FsmActionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: FsmActionWhereInput | FsmActionWhereInput[]
    OR?: FsmActionWhereInput[]
    NOT?: FsmActionWhereInput | FsmActionWhereInput[]
    label?: StringNullableFilter<"FsmAction"> | string | null
    transitions?: FsmTransitionListRelationFilter
  }, "id" | "name">

  export type FsmActionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    label?: SortOrderInput | SortOrder
    _count?: FsmActionCountOrderByAggregateInput
    _avg?: FsmActionAvgOrderByAggregateInput
    _max?: FsmActionMaxOrderByAggregateInput
    _min?: FsmActionMinOrderByAggregateInput
    _sum?: FsmActionSumOrderByAggregateInput
  }

  export type FsmActionScalarWhereWithAggregatesInput = {
    AND?: FsmActionScalarWhereWithAggregatesInput | FsmActionScalarWhereWithAggregatesInput[]
    OR?: FsmActionScalarWhereWithAggregatesInput[]
    NOT?: FsmActionScalarWhereWithAggregatesInput | FsmActionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FsmAction"> | number
    name?: StringWithAggregatesFilter<"FsmAction"> | string
    label?: StringNullableWithAggregatesFilter<"FsmAction"> | string | null
  }

  export type FsmTransitionWhereInput = {
    AND?: FsmTransitionWhereInput | FsmTransitionWhereInput[]
    OR?: FsmTransitionWhereInput[]
    NOT?: FsmTransitionWhereInput | FsmTransitionWhereInput[]
    id?: IntFilter<"FsmTransition"> | number
    from_state_id?: IntFilter<"FsmTransition"> | number
    action_id?: IntFilter<"FsmTransition"> | number
    to_state_id?: IntFilter<"FsmTransition"> | number
    from_state?: XOR<FsmStateScalarRelationFilter, FsmStateWhereInput>
    to_state?: XOR<FsmStateScalarRelationFilter, FsmStateWhereInput>
    action?: XOR<FsmActionScalarRelationFilter, FsmActionWhereInput>
  }

  export type FsmTransitionOrderByWithRelationInput = {
    id?: SortOrder
    from_state_id?: SortOrder
    action_id?: SortOrder
    to_state_id?: SortOrder
    from_state?: FsmStateOrderByWithRelationInput
    to_state?: FsmStateOrderByWithRelationInput
    action?: FsmActionOrderByWithRelationInput
  }

  export type FsmTransitionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FsmTransitionWhereInput | FsmTransitionWhereInput[]
    OR?: FsmTransitionWhereInput[]
    NOT?: FsmTransitionWhereInput | FsmTransitionWhereInput[]
    from_state_id?: IntFilter<"FsmTransition"> | number
    action_id?: IntFilter<"FsmTransition"> | number
    to_state_id?: IntFilter<"FsmTransition"> | number
    from_state?: XOR<FsmStateScalarRelationFilter, FsmStateWhereInput>
    to_state?: XOR<FsmStateScalarRelationFilter, FsmStateWhereInput>
    action?: XOR<FsmActionScalarRelationFilter, FsmActionWhereInput>
  }, "id">

  export type FsmTransitionOrderByWithAggregationInput = {
    id?: SortOrder
    from_state_id?: SortOrder
    action_id?: SortOrder
    to_state_id?: SortOrder
    _count?: FsmTransitionCountOrderByAggregateInput
    _avg?: FsmTransitionAvgOrderByAggregateInput
    _max?: FsmTransitionMaxOrderByAggregateInput
    _min?: FsmTransitionMinOrderByAggregateInput
    _sum?: FsmTransitionSumOrderByAggregateInput
  }

  export type FsmTransitionScalarWhereWithAggregatesInput = {
    AND?: FsmTransitionScalarWhereWithAggregatesInput | FsmTransitionScalarWhereWithAggregatesInput[]
    OR?: FsmTransitionScalarWhereWithAggregatesInput[]
    NOT?: FsmTransitionScalarWhereWithAggregatesInput | FsmTransitionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FsmTransition"> | number
    from_state_id?: IntWithAggregatesFilter<"FsmTransition"> | number
    action_id?: IntWithAggregatesFilter<"FsmTransition"> | number
    to_state_id?: IntWithAggregatesFilter<"FsmTransition"> | number
  }

  export type FsmActionLogWhereInput = {
    AND?: FsmActionLogWhereInput | FsmActionLogWhereInput[]
    OR?: FsmActionLogWhereInput[]
    NOT?: FsmActionLogWhereInput | FsmActionLogWhereInput[]
    id?: IntFilter<"FsmActionLog"> | number
    entity_type?: StringFilter<"FsmActionLog"> | string
    entity_id?: IntFilter<"FsmActionLog"> | number
    action_name?: StringFilter<"FsmActionLog"> | string
    from_state?: StringFilter<"FsmActionLog"> | string
    to_state?: StringFilter<"FsmActionLog"> | string
    user_id?: IntFilter<"FsmActionLog"> | number
    created_at?: DateTimeFilter<"FsmActionLog"> | Date | string
  }

  export type FsmActionLogOrderByWithRelationInput = {
    id?: SortOrder
    entity_type?: SortOrder
    entity_id?: SortOrder
    action_name?: SortOrder
    from_state?: SortOrder
    to_state?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    _relevance?: FsmActionLogOrderByRelevanceInput
  }

  export type FsmActionLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FsmActionLogWhereInput | FsmActionLogWhereInput[]
    OR?: FsmActionLogWhereInput[]
    NOT?: FsmActionLogWhereInput | FsmActionLogWhereInput[]
    entity_type?: StringFilter<"FsmActionLog"> | string
    entity_id?: IntFilter<"FsmActionLog"> | number
    action_name?: StringFilter<"FsmActionLog"> | string
    from_state?: StringFilter<"FsmActionLog"> | string
    to_state?: StringFilter<"FsmActionLog"> | string
    user_id?: IntFilter<"FsmActionLog"> | number
    created_at?: DateTimeFilter<"FsmActionLog"> | Date | string
  }, "id">

  export type FsmActionLogOrderByWithAggregationInput = {
    id?: SortOrder
    entity_type?: SortOrder
    entity_id?: SortOrder
    action_name?: SortOrder
    from_state?: SortOrder
    to_state?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    _count?: FsmActionLogCountOrderByAggregateInput
    _avg?: FsmActionLogAvgOrderByAggregateInput
    _max?: FsmActionLogMaxOrderByAggregateInput
    _min?: FsmActionLogMinOrderByAggregateInput
    _sum?: FsmActionLogSumOrderByAggregateInput
  }

  export type FsmActionLogScalarWhereWithAggregatesInput = {
    AND?: FsmActionLogScalarWhereWithAggregatesInput | FsmActionLogScalarWhereWithAggregatesInput[]
    OR?: FsmActionLogScalarWhereWithAggregatesInput[]
    NOT?: FsmActionLogScalarWhereWithAggregatesInput | FsmActionLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FsmActionLog"> | number
    entity_type?: StringWithAggregatesFilter<"FsmActionLog"> | string
    entity_id?: IntWithAggregatesFilter<"FsmActionLog"> | number
    action_name?: StringWithAggregatesFilter<"FsmActionLog"> | string
    from_state?: StringWithAggregatesFilter<"FsmActionLog"> | string
    to_state?: StringWithAggregatesFilter<"FsmActionLog"> | string
    user_id?: IntWithAggregatesFilter<"FsmActionLog"> | number
    created_at?: DateTimeWithAggregatesFilter<"FsmActionLog"> | Date | string
  }

  export type FsmErrorLogWhereInput = {
    AND?: FsmErrorLogWhereInput | FsmErrorLogWhereInput[]
    OR?: FsmErrorLogWhereInput[]
    NOT?: FsmErrorLogWhereInput | FsmErrorLogWhereInput[]
    id?: IntFilter<"FsmErrorLog"> | number
    error_time?: DateTimeFilter<"FsmErrorLog"> | Date | string
    error_message?: StringFilter<"FsmErrorLog"> | string
    entity_type?: StringFilter<"FsmErrorLog"> | string
    entity_id?: IntFilter<"FsmErrorLog"> | number
    action_name?: StringFilter<"FsmErrorLog"> | string
    user_id?: IntFilter<"FsmErrorLog"> | number
  }

  export type FsmErrorLogOrderByWithRelationInput = {
    id?: SortOrder
    error_time?: SortOrder
    error_message?: SortOrder
    entity_type?: SortOrder
    entity_id?: SortOrder
    action_name?: SortOrder
    user_id?: SortOrder
    _relevance?: FsmErrorLogOrderByRelevanceInput
  }

  export type FsmErrorLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FsmErrorLogWhereInput | FsmErrorLogWhereInput[]
    OR?: FsmErrorLogWhereInput[]
    NOT?: FsmErrorLogWhereInput | FsmErrorLogWhereInput[]
    error_time?: DateTimeFilter<"FsmErrorLog"> | Date | string
    error_message?: StringFilter<"FsmErrorLog"> | string
    entity_type?: StringFilter<"FsmErrorLog"> | string
    entity_id?: IntFilter<"FsmErrorLog"> | number
    action_name?: StringFilter<"FsmErrorLog"> | string
    user_id?: IntFilter<"FsmErrorLog"> | number
  }, "id">

  export type FsmErrorLogOrderByWithAggregationInput = {
    id?: SortOrder
    error_time?: SortOrder
    error_message?: SortOrder
    entity_type?: SortOrder
    entity_id?: SortOrder
    action_name?: SortOrder
    user_id?: SortOrder
    _count?: FsmErrorLogCountOrderByAggregateInput
    _avg?: FsmErrorLogAvgOrderByAggregateInput
    _max?: FsmErrorLogMaxOrderByAggregateInput
    _min?: FsmErrorLogMinOrderByAggregateInput
    _sum?: FsmErrorLogSumOrderByAggregateInput
  }

  export type FsmErrorLogScalarWhereWithAggregatesInput = {
    AND?: FsmErrorLogScalarWhereWithAggregatesInput | FsmErrorLogScalarWhereWithAggregatesInput[]
    OR?: FsmErrorLogScalarWhereWithAggregatesInput[]
    NOT?: FsmErrorLogScalarWhereWithAggregatesInput | FsmErrorLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FsmErrorLog"> | number
    error_time?: DateTimeWithAggregatesFilter<"FsmErrorLog"> | Date | string
    error_message?: StringWithAggregatesFilter<"FsmErrorLog"> | string
    entity_type?: StringWithAggregatesFilter<"FsmErrorLog"> | string
    entity_id?: IntWithAggregatesFilter<"FsmErrorLog"> | number
    action_name?: StringWithAggregatesFilter<"FsmErrorLog"> | string
    user_id?: IntWithAggregatesFilter<"FsmErrorLog"> | number
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: IntFilter<"Order"> | number
    status?: StringFilter<"Order"> | string
    description?: StringNullableFilter<"Order"> | string | null
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    description?: SortOrderInput | SortOrder
    _relevance?: OrderOrderByRelevanceInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    status?: StringFilter<"Order"> | string
    description?: StringNullableFilter<"Order"> | string | null
  }, "id">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Order"> | number
    status?: StringWithAggregatesFilter<"Order"> | string
    description?: StringNullableWithAggregatesFilter<"Order"> | string | null
  }

  export type StageOrderWhereInput = {
    AND?: StageOrderWhereInput | StageOrderWhereInput[]
    OR?: StageOrderWhereInput[]
    NOT?: StageOrderWhereInput | StageOrderWhereInput[]
    id?: IntFilter<"StageOrder"> | number
    status?: StringFilter<"StageOrder"> | string
    description?: StringNullableFilter<"StageOrder"> | string | null
  }

  export type StageOrderOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    description?: SortOrderInput | SortOrder
    _relevance?: StageOrderOrderByRelevanceInput
  }

  export type StageOrderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: StageOrderWhereInput | StageOrderWhereInput[]
    OR?: StageOrderWhereInput[]
    NOT?: StageOrderWhereInput | StageOrderWhereInput[]
    status?: StringFilter<"StageOrder"> | string
    description?: StringNullableFilter<"StageOrder"> | string | null
  }, "id">

  export type StageOrderOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: StageOrderCountOrderByAggregateInput
    _avg?: StageOrderAvgOrderByAggregateInput
    _max?: StageOrderMaxOrderByAggregateInput
    _min?: StageOrderMinOrderByAggregateInput
    _sum?: StageOrderSumOrderByAggregateInput
  }

  export type StageOrderScalarWhereWithAggregatesInput = {
    AND?: StageOrderScalarWhereWithAggregatesInput | StageOrderScalarWhereWithAggregatesInput[]
    OR?: StageOrderScalarWhereWithAggregatesInput[]
    NOT?: StageOrderScalarWhereWithAggregatesInput | StageOrderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"StageOrder"> | number
    status?: StringWithAggregatesFilter<"StageOrder"> | string
    description?: StringNullableWithAggregatesFilter<"StageOrder"> | string | null
  }

  export type TripWhereInput = {
    AND?: TripWhereInput | TripWhereInput[]
    OR?: TripWhereInput[]
    NOT?: TripWhereInput | TripWhereInput[]
    id?: IntFilter<"Trip"> | number
    status?: StringFilter<"Trip"> | string
    description?: StringNullableFilter<"Trip"> | string | null
  }

  export type TripOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    description?: SortOrderInput | SortOrder
    _relevance?: TripOrderByRelevanceInput
  }

  export type TripWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TripWhereInput | TripWhereInput[]
    OR?: TripWhereInput[]
    NOT?: TripWhereInput | TripWhereInput[]
    status?: StringFilter<"Trip"> | string
    description?: StringNullableFilter<"Trip"> | string | null
  }, "id">

  export type TripOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: TripCountOrderByAggregateInput
    _avg?: TripAvgOrderByAggregateInput
    _max?: TripMaxOrderByAggregateInput
    _min?: TripMinOrderByAggregateInput
    _sum?: TripSumOrderByAggregateInput
  }

  export type TripScalarWhereWithAggregatesInput = {
    AND?: TripScalarWhereWithAggregatesInput | TripScalarWhereWithAggregatesInput[]
    OR?: TripScalarWhereWithAggregatesInput[]
    NOT?: TripScalarWhereWithAggregatesInput | TripScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Trip"> | number
    status?: StringWithAggregatesFilter<"Trip"> | string
    description?: StringNullableWithAggregatesFilter<"Trip"> | string | null
  }

  export type FsmStateCreateInput = {
    name: string
    label?: string | null
    transitions_from?: FsmTransitionCreateNestedManyWithoutFrom_stateInput
    transitions_to?: FsmTransitionCreateNestedManyWithoutTo_stateInput
  }

  export type FsmStateUncheckedCreateInput = {
    id?: number
    name: string
    label?: string | null
    transitions_from?: FsmTransitionUncheckedCreateNestedManyWithoutFrom_stateInput
    transitions_to?: FsmTransitionUncheckedCreateNestedManyWithoutTo_stateInput
  }

  export type FsmStateUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    transitions_from?: FsmTransitionUpdateManyWithoutFrom_stateNestedInput
    transitions_to?: FsmTransitionUpdateManyWithoutTo_stateNestedInput
  }

  export type FsmStateUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    transitions_from?: FsmTransitionUncheckedUpdateManyWithoutFrom_stateNestedInput
    transitions_to?: FsmTransitionUncheckedUpdateManyWithoutTo_stateNestedInput
  }

  export type FsmStateCreateManyInput = {
    id?: number
    name: string
    label?: string | null
  }

  export type FsmStateUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FsmStateUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FsmActionCreateInput = {
    name: string
    label?: string | null
    transitions?: FsmTransitionCreateNestedManyWithoutActionInput
  }

  export type FsmActionUncheckedCreateInput = {
    id?: number
    name: string
    label?: string | null
    transitions?: FsmTransitionUncheckedCreateNestedManyWithoutActionInput
  }

  export type FsmActionUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    transitions?: FsmTransitionUpdateManyWithoutActionNestedInput
  }

  export type FsmActionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    transitions?: FsmTransitionUncheckedUpdateManyWithoutActionNestedInput
  }

  export type FsmActionCreateManyInput = {
    id?: number
    name: string
    label?: string | null
  }

  export type FsmActionUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FsmActionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FsmTransitionCreateInput = {
    from_state: FsmStateCreateNestedOneWithoutTransitions_fromInput
    to_state: FsmStateCreateNestedOneWithoutTransitions_toInput
    action: FsmActionCreateNestedOneWithoutTransitionsInput
  }

  export type FsmTransitionUncheckedCreateInput = {
    id?: number
    from_state_id: number
    action_id: number
    to_state_id: number
  }

  export type FsmTransitionUpdateInput = {
    from_state?: FsmStateUpdateOneRequiredWithoutTransitions_fromNestedInput
    to_state?: FsmStateUpdateOneRequiredWithoutTransitions_toNestedInput
    action?: FsmActionUpdateOneRequiredWithoutTransitionsNestedInput
  }

  export type FsmTransitionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    from_state_id?: IntFieldUpdateOperationsInput | number
    action_id?: IntFieldUpdateOperationsInput | number
    to_state_id?: IntFieldUpdateOperationsInput | number
  }

  export type FsmTransitionCreateManyInput = {
    id?: number
    from_state_id: number
    action_id: number
    to_state_id: number
  }

  export type FsmTransitionUpdateManyMutationInput = {

  }

  export type FsmTransitionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    from_state_id?: IntFieldUpdateOperationsInput | number
    action_id?: IntFieldUpdateOperationsInput | number
    to_state_id?: IntFieldUpdateOperationsInput | number
  }

  export type FsmActionLogCreateInput = {
    entity_type: string
    entity_id: number
    action_name: string
    from_state: string
    to_state: string
    user_id: number
    created_at?: Date | string
  }

  export type FsmActionLogUncheckedCreateInput = {
    id?: number
    entity_type: string
    entity_id: number
    action_name: string
    from_state: string
    to_state: string
    user_id: number
    created_at?: Date | string
  }

  export type FsmActionLogUpdateInput = {
    entity_type?: StringFieldUpdateOperationsInput | string
    entity_id?: IntFieldUpdateOperationsInput | number
    action_name?: StringFieldUpdateOperationsInput | string
    from_state?: StringFieldUpdateOperationsInput | string
    to_state?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FsmActionLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    entity_type?: StringFieldUpdateOperationsInput | string
    entity_id?: IntFieldUpdateOperationsInput | number
    action_name?: StringFieldUpdateOperationsInput | string
    from_state?: StringFieldUpdateOperationsInput | string
    to_state?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FsmActionLogCreateManyInput = {
    id?: number
    entity_type: string
    entity_id: number
    action_name: string
    from_state: string
    to_state: string
    user_id: number
    created_at?: Date | string
  }

  export type FsmActionLogUpdateManyMutationInput = {
    entity_type?: StringFieldUpdateOperationsInput | string
    entity_id?: IntFieldUpdateOperationsInput | number
    action_name?: StringFieldUpdateOperationsInput | string
    from_state?: StringFieldUpdateOperationsInput | string
    to_state?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FsmActionLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    entity_type?: StringFieldUpdateOperationsInput | string
    entity_id?: IntFieldUpdateOperationsInput | number
    action_name?: StringFieldUpdateOperationsInput | string
    from_state?: StringFieldUpdateOperationsInput | string
    to_state?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FsmErrorLogCreateInput = {
    error_time?: Date | string
    error_message: string
    entity_type: string
    entity_id: number
    action_name: string
    user_id: number
  }

  export type FsmErrorLogUncheckedCreateInput = {
    id?: number
    error_time?: Date | string
    error_message: string
    entity_type: string
    entity_id: number
    action_name: string
    user_id: number
  }

  export type FsmErrorLogUpdateInput = {
    error_time?: DateTimeFieldUpdateOperationsInput | Date | string
    error_message?: StringFieldUpdateOperationsInput | string
    entity_type?: StringFieldUpdateOperationsInput | string
    entity_id?: IntFieldUpdateOperationsInput | number
    action_name?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type FsmErrorLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    error_time?: DateTimeFieldUpdateOperationsInput | Date | string
    error_message?: StringFieldUpdateOperationsInput | string
    entity_type?: StringFieldUpdateOperationsInput | string
    entity_id?: IntFieldUpdateOperationsInput | number
    action_name?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type FsmErrorLogCreateManyInput = {
    id?: number
    error_time?: Date | string
    error_message: string
    entity_type: string
    entity_id: number
    action_name: string
    user_id: number
  }

  export type FsmErrorLogUpdateManyMutationInput = {
    error_time?: DateTimeFieldUpdateOperationsInput | Date | string
    error_message?: StringFieldUpdateOperationsInput | string
    entity_type?: StringFieldUpdateOperationsInput | string
    entity_id?: IntFieldUpdateOperationsInput | number
    action_name?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type FsmErrorLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    error_time?: DateTimeFieldUpdateOperationsInput | Date | string
    error_message?: StringFieldUpdateOperationsInput | string
    entity_type?: StringFieldUpdateOperationsInput | string
    entity_id?: IntFieldUpdateOperationsInput | number
    action_name?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type OrderCreateInput = {
    status: string
    description?: string | null
  }

  export type OrderUncheckedCreateInput = {
    id?: number
    status: string
    description?: string | null
  }

  export type OrderUpdateInput = {
    status?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderCreateManyInput = {
    id?: number
    status: string
    description?: string | null
  }

  export type OrderUpdateManyMutationInput = {
    status?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StageOrderCreateInput = {
    status: string
    description?: string | null
  }

  export type StageOrderUncheckedCreateInput = {
    id?: number
    status: string
    description?: string | null
  }

  export type StageOrderUpdateInput = {
    status?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StageOrderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StageOrderCreateManyInput = {
    id?: number
    status: string
    description?: string | null
  }

  export type StageOrderUpdateManyMutationInput = {
    status?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StageOrderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TripCreateInput = {
    status: string
    description?: string | null
  }

  export type TripUncheckedCreateInput = {
    id?: number
    status: string
    description?: string | null
  }

  export type TripUpdateInput = {
    status?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TripUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TripCreateManyInput = {
    id?: number
    status: string
    description?: string | null
  }

  export type TripUpdateManyMutationInput = {
    status?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TripUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FsmTransitionListRelationFilter = {
    every?: FsmTransitionWhereInput
    some?: FsmTransitionWhereInput
    none?: FsmTransitionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FsmTransitionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FsmStateOrderByRelevanceInput = {
    fields: FsmStateOrderByRelevanceFieldEnum | FsmStateOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type FsmStateCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    label?: SortOrder
  }

  export type FsmStateAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FsmStateMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    label?: SortOrder
  }

  export type FsmStateMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    label?: SortOrder
  }

  export type FsmStateSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FsmActionOrderByRelevanceInput = {
    fields: FsmActionOrderByRelevanceFieldEnum | FsmActionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type FsmActionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    label?: SortOrder
  }

  export type FsmActionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FsmActionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    label?: SortOrder
  }

  export type FsmActionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    label?: SortOrder
  }

  export type FsmActionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FsmStateScalarRelationFilter = {
    is?: FsmStateWhereInput
    isNot?: FsmStateWhereInput
  }

  export type FsmActionScalarRelationFilter = {
    is?: FsmActionWhereInput
    isNot?: FsmActionWhereInput
  }

  export type FsmTransitionCountOrderByAggregateInput = {
    id?: SortOrder
    from_state_id?: SortOrder
    action_id?: SortOrder
    to_state_id?: SortOrder
  }

  export type FsmTransitionAvgOrderByAggregateInput = {
    id?: SortOrder
    from_state_id?: SortOrder
    action_id?: SortOrder
    to_state_id?: SortOrder
  }

  export type FsmTransitionMaxOrderByAggregateInput = {
    id?: SortOrder
    from_state_id?: SortOrder
    action_id?: SortOrder
    to_state_id?: SortOrder
  }

  export type FsmTransitionMinOrderByAggregateInput = {
    id?: SortOrder
    from_state_id?: SortOrder
    action_id?: SortOrder
    to_state_id?: SortOrder
  }

  export type FsmTransitionSumOrderByAggregateInput = {
    id?: SortOrder
    from_state_id?: SortOrder
    action_id?: SortOrder
    to_state_id?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FsmActionLogOrderByRelevanceInput = {
    fields: FsmActionLogOrderByRelevanceFieldEnum | FsmActionLogOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type FsmActionLogCountOrderByAggregateInput = {
    id?: SortOrder
    entity_type?: SortOrder
    entity_id?: SortOrder
    action_name?: SortOrder
    from_state?: SortOrder
    to_state?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
  }

  export type FsmActionLogAvgOrderByAggregateInput = {
    id?: SortOrder
    entity_id?: SortOrder
    user_id?: SortOrder
  }

  export type FsmActionLogMaxOrderByAggregateInput = {
    id?: SortOrder
    entity_type?: SortOrder
    entity_id?: SortOrder
    action_name?: SortOrder
    from_state?: SortOrder
    to_state?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
  }

  export type FsmActionLogMinOrderByAggregateInput = {
    id?: SortOrder
    entity_type?: SortOrder
    entity_id?: SortOrder
    action_name?: SortOrder
    from_state?: SortOrder
    to_state?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
  }

  export type FsmActionLogSumOrderByAggregateInput = {
    id?: SortOrder
    entity_id?: SortOrder
    user_id?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FsmErrorLogOrderByRelevanceInput = {
    fields: FsmErrorLogOrderByRelevanceFieldEnum | FsmErrorLogOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type FsmErrorLogCountOrderByAggregateInput = {
    id?: SortOrder
    error_time?: SortOrder
    error_message?: SortOrder
    entity_type?: SortOrder
    entity_id?: SortOrder
    action_name?: SortOrder
    user_id?: SortOrder
  }

  export type FsmErrorLogAvgOrderByAggregateInput = {
    id?: SortOrder
    entity_id?: SortOrder
    user_id?: SortOrder
  }

  export type FsmErrorLogMaxOrderByAggregateInput = {
    id?: SortOrder
    error_time?: SortOrder
    error_message?: SortOrder
    entity_type?: SortOrder
    entity_id?: SortOrder
    action_name?: SortOrder
    user_id?: SortOrder
  }

  export type FsmErrorLogMinOrderByAggregateInput = {
    id?: SortOrder
    error_time?: SortOrder
    error_message?: SortOrder
    entity_type?: SortOrder
    entity_id?: SortOrder
    action_name?: SortOrder
    user_id?: SortOrder
  }

  export type FsmErrorLogSumOrderByAggregateInput = {
    id?: SortOrder
    entity_id?: SortOrder
    user_id?: SortOrder
  }

  export type OrderOrderByRelevanceInput = {
    fields: OrderOrderByRelevanceFieldEnum | OrderOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    description?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    description?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    description?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StageOrderOrderByRelevanceInput = {
    fields: StageOrderOrderByRelevanceFieldEnum | StageOrderOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type StageOrderCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    description?: SortOrder
  }

  export type StageOrderAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StageOrderMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    description?: SortOrder
  }

  export type StageOrderMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    description?: SortOrder
  }

  export type StageOrderSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TripOrderByRelevanceInput = {
    fields: TripOrderByRelevanceFieldEnum | TripOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TripCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    description?: SortOrder
  }

  export type TripAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TripMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    description?: SortOrder
  }

  export type TripMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    description?: SortOrder
  }

  export type TripSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FsmTransitionCreateNestedManyWithoutFrom_stateInput = {
    create?: XOR<FsmTransitionCreateWithoutFrom_stateInput, FsmTransitionUncheckedCreateWithoutFrom_stateInput> | FsmTransitionCreateWithoutFrom_stateInput[] | FsmTransitionUncheckedCreateWithoutFrom_stateInput[]
    connectOrCreate?: FsmTransitionCreateOrConnectWithoutFrom_stateInput | FsmTransitionCreateOrConnectWithoutFrom_stateInput[]
    createMany?: FsmTransitionCreateManyFrom_stateInputEnvelope
    connect?: FsmTransitionWhereUniqueInput | FsmTransitionWhereUniqueInput[]
  }

  export type FsmTransitionCreateNestedManyWithoutTo_stateInput = {
    create?: XOR<FsmTransitionCreateWithoutTo_stateInput, FsmTransitionUncheckedCreateWithoutTo_stateInput> | FsmTransitionCreateWithoutTo_stateInput[] | FsmTransitionUncheckedCreateWithoutTo_stateInput[]
    connectOrCreate?: FsmTransitionCreateOrConnectWithoutTo_stateInput | FsmTransitionCreateOrConnectWithoutTo_stateInput[]
    createMany?: FsmTransitionCreateManyTo_stateInputEnvelope
    connect?: FsmTransitionWhereUniqueInput | FsmTransitionWhereUniqueInput[]
  }

  export type FsmTransitionUncheckedCreateNestedManyWithoutFrom_stateInput = {
    create?: XOR<FsmTransitionCreateWithoutFrom_stateInput, FsmTransitionUncheckedCreateWithoutFrom_stateInput> | FsmTransitionCreateWithoutFrom_stateInput[] | FsmTransitionUncheckedCreateWithoutFrom_stateInput[]
    connectOrCreate?: FsmTransitionCreateOrConnectWithoutFrom_stateInput | FsmTransitionCreateOrConnectWithoutFrom_stateInput[]
    createMany?: FsmTransitionCreateManyFrom_stateInputEnvelope
    connect?: FsmTransitionWhereUniqueInput | FsmTransitionWhereUniqueInput[]
  }

  export type FsmTransitionUncheckedCreateNestedManyWithoutTo_stateInput = {
    create?: XOR<FsmTransitionCreateWithoutTo_stateInput, FsmTransitionUncheckedCreateWithoutTo_stateInput> | FsmTransitionCreateWithoutTo_stateInput[] | FsmTransitionUncheckedCreateWithoutTo_stateInput[]
    connectOrCreate?: FsmTransitionCreateOrConnectWithoutTo_stateInput | FsmTransitionCreateOrConnectWithoutTo_stateInput[]
    createMany?: FsmTransitionCreateManyTo_stateInputEnvelope
    connect?: FsmTransitionWhereUniqueInput | FsmTransitionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FsmTransitionUpdateManyWithoutFrom_stateNestedInput = {
    create?: XOR<FsmTransitionCreateWithoutFrom_stateInput, FsmTransitionUncheckedCreateWithoutFrom_stateInput> | FsmTransitionCreateWithoutFrom_stateInput[] | FsmTransitionUncheckedCreateWithoutFrom_stateInput[]
    connectOrCreate?: FsmTransitionCreateOrConnectWithoutFrom_stateInput | FsmTransitionCreateOrConnectWithoutFrom_stateInput[]
    upsert?: FsmTransitionUpsertWithWhereUniqueWithoutFrom_stateInput | FsmTransitionUpsertWithWhereUniqueWithoutFrom_stateInput[]
    createMany?: FsmTransitionCreateManyFrom_stateInputEnvelope
    set?: FsmTransitionWhereUniqueInput | FsmTransitionWhereUniqueInput[]
    disconnect?: FsmTransitionWhereUniqueInput | FsmTransitionWhereUniqueInput[]
    delete?: FsmTransitionWhereUniqueInput | FsmTransitionWhereUniqueInput[]
    connect?: FsmTransitionWhereUniqueInput | FsmTransitionWhereUniqueInput[]
    update?: FsmTransitionUpdateWithWhereUniqueWithoutFrom_stateInput | FsmTransitionUpdateWithWhereUniqueWithoutFrom_stateInput[]
    updateMany?: FsmTransitionUpdateManyWithWhereWithoutFrom_stateInput | FsmTransitionUpdateManyWithWhereWithoutFrom_stateInput[]
    deleteMany?: FsmTransitionScalarWhereInput | FsmTransitionScalarWhereInput[]
  }

  export type FsmTransitionUpdateManyWithoutTo_stateNestedInput = {
    create?: XOR<FsmTransitionCreateWithoutTo_stateInput, FsmTransitionUncheckedCreateWithoutTo_stateInput> | FsmTransitionCreateWithoutTo_stateInput[] | FsmTransitionUncheckedCreateWithoutTo_stateInput[]
    connectOrCreate?: FsmTransitionCreateOrConnectWithoutTo_stateInput | FsmTransitionCreateOrConnectWithoutTo_stateInput[]
    upsert?: FsmTransitionUpsertWithWhereUniqueWithoutTo_stateInput | FsmTransitionUpsertWithWhereUniqueWithoutTo_stateInput[]
    createMany?: FsmTransitionCreateManyTo_stateInputEnvelope
    set?: FsmTransitionWhereUniqueInput | FsmTransitionWhereUniqueInput[]
    disconnect?: FsmTransitionWhereUniqueInput | FsmTransitionWhereUniqueInput[]
    delete?: FsmTransitionWhereUniqueInput | FsmTransitionWhereUniqueInput[]
    connect?: FsmTransitionWhereUniqueInput | FsmTransitionWhereUniqueInput[]
    update?: FsmTransitionUpdateWithWhereUniqueWithoutTo_stateInput | FsmTransitionUpdateWithWhereUniqueWithoutTo_stateInput[]
    updateMany?: FsmTransitionUpdateManyWithWhereWithoutTo_stateInput | FsmTransitionUpdateManyWithWhereWithoutTo_stateInput[]
    deleteMany?: FsmTransitionScalarWhereInput | FsmTransitionScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FsmTransitionUncheckedUpdateManyWithoutFrom_stateNestedInput = {
    create?: XOR<FsmTransitionCreateWithoutFrom_stateInput, FsmTransitionUncheckedCreateWithoutFrom_stateInput> | FsmTransitionCreateWithoutFrom_stateInput[] | FsmTransitionUncheckedCreateWithoutFrom_stateInput[]
    connectOrCreate?: FsmTransitionCreateOrConnectWithoutFrom_stateInput | FsmTransitionCreateOrConnectWithoutFrom_stateInput[]
    upsert?: FsmTransitionUpsertWithWhereUniqueWithoutFrom_stateInput | FsmTransitionUpsertWithWhereUniqueWithoutFrom_stateInput[]
    createMany?: FsmTransitionCreateManyFrom_stateInputEnvelope
    set?: FsmTransitionWhereUniqueInput | FsmTransitionWhereUniqueInput[]
    disconnect?: FsmTransitionWhereUniqueInput | FsmTransitionWhereUniqueInput[]
    delete?: FsmTransitionWhereUniqueInput | FsmTransitionWhereUniqueInput[]
    connect?: FsmTransitionWhereUniqueInput | FsmTransitionWhereUniqueInput[]
    update?: FsmTransitionUpdateWithWhereUniqueWithoutFrom_stateInput | FsmTransitionUpdateWithWhereUniqueWithoutFrom_stateInput[]
    updateMany?: FsmTransitionUpdateManyWithWhereWithoutFrom_stateInput | FsmTransitionUpdateManyWithWhereWithoutFrom_stateInput[]
    deleteMany?: FsmTransitionScalarWhereInput | FsmTransitionScalarWhereInput[]
  }

  export type FsmTransitionUncheckedUpdateManyWithoutTo_stateNestedInput = {
    create?: XOR<FsmTransitionCreateWithoutTo_stateInput, FsmTransitionUncheckedCreateWithoutTo_stateInput> | FsmTransitionCreateWithoutTo_stateInput[] | FsmTransitionUncheckedCreateWithoutTo_stateInput[]
    connectOrCreate?: FsmTransitionCreateOrConnectWithoutTo_stateInput | FsmTransitionCreateOrConnectWithoutTo_stateInput[]
    upsert?: FsmTransitionUpsertWithWhereUniqueWithoutTo_stateInput | FsmTransitionUpsertWithWhereUniqueWithoutTo_stateInput[]
    createMany?: FsmTransitionCreateManyTo_stateInputEnvelope
    set?: FsmTransitionWhereUniqueInput | FsmTransitionWhereUniqueInput[]
    disconnect?: FsmTransitionWhereUniqueInput | FsmTransitionWhereUniqueInput[]
    delete?: FsmTransitionWhereUniqueInput | FsmTransitionWhereUniqueInput[]
    connect?: FsmTransitionWhereUniqueInput | FsmTransitionWhereUniqueInput[]
    update?: FsmTransitionUpdateWithWhereUniqueWithoutTo_stateInput | FsmTransitionUpdateWithWhereUniqueWithoutTo_stateInput[]
    updateMany?: FsmTransitionUpdateManyWithWhereWithoutTo_stateInput | FsmTransitionUpdateManyWithWhereWithoutTo_stateInput[]
    deleteMany?: FsmTransitionScalarWhereInput | FsmTransitionScalarWhereInput[]
  }

  export type FsmTransitionCreateNestedManyWithoutActionInput = {
    create?: XOR<FsmTransitionCreateWithoutActionInput, FsmTransitionUncheckedCreateWithoutActionInput> | FsmTransitionCreateWithoutActionInput[] | FsmTransitionUncheckedCreateWithoutActionInput[]
    connectOrCreate?: FsmTransitionCreateOrConnectWithoutActionInput | FsmTransitionCreateOrConnectWithoutActionInput[]
    createMany?: FsmTransitionCreateManyActionInputEnvelope
    connect?: FsmTransitionWhereUniqueInput | FsmTransitionWhereUniqueInput[]
  }

  export type FsmTransitionUncheckedCreateNestedManyWithoutActionInput = {
    create?: XOR<FsmTransitionCreateWithoutActionInput, FsmTransitionUncheckedCreateWithoutActionInput> | FsmTransitionCreateWithoutActionInput[] | FsmTransitionUncheckedCreateWithoutActionInput[]
    connectOrCreate?: FsmTransitionCreateOrConnectWithoutActionInput | FsmTransitionCreateOrConnectWithoutActionInput[]
    createMany?: FsmTransitionCreateManyActionInputEnvelope
    connect?: FsmTransitionWhereUniqueInput | FsmTransitionWhereUniqueInput[]
  }

  export type FsmTransitionUpdateManyWithoutActionNestedInput = {
    create?: XOR<FsmTransitionCreateWithoutActionInput, FsmTransitionUncheckedCreateWithoutActionInput> | FsmTransitionCreateWithoutActionInput[] | FsmTransitionUncheckedCreateWithoutActionInput[]
    connectOrCreate?: FsmTransitionCreateOrConnectWithoutActionInput | FsmTransitionCreateOrConnectWithoutActionInput[]
    upsert?: FsmTransitionUpsertWithWhereUniqueWithoutActionInput | FsmTransitionUpsertWithWhereUniqueWithoutActionInput[]
    createMany?: FsmTransitionCreateManyActionInputEnvelope
    set?: FsmTransitionWhereUniqueInput | FsmTransitionWhereUniqueInput[]
    disconnect?: FsmTransitionWhereUniqueInput | FsmTransitionWhereUniqueInput[]
    delete?: FsmTransitionWhereUniqueInput | FsmTransitionWhereUniqueInput[]
    connect?: FsmTransitionWhereUniqueInput | FsmTransitionWhereUniqueInput[]
    update?: FsmTransitionUpdateWithWhereUniqueWithoutActionInput | FsmTransitionUpdateWithWhereUniqueWithoutActionInput[]
    updateMany?: FsmTransitionUpdateManyWithWhereWithoutActionInput | FsmTransitionUpdateManyWithWhereWithoutActionInput[]
    deleteMany?: FsmTransitionScalarWhereInput | FsmTransitionScalarWhereInput[]
  }

  export type FsmTransitionUncheckedUpdateManyWithoutActionNestedInput = {
    create?: XOR<FsmTransitionCreateWithoutActionInput, FsmTransitionUncheckedCreateWithoutActionInput> | FsmTransitionCreateWithoutActionInput[] | FsmTransitionUncheckedCreateWithoutActionInput[]
    connectOrCreate?: FsmTransitionCreateOrConnectWithoutActionInput | FsmTransitionCreateOrConnectWithoutActionInput[]
    upsert?: FsmTransitionUpsertWithWhereUniqueWithoutActionInput | FsmTransitionUpsertWithWhereUniqueWithoutActionInput[]
    createMany?: FsmTransitionCreateManyActionInputEnvelope
    set?: FsmTransitionWhereUniqueInput | FsmTransitionWhereUniqueInput[]
    disconnect?: FsmTransitionWhereUniqueInput | FsmTransitionWhereUniqueInput[]
    delete?: FsmTransitionWhereUniqueInput | FsmTransitionWhereUniqueInput[]
    connect?: FsmTransitionWhereUniqueInput | FsmTransitionWhereUniqueInput[]
    update?: FsmTransitionUpdateWithWhereUniqueWithoutActionInput | FsmTransitionUpdateWithWhereUniqueWithoutActionInput[]
    updateMany?: FsmTransitionUpdateManyWithWhereWithoutActionInput | FsmTransitionUpdateManyWithWhereWithoutActionInput[]
    deleteMany?: FsmTransitionScalarWhereInput | FsmTransitionScalarWhereInput[]
  }

  export type FsmStateCreateNestedOneWithoutTransitions_fromInput = {
    create?: XOR<FsmStateCreateWithoutTransitions_fromInput, FsmStateUncheckedCreateWithoutTransitions_fromInput>
    connectOrCreate?: FsmStateCreateOrConnectWithoutTransitions_fromInput
    connect?: FsmStateWhereUniqueInput
  }

  export type FsmStateCreateNestedOneWithoutTransitions_toInput = {
    create?: XOR<FsmStateCreateWithoutTransitions_toInput, FsmStateUncheckedCreateWithoutTransitions_toInput>
    connectOrCreate?: FsmStateCreateOrConnectWithoutTransitions_toInput
    connect?: FsmStateWhereUniqueInput
  }

  export type FsmActionCreateNestedOneWithoutTransitionsInput = {
    create?: XOR<FsmActionCreateWithoutTransitionsInput, FsmActionUncheckedCreateWithoutTransitionsInput>
    connectOrCreate?: FsmActionCreateOrConnectWithoutTransitionsInput
    connect?: FsmActionWhereUniqueInput
  }

  export type FsmStateUpdateOneRequiredWithoutTransitions_fromNestedInput = {
    create?: XOR<FsmStateCreateWithoutTransitions_fromInput, FsmStateUncheckedCreateWithoutTransitions_fromInput>
    connectOrCreate?: FsmStateCreateOrConnectWithoutTransitions_fromInput
    upsert?: FsmStateUpsertWithoutTransitions_fromInput
    connect?: FsmStateWhereUniqueInput
    update?: XOR<XOR<FsmStateUpdateToOneWithWhereWithoutTransitions_fromInput, FsmStateUpdateWithoutTransitions_fromInput>, FsmStateUncheckedUpdateWithoutTransitions_fromInput>
  }

  export type FsmStateUpdateOneRequiredWithoutTransitions_toNestedInput = {
    create?: XOR<FsmStateCreateWithoutTransitions_toInput, FsmStateUncheckedCreateWithoutTransitions_toInput>
    connectOrCreate?: FsmStateCreateOrConnectWithoutTransitions_toInput
    upsert?: FsmStateUpsertWithoutTransitions_toInput
    connect?: FsmStateWhereUniqueInput
    update?: XOR<XOR<FsmStateUpdateToOneWithWhereWithoutTransitions_toInput, FsmStateUpdateWithoutTransitions_toInput>, FsmStateUncheckedUpdateWithoutTransitions_toInput>
  }

  export type FsmActionUpdateOneRequiredWithoutTransitionsNestedInput = {
    create?: XOR<FsmActionCreateWithoutTransitionsInput, FsmActionUncheckedCreateWithoutTransitionsInput>
    connectOrCreate?: FsmActionCreateOrConnectWithoutTransitionsInput
    upsert?: FsmActionUpsertWithoutTransitionsInput
    connect?: FsmActionWhereUniqueInput
    update?: XOR<XOR<FsmActionUpdateToOneWithWhereWithoutTransitionsInput, FsmActionUpdateWithoutTransitionsInput>, FsmActionUncheckedUpdateWithoutTransitionsInput>
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FsmTransitionCreateWithoutFrom_stateInput = {
    to_state: FsmStateCreateNestedOneWithoutTransitions_toInput
    action: FsmActionCreateNestedOneWithoutTransitionsInput
  }

  export type FsmTransitionUncheckedCreateWithoutFrom_stateInput = {
    id?: number
    action_id: number
    to_state_id: number
  }

  export type FsmTransitionCreateOrConnectWithoutFrom_stateInput = {
    where: FsmTransitionWhereUniqueInput
    create: XOR<FsmTransitionCreateWithoutFrom_stateInput, FsmTransitionUncheckedCreateWithoutFrom_stateInput>
  }

  export type FsmTransitionCreateManyFrom_stateInputEnvelope = {
    data: FsmTransitionCreateManyFrom_stateInput | FsmTransitionCreateManyFrom_stateInput[]
    skipDuplicates?: boolean
  }

  export type FsmTransitionCreateWithoutTo_stateInput = {
    from_state: FsmStateCreateNestedOneWithoutTransitions_fromInput
    action: FsmActionCreateNestedOneWithoutTransitionsInput
  }

  export type FsmTransitionUncheckedCreateWithoutTo_stateInput = {
    id?: number
    from_state_id: number
    action_id: number
  }

  export type FsmTransitionCreateOrConnectWithoutTo_stateInput = {
    where: FsmTransitionWhereUniqueInput
    create: XOR<FsmTransitionCreateWithoutTo_stateInput, FsmTransitionUncheckedCreateWithoutTo_stateInput>
  }

  export type FsmTransitionCreateManyTo_stateInputEnvelope = {
    data: FsmTransitionCreateManyTo_stateInput | FsmTransitionCreateManyTo_stateInput[]
    skipDuplicates?: boolean
  }

  export type FsmTransitionUpsertWithWhereUniqueWithoutFrom_stateInput = {
    where: FsmTransitionWhereUniqueInput
    update: XOR<FsmTransitionUpdateWithoutFrom_stateInput, FsmTransitionUncheckedUpdateWithoutFrom_stateInput>
    create: XOR<FsmTransitionCreateWithoutFrom_stateInput, FsmTransitionUncheckedCreateWithoutFrom_stateInput>
  }

  export type FsmTransitionUpdateWithWhereUniqueWithoutFrom_stateInput = {
    where: FsmTransitionWhereUniqueInput
    data: XOR<FsmTransitionUpdateWithoutFrom_stateInput, FsmTransitionUncheckedUpdateWithoutFrom_stateInput>
  }

  export type FsmTransitionUpdateManyWithWhereWithoutFrom_stateInput = {
    where: FsmTransitionScalarWhereInput
    data: XOR<FsmTransitionUpdateManyMutationInput, FsmTransitionUncheckedUpdateManyWithoutFrom_stateInput>
  }

  export type FsmTransitionScalarWhereInput = {
    AND?: FsmTransitionScalarWhereInput | FsmTransitionScalarWhereInput[]
    OR?: FsmTransitionScalarWhereInput[]
    NOT?: FsmTransitionScalarWhereInput | FsmTransitionScalarWhereInput[]
    id?: IntFilter<"FsmTransition"> | number
    from_state_id?: IntFilter<"FsmTransition"> | number
    action_id?: IntFilter<"FsmTransition"> | number
    to_state_id?: IntFilter<"FsmTransition"> | number
  }

  export type FsmTransitionUpsertWithWhereUniqueWithoutTo_stateInput = {
    where: FsmTransitionWhereUniqueInput
    update: XOR<FsmTransitionUpdateWithoutTo_stateInput, FsmTransitionUncheckedUpdateWithoutTo_stateInput>
    create: XOR<FsmTransitionCreateWithoutTo_stateInput, FsmTransitionUncheckedCreateWithoutTo_stateInput>
  }

  export type FsmTransitionUpdateWithWhereUniqueWithoutTo_stateInput = {
    where: FsmTransitionWhereUniqueInput
    data: XOR<FsmTransitionUpdateWithoutTo_stateInput, FsmTransitionUncheckedUpdateWithoutTo_stateInput>
  }

  export type FsmTransitionUpdateManyWithWhereWithoutTo_stateInput = {
    where: FsmTransitionScalarWhereInput
    data: XOR<FsmTransitionUpdateManyMutationInput, FsmTransitionUncheckedUpdateManyWithoutTo_stateInput>
  }

  export type FsmTransitionCreateWithoutActionInput = {
    from_state: FsmStateCreateNestedOneWithoutTransitions_fromInput
    to_state: FsmStateCreateNestedOneWithoutTransitions_toInput
  }

  export type FsmTransitionUncheckedCreateWithoutActionInput = {
    id?: number
    from_state_id: number
    to_state_id: number
  }

  export type FsmTransitionCreateOrConnectWithoutActionInput = {
    where: FsmTransitionWhereUniqueInput
    create: XOR<FsmTransitionCreateWithoutActionInput, FsmTransitionUncheckedCreateWithoutActionInput>
  }

  export type FsmTransitionCreateManyActionInputEnvelope = {
    data: FsmTransitionCreateManyActionInput | FsmTransitionCreateManyActionInput[]
    skipDuplicates?: boolean
  }

  export type FsmTransitionUpsertWithWhereUniqueWithoutActionInput = {
    where: FsmTransitionWhereUniqueInput
    update: XOR<FsmTransitionUpdateWithoutActionInput, FsmTransitionUncheckedUpdateWithoutActionInput>
    create: XOR<FsmTransitionCreateWithoutActionInput, FsmTransitionUncheckedCreateWithoutActionInput>
  }

  export type FsmTransitionUpdateWithWhereUniqueWithoutActionInput = {
    where: FsmTransitionWhereUniqueInput
    data: XOR<FsmTransitionUpdateWithoutActionInput, FsmTransitionUncheckedUpdateWithoutActionInput>
  }

  export type FsmTransitionUpdateManyWithWhereWithoutActionInput = {
    where: FsmTransitionScalarWhereInput
    data: XOR<FsmTransitionUpdateManyMutationInput, FsmTransitionUncheckedUpdateManyWithoutActionInput>
  }

  export type FsmStateCreateWithoutTransitions_fromInput = {
    name: string
    label?: string | null
    transitions_to?: FsmTransitionCreateNestedManyWithoutTo_stateInput
  }

  export type FsmStateUncheckedCreateWithoutTransitions_fromInput = {
    id?: number
    name: string
    label?: string | null
    transitions_to?: FsmTransitionUncheckedCreateNestedManyWithoutTo_stateInput
  }

  export type FsmStateCreateOrConnectWithoutTransitions_fromInput = {
    where: FsmStateWhereUniqueInput
    create: XOR<FsmStateCreateWithoutTransitions_fromInput, FsmStateUncheckedCreateWithoutTransitions_fromInput>
  }

  export type FsmStateCreateWithoutTransitions_toInput = {
    name: string
    label?: string | null
    transitions_from?: FsmTransitionCreateNestedManyWithoutFrom_stateInput
  }

  export type FsmStateUncheckedCreateWithoutTransitions_toInput = {
    id?: number
    name: string
    label?: string | null
    transitions_from?: FsmTransitionUncheckedCreateNestedManyWithoutFrom_stateInput
  }

  export type FsmStateCreateOrConnectWithoutTransitions_toInput = {
    where: FsmStateWhereUniqueInput
    create: XOR<FsmStateCreateWithoutTransitions_toInput, FsmStateUncheckedCreateWithoutTransitions_toInput>
  }

  export type FsmActionCreateWithoutTransitionsInput = {
    name: string
    label?: string | null
  }

  export type FsmActionUncheckedCreateWithoutTransitionsInput = {
    id?: number
    name: string
    label?: string | null
  }

  export type FsmActionCreateOrConnectWithoutTransitionsInput = {
    where: FsmActionWhereUniqueInput
    create: XOR<FsmActionCreateWithoutTransitionsInput, FsmActionUncheckedCreateWithoutTransitionsInput>
  }

  export type FsmStateUpsertWithoutTransitions_fromInput = {
    update: XOR<FsmStateUpdateWithoutTransitions_fromInput, FsmStateUncheckedUpdateWithoutTransitions_fromInput>
    create: XOR<FsmStateCreateWithoutTransitions_fromInput, FsmStateUncheckedCreateWithoutTransitions_fromInput>
    where?: FsmStateWhereInput
  }

  export type FsmStateUpdateToOneWithWhereWithoutTransitions_fromInput = {
    where?: FsmStateWhereInput
    data: XOR<FsmStateUpdateWithoutTransitions_fromInput, FsmStateUncheckedUpdateWithoutTransitions_fromInput>
  }

  export type FsmStateUpdateWithoutTransitions_fromInput = {
    name?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    transitions_to?: FsmTransitionUpdateManyWithoutTo_stateNestedInput
  }

  export type FsmStateUncheckedUpdateWithoutTransitions_fromInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    transitions_to?: FsmTransitionUncheckedUpdateManyWithoutTo_stateNestedInput
  }

  export type FsmStateUpsertWithoutTransitions_toInput = {
    update: XOR<FsmStateUpdateWithoutTransitions_toInput, FsmStateUncheckedUpdateWithoutTransitions_toInput>
    create: XOR<FsmStateCreateWithoutTransitions_toInput, FsmStateUncheckedCreateWithoutTransitions_toInput>
    where?: FsmStateWhereInput
  }

  export type FsmStateUpdateToOneWithWhereWithoutTransitions_toInput = {
    where?: FsmStateWhereInput
    data: XOR<FsmStateUpdateWithoutTransitions_toInput, FsmStateUncheckedUpdateWithoutTransitions_toInput>
  }

  export type FsmStateUpdateWithoutTransitions_toInput = {
    name?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    transitions_from?: FsmTransitionUpdateManyWithoutFrom_stateNestedInput
  }

  export type FsmStateUncheckedUpdateWithoutTransitions_toInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    transitions_from?: FsmTransitionUncheckedUpdateManyWithoutFrom_stateNestedInput
  }

  export type FsmActionUpsertWithoutTransitionsInput = {
    update: XOR<FsmActionUpdateWithoutTransitionsInput, FsmActionUncheckedUpdateWithoutTransitionsInput>
    create: XOR<FsmActionCreateWithoutTransitionsInput, FsmActionUncheckedCreateWithoutTransitionsInput>
    where?: FsmActionWhereInput
  }

  export type FsmActionUpdateToOneWithWhereWithoutTransitionsInput = {
    where?: FsmActionWhereInput
    data: XOR<FsmActionUpdateWithoutTransitionsInput, FsmActionUncheckedUpdateWithoutTransitionsInput>
  }

  export type FsmActionUpdateWithoutTransitionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FsmActionUncheckedUpdateWithoutTransitionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FsmTransitionCreateManyFrom_stateInput = {
    id?: number
    action_id: number
    to_state_id: number
  }

  export type FsmTransitionCreateManyTo_stateInput = {
    id?: number
    from_state_id: number
    action_id: number
  }

  export type FsmTransitionUpdateWithoutFrom_stateInput = {
    to_state?: FsmStateUpdateOneRequiredWithoutTransitions_toNestedInput
    action?: FsmActionUpdateOneRequiredWithoutTransitionsNestedInput
  }

  export type FsmTransitionUncheckedUpdateWithoutFrom_stateInput = {
    id?: IntFieldUpdateOperationsInput | number
    action_id?: IntFieldUpdateOperationsInput | number
    to_state_id?: IntFieldUpdateOperationsInput | number
  }

  export type FsmTransitionUncheckedUpdateManyWithoutFrom_stateInput = {
    id?: IntFieldUpdateOperationsInput | number
    action_id?: IntFieldUpdateOperationsInput | number
    to_state_id?: IntFieldUpdateOperationsInput | number
  }

  export type FsmTransitionUpdateWithoutTo_stateInput = {
    from_state?: FsmStateUpdateOneRequiredWithoutTransitions_fromNestedInput
    action?: FsmActionUpdateOneRequiredWithoutTransitionsNestedInput
  }

  export type FsmTransitionUncheckedUpdateWithoutTo_stateInput = {
    id?: IntFieldUpdateOperationsInput | number
    from_state_id?: IntFieldUpdateOperationsInput | number
    action_id?: IntFieldUpdateOperationsInput | number
  }

  export type FsmTransitionUncheckedUpdateManyWithoutTo_stateInput = {
    id?: IntFieldUpdateOperationsInput | number
    from_state_id?: IntFieldUpdateOperationsInput | number
    action_id?: IntFieldUpdateOperationsInput | number
  }

  export type FsmTransitionCreateManyActionInput = {
    id?: number
    from_state_id: number
    to_state_id: number
  }

  export type FsmTransitionUpdateWithoutActionInput = {
    from_state?: FsmStateUpdateOneRequiredWithoutTransitions_fromNestedInput
    to_state?: FsmStateUpdateOneRequiredWithoutTransitions_toNestedInput
  }

  export type FsmTransitionUncheckedUpdateWithoutActionInput = {
    id?: IntFieldUpdateOperationsInput | number
    from_state_id?: IntFieldUpdateOperationsInput | number
    to_state_id?: IntFieldUpdateOperationsInput | number
  }

  export type FsmTransitionUncheckedUpdateManyWithoutActionInput = {
    id?: IntFieldUpdateOperationsInput | number
    from_state_id?: IntFieldUpdateOperationsInput | number
    to_state_id?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}