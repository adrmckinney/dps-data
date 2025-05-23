
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
 * Model Year
 * 
 */
export type Year = $Result.DefaultSelection<Prisma.$YearPayload>
/**
 * Model Level
 * 
 */
export type Level = $Result.DefaultSelection<Prisma.$LevelPayload>
/**
 * Model School
 * 
 */
export type School = $Result.DefaultSelection<Prisma.$SchoolPayload>
/**
 * Model Race
 * 
 */
export type Race = $Result.DefaultSelection<Prisma.$RacePayload>
/**
 * Model Gender
 * 
 */
export type Gender = $Result.DefaultSelection<Prisma.$GenderPayload>
/**
 * Model Discipline
 * 
 */
export type Discipline = $Result.DefaultSelection<Prisma.$DisciplinePayload>
/**
 * Model Subject
 * 
 */
export type Subject = $Result.DefaultSelection<Prisma.$SubjectPayload>
/**
 * Model SubGroup
 * 
 */
export type SubGroup = $Result.DefaultSelection<Prisma.$SubGroupPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Years
 * const years = await prisma.year.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Years
   * const years = await prisma.year.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.year`: Exposes CRUD operations for the **Year** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Years
    * const years = await prisma.year.findMany()
    * ```
    */
  get year(): Prisma.YearDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.level`: Exposes CRUD operations for the **Level** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Levels
    * const levels = await prisma.level.findMany()
    * ```
    */
  get level(): Prisma.LevelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.school`: Exposes CRUD operations for the **School** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Schools
    * const schools = await prisma.school.findMany()
    * ```
    */
  get school(): Prisma.SchoolDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.race`: Exposes CRUD operations for the **Race** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Races
    * const races = await prisma.race.findMany()
    * ```
    */
  get race(): Prisma.RaceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gender`: Exposes CRUD operations for the **Gender** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Genders
    * const genders = await prisma.gender.findMany()
    * ```
    */
  get gender(): Prisma.GenderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.discipline`: Exposes CRUD operations for the **Discipline** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Disciplines
    * const disciplines = await prisma.discipline.findMany()
    * ```
    */
  get discipline(): Prisma.DisciplineDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subject`: Exposes CRUD operations for the **Subject** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subjects
    * const subjects = await prisma.subject.findMany()
    * ```
    */
  get subject(): Prisma.SubjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subGroup`: Exposes CRUD operations for the **SubGroup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SubGroups
    * const subGroups = await prisma.subGroup.findMany()
    * ```
    */
  get subGroup(): Prisma.SubGroupDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.1
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
    Year: 'Year',
    Level: 'Level',
    School: 'School',
    Race: 'Race',
    Gender: 'Gender',
    Discipline: 'Discipline',
    Subject: 'Subject',
    SubGroup: 'SubGroup'
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
      modelProps: "year" | "level" | "school" | "race" | "gender" | "discipline" | "subject" | "subGroup"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Year: {
        payload: Prisma.$YearPayload<ExtArgs>
        fields: Prisma.YearFieldRefs
        operations: {
          findUnique: {
            args: Prisma.YearFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YearPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.YearFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YearPayload>
          }
          findFirst: {
            args: Prisma.YearFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YearPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.YearFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YearPayload>
          }
          findMany: {
            args: Prisma.YearFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YearPayload>[]
          }
          create: {
            args: Prisma.YearCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YearPayload>
          }
          createMany: {
            args: Prisma.YearCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.YearCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YearPayload>[]
          }
          delete: {
            args: Prisma.YearDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YearPayload>
          }
          update: {
            args: Prisma.YearUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YearPayload>
          }
          deleteMany: {
            args: Prisma.YearDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.YearUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.YearUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YearPayload>[]
          }
          upsert: {
            args: Prisma.YearUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YearPayload>
          }
          aggregate: {
            args: Prisma.YearAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateYear>
          }
          groupBy: {
            args: Prisma.YearGroupByArgs<ExtArgs>
            result: $Utils.Optional<YearGroupByOutputType>[]
          }
          count: {
            args: Prisma.YearCountArgs<ExtArgs>
            result: $Utils.Optional<YearCountAggregateOutputType> | number
          }
        }
      }
      Level: {
        payload: Prisma.$LevelPayload<ExtArgs>
        fields: Prisma.LevelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LevelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LevelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelPayload>
          }
          findFirst: {
            args: Prisma.LevelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LevelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelPayload>
          }
          findMany: {
            args: Prisma.LevelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelPayload>[]
          }
          create: {
            args: Prisma.LevelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelPayload>
          }
          createMany: {
            args: Prisma.LevelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LevelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelPayload>[]
          }
          delete: {
            args: Prisma.LevelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelPayload>
          }
          update: {
            args: Prisma.LevelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelPayload>
          }
          deleteMany: {
            args: Prisma.LevelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LevelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LevelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelPayload>[]
          }
          upsert: {
            args: Prisma.LevelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelPayload>
          }
          aggregate: {
            args: Prisma.LevelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLevel>
          }
          groupBy: {
            args: Prisma.LevelGroupByArgs<ExtArgs>
            result: $Utils.Optional<LevelGroupByOutputType>[]
          }
          count: {
            args: Prisma.LevelCountArgs<ExtArgs>
            result: $Utils.Optional<LevelCountAggregateOutputType> | number
          }
        }
      }
      School: {
        payload: Prisma.$SchoolPayload<ExtArgs>
        fields: Prisma.SchoolFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SchoolFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SchoolFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          findFirst: {
            args: Prisma.SchoolFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SchoolFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          findMany: {
            args: Prisma.SchoolFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>[]
          }
          create: {
            args: Prisma.SchoolCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          createMany: {
            args: Prisma.SchoolCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SchoolCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>[]
          }
          delete: {
            args: Prisma.SchoolDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          update: {
            args: Prisma.SchoolUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          deleteMany: {
            args: Prisma.SchoolDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SchoolUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SchoolUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>[]
          }
          upsert: {
            args: Prisma.SchoolUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          aggregate: {
            args: Prisma.SchoolAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSchool>
          }
          groupBy: {
            args: Prisma.SchoolGroupByArgs<ExtArgs>
            result: $Utils.Optional<SchoolGroupByOutputType>[]
          }
          count: {
            args: Prisma.SchoolCountArgs<ExtArgs>
            result: $Utils.Optional<SchoolCountAggregateOutputType> | number
          }
        }
      }
      Race: {
        payload: Prisma.$RacePayload<ExtArgs>
        fields: Prisma.RaceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RaceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RaceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload>
          }
          findFirst: {
            args: Prisma.RaceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RaceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload>
          }
          findMany: {
            args: Prisma.RaceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload>[]
          }
          create: {
            args: Prisma.RaceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload>
          }
          createMany: {
            args: Prisma.RaceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RaceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload>[]
          }
          delete: {
            args: Prisma.RaceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload>
          }
          update: {
            args: Prisma.RaceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload>
          }
          deleteMany: {
            args: Prisma.RaceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RaceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RaceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload>[]
          }
          upsert: {
            args: Prisma.RaceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload>
          }
          aggregate: {
            args: Prisma.RaceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRace>
          }
          groupBy: {
            args: Prisma.RaceGroupByArgs<ExtArgs>
            result: $Utils.Optional<RaceGroupByOutputType>[]
          }
          count: {
            args: Prisma.RaceCountArgs<ExtArgs>
            result: $Utils.Optional<RaceCountAggregateOutputType> | number
          }
        }
      }
      Gender: {
        payload: Prisma.$GenderPayload<ExtArgs>
        fields: Prisma.GenderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GenderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GenderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenderPayload>
          }
          findFirst: {
            args: Prisma.GenderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GenderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenderPayload>
          }
          findMany: {
            args: Prisma.GenderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenderPayload>[]
          }
          create: {
            args: Prisma.GenderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenderPayload>
          }
          createMany: {
            args: Prisma.GenderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GenderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenderPayload>[]
          }
          delete: {
            args: Prisma.GenderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenderPayload>
          }
          update: {
            args: Prisma.GenderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenderPayload>
          }
          deleteMany: {
            args: Prisma.GenderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GenderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GenderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenderPayload>[]
          }
          upsert: {
            args: Prisma.GenderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenderPayload>
          }
          aggregate: {
            args: Prisma.GenderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGender>
          }
          groupBy: {
            args: Prisma.GenderGroupByArgs<ExtArgs>
            result: $Utils.Optional<GenderGroupByOutputType>[]
          }
          count: {
            args: Prisma.GenderCountArgs<ExtArgs>
            result: $Utils.Optional<GenderCountAggregateOutputType> | number
          }
        }
      }
      Discipline: {
        payload: Prisma.$DisciplinePayload<ExtArgs>
        fields: Prisma.DisciplineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DisciplineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DisciplineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinePayload>
          }
          findFirst: {
            args: Prisma.DisciplineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DisciplineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinePayload>
          }
          findMany: {
            args: Prisma.DisciplineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinePayload>[]
          }
          create: {
            args: Prisma.DisciplineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinePayload>
          }
          createMany: {
            args: Prisma.DisciplineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DisciplineCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinePayload>[]
          }
          delete: {
            args: Prisma.DisciplineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinePayload>
          }
          update: {
            args: Prisma.DisciplineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinePayload>
          }
          deleteMany: {
            args: Prisma.DisciplineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DisciplineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DisciplineUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinePayload>[]
          }
          upsert: {
            args: Prisma.DisciplineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinePayload>
          }
          aggregate: {
            args: Prisma.DisciplineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDiscipline>
          }
          groupBy: {
            args: Prisma.DisciplineGroupByArgs<ExtArgs>
            result: $Utils.Optional<DisciplineGroupByOutputType>[]
          }
          count: {
            args: Prisma.DisciplineCountArgs<ExtArgs>
            result: $Utils.Optional<DisciplineCountAggregateOutputType> | number
          }
        }
      }
      Subject: {
        payload: Prisma.$SubjectPayload<ExtArgs>
        fields: Prisma.SubjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          findFirst: {
            args: Prisma.SubjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          findMany: {
            args: Prisma.SubjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>[]
          }
          create: {
            args: Prisma.SubjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          createMany: {
            args: Prisma.SubjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>[]
          }
          delete: {
            args: Prisma.SubjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          update: {
            args: Prisma.SubjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          deleteMany: {
            args: Prisma.SubjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>[]
          }
          upsert: {
            args: Prisma.SubjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          aggregate: {
            args: Prisma.SubjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubject>
          }
          groupBy: {
            args: Prisma.SubjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubjectCountArgs<ExtArgs>
            result: $Utils.Optional<SubjectCountAggregateOutputType> | number
          }
        }
      }
      SubGroup: {
        payload: Prisma.$SubGroupPayload<ExtArgs>
        fields: Prisma.SubGroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubGroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubGroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubGroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubGroupPayload>
          }
          findFirst: {
            args: Prisma.SubGroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubGroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubGroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubGroupPayload>
          }
          findMany: {
            args: Prisma.SubGroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubGroupPayload>[]
          }
          create: {
            args: Prisma.SubGroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubGroupPayload>
          }
          createMany: {
            args: Prisma.SubGroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubGroupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubGroupPayload>[]
          }
          delete: {
            args: Prisma.SubGroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubGroupPayload>
          }
          update: {
            args: Prisma.SubGroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubGroupPayload>
          }
          deleteMany: {
            args: Prisma.SubGroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubGroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubGroupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubGroupPayload>[]
          }
          upsert: {
            args: Prisma.SubGroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubGroupPayload>
          }
          aggregate: {
            args: Prisma.SubGroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubGroup>
          }
          groupBy: {
            args: Prisma.SubGroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubGroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubGroupCountArgs<ExtArgs>
            result: $Utils.Optional<SubGroupCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    year?: YearOmit
    level?: LevelOmit
    school?: SchoolOmit
    race?: RaceOmit
    gender?: GenderOmit
    discipline?: DisciplineOmit
    subject?: SubjectOmit
    subGroup?: SubGroupOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type LevelCountOutputType
   */

  export type LevelCountOutputType = {
    schools: number
    subjects: number
  }

  export type LevelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schools?: boolean | LevelCountOutputTypeCountSchoolsArgs
    subjects?: boolean | LevelCountOutputTypeCountSubjectsArgs
  }

  // Custom InputTypes
  /**
   * LevelCountOutputType without action
   */
  export type LevelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LevelCountOutputType
     */
    select?: LevelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LevelCountOutputType without action
   */
  export type LevelCountOutputTypeCountSchoolsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SchoolWhereInput
  }

  /**
   * LevelCountOutputType without action
   */
  export type LevelCountOutputTypeCountSubjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubjectWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Year
   */

  export type AggregateYear = {
    _count: YearCountAggregateOutputType | null
    _avg: YearAvgAggregateOutputType | null
    _sum: YearSumAggregateOutputType | null
    _min: YearMinAggregateOutputType | null
    _max: YearMaxAggregateOutputType | null
  }

  export type YearAvgAggregateOutputType = {
    id: number | null
  }

  export type YearSumAggregateOutputType = {
    id: number | null
  }

  export type YearMinAggregateOutputType = {
    id: number | null
    schoolYear: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type YearMaxAggregateOutputType = {
    id: number | null
    schoolYear: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type YearCountAggregateOutputType = {
    id: number
    schoolYear: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type YearAvgAggregateInputType = {
    id?: true
  }

  export type YearSumAggregateInputType = {
    id?: true
  }

  export type YearMinAggregateInputType = {
    id?: true
    schoolYear?: true
    createdAt?: true
    updatedAt?: true
  }

  export type YearMaxAggregateInputType = {
    id?: true
    schoolYear?: true
    createdAt?: true
    updatedAt?: true
  }

  export type YearCountAggregateInputType = {
    id?: true
    schoolYear?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type YearAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Year to aggregate.
     */
    where?: YearWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Years to fetch.
     */
    orderBy?: YearOrderByWithRelationInput | YearOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: YearWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Years from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Years.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Years
    **/
    _count?: true | YearCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: YearAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: YearSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: YearMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: YearMaxAggregateInputType
  }

  export type GetYearAggregateType<T extends YearAggregateArgs> = {
        [P in keyof T & keyof AggregateYear]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateYear[P]>
      : GetScalarType<T[P], AggregateYear[P]>
  }




  export type YearGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: YearWhereInput
    orderBy?: YearOrderByWithAggregationInput | YearOrderByWithAggregationInput[]
    by: YearScalarFieldEnum[] | YearScalarFieldEnum
    having?: YearScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: YearCountAggregateInputType | true
    _avg?: YearAvgAggregateInputType
    _sum?: YearSumAggregateInputType
    _min?: YearMinAggregateInputType
    _max?: YearMaxAggregateInputType
  }

  export type YearGroupByOutputType = {
    id: number
    schoolYear: string
    createdAt: Date
    updatedAt: Date
    _count: YearCountAggregateOutputType | null
    _avg: YearAvgAggregateOutputType | null
    _sum: YearSumAggregateOutputType | null
    _min: YearMinAggregateOutputType | null
    _max: YearMaxAggregateOutputType | null
  }

  type GetYearGroupByPayload<T extends YearGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<YearGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof YearGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], YearGroupByOutputType[P]>
            : GetScalarType<T[P], YearGroupByOutputType[P]>
        }
      >
    >


  export type YearSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schoolYear?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["year"]>

  export type YearSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schoolYear?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["year"]>

  export type YearSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schoolYear?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["year"]>

  export type YearSelectScalar = {
    id?: boolean
    schoolYear?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type YearOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "schoolYear" | "createdAt" | "updatedAt", ExtArgs["result"]["year"]>

  export type $YearPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Year"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      schoolYear: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["year"]>
    composites: {}
  }

  type YearGetPayload<S extends boolean | null | undefined | YearDefaultArgs> = $Result.GetResult<Prisma.$YearPayload, S>

  type YearCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<YearFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: YearCountAggregateInputType | true
    }

  export interface YearDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Year'], meta: { name: 'Year' } }
    /**
     * Find zero or one Year that matches the filter.
     * @param {YearFindUniqueArgs} args - Arguments to find a Year
     * @example
     * // Get one Year
     * const year = await prisma.year.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends YearFindUniqueArgs>(args: SelectSubset<T, YearFindUniqueArgs<ExtArgs>>): Prisma__YearClient<$Result.GetResult<Prisma.$YearPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Year that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {YearFindUniqueOrThrowArgs} args - Arguments to find a Year
     * @example
     * // Get one Year
     * const year = await prisma.year.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends YearFindUniqueOrThrowArgs>(args: SelectSubset<T, YearFindUniqueOrThrowArgs<ExtArgs>>): Prisma__YearClient<$Result.GetResult<Prisma.$YearPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Year that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YearFindFirstArgs} args - Arguments to find a Year
     * @example
     * // Get one Year
     * const year = await prisma.year.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends YearFindFirstArgs>(args?: SelectSubset<T, YearFindFirstArgs<ExtArgs>>): Prisma__YearClient<$Result.GetResult<Prisma.$YearPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Year that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YearFindFirstOrThrowArgs} args - Arguments to find a Year
     * @example
     * // Get one Year
     * const year = await prisma.year.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends YearFindFirstOrThrowArgs>(args?: SelectSubset<T, YearFindFirstOrThrowArgs<ExtArgs>>): Prisma__YearClient<$Result.GetResult<Prisma.$YearPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Years that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YearFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Years
     * const years = await prisma.year.findMany()
     * 
     * // Get first 10 Years
     * const years = await prisma.year.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const yearWithIdOnly = await prisma.year.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends YearFindManyArgs>(args?: SelectSubset<T, YearFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$YearPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Year.
     * @param {YearCreateArgs} args - Arguments to create a Year.
     * @example
     * // Create one Year
     * const Year = await prisma.year.create({
     *   data: {
     *     // ... data to create a Year
     *   }
     * })
     * 
     */
    create<T extends YearCreateArgs>(args: SelectSubset<T, YearCreateArgs<ExtArgs>>): Prisma__YearClient<$Result.GetResult<Prisma.$YearPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Years.
     * @param {YearCreateManyArgs} args - Arguments to create many Years.
     * @example
     * // Create many Years
     * const year = await prisma.year.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends YearCreateManyArgs>(args?: SelectSubset<T, YearCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Years and returns the data saved in the database.
     * @param {YearCreateManyAndReturnArgs} args - Arguments to create many Years.
     * @example
     * // Create many Years
     * const year = await prisma.year.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Years and only return the `id`
     * const yearWithIdOnly = await prisma.year.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends YearCreateManyAndReturnArgs>(args?: SelectSubset<T, YearCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$YearPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Year.
     * @param {YearDeleteArgs} args - Arguments to delete one Year.
     * @example
     * // Delete one Year
     * const Year = await prisma.year.delete({
     *   where: {
     *     // ... filter to delete one Year
     *   }
     * })
     * 
     */
    delete<T extends YearDeleteArgs>(args: SelectSubset<T, YearDeleteArgs<ExtArgs>>): Prisma__YearClient<$Result.GetResult<Prisma.$YearPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Year.
     * @param {YearUpdateArgs} args - Arguments to update one Year.
     * @example
     * // Update one Year
     * const year = await prisma.year.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends YearUpdateArgs>(args: SelectSubset<T, YearUpdateArgs<ExtArgs>>): Prisma__YearClient<$Result.GetResult<Prisma.$YearPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Years.
     * @param {YearDeleteManyArgs} args - Arguments to filter Years to delete.
     * @example
     * // Delete a few Years
     * const { count } = await prisma.year.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends YearDeleteManyArgs>(args?: SelectSubset<T, YearDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Years.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YearUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Years
     * const year = await prisma.year.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends YearUpdateManyArgs>(args: SelectSubset<T, YearUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Years and returns the data updated in the database.
     * @param {YearUpdateManyAndReturnArgs} args - Arguments to update many Years.
     * @example
     * // Update many Years
     * const year = await prisma.year.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Years and only return the `id`
     * const yearWithIdOnly = await prisma.year.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends YearUpdateManyAndReturnArgs>(args: SelectSubset<T, YearUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$YearPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Year.
     * @param {YearUpsertArgs} args - Arguments to update or create a Year.
     * @example
     * // Update or create a Year
     * const year = await prisma.year.upsert({
     *   create: {
     *     // ... data to create a Year
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Year we want to update
     *   }
     * })
     */
    upsert<T extends YearUpsertArgs>(args: SelectSubset<T, YearUpsertArgs<ExtArgs>>): Prisma__YearClient<$Result.GetResult<Prisma.$YearPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Years.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YearCountArgs} args - Arguments to filter Years to count.
     * @example
     * // Count the number of Years
     * const count = await prisma.year.count({
     *   where: {
     *     // ... the filter for the Years we want to count
     *   }
     * })
    **/
    count<T extends YearCountArgs>(
      args?: Subset<T, YearCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], YearCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Year.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YearAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends YearAggregateArgs>(args: Subset<T, YearAggregateArgs>): Prisma.PrismaPromise<GetYearAggregateType<T>>

    /**
     * Group by Year.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YearGroupByArgs} args - Group by arguments.
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
      T extends YearGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: YearGroupByArgs['orderBy'] }
        : { orderBy?: YearGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, YearGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetYearGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Year model
   */
  readonly fields: YearFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Year.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__YearClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Year model
   */
  interface YearFieldRefs {
    readonly id: FieldRef<"Year", 'Int'>
    readonly schoolYear: FieldRef<"Year", 'String'>
    readonly createdAt: FieldRef<"Year", 'DateTime'>
    readonly updatedAt: FieldRef<"Year", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Year findUnique
   */
  export type YearFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Year
     */
    select?: YearSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Year
     */
    omit?: YearOmit<ExtArgs> | null
    /**
     * Filter, which Year to fetch.
     */
    where: YearWhereUniqueInput
  }

  /**
   * Year findUniqueOrThrow
   */
  export type YearFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Year
     */
    select?: YearSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Year
     */
    omit?: YearOmit<ExtArgs> | null
    /**
     * Filter, which Year to fetch.
     */
    where: YearWhereUniqueInput
  }

  /**
   * Year findFirst
   */
  export type YearFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Year
     */
    select?: YearSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Year
     */
    omit?: YearOmit<ExtArgs> | null
    /**
     * Filter, which Year to fetch.
     */
    where?: YearWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Years to fetch.
     */
    orderBy?: YearOrderByWithRelationInput | YearOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Years.
     */
    cursor?: YearWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Years from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Years.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Years.
     */
    distinct?: YearScalarFieldEnum | YearScalarFieldEnum[]
  }

  /**
   * Year findFirstOrThrow
   */
  export type YearFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Year
     */
    select?: YearSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Year
     */
    omit?: YearOmit<ExtArgs> | null
    /**
     * Filter, which Year to fetch.
     */
    where?: YearWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Years to fetch.
     */
    orderBy?: YearOrderByWithRelationInput | YearOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Years.
     */
    cursor?: YearWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Years from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Years.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Years.
     */
    distinct?: YearScalarFieldEnum | YearScalarFieldEnum[]
  }

  /**
   * Year findMany
   */
  export type YearFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Year
     */
    select?: YearSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Year
     */
    omit?: YearOmit<ExtArgs> | null
    /**
     * Filter, which Years to fetch.
     */
    where?: YearWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Years to fetch.
     */
    orderBy?: YearOrderByWithRelationInput | YearOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Years.
     */
    cursor?: YearWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Years from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Years.
     */
    skip?: number
    distinct?: YearScalarFieldEnum | YearScalarFieldEnum[]
  }

  /**
   * Year create
   */
  export type YearCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Year
     */
    select?: YearSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Year
     */
    omit?: YearOmit<ExtArgs> | null
    /**
     * The data needed to create a Year.
     */
    data: XOR<YearCreateInput, YearUncheckedCreateInput>
  }

  /**
   * Year createMany
   */
  export type YearCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Years.
     */
    data: YearCreateManyInput | YearCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Year createManyAndReturn
   */
  export type YearCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Year
     */
    select?: YearSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Year
     */
    omit?: YearOmit<ExtArgs> | null
    /**
     * The data used to create many Years.
     */
    data: YearCreateManyInput | YearCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Year update
   */
  export type YearUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Year
     */
    select?: YearSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Year
     */
    omit?: YearOmit<ExtArgs> | null
    /**
     * The data needed to update a Year.
     */
    data: XOR<YearUpdateInput, YearUncheckedUpdateInput>
    /**
     * Choose, which Year to update.
     */
    where: YearWhereUniqueInput
  }

  /**
   * Year updateMany
   */
  export type YearUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Years.
     */
    data: XOR<YearUpdateManyMutationInput, YearUncheckedUpdateManyInput>
    /**
     * Filter which Years to update
     */
    where?: YearWhereInput
    /**
     * Limit how many Years to update.
     */
    limit?: number
  }

  /**
   * Year updateManyAndReturn
   */
  export type YearUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Year
     */
    select?: YearSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Year
     */
    omit?: YearOmit<ExtArgs> | null
    /**
     * The data used to update Years.
     */
    data: XOR<YearUpdateManyMutationInput, YearUncheckedUpdateManyInput>
    /**
     * Filter which Years to update
     */
    where?: YearWhereInput
    /**
     * Limit how many Years to update.
     */
    limit?: number
  }

  /**
   * Year upsert
   */
  export type YearUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Year
     */
    select?: YearSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Year
     */
    omit?: YearOmit<ExtArgs> | null
    /**
     * The filter to search for the Year to update in case it exists.
     */
    where: YearWhereUniqueInput
    /**
     * In case the Year found by the `where` argument doesn't exist, create a new Year with this data.
     */
    create: XOR<YearCreateInput, YearUncheckedCreateInput>
    /**
     * In case the Year was found with the provided `where` argument, update it with this data.
     */
    update: XOR<YearUpdateInput, YearUncheckedUpdateInput>
  }

  /**
   * Year delete
   */
  export type YearDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Year
     */
    select?: YearSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Year
     */
    omit?: YearOmit<ExtArgs> | null
    /**
     * Filter which Year to delete.
     */
    where: YearWhereUniqueInput
  }

  /**
   * Year deleteMany
   */
  export type YearDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Years to delete
     */
    where?: YearWhereInput
    /**
     * Limit how many Years to delete.
     */
    limit?: number
  }

  /**
   * Year without action
   */
  export type YearDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Year
     */
    select?: YearSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Year
     */
    omit?: YearOmit<ExtArgs> | null
  }


  /**
   * Model Level
   */

  export type AggregateLevel = {
    _count: LevelCountAggregateOutputType | null
    _avg: LevelAvgAggregateOutputType | null
    _sum: LevelSumAggregateOutputType | null
    _min: LevelMinAggregateOutputType | null
    _max: LevelMaxAggregateOutputType | null
  }

  export type LevelAvgAggregateOutputType = {
    id: number | null
  }

  export type LevelSumAggregateOutputType = {
    id: number | null
  }

  export type LevelMinAggregateOutputType = {
    id: number | null
    name: string | null
    abbreviation: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LevelMaxAggregateOutputType = {
    id: number | null
    name: string | null
    abbreviation: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LevelCountAggregateOutputType = {
    id: number
    name: number
    abbreviation: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LevelAvgAggregateInputType = {
    id?: true
  }

  export type LevelSumAggregateInputType = {
    id?: true
  }

  export type LevelMinAggregateInputType = {
    id?: true
    name?: true
    abbreviation?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LevelMaxAggregateInputType = {
    id?: true
    name?: true
    abbreviation?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LevelCountAggregateInputType = {
    id?: true
    name?: true
    abbreviation?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LevelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Level to aggregate.
     */
    where?: LevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Levels to fetch.
     */
    orderBy?: LevelOrderByWithRelationInput | LevelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Levels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Levels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Levels
    **/
    _count?: true | LevelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LevelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LevelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LevelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LevelMaxAggregateInputType
  }

  export type GetLevelAggregateType<T extends LevelAggregateArgs> = {
        [P in keyof T & keyof AggregateLevel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLevel[P]>
      : GetScalarType<T[P], AggregateLevel[P]>
  }




  export type LevelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LevelWhereInput
    orderBy?: LevelOrderByWithAggregationInput | LevelOrderByWithAggregationInput[]
    by: LevelScalarFieldEnum[] | LevelScalarFieldEnum
    having?: LevelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LevelCountAggregateInputType | true
    _avg?: LevelAvgAggregateInputType
    _sum?: LevelSumAggregateInputType
    _min?: LevelMinAggregateInputType
    _max?: LevelMaxAggregateInputType
  }

  export type LevelGroupByOutputType = {
    id: number
    name: string
    abbreviation: string
    createdAt: Date
    updatedAt: Date
    _count: LevelCountAggregateOutputType | null
    _avg: LevelAvgAggregateOutputType | null
    _sum: LevelSumAggregateOutputType | null
    _min: LevelMinAggregateOutputType | null
    _max: LevelMaxAggregateOutputType | null
  }

  type GetLevelGroupByPayload<T extends LevelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LevelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LevelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LevelGroupByOutputType[P]>
            : GetScalarType<T[P], LevelGroupByOutputType[P]>
        }
      >
    >


  export type LevelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    abbreviation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    schools?: boolean | Level$schoolsArgs<ExtArgs>
    subjects?: boolean | Level$subjectsArgs<ExtArgs>
    _count?: boolean | LevelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["level"]>

  export type LevelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    abbreviation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["level"]>

  export type LevelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    abbreviation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["level"]>

  export type LevelSelectScalar = {
    id?: boolean
    name?: boolean
    abbreviation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LevelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "abbreviation" | "createdAt" | "updatedAt", ExtArgs["result"]["level"]>
  export type LevelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schools?: boolean | Level$schoolsArgs<ExtArgs>
    subjects?: boolean | Level$subjectsArgs<ExtArgs>
    _count?: boolean | LevelCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LevelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LevelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LevelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Level"
    objects: {
      schools: Prisma.$SchoolPayload<ExtArgs>[]
      subjects: Prisma.$SubjectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      abbreviation: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["level"]>
    composites: {}
  }

  type LevelGetPayload<S extends boolean | null | undefined | LevelDefaultArgs> = $Result.GetResult<Prisma.$LevelPayload, S>

  type LevelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LevelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LevelCountAggregateInputType | true
    }

  export interface LevelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Level'], meta: { name: 'Level' } }
    /**
     * Find zero or one Level that matches the filter.
     * @param {LevelFindUniqueArgs} args - Arguments to find a Level
     * @example
     * // Get one Level
     * const level = await prisma.level.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LevelFindUniqueArgs>(args: SelectSubset<T, LevelFindUniqueArgs<ExtArgs>>): Prisma__LevelClient<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Level that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LevelFindUniqueOrThrowArgs} args - Arguments to find a Level
     * @example
     * // Get one Level
     * const level = await prisma.level.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LevelFindUniqueOrThrowArgs>(args: SelectSubset<T, LevelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LevelClient<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Level that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelFindFirstArgs} args - Arguments to find a Level
     * @example
     * // Get one Level
     * const level = await prisma.level.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LevelFindFirstArgs>(args?: SelectSubset<T, LevelFindFirstArgs<ExtArgs>>): Prisma__LevelClient<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Level that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelFindFirstOrThrowArgs} args - Arguments to find a Level
     * @example
     * // Get one Level
     * const level = await prisma.level.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LevelFindFirstOrThrowArgs>(args?: SelectSubset<T, LevelFindFirstOrThrowArgs<ExtArgs>>): Prisma__LevelClient<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Levels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Levels
     * const levels = await prisma.level.findMany()
     * 
     * // Get first 10 Levels
     * const levels = await prisma.level.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const levelWithIdOnly = await prisma.level.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LevelFindManyArgs>(args?: SelectSubset<T, LevelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Level.
     * @param {LevelCreateArgs} args - Arguments to create a Level.
     * @example
     * // Create one Level
     * const Level = await prisma.level.create({
     *   data: {
     *     // ... data to create a Level
     *   }
     * })
     * 
     */
    create<T extends LevelCreateArgs>(args: SelectSubset<T, LevelCreateArgs<ExtArgs>>): Prisma__LevelClient<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Levels.
     * @param {LevelCreateManyArgs} args - Arguments to create many Levels.
     * @example
     * // Create many Levels
     * const level = await prisma.level.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LevelCreateManyArgs>(args?: SelectSubset<T, LevelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Levels and returns the data saved in the database.
     * @param {LevelCreateManyAndReturnArgs} args - Arguments to create many Levels.
     * @example
     * // Create many Levels
     * const level = await prisma.level.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Levels and only return the `id`
     * const levelWithIdOnly = await prisma.level.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LevelCreateManyAndReturnArgs>(args?: SelectSubset<T, LevelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Level.
     * @param {LevelDeleteArgs} args - Arguments to delete one Level.
     * @example
     * // Delete one Level
     * const Level = await prisma.level.delete({
     *   where: {
     *     // ... filter to delete one Level
     *   }
     * })
     * 
     */
    delete<T extends LevelDeleteArgs>(args: SelectSubset<T, LevelDeleteArgs<ExtArgs>>): Prisma__LevelClient<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Level.
     * @param {LevelUpdateArgs} args - Arguments to update one Level.
     * @example
     * // Update one Level
     * const level = await prisma.level.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LevelUpdateArgs>(args: SelectSubset<T, LevelUpdateArgs<ExtArgs>>): Prisma__LevelClient<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Levels.
     * @param {LevelDeleteManyArgs} args - Arguments to filter Levels to delete.
     * @example
     * // Delete a few Levels
     * const { count } = await prisma.level.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LevelDeleteManyArgs>(args?: SelectSubset<T, LevelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Levels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Levels
     * const level = await prisma.level.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LevelUpdateManyArgs>(args: SelectSubset<T, LevelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Levels and returns the data updated in the database.
     * @param {LevelUpdateManyAndReturnArgs} args - Arguments to update many Levels.
     * @example
     * // Update many Levels
     * const level = await prisma.level.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Levels and only return the `id`
     * const levelWithIdOnly = await prisma.level.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LevelUpdateManyAndReturnArgs>(args: SelectSubset<T, LevelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Level.
     * @param {LevelUpsertArgs} args - Arguments to update or create a Level.
     * @example
     * // Update or create a Level
     * const level = await prisma.level.upsert({
     *   create: {
     *     // ... data to create a Level
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Level we want to update
     *   }
     * })
     */
    upsert<T extends LevelUpsertArgs>(args: SelectSubset<T, LevelUpsertArgs<ExtArgs>>): Prisma__LevelClient<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Levels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelCountArgs} args - Arguments to filter Levels to count.
     * @example
     * // Count the number of Levels
     * const count = await prisma.level.count({
     *   where: {
     *     // ... the filter for the Levels we want to count
     *   }
     * })
    **/
    count<T extends LevelCountArgs>(
      args?: Subset<T, LevelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LevelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Level.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LevelAggregateArgs>(args: Subset<T, LevelAggregateArgs>): Prisma.PrismaPromise<GetLevelAggregateType<T>>

    /**
     * Group by Level.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelGroupByArgs} args - Group by arguments.
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
      T extends LevelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LevelGroupByArgs['orderBy'] }
        : { orderBy?: LevelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LevelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLevelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Level model
   */
  readonly fields: LevelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Level.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LevelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    schools<T extends Level$schoolsArgs<ExtArgs> = {}>(args?: Subset<T, Level$schoolsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    subjects<T extends Level$subjectsArgs<ExtArgs> = {}>(args?: Subset<T, Level$subjectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Level model
   */
  interface LevelFieldRefs {
    readonly id: FieldRef<"Level", 'Int'>
    readonly name: FieldRef<"Level", 'String'>
    readonly abbreviation: FieldRef<"Level", 'String'>
    readonly createdAt: FieldRef<"Level", 'DateTime'>
    readonly updatedAt: FieldRef<"Level", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Level findUnique
   */
  export type LevelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelInclude<ExtArgs> | null
    /**
     * Filter, which Level to fetch.
     */
    where: LevelWhereUniqueInput
  }

  /**
   * Level findUniqueOrThrow
   */
  export type LevelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelInclude<ExtArgs> | null
    /**
     * Filter, which Level to fetch.
     */
    where: LevelWhereUniqueInput
  }

  /**
   * Level findFirst
   */
  export type LevelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelInclude<ExtArgs> | null
    /**
     * Filter, which Level to fetch.
     */
    where?: LevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Levels to fetch.
     */
    orderBy?: LevelOrderByWithRelationInput | LevelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Levels.
     */
    cursor?: LevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Levels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Levels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Levels.
     */
    distinct?: LevelScalarFieldEnum | LevelScalarFieldEnum[]
  }

  /**
   * Level findFirstOrThrow
   */
  export type LevelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelInclude<ExtArgs> | null
    /**
     * Filter, which Level to fetch.
     */
    where?: LevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Levels to fetch.
     */
    orderBy?: LevelOrderByWithRelationInput | LevelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Levels.
     */
    cursor?: LevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Levels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Levels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Levels.
     */
    distinct?: LevelScalarFieldEnum | LevelScalarFieldEnum[]
  }

  /**
   * Level findMany
   */
  export type LevelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelInclude<ExtArgs> | null
    /**
     * Filter, which Levels to fetch.
     */
    where?: LevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Levels to fetch.
     */
    orderBy?: LevelOrderByWithRelationInput | LevelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Levels.
     */
    cursor?: LevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Levels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Levels.
     */
    skip?: number
    distinct?: LevelScalarFieldEnum | LevelScalarFieldEnum[]
  }

  /**
   * Level create
   */
  export type LevelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelInclude<ExtArgs> | null
    /**
     * The data needed to create a Level.
     */
    data: XOR<LevelCreateInput, LevelUncheckedCreateInput>
  }

  /**
   * Level createMany
   */
  export type LevelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Levels.
     */
    data: LevelCreateManyInput | LevelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Level createManyAndReturn
   */
  export type LevelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * The data used to create many Levels.
     */
    data: LevelCreateManyInput | LevelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Level update
   */
  export type LevelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelInclude<ExtArgs> | null
    /**
     * The data needed to update a Level.
     */
    data: XOR<LevelUpdateInput, LevelUncheckedUpdateInput>
    /**
     * Choose, which Level to update.
     */
    where: LevelWhereUniqueInput
  }

  /**
   * Level updateMany
   */
  export type LevelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Levels.
     */
    data: XOR<LevelUpdateManyMutationInput, LevelUncheckedUpdateManyInput>
    /**
     * Filter which Levels to update
     */
    where?: LevelWhereInput
    /**
     * Limit how many Levels to update.
     */
    limit?: number
  }

  /**
   * Level updateManyAndReturn
   */
  export type LevelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * The data used to update Levels.
     */
    data: XOR<LevelUpdateManyMutationInput, LevelUncheckedUpdateManyInput>
    /**
     * Filter which Levels to update
     */
    where?: LevelWhereInput
    /**
     * Limit how many Levels to update.
     */
    limit?: number
  }

  /**
   * Level upsert
   */
  export type LevelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelInclude<ExtArgs> | null
    /**
     * The filter to search for the Level to update in case it exists.
     */
    where: LevelWhereUniqueInput
    /**
     * In case the Level found by the `where` argument doesn't exist, create a new Level with this data.
     */
    create: XOR<LevelCreateInput, LevelUncheckedCreateInput>
    /**
     * In case the Level was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LevelUpdateInput, LevelUncheckedUpdateInput>
  }

  /**
   * Level delete
   */
  export type LevelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelInclude<ExtArgs> | null
    /**
     * Filter which Level to delete.
     */
    where: LevelWhereUniqueInput
  }

  /**
   * Level deleteMany
   */
  export type LevelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Levels to delete
     */
    where?: LevelWhereInput
    /**
     * Limit how many Levels to delete.
     */
    limit?: number
  }

  /**
   * Level.schools
   */
  export type Level$schoolsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    where?: SchoolWhereInput
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    cursor?: SchoolWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SchoolScalarFieldEnum | SchoolScalarFieldEnum[]
  }

  /**
   * Level.subjects
   */
  export type Level$subjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    where?: SubjectWhereInput
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    cursor?: SubjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Level without action
   */
  export type LevelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelInclude<ExtArgs> | null
  }


  /**
   * Model School
   */

  export type AggregateSchool = {
    _count: SchoolCountAggregateOutputType | null
    _avg: SchoolAvgAggregateOutputType | null
    _sum: SchoolSumAggregateOutputType | null
    _min: SchoolMinAggregateOutputType | null
    _max: SchoolMaxAggregateOutputType | null
  }

  export type SchoolAvgAggregateOutputType = {
    id: number | null
    population: number | null
    levelId: number | null
  }

  export type SchoolSumAggregateOutputType = {
    id: number | null
    population: number | null
    levelId: number | null
  }

  export type SchoolMinAggregateOutputType = {
    id: number | null
    name: string | null
    abbreviation: string | null
    otherNames: string | null
    population: number | null
    levelId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SchoolMaxAggregateOutputType = {
    id: number | null
    name: string | null
    abbreviation: string | null
    otherNames: string | null
    population: number | null
    levelId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SchoolCountAggregateOutputType = {
    id: number
    name: number
    abbreviation: number
    otherNames: number
    population: number
    levelId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SchoolAvgAggregateInputType = {
    id?: true
    population?: true
    levelId?: true
  }

  export type SchoolSumAggregateInputType = {
    id?: true
    population?: true
    levelId?: true
  }

  export type SchoolMinAggregateInputType = {
    id?: true
    name?: true
    abbreviation?: true
    otherNames?: true
    population?: true
    levelId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SchoolMaxAggregateInputType = {
    id?: true
    name?: true
    abbreviation?: true
    otherNames?: true
    population?: true
    levelId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SchoolCountAggregateInputType = {
    id?: true
    name?: true
    abbreviation?: true
    otherNames?: true
    population?: true
    levelId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SchoolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which School to aggregate.
     */
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     */
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Schools
    **/
    _count?: true | SchoolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SchoolAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SchoolSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SchoolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SchoolMaxAggregateInputType
  }

  export type GetSchoolAggregateType<T extends SchoolAggregateArgs> = {
        [P in keyof T & keyof AggregateSchool]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchool[P]>
      : GetScalarType<T[P], AggregateSchool[P]>
  }




  export type SchoolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SchoolWhereInput
    orderBy?: SchoolOrderByWithAggregationInput | SchoolOrderByWithAggregationInput[]
    by: SchoolScalarFieldEnum[] | SchoolScalarFieldEnum
    having?: SchoolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SchoolCountAggregateInputType | true
    _avg?: SchoolAvgAggregateInputType
    _sum?: SchoolSumAggregateInputType
    _min?: SchoolMinAggregateInputType
    _max?: SchoolMaxAggregateInputType
  }

  export type SchoolGroupByOutputType = {
    id: number
    name: string
    abbreviation: string
    otherNames: string
    population: number
    levelId: number
    createdAt: Date
    updatedAt: Date
    _count: SchoolCountAggregateOutputType | null
    _avg: SchoolAvgAggregateOutputType | null
    _sum: SchoolSumAggregateOutputType | null
    _min: SchoolMinAggregateOutputType | null
    _max: SchoolMaxAggregateOutputType | null
  }

  type GetSchoolGroupByPayload<T extends SchoolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SchoolGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SchoolGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SchoolGroupByOutputType[P]>
            : GetScalarType<T[P], SchoolGroupByOutputType[P]>
        }
      >
    >


  export type SchoolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    abbreviation?: boolean
    otherNames?: boolean
    population?: boolean
    levelId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    level?: boolean | LevelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["school"]>

  export type SchoolSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    abbreviation?: boolean
    otherNames?: boolean
    population?: boolean
    levelId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    level?: boolean | LevelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["school"]>

  export type SchoolSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    abbreviation?: boolean
    otherNames?: boolean
    population?: boolean
    levelId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    level?: boolean | LevelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["school"]>

  export type SchoolSelectScalar = {
    id?: boolean
    name?: boolean
    abbreviation?: boolean
    otherNames?: boolean
    population?: boolean
    levelId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SchoolOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "abbreviation" | "otherNames" | "population" | "levelId" | "createdAt" | "updatedAt", ExtArgs["result"]["school"]>
  export type SchoolInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    level?: boolean | LevelDefaultArgs<ExtArgs>
  }
  export type SchoolIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    level?: boolean | LevelDefaultArgs<ExtArgs>
  }
  export type SchoolIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    level?: boolean | LevelDefaultArgs<ExtArgs>
  }

  export type $SchoolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "School"
    objects: {
      level: Prisma.$LevelPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      abbreviation: string
      otherNames: string
      population: number
      levelId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["school"]>
    composites: {}
  }

  type SchoolGetPayload<S extends boolean | null | undefined | SchoolDefaultArgs> = $Result.GetResult<Prisma.$SchoolPayload, S>

  type SchoolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SchoolFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SchoolCountAggregateInputType | true
    }

  export interface SchoolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['School'], meta: { name: 'School' } }
    /**
     * Find zero or one School that matches the filter.
     * @param {SchoolFindUniqueArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SchoolFindUniqueArgs>(args: SelectSubset<T, SchoolFindUniqueArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one School that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SchoolFindUniqueOrThrowArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SchoolFindUniqueOrThrowArgs>(args: SelectSubset<T, SchoolFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first School that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolFindFirstArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SchoolFindFirstArgs>(args?: SelectSubset<T, SchoolFindFirstArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first School that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolFindFirstOrThrowArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SchoolFindFirstOrThrowArgs>(args?: SelectSubset<T, SchoolFindFirstOrThrowArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Schools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schools
     * const schools = await prisma.school.findMany()
     * 
     * // Get first 10 Schools
     * const schools = await prisma.school.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const schoolWithIdOnly = await prisma.school.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SchoolFindManyArgs>(args?: SelectSubset<T, SchoolFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a School.
     * @param {SchoolCreateArgs} args - Arguments to create a School.
     * @example
     * // Create one School
     * const School = await prisma.school.create({
     *   data: {
     *     // ... data to create a School
     *   }
     * })
     * 
     */
    create<T extends SchoolCreateArgs>(args: SelectSubset<T, SchoolCreateArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Schools.
     * @param {SchoolCreateManyArgs} args - Arguments to create many Schools.
     * @example
     * // Create many Schools
     * const school = await prisma.school.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SchoolCreateManyArgs>(args?: SelectSubset<T, SchoolCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Schools and returns the data saved in the database.
     * @param {SchoolCreateManyAndReturnArgs} args - Arguments to create many Schools.
     * @example
     * // Create many Schools
     * const school = await prisma.school.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Schools and only return the `id`
     * const schoolWithIdOnly = await prisma.school.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SchoolCreateManyAndReturnArgs>(args?: SelectSubset<T, SchoolCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a School.
     * @param {SchoolDeleteArgs} args - Arguments to delete one School.
     * @example
     * // Delete one School
     * const School = await prisma.school.delete({
     *   where: {
     *     // ... filter to delete one School
     *   }
     * })
     * 
     */
    delete<T extends SchoolDeleteArgs>(args: SelectSubset<T, SchoolDeleteArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one School.
     * @param {SchoolUpdateArgs} args - Arguments to update one School.
     * @example
     * // Update one School
     * const school = await prisma.school.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SchoolUpdateArgs>(args: SelectSubset<T, SchoolUpdateArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Schools.
     * @param {SchoolDeleteManyArgs} args - Arguments to filter Schools to delete.
     * @example
     * // Delete a few Schools
     * const { count } = await prisma.school.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SchoolDeleteManyArgs>(args?: SelectSubset<T, SchoolDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schools
     * const school = await prisma.school.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SchoolUpdateManyArgs>(args: SelectSubset<T, SchoolUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schools and returns the data updated in the database.
     * @param {SchoolUpdateManyAndReturnArgs} args - Arguments to update many Schools.
     * @example
     * // Update many Schools
     * const school = await prisma.school.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Schools and only return the `id`
     * const schoolWithIdOnly = await prisma.school.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SchoolUpdateManyAndReturnArgs>(args: SelectSubset<T, SchoolUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one School.
     * @param {SchoolUpsertArgs} args - Arguments to update or create a School.
     * @example
     * // Update or create a School
     * const school = await prisma.school.upsert({
     *   create: {
     *     // ... data to create a School
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the School we want to update
     *   }
     * })
     */
    upsert<T extends SchoolUpsertArgs>(args: SelectSubset<T, SchoolUpsertArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Schools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolCountArgs} args - Arguments to filter Schools to count.
     * @example
     * // Count the number of Schools
     * const count = await prisma.school.count({
     *   where: {
     *     // ... the filter for the Schools we want to count
     *   }
     * })
    **/
    count<T extends SchoolCountArgs>(
      args?: Subset<T, SchoolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SchoolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a School.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SchoolAggregateArgs>(args: Subset<T, SchoolAggregateArgs>): Prisma.PrismaPromise<GetSchoolAggregateType<T>>

    /**
     * Group by School.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolGroupByArgs} args - Group by arguments.
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
      T extends SchoolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SchoolGroupByArgs['orderBy'] }
        : { orderBy?: SchoolGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SchoolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSchoolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the School model
   */
  readonly fields: SchoolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for School.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SchoolClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    level<T extends LevelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LevelDefaultArgs<ExtArgs>>): Prisma__LevelClient<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the School model
   */
  interface SchoolFieldRefs {
    readonly id: FieldRef<"School", 'Int'>
    readonly name: FieldRef<"School", 'String'>
    readonly abbreviation: FieldRef<"School", 'String'>
    readonly otherNames: FieldRef<"School", 'String'>
    readonly population: FieldRef<"School", 'Int'>
    readonly levelId: FieldRef<"School", 'Int'>
    readonly createdAt: FieldRef<"School", 'DateTime'>
    readonly updatedAt: FieldRef<"School", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * School findUnique
   */
  export type SchoolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which School to fetch.
     */
    where: SchoolWhereUniqueInput
  }

  /**
   * School findUniqueOrThrow
   */
  export type SchoolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which School to fetch.
     */
    where: SchoolWhereUniqueInput
  }

  /**
   * School findFirst
   */
  export type SchoolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which School to fetch.
     */
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     */
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schools.
     */
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schools.
     */
    distinct?: SchoolScalarFieldEnum | SchoolScalarFieldEnum[]
  }

  /**
   * School findFirstOrThrow
   */
  export type SchoolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which School to fetch.
     */
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     */
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schools.
     */
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schools.
     */
    distinct?: SchoolScalarFieldEnum | SchoolScalarFieldEnum[]
  }

  /**
   * School findMany
   */
  export type SchoolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which Schools to fetch.
     */
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     */
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Schools.
     */
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     */
    skip?: number
    distinct?: SchoolScalarFieldEnum | SchoolScalarFieldEnum[]
  }

  /**
   * School create
   */
  export type SchoolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * The data needed to create a School.
     */
    data: XOR<SchoolCreateInput, SchoolUncheckedCreateInput>
  }

  /**
   * School createMany
   */
  export type SchoolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Schools.
     */
    data: SchoolCreateManyInput | SchoolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * School createManyAndReturn
   */
  export type SchoolCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * The data used to create many Schools.
     */
    data: SchoolCreateManyInput | SchoolCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * School update
   */
  export type SchoolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * The data needed to update a School.
     */
    data: XOR<SchoolUpdateInput, SchoolUncheckedUpdateInput>
    /**
     * Choose, which School to update.
     */
    where: SchoolWhereUniqueInput
  }

  /**
   * School updateMany
   */
  export type SchoolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Schools.
     */
    data: XOR<SchoolUpdateManyMutationInput, SchoolUncheckedUpdateManyInput>
    /**
     * Filter which Schools to update
     */
    where?: SchoolWhereInput
    /**
     * Limit how many Schools to update.
     */
    limit?: number
  }

  /**
   * School updateManyAndReturn
   */
  export type SchoolUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * The data used to update Schools.
     */
    data: XOR<SchoolUpdateManyMutationInput, SchoolUncheckedUpdateManyInput>
    /**
     * Filter which Schools to update
     */
    where?: SchoolWhereInput
    /**
     * Limit how many Schools to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * School upsert
   */
  export type SchoolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * The filter to search for the School to update in case it exists.
     */
    where: SchoolWhereUniqueInput
    /**
     * In case the School found by the `where` argument doesn't exist, create a new School with this data.
     */
    create: XOR<SchoolCreateInput, SchoolUncheckedCreateInput>
    /**
     * In case the School was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SchoolUpdateInput, SchoolUncheckedUpdateInput>
  }

  /**
   * School delete
   */
  export type SchoolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter which School to delete.
     */
    where: SchoolWhereUniqueInput
  }

  /**
   * School deleteMany
   */
  export type SchoolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schools to delete
     */
    where?: SchoolWhereInput
    /**
     * Limit how many Schools to delete.
     */
    limit?: number
  }

  /**
   * School without action
   */
  export type SchoolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
  }


  /**
   * Model Race
   */

  export type AggregateRace = {
    _count: RaceCountAggregateOutputType | null
    _avg: RaceAvgAggregateOutputType | null
    _sum: RaceSumAggregateOutputType | null
    _min: RaceMinAggregateOutputType | null
    _max: RaceMaxAggregateOutputType | null
  }

  export type RaceAvgAggregateOutputType = {
    id: number | null
  }

  export type RaceSumAggregateOutputType = {
    id: number | null
  }

  export type RaceMinAggregateOutputType = {
    id: number | null
    name: string | null
    abbreviation: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RaceMaxAggregateOutputType = {
    id: number | null
    name: string | null
    abbreviation: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RaceCountAggregateOutputType = {
    id: number
    name: number
    abbreviation: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RaceAvgAggregateInputType = {
    id?: true
  }

  export type RaceSumAggregateInputType = {
    id?: true
  }

  export type RaceMinAggregateInputType = {
    id?: true
    name?: true
    abbreviation?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RaceMaxAggregateInputType = {
    id?: true
    name?: true
    abbreviation?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RaceCountAggregateInputType = {
    id?: true
    name?: true
    abbreviation?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RaceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Race to aggregate.
     */
    where?: RaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Races to fetch.
     */
    orderBy?: RaceOrderByWithRelationInput | RaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Races from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Races.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Races
    **/
    _count?: true | RaceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RaceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RaceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RaceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RaceMaxAggregateInputType
  }

  export type GetRaceAggregateType<T extends RaceAggregateArgs> = {
        [P in keyof T & keyof AggregateRace]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRace[P]>
      : GetScalarType<T[P], AggregateRace[P]>
  }




  export type RaceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RaceWhereInput
    orderBy?: RaceOrderByWithAggregationInput | RaceOrderByWithAggregationInput[]
    by: RaceScalarFieldEnum[] | RaceScalarFieldEnum
    having?: RaceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RaceCountAggregateInputType | true
    _avg?: RaceAvgAggregateInputType
    _sum?: RaceSumAggregateInputType
    _min?: RaceMinAggregateInputType
    _max?: RaceMaxAggregateInputType
  }

  export type RaceGroupByOutputType = {
    id: number
    name: string
    abbreviation: string
    createdAt: Date
    updatedAt: Date
    _count: RaceCountAggregateOutputType | null
    _avg: RaceAvgAggregateOutputType | null
    _sum: RaceSumAggregateOutputType | null
    _min: RaceMinAggregateOutputType | null
    _max: RaceMaxAggregateOutputType | null
  }

  type GetRaceGroupByPayload<T extends RaceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RaceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RaceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RaceGroupByOutputType[P]>
            : GetScalarType<T[P], RaceGroupByOutputType[P]>
        }
      >
    >


  export type RaceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    abbreviation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["race"]>

  export type RaceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    abbreviation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["race"]>

  export type RaceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    abbreviation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["race"]>

  export type RaceSelectScalar = {
    id?: boolean
    name?: boolean
    abbreviation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RaceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "abbreviation" | "createdAt" | "updatedAt", ExtArgs["result"]["race"]>

  export type $RacePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Race"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      abbreviation: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["race"]>
    composites: {}
  }

  type RaceGetPayload<S extends boolean | null | undefined | RaceDefaultArgs> = $Result.GetResult<Prisma.$RacePayload, S>

  type RaceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RaceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RaceCountAggregateInputType | true
    }

  export interface RaceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Race'], meta: { name: 'Race' } }
    /**
     * Find zero or one Race that matches the filter.
     * @param {RaceFindUniqueArgs} args - Arguments to find a Race
     * @example
     * // Get one Race
     * const race = await prisma.race.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RaceFindUniqueArgs>(args: SelectSubset<T, RaceFindUniqueArgs<ExtArgs>>): Prisma__RaceClient<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Race that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RaceFindUniqueOrThrowArgs} args - Arguments to find a Race
     * @example
     * // Get one Race
     * const race = await prisma.race.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RaceFindUniqueOrThrowArgs>(args: SelectSubset<T, RaceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RaceClient<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Race that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceFindFirstArgs} args - Arguments to find a Race
     * @example
     * // Get one Race
     * const race = await prisma.race.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RaceFindFirstArgs>(args?: SelectSubset<T, RaceFindFirstArgs<ExtArgs>>): Prisma__RaceClient<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Race that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceFindFirstOrThrowArgs} args - Arguments to find a Race
     * @example
     * // Get one Race
     * const race = await prisma.race.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RaceFindFirstOrThrowArgs>(args?: SelectSubset<T, RaceFindFirstOrThrowArgs<ExtArgs>>): Prisma__RaceClient<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Races that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Races
     * const races = await prisma.race.findMany()
     * 
     * // Get first 10 Races
     * const races = await prisma.race.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const raceWithIdOnly = await prisma.race.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RaceFindManyArgs>(args?: SelectSubset<T, RaceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Race.
     * @param {RaceCreateArgs} args - Arguments to create a Race.
     * @example
     * // Create one Race
     * const Race = await prisma.race.create({
     *   data: {
     *     // ... data to create a Race
     *   }
     * })
     * 
     */
    create<T extends RaceCreateArgs>(args: SelectSubset<T, RaceCreateArgs<ExtArgs>>): Prisma__RaceClient<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Races.
     * @param {RaceCreateManyArgs} args - Arguments to create many Races.
     * @example
     * // Create many Races
     * const race = await prisma.race.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RaceCreateManyArgs>(args?: SelectSubset<T, RaceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Races and returns the data saved in the database.
     * @param {RaceCreateManyAndReturnArgs} args - Arguments to create many Races.
     * @example
     * // Create many Races
     * const race = await prisma.race.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Races and only return the `id`
     * const raceWithIdOnly = await prisma.race.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RaceCreateManyAndReturnArgs>(args?: SelectSubset<T, RaceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Race.
     * @param {RaceDeleteArgs} args - Arguments to delete one Race.
     * @example
     * // Delete one Race
     * const Race = await prisma.race.delete({
     *   where: {
     *     // ... filter to delete one Race
     *   }
     * })
     * 
     */
    delete<T extends RaceDeleteArgs>(args: SelectSubset<T, RaceDeleteArgs<ExtArgs>>): Prisma__RaceClient<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Race.
     * @param {RaceUpdateArgs} args - Arguments to update one Race.
     * @example
     * // Update one Race
     * const race = await prisma.race.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RaceUpdateArgs>(args: SelectSubset<T, RaceUpdateArgs<ExtArgs>>): Prisma__RaceClient<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Races.
     * @param {RaceDeleteManyArgs} args - Arguments to filter Races to delete.
     * @example
     * // Delete a few Races
     * const { count } = await prisma.race.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RaceDeleteManyArgs>(args?: SelectSubset<T, RaceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Races.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Races
     * const race = await prisma.race.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RaceUpdateManyArgs>(args: SelectSubset<T, RaceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Races and returns the data updated in the database.
     * @param {RaceUpdateManyAndReturnArgs} args - Arguments to update many Races.
     * @example
     * // Update many Races
     * const race = await prisma.race.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Races and only return the `id`
     * const raceWithIdOnly = await prisma.race.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RaceUpdateManyAndReturnArgs>(args: SelectSubset<T, RaceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Race.
     * @param {RaceUpsertArgs} args - Arguments to update or create a Race.
     * @example
     * // Update or create a Race
     * const race = await prisma.race.upsert({
     *   create: {
     *     // ... data to create a Race
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Race we want to update
     *   }
     * })
     */
    upsert<T extends RaceUpsertArgs>(args: SelectSubset<T, RaceUpsertArgs<ExtArgs>>): Prisma__RaceClient<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Races.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceCountArgs} args - Arguments to filter Races to count.
     * @example
     * // Count the number of Races
     * const count = await prisma.race.count({
     *   where: {
     *     // ... the filter for the Races we want to count
     *   }
     * })
    **/
    count<T extends RaceCountArgs>(
      args?: Subset<T, RaceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RaceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Race.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RaceAggregateArgs>(args: Subset<T, RaceAggregateArgs>): Prisma.PrismaPromise<GetRaceAggregateType<T>>

    /**
     * Group by Race.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceGroupByArgs} args - Group by arguments.
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
      T extends RaceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RaceGroupByArgs['orderBy'] }
        : { orderBy?: RaceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RaceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRaceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Race model
   */
  readonly fields: RaceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Race.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RaceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Race model
   */
  interface RaceFieldRefs {
    readonly id: FieldRef<"Race", 'Int'>
    readonly name: FieldRef<"Race", 'String'>
    readonly abbreviation: FieldRef<"Race", 'String'>
    readonly createdAt: FieldRef<"Race", 'DateTime'>
    readonly updatedAt: FieldRef<"Race", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Race findUnique
   */
  export type RaceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Filter, which Race to fetch.
     */
    where: RaceWhereUniqueInput
  }

  /**
   * Race findUniqueOrThrow
   */
  export type RaceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Filter, which Race to fetch.
     */
    where: RaceWhereUniqueInput
  }

  /**
   * Race findFirst
   */
  export type RaceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Filter, which Race to fetch.
     */
    where?: RaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Races to fetch.
     */
    orderBy?: RaceOrderByWithRelationInput | RaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Races.
     */
    cursor?: RaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Races from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Races.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Races.
     */
    distinct?: RaceScalarFieldEnum | RaceScalarFieldEnum[]
  }

  /**
   * Race findFirstOrThrow
   */
  export type RaceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Filter, which Race to fetch.
     */
    where?: RaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Races to fetch.
     */
    orderBy?: RaceOrderByWithRelationInput | RaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Races.
     */
    cursor?: RaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Races from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Races.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Races.
     */
    distinct?: RaceScalarFieldEnum | RaceScalarFieldEnum[]
  }

  /**
   * Race findMany
   */
  export type RaceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Filter, which Races to fetch.
     */
    where?: RaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Races to fetch.
     */
    orderBy?: RaceOrderByWithRelationInput | RaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Races.
     */
    cursor?: RaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Races from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Races.
     */
    skip?: number
    distinct?: RaceScalarFieldEnum | RaceScalarFieldEnum[]
  }

  /**
   * Race create
   */
  export type RaceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * The data needed to create a Race.
     */
    data: XOR<RaceCreateInput, RaceUncheckedCreateInput>
  }

  /**
   * Race createMany
   */
  export type RaceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Races.
     */
    data: RaceCreateManyInput | RaceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Race createManyAndReturn
   */
  export type RaceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * The data used to create many Races.
     */
    data: RaceCreateManyInput | RaceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Race update
   */
  export type RaceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * The data needed to update a Race.
     */
    data: XOR<RaceUpdateInput, RaceUncheckedUpdateInput>
    /**
     * Choose, which Race to update.
     */
    where: RaceWhereUniqueInput
  }

  /**
   * Race updateMany
   */
  export type RaceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Races.
     */
    data: XOR<RaceUpdateManyMutationInput, RaceUncheckedUpdateManyInput>
    /**
     * Filter which Races to update
     */
    where?: RaceWhereInput
    /**
     * Limit how many Races to update.
     */
    limit?: number
  }

  /**
   * Race updateManyAndReturn
   */
  export type RaceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * The data used to update Races.
     */
    data: XOR<RaceUpdateManyMutationInput, RaceUncheckedUpdateManyInput>
    /**
     * Filter which Races to update
     */
    where?: RaceWhereInput
    /**
     * Limit how many Races to update.
     */
    limit?: number
  }

  /**
   * Race upsert
   */
  export type RaceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * The filter to search for the Race to update in case it exists.
     */
    where: RaceWhereUniqueInput
    /**
     * In case the Race found by the `where` argument doesn't exist, create a new Race with this data.
     */
    create: XOR<RaceCreateInput, RaceUncheckedCreateInput>
    /**
     * In case the Race was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RaceUpdateInput, RaceUncheckedUpdateInput>
  }

  /**
   * Race delete
   */
  export type RaceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Filter which Race to delete.
     */
    where: RaceWhereUniqueInput
  }

  /**
   * Race deleteMany
   */
  export type RaceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Races to delete
     */
    where?: RaceWhereInput
    /**
     * Limit how many Races to delete.
     */
    limit?: number
  }

  /**
   * Race without action
   */
  export type RaceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
  }


  /**
   * Model Gender
   */

  export type AggregateGender = {
    _count: GenderCountAggregateOutputType | null
    _avg: GenderAvgAggregateOutputType | null
    _sum: GenderSumAggregateOutputType | null
    _min: GenderMinAggregateOutputType | null
    _max: GenderMaxAggregateOutputType | null
  }

  export type GenderAvgAggregateOutputType = {
    id: number | null
  }

  export type GenderSumAggregateOutputType = {
    id: number | null
  }

  export type GenderMinAggregateOutputType = {
    id: number | null
    name: string | null
    abbreviation: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GenderMaxAggregateOutputType = {
    id: number | null
    name: string | null
    abbreviation: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GenderCountAggregateOutputType = {
    id: number
    name: number
    abbreviation: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GenderAvgAggregateInputType = {
    id?: true
  }

  export type GenderSumAggregateInputType = {
    id?: true
  }

  export type GenderMinAggregateInputType = {
    id?: true
    name?: true
    abbreviation?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GenderMaxAggregateInputType = {
    id?: true
    name?: true
    abbreviation?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GenderCountAggregateInputType = {
    id?: true
    name?: true
    abbreviation?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GenderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Gender to aggregate.
     */
    where?: GenderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genders to fetch.
     */
    orderBy?: GenderOrderByWithRelationInput | GenderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GenderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Genders
    **/
    _count?: true | GenderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GenderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GenderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GenderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GenderMaxAggregateInputType
  }

  export type GetGenderAggregateType<T extends GenderAggregateArgs> = {
        [P in keyof T & keyof AggregateGender]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGender[P]>
      : GetScalarType<T[P], AggregateGender[P]>
  }




  export type GenderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GenderWhereInput
    orderBy?: GenderOrderByWithAggregationInput | GenderOrderByWithAggregationInput[]
    by: GenderScalarFieldEnum[] | GenderScalarFieldEnum
    having?: GenderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GenderCountAggregateInputType | true
    _avg?: GenderAvgAggregateInputType
    _sum?: GenderSumAggregateInputType
    _min?: GenderMinAggregateInputType
    _max?: GenderMaxAggregateInputType
  }

  export type GenderGroupByOutputType = {
    id: number
    name: string
    abbreviation: string
    createdAt: Date
    updatedAt: Date
    _count: GenderCountAggregateOutputType | null
    _avg: GenderAvgAggregateOutputType | null
    _sum: GenderSumAggregateOutputType | null
    _min: GenderMinAggregateOutputType | null
    _max: GenderMaxAggregateOutputType | null
  }

  type GetGenderGroupByPayload<T extends GenderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GenderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GenderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GenderGroupByOutputType[P]>
            : GetScalarType<T[P], GenderGroupByOutputType[P]>
        }
      >
    >


  export type GenderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    abbreviation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["gender"]>

  export type GenderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    abbreviation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["gender"]>

  export type GenderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    abbreviation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["gender"]>

  export type GenderSelectScalar = {
    id?: boolean
    name?: boolean
    abbreviation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GenderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "abbreviation" | "createdAt" | "updatedAt", ExtArgs["result"]["gender"]>

  export type $GenderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Gender"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      abbreviation: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["gender"]>
    composites: {}
  }

  type GenderGetPayload<S extends boolean | null | undefined | GenderDefaultArgs> = $Result.GetResult<Prisma.$GenderPayload, S>

  type GenderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GenderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GenderCountAggregateInputType | true
    }

  export interface GenderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Gender'], meta: { name: 'Gender' } }
    /**
     * Find zero or one Gender that matches the filter.
     * @param {GenderFindUniqueArgs} args - Arguments to find a Gender
     * @example
     * // Get one Gender
     * const gender = await prisma.gender.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GenderFindUniqueArgs>(args: SelectSubset<T, GenderFindUniqueArgs<ExtArgs>>): Prisma__GenderClient<$Result.GetResult<Prisma.$GenderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Gender that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GenderFindUniqueOrThrowArgs} args - Arguments to find a Gender
     * @example
     * // Get one Gender
     * const gender = await prisma.gender.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GenderFindUniqueOrThrowArgs>(args: SelectSubset<T, GenderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GenderClient<$Result.GetResult<Prisma.$GenderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gender that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenderFindFirstArgs} args - Arguments to find a Gender
     * @example
     * // Get one Gender
     * const gender = await prisma.gender.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GenderFindFirstArgs>(args?: SelectSubset<T, GenderFindFirstArgs<ExtArgs>>): Prisma__GenderClient<$Result.GetResult<Prisma.$GenderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gender that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenderFindFirstOrThrowArgs} args - Arguments to find a Gender
     * @example
     * // Get one Gender
     * const gender = await prisma.gender.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GenderFindFirstOrThrowArgs>(args?: SelectSubset<T, GenderFindFirstOrThrowArgs<ExtArgs>>): Prisma__GenderClient<$Result.GetResult<Prisma.$GenderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Genders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Genders
     * const genders = await prisma.gender.findMany()
     * 
     * // Get first 10 Genders
     * const genders = await prisma.gender.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const genderWithIdOnly = await prisma.gender.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GenderFindManyArgs>(args?: SelectSubset<T, GenderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Gender.
     * @param {GenderCreateArgs} args - Arguments to create a Gender.
     * @example
     * // Create one Gender
     * const Gender = await prisma.gender.create({
     *   data: {
     *     // ... data to create a Gender
     *   }
     * })
     * 
     */
    create<T extends GenderCreateArgs>(args: SelectSubset<T, GenderCreateArgs<ExtArgs>>): Prisma__GenderClient<$Result.GetResult<Prisma.$GenderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Genders.
     * @param {GenderCreateManyArgs} args - Arguments to create many Genders.
     * @example
     * // Create many Genders
     * const gender = await prisma.gender.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GenderCreateManyArgs>(args?: SelectSubset<T, GenderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Genders and returns the data saved in the database.
     * @param {GenderCreateManyAndReturnArgs} args - Arguments to create many Genders.
     * @example
     * // Create many Genders
     * const gender = await prisma.gender.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Genders and only return the `id`
     * const genderWithIdOnly = await prisma.gender.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GenderCreateManyAndReturnArgs>(args?: SelectSubset<T, GenderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Gender.
     * @param {GenderDeleteArgs} args - Arguments to delete one Gender.
     * @example
     * // Delete one Gender
     * const Gender = await prisma.gender.delete({
     *   where: {
     *     // ... filter to delete one Gender
     *   }
     * })
     * 
     */
    delete<T extends GenderDeleteArgs>(args: SelectSubset<T, GenderDeleteArgs<ExtArgs>>): Prisma__GenderClient<$Result.GetResult<Prisma.$GenderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Gender.
     * @param {GenderUpdateArgs} args - Arguments to update one Gender.
     * @example
     * // Update one Gender
     * const gender = await prisma.gender.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GenderUpdateArgs>(args: SelectSubset<T, GenderUpdateArgs<ExtArgs>>): Prisma__GenderClient<$Result.GetResult<Prisma.$GenderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Genders.
     * @param {GenderDeleteManyArgs} args - Arguments to filter Genders to delete.
     * @example
     * // Delete a few Genders
     * const { count } = await prisma.gender.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GenderDeleteManyArgs>(args?: SelectSubset<T, GenderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Genders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Genders
     * const gender = await prisma.gender.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GenderUpdateManyArgs>(args: SelectSubset<T, GenderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Genders and returns the data updated in the database.
     * @param {GenderUpdateManyAndReturnArgs} args - Arguments to update many Genders.
     * @example
     * // Update many Genders
     * const gender = await prisma.gender.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Genders and only return the `id`
     * const genderWithIdOnly = await prisma.gender.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GenderUpdateManyAndReturnArgs>(args: SelectSubset<T, GenderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Gender.
     * @param {GenderUpsertArgs} args - Arguments to update or create a Gender.
     * @example
     * // Update or create a Gender
     * const gender = await prisma.gender.upsert({
     *   create: {
     *     // ... data to create a Gender
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Gender we want to update
     *   }
     * })
     */
    upsert<T extends GenderUpsertArgs>(args: SelectSubset<T, GenderUpsertArgs<ExtArgs>>): Prisma__GenderClient<$Result.GetResult<Prisma.$GenderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Genders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenderCountArgs} args - Arguments to filter Genders to count.
     * @example
     * // Count the number of Genders
     * const count = await prisma.gender.count({
     *   where: {
     *     // ... the filter for the Genders we want to count
     *   }
     * })
    **/
    count<T extends GenderCountArgs>(
      args?: Subset<T, GenderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GenderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Gender.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GenderAggregateArgs>(args: Subset<T, GenderAggregateArgs>): Prisma.PrismaPromise<GetGenderAggregateType<T>>

    /**
     * Group by Gender.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenderGroupByArgs} args - Group by arguments.
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
      T extends GenderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GenderGroupByArgs['orderBy'] }
        : { orderBy?: GenderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GenderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGenderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Gender model
   */
  readonly fields: GenderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Gender.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GenderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Gender model
   */
  interface GenderFieldRefs {
    readonly id: FieldRef<"Gender", 'Int'>
    readonly name: FieldRef<"Gender", 'String'>
    readonly abbreviation: FieldRef<"Gender", 'String'>
    readonly createdAt: FieldRef<"Gender", 'DateTime'>
    readonly updatedAt: FieldRef<"Gender", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Gender findUnique
   */
  export type GenderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gender
     */
    select?: GenderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gender
     */
    omit?: GenderOmit<ExtArgs> | null
    /**
     * Filter, which Gender to fetch.
     */
    where: GenderWhereUniqueInput
  }

  /**
   * Gender findUniqueOrThrow
   */
  export type GenderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gender
     */
    select?: GenderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gender
     */
    omit?: GenderOmit<ExtArgs> | null
    /**
     * Filter, which Gender to fetch.
     */
    where: GenderWhereUniqueInput
  }

  /**
   * Gender findFirst
   */
  export type GenderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gender
     */
    select?: GenderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gender
     */
    omit?: GenderOmit<ExtArgs> | null
    /**
     * Filter, which Gender to fetch.
     */
    where?: GenderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genders to fetch.
     */
    orderBy?: GenderOrderByWithRelationInput | GenderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Genders.
     */
    cursor?: GenderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Genders.
     */
    distinct?: GenderScalarFieldEnum | GenderScalarFieldEnum[]
  }

  /**
   * Gender findFirstOrThrow
   */
  export type GenderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gender
     */
    select?: GenderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gender
     */
    omit?: GenderOmit<ExtArgs> | null
    /**
     * Filter, which Gender to fetch.
     */
    where?: GenderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genders to fetch.
     */
    orderBy?: GenderOrderByWithRelationInput | GenderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Genders.
     */
    cursor?: GenderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Genders.
     */
    distinct?: GenderScalarFieldEnum | GenderScalarFieldEnum[]
  }

  /**
   * Gender findMany
   */
  export type GenderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gender
     */
    select?: GenderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gender
     */
    omit?: GenderOmit<ExtArgs> | null
    /**
     * Filter, which Genders to fetch.
     */
    where?: GenderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genders to fetch.
     */
    orderBy?: GenderOrderByWithRelationInput | GenderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Genders.
     */
    cursor?: GenderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genders.
     */
    skip?: number
    distinct?: GenderScalarFieldEnum | GenderScalarFieldEnum[]
  }

  /**
   * Gender create
   */
  export type GenderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gender
     */
    select?: GenderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gender
     */
    omit?: GenderOmit<ExtArgs> | null
    /**
     * The data needed to create a Gender.
     */
    data: XOR<GenderCreateInput, GenderUncheckedCreateInput>
  }

  /**
   * Gender createMany
   */
  export type GenderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Genders.
     */
    data: GenderCreateManyInput | GenderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Gender createManyAndReturn
   */
  export type GenderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gender
     */
    select?: GenderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Gender
     */
    omit?: GenderOmit<ExtArgs> | null
    /**
     * The data used to create many Genders.
     */
    data: GenderCreateManyInput | GenderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Gender update
   */
  export type GenderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gender
     */
    select?: GenderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gender
     */
    omit?: GenderOmit<ExtArgs> | null
    /**
     * The data needed to update a Gender.
     */
    data: XOR<GenderUpdateInput, GenderUncheckedUpdateInput>
    /**
     * Choose, which Gender to update.
     */
    where: GenderWhereUniqueInput
  }

  /**
   * Gender updateMany
   */
  export type GenderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Genders.
     */
    data: XOR<GenderUpdateManyMutationInput, GenderUncheckedUpdateManyInput>
    /**
     * Filter which Genders to update
     */
    where?: GenderWhereInput
    /**
     * Limit how many Genders to update.
     */
    limit?: number
  }

  /**
   * Gender updateManyAndReturn
   */
  export type GenderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gender
     */
    select?: GenderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Gender
     */
    omit?: GenderOmit<ExtArgs> | null
    /**
     * The data used to update Genders.
     */
    data: XOR<GenderUpdateManyMutationInput, GenderUncheckedUpdateManyInput>
    /**
     * Filter which Genders to update
     */
    where?: GenderWhereInput
    /**
     * Limit how many Genders to update.
     */
    limit?: number
  }

  /**
   * Gender upsert
   */
  export type GenderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gender
     */
    select?: GenderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gender
     */
    omit?: GenderOmit<ExtArgs> | null
    /**
     * The filter to search for the Gender to update in case it exists.
     */
    where: GenderWhereUniqueInput
    /**
     * In case the Gender found by the `where` argument doesn't exist, create a new Gender with this data.
     */
    create: XOR<GenderCreateInput, GenderUncheckedCreateInput>
    /**
     * In case the Gender was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GenderUpdateInput, GenderUncheckedUpdateInput>
  }

  /**
   * Gender delete
   */
  export type GenderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gender
     */
    select?: GenderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gender
     */
    omit?: GenderOmit<ExtArgs> | null
    /**
     * Filter which Gender to delete.
     */
    where: GenderWhereUniqueInput
  }

  /**
   * Gender deleteMany
   */
  export type GenderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Genders to delete
     */
    where?: GenderWhereInput
    /**
     * Limit how many Genders to delete.
     */
    limit?: number
  }

  /**
   * Gender without action
   */
  export type GenderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gender
     */
    select?: GenderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gender
     */
    omit?: GenderOmit<ExtArgs> | null
  }


  /**
   * Model Discipline
   */

  export type AggregateDiscipline = {
    _count: DisciplineCountAggregateOutputType | null
    _avg: DisciplineAvgAggregateOutputType | null
    _sum: DisciplineSumAggregateOutputType | null
    _min: DisciplineMinAggregateOutputType | null
    _max: DisciplineMaxAggregateOutputType | null
  }

  export type DisciplineAvgAggregateOutputType = {
    id: number | null
  }

  export type DisciplineSumAggregateOutputType = {
    id: number | null
  }

  export type DisciplineMinAggregateOutputType = {
    id: number | null
    name: string | null
    abbreviation: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DisciplineMaxAggregateOutputType = {
    id: number | null
    name: string | null
    abbreviation: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DisciplineCountAggregateOutputType = {
    id: number
    name: number
    abbreviation: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DisciplineAvgAggregateInputType = {
    id?: true
  }

  export type DisciplineSumAggregateInputType = {
    id?: true
  }

  export type DisciplineMinAggregateInputType = {
    id?: true
    name?: true
    abbreviation?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DisciplineMaxAggregateInputType = {
    id?: true
    name?: true
    abbreviation?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DisciplineCountAggregateInputType = {
    id?: true
    name?: true
    abbreviation?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DisciplineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Discipline to aggregate.
     */
    where?: DisciplineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disciplines to fetch.
     */
    orderBy?: DisciplineOrderByWithRelationInput | DisciplineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DisciplineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disciplines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disciplines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Disciplines
    **/
    _count?: true | DisciplineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DisciplineAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DisciplineSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DisciplineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DisciplineMaxAggregateInputType
  }

  export type GetDisciplineAggregateType<T extends DisciplineAggregateArgs> = {
        [P in keyof T & keyof AggregateDiscipline]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiscipline[P]>
      : GetScalarType<T[P], AggregateDiscipline[P]>
  }




  export type DisciplineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DisciplineWhereInput
    orderBy?: DisciplineOrderByWithAggregationInput | DisciplineOrderByWithAggregationInput[]
    by: DisciplineScalarFieldEnum[] | DisciplineScalarFieldEnum
    having?: DisciplineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DisciplineCountAggregateInputType | true
    _avg?: DisciplineAvgAggregateInputType
    _sum?: DisciplineSumAggregateInputType
    _min?: DisciplineMinAggregateInputType
    _max?: DisciplineMaxAggregateInputType
  }

  export type DisciplineGroupByOutputType = {
    id: number
    name: string
    abbreviation: string
    createdAt: Date
    updatedAt: Date
    _count: DisciplineCountAggregateOutputType | null
    _avg: DisciplineAvgAggregateOutputType | null
    _sum: DisciplineSumAggregateOutputType | null
    _min: DisciplineMinAggregateOutputType | null
    _max: DisciplineMaxAggregateOutputType | null
  }

  type GetDisciplineGroupByPayload<T extends DisciplineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DisciplineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DisciplineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DisciplineGroupByOutputType[P]>
            : GetScalarType<T[P], DisciplineGroupByOutputType[P]>
        }
      >
    >


  export type DisciplineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    abbreviation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["discipline"]>

  export type DisciplineSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    abbreviation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["discipline"]>

  export type DisciplineSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    abbreviation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["discipline"]>

  export type DisciplineSelectScalar = {
    id?: boolean
    name?: boolean
    abbreviation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DisciplineOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "abbreviation" | "createdAt" | "updatedAt", ExtArgs["result"]["discipline"]>

  export type $DisciplinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Discipline"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      abbreviation: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["discipline"]>
    composites: {}
  }

  type DisciplineGetPayload<S extends boolean | null | undefined | DisciplineDefaultArgs> = $Result.GetResult<Prisma.$DisciplinePayload, S>

  type DisciplineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DisciplineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DisciplineCountAggregateInputType | true
    }

  export interface DisciplineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Discipline'], meta: { name: 'Discipline' } }
    /**
     * Find zero or one Discipline that matches the filter.
     * @param {DisciplineFindUniqueArgs} args - Arguments to find a Discipline
     * @example
     * // Get one Discipline
     * const discipline = await prisma.discipline.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DisciplineFindUniqueArgs>(args: SelectSubset<T, DisciplineFindUniqueArgs<ExtArgs>>): Prisma__DisciplineClient<$Result.GetResult<Prisma.$DisciplinePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Discipline that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DisciplineFindUniqueOrThrowArgs} args - Arguments to find a Discipline
     * @example
     * // Get one Discipline
     * const discipline = await prisma.discipline.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DisciplineFindUniqueOrThrowArgs>(args: SelectSubset<T, DisciplineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DisciplineClient<$Result.GetResult<Prisma.$DisciplinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Discipline that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplineFindFirstArgs} args - Arguments to find a Discipline
     * @example
     * // Get one Discipline
     * const discipline = await prisma.discipline.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DisciplineFindFirstArgs>(args?: SelectSubset<T, DisciplineFindFirstArgs<ExtArgs>>): Prisma__DisciplineClient<$Result.GetResult<Prisma.$DisciplinePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Discipline that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplineFindFirstOrThrowArgs} args - Arguments to find a Discipline
     * @example
     * // Get one Discipline
     * const discipline = await prisma.discipline.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DisciplineFindFirstOrThrowArgs>(args?: SelectSubset<T, DisciplineFindFirstOrThrowArgs<ExtArgs>>): Prisma__DisciplineClient<$Result.GetResult<Prisma.$DisciplinePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Disciplines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Disciplines
     * const disciplines = await prisma.discipline.findMany()
     * 
     * // Get first 10 Disciplines
     * const disciplines = await prisma.discipline.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const disciplineWithIdOnly = await prisma.discipline.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DisciplineFindManyArgs>(args?: SelectSubset<T, DisciplineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisciplinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Discipline.
     * @param {DisciplineCreateArgs} args - Arguments to create a Discipline.
     * @example
     * // Create one Discipline
     * const Discipline = await prisma.discipline.create({
     *   data: {
     *     // ... data to create a Discipline
     *   }
     * })
     * 
     */
    create<T extends DisciplineCreateArgs>(args: SelectSubset<T, DisciplineCreateArgs<ExtArgs>>): Prisma__DisciplineClient<$Result.GetResult<Prisma.$DisciplinePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Disciplines.
     * @param {DisciplineCreateManyArgs} args - Arguments to create many Disciplines.
     * @example
     * // Create many Disciplines
     * const discipline = await prisma.discipline.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DisciplineCreateManyArgs>(args?: SelectSubset<T, DisciplineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Disciplines and returns the data saved in the database.
     * @param {DisciplineCreateManyAndReturnArgs} args - Arguments to create many Disciplines.
     * @example
     * // Create many Disciplines
     * const discipline = await prisma.discipline.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Disciplines and only return the `id`
     * const disciplineWithIdOnly = await prisma.discipline.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DisciplineCreateManyAndReturnArgs>(args?: SelectSubset<T, DisciplineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisciplinePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Discipline.
     * @param {DisciplineDeleteArgs} args - Arguments to delete one Discipline.
     * @example
     * // Delete one Discipline
     * const Discipline = await prisma.discipline.delete({
     *   where: {
     *     // ... filter to delete one Discipline
     *   }
     * })
     * 
     */
    delete<T extends DisciplineDeleteArgs>(args: SelectSubset<T, DisciplineDeleteArgs<ExtArgs>>): Prisma__DisciplineClient<$Result.GetResult<Prisma.$DisciplinePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Discipline.
     * @param {DisciplineUpdateArgs} args - Arguments to update one Discipline.
     * @example
     * // Update one Discipline
     * const discipline = await prisma.discipline.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DisciplineUpdateArgs>(args: SelectSubset<T, DisciplineUpdateArgs<ExtArgs>>): Prisma__DisciplineClient<$Result.GetResult<Prisma.$DisciplinePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Disciplines.
     * @param {DisciplineDeleteManyArgs} args - Arguments to filter Disciplines to delete.
     * @example
     * // Delete a few Disciplines
     * const { count } = await prisma.discipline.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DisciplineDeleteManyArgs>(args?: SelectSubset<T, DisciplineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Disciplines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Disciplines
     * const discipline = await prisma.discipline.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DisciplineUpdateManyArgs>(args: SelectSubset<T, DisciplineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Disciplines and returns the data updated in the database.
     * @param {DisciplineUpdateManyAndReturnArgs} args - Arguments to update many Disciplines.
     * @example
     * // Update many Disciplines
     * const discipline = await prisma.discipline.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Disciplines and only return the `id`
     * const disciplineWithIdOnly = await prisma.discipline.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DisciplineUpdateManyAndReturnArgs>(args: SelectSubset<T, DisciplineUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisciplinePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Discipline.
     * @param {DisciplineUpsertArgs} args - Arguments to update or create a Discipline.
     * @example
     * // Update or create a Discipline
     * const discipline = await prisma.discipline.upsert({
     *   create: {
     *     // ... data to create a Discipline
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Discipline we want to update
     *   }
     * })
     */
    upsert<T extends DisciplineUpsertArgs>(args: SelectSubset<T, DisciplineUpsertArgs<ExtArgs>>): Prisma__DisciplineClient<$Result.GetResult<Prisma.$DisciplinePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Disciplines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplineCountArgs} args - Arguments to filter Disciplines to count.
     * @example
     * // Count the number of Disciplines
     * const count = await prisma.discipline.count({
     *   where: {
     *     // ... the filter for the Disciplines we want to count
     *   }
     * })
    **/
    count<T extends DisciplineCountArgs>(
      args?: Subset<T, DisciplineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DisciplineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Discipline.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DisciplineAggregateArgs>(args: Subset<T, DisciplineAggregateArgs>): Prisma.PrismaPromise<GetDisciplineAggregateType<T>>

    /**
     * Group by Discipline.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplineGroupByArgs} args - Group by arguments.
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
      T extends DisciplineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DisciplineGroupByArgs['orderBy'] }
        : { orderBy?: DisciplineGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DisciplineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDisciplineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Discipline model
   */
  readonly fields: DisciplineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Discipline.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DisciplineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Discipline model
   */
  interface DisciplineFieldRefs {
    readonly id: FieldRef<"Discipline", 'Int'>
    readonly name: FieldRef<"Discipline", 'String'>
    readonly abbreviation: FieldRef<"Discipline", 'String'>
    readonly createdAt: FieldRef<"Discipline", 'DateTime'>
    readonly updatedAt: FieldRef<"Discipline", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Discipline findUnique
   */
  export type DisciplineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discipline
     */
    select?: DisciplineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discipline
     */
    omit?: DisciplineOmit<ExtArgs> | null
    /**
     * Filter, which Discipline to fetch.
     */
    where: DisciplineWhereUniqueInput
  }

  /**
   * Discipline findUniqueOrThrow
   */
  export type DisciplineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discipline
     */
    select?: DisciplineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discipline
     */
    omit?: DisciplineOmit<ExtArgs> | null
    /**
     * Filter, which Discipline to fetch.
     */
    where: DisciplineWhereUniqueInput
  }

  /**
   * Discipline findFirst
   */
  export type DisciplineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discipline
     */
    select?: DisciplineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discipline
     */
    omit?: DisciplineOmit<ExtArgs> | null
    /**
     * Filter, which Discipline to fetch.
     */
    where?: DisciplineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disciplines to fetch.
     */
    orderBy?: DisciplineOrderByWithRelationInput | DisciplineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Disciplines.
     */
    cursor?: DisciplineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disciplines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disciplines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Disciplines.
     */
    distinct?: DisciplineScalarFieldEnum | DisciplineScalarFieldEnum[]
  }

  /**
   * Discipline findFirstOrThrow
   */
  export type DisciplineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discipline
     */
    select?: DisciplineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discipline
     */
    omit?: DisciplineOmit<ExtArgs> | null
    /**
     * Filter, which Discipline to fetch.
     */
    where?: DisciplineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disciplines to fetch.
     */
    orderBy?: DisciplineOrderByWithRelationInput | DisciplineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Disciplines.
     */
    cursor?: DisciplineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disciplines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disciplines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Disciplines.
     */
    distinct?: DisciplineScalarFieldEnum | DisciplineScalarFieldEnum[]
  }

  /**
   * Discipline findMany
   */
  export type DisciplineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discipline
     */
    select?: DisciplineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discipline
     */
    omit?: DisciplineOmit<ExtArgs> | null
    /**
     * Filter, which Disciplines to fetch.
     */
    where?: DisciplineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disciplines to fetch.
     */
    orderBy?: DisciplineOrderByWithRelationInput | DisciplineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Disciplines.
     */
    cursor?: DisciplineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disciplines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disciplines.
     */
    skip?: number
    distinct?: DisciplineScalarFieldEnum | DisciplineScalarFieldEnum[]
  }

  /**
   * Discipline create
   */
  export type DisciplineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discipline
     */
    select?: DisciplineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discipline
     */
    omit?: DisciplineOmit<ExtArgs> | null
    /**
     * The data needed to create a Discipline.
     */
    data: XOR<DisciplineCreateInput, DisciplineUncheckedCreateInput>
  }

  /**
   * Discipline createMany
   */
  export type DisciplineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Disciplines.
     */
    data: DisciplineCreateManyInput | DisciplineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Discipline createManyAndReturn
   */
  export type DisciplineCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discipline
     */
    select?: DisciplineSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Discipline
     */
    omit?: DisciplineOmit<ExtArgs> | null
    /**
     * The data used to create many Disciplines.
     */
    data: DisciplineCreateManyInput | DisciplineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Discipline update
   */
  export type DisciplineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discipline
     */
    select?: DisciplineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discipline
     */
    omit?: DisciplineOmit<ExtArgs> | null
    /**
     * The data needed to update a Discipline.
     */
    data: XOR<DisciplineUpdateInput, DisciplineUncheckedUpdateInput>
    /**
     * Choose, which Discipline to update.
     */
    where: DisciplineWhereUniqueInput
  }

  /**
   * Discipline updateMany
   */
  export type DisciplineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Disciplines.
     */
    data: XOR<DisciplineUpdateManyMutationInput, DisciplineUncheckedUpdateManyInput>
    /**
     * Filter which Disciplines to update
     */
    where?: DisciplineWhereInput
    /**
     * Limit how many Disciplines to update.
     */
    limit?: number
  }

  /**
   * Discipline updateManyAndReturn
   */
  export type DisciplineUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discipline
     */
    select?: DisciplineSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Discipline
     */
    omit?: DisciplineOmit<ExtArgs> | null
    /**
     * The data used to update Disciplines.
     */
    data: XOR<DisciplineUpdateManyMutationInput, DisciplineUncheckedUpdateManyInput>
    /**
     * Filter which Disciplines to update
     */
    where?: DisciplineWhereInput
    /**
     * Limit how many Disciplines to update.
     */
    limit?: number
  }

  /**
   * Discipline upsert
   */
  export type DisciplineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discipline
     */
    select?: DisciplineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discipline
     */
    omit?: DisciplineOmit<ExtArgs> | null
    /**
     * The filter to search for the Discipline to update in case it exists.
     */
    where: DisciplineWhereUniqueInput
    /**
     * In case the Discipline found by the `where` argument doesn't exist, create a new Discipline with this data.
     */
    create: XOR<DisciplineCreateInput, DisciplineUncheckedCreateInput>
    /**
     * In case the Discipline was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DisciplineUpdateInput, DisciplineUncheckedUpdateInput>
  }

  /**
   * Discipline delete
   */
  export type DisciplineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discipline
     */
    select?: DisciplineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discipline
     */
    omit?: DisciplineOmit<ExtArgs> | null
    /**
     * Filter which Discipline to delete.
     */
    where: DisciplineWhereUniqueInput
  }

  /**
   * Discipline deleteMany
   */
  export type DisciplineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Disciplines to delete
     */
    where?: DisciplineWhereInput
    /**
     * Limit how many Disciplines to delete.
     */
    limit?: number
  }

  /**
   * Discipline without action
   */
  export type DisciplineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discipline
     */
    select?: DisciplineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discipline
     */
    omit?: DisciplineOmit<ExtArgs> | null
  }


  /**
   * Model Subject
   */

  export type AggregateSubject = {
    _count: SubjectCountAggregateOutputType | null
    _avg: SubjectAvgAggregateOutputType | null
    _sum: SubjectSumAggregateOutputType | null
    _min: SubjectMinAggregateOutputType | null
    _max: SubjectMaxAggregateOutputType | null
  }

  export type SubjectAvgAggregateOutputType = {
    id: number | null
    levelId: number | null
  }

  export type SubjectSumAggregateOutputType = {
    id: number | null
    levelId: number | null
  }

  export type SubjectMinAggregateOutputType = {
    id: number | null
    name: string | null
    levelId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubjectMaxAggregateOutputType = {
    id: number | null
    name: string | null
    levelId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubjectCountAggregateOutputType = {
    id: number
    name: number
    levelId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SubjectAvgAggregateInputType = {
    id?: true
    levelId?: true
  }

  export type SubjectSumAggregateInputType = {
    id?: true
    levelId?: true
  }

  export type SubjectMinAggregateInputType = {
    id?: true
    name?: true
    levelId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubjectMaxAggregateInputType = {
    id?: true
    name?: true
    levelId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubjectCountAggregateInputType = {
    id?: true
    name?: true
    levelId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SubjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subject to aggregate.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subjects
    **/
    _count?: true | SubjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubjectMaxAggregateInputType
  }

  export type GetSubjectAggregateType<T extends SubjectAggregateArgs> = {
        [P in keyof T & keyof AggregateSubject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubject[P]>
      : GetScalarType<T[P], AggregateSubject[P]>
  }




  export type SubjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubjectWhereInput
    orderBy?: SubjectOrderByWithAggregationInput | SubjectOrderByWithAggregationInput[]
    by: SubjectScalarFieldEnum[] | SubjectScalarFieldEnum
    having?: SubjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubjectCountAggregateInputType | true
    _avg?: SubjectAvgAggregateInputType
    _sum?: SubjectSumAggregateInputType
    _min?: SubjectMinAggregateInputType
    _max?: SubjectMaxAggregateInputType
  }

  export type SubjectGroupByOutputType = {
    id: number
    name: string
    levelId: number
    createdAt: Date
    updatedAt: Date
    _count: SubjectCountAggregateOutputType | null
    _avg: SubjectAvgAggregateOutputType | null
    _sum: SubjectSumAggregateOutputType | null
    _min: SubjectMinAggregateOutputType | null
    _max: SubjectMaxAggregateOutputType | null
  }

  type GetSubjectGroupByPayload<T extends SubjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubjectGroupByOutputType[P]>
            : GetScalarType<T[P], SubjectGroupByOutputType[P]>
        }
      >
    >


  export type SubjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    levelId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    level?: boolean | LevelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subject"]>

  export type SubjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    levelId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    level?: boolean | LevelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subject"]>

  export type SubjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    levelId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    level?: boolean | LevelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subject"]>

  export type SubjectSelectScalar = {
    id?: boolean
    name?: boolean
    levelId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SubjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "levelId" | "createdAt" | "updatedAt", ExtArgs["result"]["subject"]>
  export type SubjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    level?: boolean | LevelDefaultArgs<ExtArgs>
  }
  export type SubjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    level?: boolean | LevelDefaultArgs<ExtArgs>
  }
  export type SubjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    level?: boolean | LevelDefaultArgs<ExtArgs>
  }

  export type $SubjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subject"
    objects: {
      level: Prisma.$LevelPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      levelId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["subject"]>
    composites: {}
  }

  type SubjectGetPayload<S extends boolean | null | undefined | SubjectDefaultArgs> = $Result.GetResult<Prisma.$SubjectPayload, S>

  type SubjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubjectCountAggregateInputType | true
    }

  export interface SubjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subject'], meta: { name: 'Subject' } }
    /**
     * Find zero or one Subject that matches the filter.
     * @param {SubjectFindUniqueArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubjectFindUniqueArgs>(args: SelectSubset<T, SubjectFindUniqueArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subject that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubjectFindUniqueOrThrowArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubjectFindUniqueOrThrowArgs>(args: SelectSubset<T, SubjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subject that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectFindFirstArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubjectFindFirstArgs>(args?: SelectSubset<T, SubjectFindFirstArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subject that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectFindFirstOrThrowArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubjectFindFirstOrThrowArgs>(args?: SelectSubset<T, SubjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subjects
     * const subjects = await prisma.subject.findMany()
     * 
     * // Get first 10 Subjects
     * const subjects = await prisma.subject.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subjectWithIdOnly = await prisma.subject.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubjectFindManyArgs>(args?: SelectSubset<T, SubjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subject.
     * @param {SubjectCreateArgs} args - Arguments to create a Subject.
     * @example
     * // Create one Subject
     * const Subject = await prisma.subject.create({
     *   data: {
     *     // ... data to create a Subject
     *   }
     * })
     * 
     */
    create<T extends SubjectCreateArgs>(args: SelectSubset<T, SubjectCreateArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subjects.
     * @param {SubjectCreateManyArgs} args - Arguments to create many Subjects.
     * @example
     * // Create many Subjects
     * const subject = await prisma.subject.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubjectCreateManyArgs>(args?: SelectSubset<T, SubjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subjects and returns the data saved in the database.
     * @param {SubjectCreateManyAndReturnArgs} args - Arguments to create many Subjects.
     * @example
     * // Create many Subjects
     * const subject = await prisma.subject.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subjects and only return the `id`
     * const subjectWithIdOnly = await prisma.subject.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubjectCreateManyAndReturnArgs>(args?: SelectSubset<T, SubjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subject.
     * @param {SubjectDeleteArgs} args - Arguments to delete one Subject.
     * @example
     * // Delete one Subject
     * const Subject = await prisma.subject.delete({
     *   where: {
     *     // ... filter to delete one Subject
     *   }
     * })
     * 
     */
    delete<T extends SubjectDeleteArgs>(args: SelectSubset<T, SubjectDeleteArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subject.
     * @param {SubjectUpdateArgs} args - Arguments to update one Subject.
     * @example
     * // Update one Subject
     * const subject = await prisma.subject.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubjectUpdateArgs>(args: SelectSubset<T, SubjectUpdateArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subjects.
     * @param {SubjectDeleteManyArgs} args - Arguments to filter Subjects to delete.
     * @example
     * // Delete a few Subjects
     * const { count } = await prisma.subject.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubjectDeleteManyArgs>(args?: SelectSubset<T, SubjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subjects
     * const subject = await prisma.subject.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubjectUpdateManyArgs>(args: SelectSubset<T, SubjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subjects and returns the data updated in the database.
     * @param {SubjectUpdateManyAndReturnArgs} args - Arguments to update many Subjects.
     * @example
     * // Update many Subjects
     * const subject = await prisma.subject.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subjects and only return the `id`
     * const subjectWithIdOnly = await prisma.subject.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SubjectUpdateManyAndReturnArgs>(args: SelectSubset<T, SubjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subject.
     * @param {SubjectUpsertArgs} args - Arguments to update or create a Subject.
     * @example
     * // Update or create a Subject
     * const subject = await prisma.subject.upsert({
     *   create: {
     *     // ... data to create a Subject
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subject we want to update
     *   }
     * })
     */
    upsert<T extends SubjectUpsertArgs>(args: SelectSubset<T, SubjectUpsertArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectCountArgs} args - Arguments to filter Subjects to count.
     * @example
     * // Count the number of Subjects
     * const count = await prisma.subject.count({
     *   where: {
     *     // ... the filter for the Subjects we want to count
     *   }
     * })
    **/
    count<T extends SubjectCountArgs>(
      args?: Subset<T, SubjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubjectAggregateArgs>(args: Subset<T, SubjectAggregateArgs>): Prisma.PrismaPromise<GetSubjectAggregateType<T>>

    /**
     * Group by Subject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectGroupByArgs} args - Group by arguments.
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
      T extends SubjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubjectGroupByArgs['orderBy'] }
        : { orderBy?: SubjectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subject model
   */
  readonly fields: SubjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subject.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    level<T extends LevelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LevelDefaultArgs<ExtArgs>>): Prisma__LevelClient<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Subject model
   */
  interface SubjectFieldRefs {
    readonly id: FieldRef<"Subject", 'Int'>
    readonly name: FieldRef<"Subject", 'String'>
    readonly levelId: FieldRef<"Subject", 'Int'>
    readonly createdAt: FieldRef<"Subject", 'DateTime'>
    readonly updatedAt: FieldRef<"Subject", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Subject findUnique
   */
  export type SubjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject findUniqueOrThrow
   */
  export type SubjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject findFirst
   */
  export type SubjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subjects.
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subjects.
     */
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Subject findFirstOrThrow
   */
  export type SubjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subjects.
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subjects.
     */
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Subject findMany
   */
  export type SubjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subjects to fetch.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subjects.
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Subject create
   */
  export type SubjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Subject.
     */
    data: XOR<SubjectCreateInput, SubjectUncheckedCreateInput>
  }

  /**
   * Subject createMany
   */
  export type SubjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subjects.
     */
    data: SubjectCreateManyInput | SubjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subject createManyAndReturn
   */
  export type SubjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * The data used to create many Subjects.
     */
    data: SubjectCreateManyInput | SubjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subject update
   */
  export type SubjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Subject.
     */
    data: XOR<SubjectUpdateInput, SubjectUncheckedUpdateInput>
    /**
     * Choose, which Subject to update.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject updateMany
   */
  export type SubjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subjects.
     */
    data: XOR<SubjectUpdateManyMutationInput, SubjectUncheckedUpdateManyInput>
    /**
     * Filter which Subjects to update
     */
    where?: SubjectWhereInput
    /**
     * Limit how many Subjects to update.
     */
    limit?: number
  }

  /**
   * Subject updateManyAndReturn
   */
  export type SubjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * The data used to update Subjects.
     */
    data: XOR<SubjectUpdateManyMutationInput, SubjectUncheckedUpdateManyInput>
    /**
     * Filter which Subjects to update
     */
    where?: SubjectWhereInput
    /**
     * Limit how many Subjects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subject upsert
   */
  export type SubjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Subject to update in case it exists.
     */
    where: SubjectWhereUniqueInput
    /**
     * In case the Subject found by the `where` argument doesn't exist, create a new Subject with this data.
     */
    create: XOR<SubjectCreateInput, SubjectUncheckedCreateInput>
    /**
     * In case the Subject was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubjectUpdateInput, SubjectUncheckedUpdateInput>
  }

  /**
   * Subject delete
   */
  export type SubjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter which Subject to delete.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject deleteMany
   */
  export type SubjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subjects to delete
     */
    where?: SubjectWhereInput
    /**
     * Limit how many Subjects to delete.
     */
    limit?: number
  }

  /**
   * Subject without action
   */
  export type SubjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
  }


  /**
   * Model SubGroup
   */

  export type AggregateSubGroup = {
    _count: SubGroupCountAggregateOutputType | null
    _avg: SubGroupAvgAggregateOutputType | null
    _sum: SubGroupSumAggregateOutputType | null
    _min: SubGroupMinAggregateOutputType | null
    _max: SubGroupMaxAggregateOutputType | null
  }

  export type SubGroupAvgAggregateOutputType = {
    id: number | null
  }

  export type SubGroupSumAggregateOutputType = {
    id: number | null
  }

  export type SubGroupMinAggregateOutputType = {
    id: number | null
    name: string | null
    abbreviation: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubGroupMaxAggregateOutputType = {
    id: number | null
    name: string | null
    abbreviation: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubGroupCountAggregateOutputType = {
    id: number
    name: number
    abbreviation: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SubGroupAvgAggregateInputType = {
    id?: true
  }

  export type SubGroupSumAggregateInputType = {
    id?: true
  }

  export type SubGroupMinAggregateInputType = {
    id?: true
    name?: true
    abbreviation?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubGroupMaxAggregateInputType = {
    id?: true
    name?: true
    abbreviation?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubGroupCountAggregateInputType = {
    id?: true
    name?: true
    abbreviation?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SubGroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubGroup to aggregate.
     */
    where?: SubGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubGroups to fetch.
     */
    orderBy?: SubGroupOrderByWithRelationInput | SubGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SubGroups
    **/
    _count?: true | SubGroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubGroupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubGroupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubGroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubGroupMaxAggregateInputType
  }

  export type GetSubGroupAggregateType<T extends SubGroupAggregateArgs> = {
        [P in keyof T & keyof AggregateSubGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubGroup[P]>
      : GetScalarType<T[P], AggregateSubGroup[P]>
  }




  export type SubGroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubGroupWhereInput
    orderBy?: SubGroupOrderByWithAggregationInput | SubGroupOrderByWithAggregationInput[]
    by: SubGroupScalarFieldEnum[] | SubGroupScalarFieldEnum
    having?: SubGroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubGroupCountAggregateInputType | true
    _avg?: SubGroupAvgAggregateInputType
    _sum?: SubGroupSumAggregateInputType
    _min?: SubGroupMinAggregateInputType
    _max?: SubGroupMaxAggregateInputType
  }

  export type SubGroupGroupByOutputType = {
    id: number
    name: string
    abbreviation: string
    createdAt: Date
    updatedAt: Date
    _count: SubGroupCountAggregateOutputType | null
    _avg: SubGroupAvgAggregateOutputType | null
    _sum: SubGroupSumAggregateOutputType | null
    _min: SubGroupMinAggregateOutputType | null
    _max: SubGroupMaxAggregateOutputType | null
  }

  type GetSubGroupGroupByPayload<T extends SubGroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubGroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubGroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubGroupGroupByOutputType[P]>
            : GetScalarType<T[P], SubGroupGroupByOutputType[P]>
        }
      >
    >


  export type SubGroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    abbreviation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["subGroup"]>

  export type SubGroupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    abbreviation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["subGroup"]>

  export type SubGroupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    abbreviation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["subGroup"]>

  export type SubGroupSelectScalar = {
    id?: boolean
    name?: boolean
    abbreviation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SubGroupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "abbreviation" | "createdAt" | "updatedAt", ExtArgs["result"]["subGroup"]>

  export type $SubGroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SubGroup"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      abbreviation: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["subGroup"]>
    composites: {}
  }

  type SubGroupGetPayload<S extends boolean | null | undefined | SubGroupDefaultArgs> = $Result.GetResult<Prisma.$SubGroupPayload, S>

  type SubGroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubGroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubGroupCountAggregateInputType | true
    }

  export interface SubGroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SubGroup'], meta: { name: 'SubGroup' } }
    /**
     * Find zero or one SubGroup that matches the filter.
     * @param {SubGroupFindUniqueArgs} args - Arguments to find a SubGroup
     * @example
     * // Get one SubGroup
     * const subGroup = await prisma.subGroup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubGroupFindUniqueArgs>(args: SelectSubset<T, SubGroupFindUniqueArgs<ExtArgs>>): Prisma__SubGroupClient<$Result.GetResult<Prisma.$SubGroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SubGroup that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubGroupFindUniqueOrThrowArgs} args - Arguments to find a SubGroup
     * @example
     * // Get one SubGroup
     * const subGroup = await prisma.subGroup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubGroupFindUniqueOrThrowArgs>(args: SelectSubset<T, SubGroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubGroupClient<$Result.GetResult<Prisma.$SubGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubGroup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubGroupFindFirstArgs} args - Arguments to find a SubGroup
     * @example
     * // Get one SubGroup
     * const subGroup = await prisma.subGroup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubGroupFindFirstArgs>(args?: SelectSubset<T, SubGroupFindFirstArgs<ExtArgs>>): Prisma__SubGroupClient<$Result.GetResult<Prisma.$SubGroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubGroup that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubGroupFindFirstOrThrowArgs} args - Arguments to find a SubGroup
     * @example
     * // Get one SubGroup
     * const subGroup = await prisma.subGroup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubGroupFindFirstOrThrowArgs>(args?: SelectSubset<T, SubGroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubGroupClient<$Result.GetResult<Prisma.$SubGroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SubGroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubGroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubGroups
     * const subGroups = await prisma.subGroup.findMany()
     * 
     * // Get first 10 SubGroups
     * const subGroups = await prisma.subGroup.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subGroupWithIdOnly = await prisma.subGroup.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubGroupFindManyArgs>(args?: SelectSubset<T, SubGroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SubGroup.
     * @param {SubGroupCreateArgs} args - Arguments to create a SubGroup.
     * @example
     * // Create one SubGroup
     * const SubGroup = await prisma.subGroup.create({
     *   data: {
     *     // ... data to create a SubGroup
     *   }
     * })
     * 
     */
    create<T extends SubGroupCreateArgs>(args: SelectSubset<T, SubGroupCreateArgs<ExtArgs>>): Prisma__SubGroupClient<$Result.GetResult<Prisma.$SubGroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SubGroups.
     * @param {SubGroupCreateManyArgs} args - Arguments to create many SubGroups.
     * @example
     * // Create many SubGroups
     * const subGroup = await prisma.subGroup.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubGroupCreateManyArgs>(args?: SelectSubset<T, SubGroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SubGroups and returns the data saved in the database.
     * @param {SubGroupCreateManyAndReturnArgs} args - Arguments to create many SubGroups.
     * @example
     * // Create many SubGroups
     * const subGroup = await prisma.subGroup.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SubGroups and only return the `id`
     * const subGroupWithIdOnly = await prisma.subGroup.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubGroupCreateManyAndReturnArgs>(args?: SelectSubset<T, SubGroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubGroupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SubGroup.
     * @param {SubGroupDeleteArgs} args - Arguments to delete one SubGroup.
     * @example
     * // Delete one SubGroup
     * const SubGroup = await prisma.subGroup.delete({
     *   where: {
     *     // ... filter to delete one SubGroup
     *   }
     * })
     * 
     */
    delete<T extends SubGroupDeleteArgs>(args: SelectSubset<T, SubGroupDeleteArgs<ExtArgs>>): Prisma__SubGroupClient<$Result.GetResult<Prisma.$SubGroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SubGroup.
     * @param {SubGroupUpdateArgs} args - Arguments to update one SubGroup.
     * @example
     * // Update one SubGroup
     * const subGroup = await prisma.subGroup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubGroupUpdateArgs>(args: SelectSubset<T, SubGroupUpdateArgs<ExtArgs>>): Prisma__SubGroupClient<$Result.GetResult<Prisma.$SubGroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SubGroups.
     * @param {SubGroupDeleteManyArgs} args - Arguments to filter SubGroups to delete.
     * @example
     * // Delete a few SubGroups
     * const { count } = await prisma.subGroup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubGroupDeleteManyArgs>(args?: SelectSubset<T, SubGroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubGroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubGroups
     * const subGroup = await prisma.subGroup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubGroupUpdateManyArgs>(args: SelectSubset<T, SubGroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubGroups and returns the data updated in the database.
     * @param {SubGroupUpdateManyAndReturnArgs} args - Arguments to update many SubGroups.
     * @example
     * // Update many SubGroups
     * const subGroup = await prisma.subGroup.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SubGroups and only return the `id`
     * const subGroupWithIdOnly = await prisma.subGroup.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SubGroupUpdateManyAndReturnArgs>(args: SelectSubset<T, SubGroupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubGroupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SubGroup.
     * @param {SubGroupUpsertArgs} args - Arguments to update or create a SubGroup.
     * @example
     * // Update or create a SubGroup
     * const subGroup = await prisma.subGroup.upsert({
     *   create: {
     *     // ... data to create a SubGroup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubGroup we want to update
     *   }
     * })
     */
    upsert<T extends SubGroupUpsertArgs>(args: SelectSubset<T, SubGroupUpsertArgs<ExtArgs>>): Prisma__SubGroupClient<$Result.GetResult<Prisma.$SubGroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SubGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubGroupCountArgs} args - Arguments to filter SubGroups to count.
     * @example
     * // Count the number of SubGroups
     * const count = await prisma.subGroup.count({
     *   where: {
     *     // ... the filter for the SubGroups we want to count
     *   }
     * })
    **/
    count<T extends SubGroupCountArgs>(
      args?: Subset<T, SubGroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubGroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SubGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubGroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubGroupAggregateArgs>(args: Subset<T, SubGroupAggregateArgs>): Prisma.PrismaPromise<GetSubGroupAggregateType<T>>

    /**
     * Group by SubGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubGroupGroupByArgs} args - Group by arguments.
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
      T extends SubGroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubGroupGroupByArgs['orderBy'] }
        : { orderBy?: SubGroupGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubGroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SubGroup model
   */
  readonly fields: SubGroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SubGroup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubGroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the SubGroup model
   */
  interface SubGroupFieldRefs {
    readonly id: FieldRef<"SubGroup", 'Int'>
    readonly name: FieldRef<"SubGroup", 'String'>
    readonly abbreviation: FieldRef<"SubGroup", 'String'>
    readonly createdAt: FieldRef<"SubGroup", 'DateTime'>
    readonly updatedAt: FieldRef<"SubGroup", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SubGroup findUnique
   */
  export type SubGroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubGroup
     */
    select?: SubGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubGroup
     */
    omit?: SubGroupOmit<ExtArgs> | null
    /**
     * Filter, which SubGroup to fetch.
     */
    where: SubGroupWhereUniqueInput
  }

  /**
   * SubGroup findUniqueOrThrow
   */
  export type SubGroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubGroup
     */
    select?: SubGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubGroup
     */
    omit?: SubGroupOmit<ExtArgs> | null
    /**
     * Filter, which SubGroup to fetch.
     */
    where: SubGroupWhereUniqueInput
  }

  /**
   * SubGroup findFirst
   */
  export type SubGroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubGroup
     */
    select?: SubGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubGroup
     */
    omit?: SubGroupOmit<ExtArgs> | null
    /**
     * Filter, which SubGroup to fetch.
     */
    where?: SubGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubGroups to fetch.
     */
    orderBy?: SubGroupOrderByWithRelationInput | SubGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubGroups.
     */
    cursor?: SubGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubGroups.
     */
    distinct?: SubGroupScalarFieldEnum | SubGroupScalarFieldEnum[]
  }

  /**
   * SubGroup findFirstOrThrow
   */
  export type SubGroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubGroup
     */
    select?: SubGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubGroup
     */
    omit?: SubGroupOmit<ExtArgs> | null
    /**
     * Filter, which SubGroup to fetch.
     */
    where?: SubGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubGroups to fetch.
     */
    orderBy?: SubGroupOrderByWithRelationInput | SubGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubGroups.
     */
    cursor?: SubGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubGroups.
     */
    distinct?: SubGroupScalarFieldEnum | SubGroupScalarFieldEnum[]
  }

  /**
   * SubGroup findMany
   */
  export type SubGroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubGroup
     */
    select?: SubGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubGroup
     */
    omit?: SubGroupOmit<ExtArgs> | null
    /**
     * Filter, which SubGroups to fetch.
     */
    where?: SubGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubGroups to fetch.
     */
    orderBy?: SubGroupOrderByWithRelationInput | SubGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SubGroups.
     */
    cursor?: SubGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubGroups.
     */
    skip?: number
    distinct?: SubGroupScalarFieldEnum | SubGroupScalarFieldEnum[]
  }

  /**
   * SubGroup create
   */
  export type SubGroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubGroup
     */
    select?: SubGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubGroup
     */
    omit?: SubGroupOmit<ExtArgs> | null
    /**
     * The data needed to create a SubGroup.
     */
    data: XOR<SubGroupCreateInput, SubGroupUncheckedCreateInput>
  }

  /**
   * SubGroup createMany
   */
  export type SubGroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SubGroups.
     */
    data: SubGroupCreateManyInput | SubGroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SubGroup createManyAndReturn
   */
  export type SubGroupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubGroup
     */
    select?: SubGroupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubGroup
     */
    omit?: SubGroupOmit<ExtArgs> | null
    /**
     * The data used to create many SubGroups.
     */
    data: SubGroupCreateManyInput | SubGroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SubGroup update
   */
  export type SubGroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubGroup
     */
    select?: SubGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubGroup
     */
    omit?: SubGroupOmit<ExtArgs> | null
    /**
     * The data needed to update a SubGroup.
     */
    data: XOR<SubGroupUpdateInput, SubGroupUncheckedUpdateInput>
    /**
     * Choose, which SubGroup to update.
     */
    where: SubGroupWhereUniqueInput
  }

  /**
   * SubGroup updateMany
   */
  export type SubGroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SubGroups.
     */
    data: XOR<SubGroupUpdateManyMutationInput, SubGroupUncheckedUpdateManyInput>
    /**
     * Filter which SubGroups to update
     */
    where?: SubGroupWhereInput
    /**
     * Limit how many SubGroups to update.
     */
    limit?: number
  }

  /**
   * SubGroup updateManyAndReturn
   */
  export type SubGroupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubGroup
     */
    select?: SubGroupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubGroup
     */
    omit?: SubGroupOmit<ExtArgs> | null
    /**
     * The data used to update SubGroups.
     */
    data: XOR<SubGroupUpdateManyMutationInput, SubGroupUncheckedUpdateManyInput>
    /**
     * Filter which SubGroups to update
     */
    where?: SubGroupWhereInput
    /**
     * Limit how many SubGroups to update.
     */
    limit?: number
  }

  /**
   * SubGroup upsert
   */
  export type SubGroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubGroup
     */
    select?: SubGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubGroup
     */
    omit?: SubGroupOmit<ExtArgs> | null
    /**
     * The filter to search for the SubGroup to update in case it exists.
     */
    where: SubGroupWhereUniqueInput
    /**
     * In case the SubGroup found by the `where` argument doesn't exist, create a new SubGroup with this data.
     */
    create: XOR<SubGroupCreateInput, SubGroupUncheckedCreateInput>
    /**
     * In case the SubGroup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubGroupUpdateInput, SubGroupUncheckedUpdateInput>
  }

  /**
   * SubGroup delete
   */
  export type SubGroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubGroup
     */
    select?: SubGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubGroup
     */
    omit?: SubGroupOmit<ExtArgs> | null
    /**
     * Filter which SubGroup to delete.
     */
    where: SubGroupWhereUniqueInput
  }

  /**
   * SubGroup deleteMany
   */
  export type SubGroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubGroups to delete
     */
    where?: SubGroupWhereInput
    /**
     * Limit how many SubGroups to delete.
     */
    limit?: number
  }

  /**
   * SubGroup without action
   */
  export type SubGroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubGroup
     */
    select?: SubGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubGroup
     */
    omit?: SubGroupOmit<ExtArgs> | null
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


  export const YearScalarFieldEnum: {
    id: 'id',
    schoolYear: 'schoolYear',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type YearScalarFieldEnum = (typeof YearScalarFieldEnum)[keyof typeof YearScalarFieldEnum]


  export const LevelScalarFieldEnum: {
    id: 'id',
    name: 'name',
    abbreviation: 'abbreviation',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LevelScalarFieldEnum = (typeof LevelScalarFieldEnum)[keyof typeof LevelScalarFieldEnum]


  export const SchoolScalarFieldEnum: {
    id: 'id',
    name: 'name',
    abbreviation: 'abbreviation',
    otherNames: 'otherNames',
    population: 'population',
    levelId: 'levelId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SchoolScalarFieldEnum = (typeof SchoolScalarFieldEnum)[keyof typeof SchoolScalarFieldEnum]


  export const RaceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    abbreviation: 'abbreviation',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RaceScalarFieldEnum = (typeof RaceScalarFieldEnum)[keyof typeof RaceScalarFieldEnum]


  export const GenderScalarFieldEnum: {
    id: 'id',
    name: 'name',
    abbreviation: 'abbreviation',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GenderScalarFieldEnum = (typeof GenderScalarFieldEnum)[keyof typeof GenderScalarFieldEnum]


  export const DisciplineScalarFieldEnum: {
    id: 'id',
    name: 'name',
    abbreviation: 'abbreviation',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DisciplineScalarFieldEnum = (typeof DisciplineScalarFieldEnum)[keyof typeof DisciplineScalarFieldEnum]


  export const SubjectScalarFieldEnum: {
    id: 'id',
    name: 'name',
    levelId: 'levelId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SubjectScalarFieldEnum = (typeof SubjectScalarFieldEnum)[keyof typeof SubjectScalarFieldEnum]


  export const SubGroupScalarFieldEnum: {
    id: 'id',
    name: 'name',
    abbreviation: 'abbreviation',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SubGroupScalarFieldEnum = (typeof SubGroupScalarFieldEnum)[keyof typeof SubGroupScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type YearWhereInput = {
    AND?: YearWhereInput | YearWhereInput[]
    OR?: YearWhereInput[]
    NOT?: YearWhereInput | YearWhereInput[]
    id?: IntFilter<"Year"> | number
    schoolYear?: StringFilter<"Year"> | string
    createdAt?: DateTimeFilter<"Year"> | Date | string
    updatedAt?: DateTimeFilter<"Year"> | Date | string
  }

  export type YearOrderByWithRelationInput = {
    id?: SortOrder
    schoolYear?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type YearWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: YearWhereInput | YearWhereInput[]
    OR?: YearWhereInput[]
    NOT?: YearWhereInput | YearWhereInput[]
    schoolYear?: StringFilter<"Year"> | string
    createdAt?: DateTimeFilter<"Year"> | Date | string
    updatedAt?: DateTimeFilter<"Year"> | Date | string
  }, "id">

  export type YearOrderByWithAggregationInput = {
    id?: SortOrder
    schoolYear?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: YearCountOrderByAggregateInput
    _avg?: YearAvgOrderByAggregateInput
    _max?: YearMaxOrderByAggregateInput
    _min?: YearMinOrderByAggregateInput
    _sum?: YearSumOrderByAggregateInput
  }

  export type YearScalarWhereWithAggregatesInput = {
    AND?: YearScalarWhereWithAggregatesInput | YearScalarWhereWithAggregatesInput[]
    OR?: YearScalarWhereWithAggregatesInput[]
    NOT?: YearScalarWhereWithAggregatesInput | YearScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Year"> | number
    schoolYear?: StringWithAggregatesFilter<"Year"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Year"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Year"> | Date | string
  }

  export type LevelWhereInput = {
    AND?: LevelWhereInput | LevelWhereInput[]
    OR?: LevelWhereInput[]
    NOT?: LevelWhereInput | LevelWhereInput[]
    id?: IntFilter<"Level"> | number
    name?: StringFilter<"Level"> | string
    abbreviation?: StringFilter<"Level"> | string
    createdAt?: DateTimeFilter<"Level"> | Date | string
    updatedAt?: DateTimeFilter<"Level"> | Date | string
    schools?: SchoolListRelationFilter
    subjects?: SubjectListRelationFilter
  }

  export type LevelOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    abbreviation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    schools?: SchoolOrderByRelationAggregateInput
    subjects?: SubjectOrderByRelationAggregateInput
  }

  export type LevelWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LevelWhereInput | LevelWhereInput[]
    OR?: LevelWhereInput[]
    NOT?: LevelWhereInput | LevelWhereInput[]
    name?: StringFilter<"Level"> | string
    abbreviation?: StringFilter<"Level"> | string
    createdAt?: DateTimeFilter<"Level"> | Date | string
    updatedAt?: DateTimeFilter<"Level"> | Date | string
    schools?: SchoolListRelationFilter
    subjects?: SubjectListRelationFilter
  }, "id">

  export type LevelOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    abbreviation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LevelCountOrderByAggregateInput
    _avg?: LevelAvgOrderByAggregateInput
    _max?: LevelMaxOrderByAggregateInput
    _min?: LevelMinOrderByAggregateInput
    _sum?: LevelSumOrderByAggregateInput
  }

  export type LevelScalarWhereWithAggregatesInput = {
    AND?: LevelScalarWhereWithAggregatesInput | LevelScalarWhereWithAggregatesInput[]
    OR?: LevelScalarWhereWithAggregatesInput[]
    NOT?: LevelScalarWhereWithAggregatesInput | LevelScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Level"> | number
    name?: StringWithAggregatesFilter<"Level"> | string
    abbreviation?: StringWithAggregatesFilter<"Level"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Level"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Level"> | Date | string
  }

  export type SchoolWhereInput = {
    AND?: SchoolWhereInput | SchoolWhereInput[]
    OR?: SchoolWhereInput[]
    NOT?: SchoolWhereInput | SchoolWhereInput[]
    id?: IntFilter<"School"> | number
    name?: StringFilter<"School"> | string
    abbreviation?: StringFilter<"School"> | string
    otherNames?: StringFilter<"School"> | string
    population?: IntFilter<"School"> | number
    levelId?: IntFilter<"School"> | number
    createdAt?: DateTimeFilter<"School"> | Date | string
    updatedAt?: DateTimeFilter<"School"> | Date | string
    level?: XOR<LevelScalarRelationFilter, LevelWhereInput>
  }

  export type SchoolOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    abbreviation?: SortOrder
    otherNames?: SortOrder
    population?: SortOrder
    levelId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    level?: LevelOrderByWithRelationInput
  }

  export type SchoolWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SchoolWhereInput | SchoolWhereInput[]
    OR?: SchoolWhereInput[]
    NOT?: SchoolWhereInput | SchoolWhereInput[]
    name?: StringFilter<"School"> | string
    abbreviation?: StringFilter<"School"> | string
    otherNames?: StringFilter<"School"> | string
    population?: IntFilter<"School"> | number
    levelId?: IntFilter<"School"> | number
    createdAt?: DateTimeFilter<"School"> | Date | string
    updatedAt?: DateTimeFilter<"School"> | Date | string
    level?: XOR<LevelScalarRelationFilter, LevelWhereInput>
  }, "id">

  export type SchoolOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    abbreviation?: SortOrder
    otherNames?: SortOrder
    population?: SortOrder
    levelId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SchoolCountOrderByAggregateInput
    _avg?: SchoolAvgOrderByAggregateInput
    _max?: SchoolMaxOrderByAggregateInput
    _min?: SchoolMinOrderByAggregateInput
    _sum?: SchoolSumOrderByAggregateInput
  }

  export type SchoolScalarWhereWithAggregatesInput = {
    AND?: SchoolScalarWhereWithAggregatesInput | SchoolScalarWhereWithAggregatesInput[]
    OR?: SchoolScalarWhereWithAggregatesInput[]
    NOT?: SchoolScalarWhereWithAggregatesInput | SchoolScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"School"> | number
    name?: StringWithAggregatesFilter<"School"> | string
    abbreviation?: StringWithAggregatesFilter<"School"> | string
    otherNames?: StringWithAggregatesFilter<"School"> | string
    population?: IntWithAggregatesFilter<"School"> | number
    levelId?: IntWithAggregatesFilter<"School"> | number
    createdAt?: DateTimeWithAggregatesFilter<"School"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"School"> | Date | string
  }

  export type RaceWhereInput = {
    AND?: RaceWhereInput | RaceWhereInput[]
    OR?: RaceWhereInput[]
    NOT?: RaceWhereInput | RaceWhereInput[]
    id?: IntFilter<"Race"> | number
    name?: StringFilter<"Race"> | string
    abbreviation?: StringFilter<"Race"> | string
    createdAt?: DateTimeFilter<"Race"> | Date | string
    updatedAt?: DateTimeFilter<"Race"> | Date | string
  }

  export type RaceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    abbreviation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RaceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RaceWhereInput | RaceWhereInput[]
    OR?: RaceWhereInput[]
    NOT?: RaceWhereInput | RaceWhereInput[]
    name?: StringFilter<"Race"> | string
    abbreviation?: StringFilter<"Race"> | string
    createdAt?: DateTimeFilter<"Race"> | Date | string
    updatedAt?: DateTimeFilter<"Race"> | Date | string
  }, "id">

  export type RaceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    abbreviation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RaceCountOrderByAggregateInput
    _avg?: RaceAvgOrderByAggregateInput
    _max?: RaceMaxOrderByAggregateInput
    _min?: RaceMinOrderByAggregateInput
    _sum?: RaceSumOrderByAggregateInput
  }

  export type RaceScalarWhereWithAggregatesInput = {
    AND?: RaceScalarWhereWithAggregatesInput | RaceScalarWhereWithAggregatesInput[]
    OR?: RaceScalarWhereWithAggregatesInput[]
    NOT?: RaceScalarWhereWithAggregatesInput | RaceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Race"> | number
    name?: StringWithAggregatesFilter<"Race"> | string
    abbreviation?: StringWithAggregatesFilter<"Race"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Race"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Race"> | Date | string
  }

  export type GenderWhereInput = {
    AND?: GenderWhereInput | GenderWhereInput[]
    OR?: GenderWhereInput[]
    NOT?: GenderWhereInput | GenderWhereInput[]
    id?: IntFilter<"Gender"> | number
    name?: StringFilter<"Gender"> | string
    abbreviation?: StringFilter<"Gender"> | string
    createdAt?: DateTimeFilter<"Gender"> | Date | string
    updatedAt?: DateTimeFilter<"Gender"> | Date | string
  }

  export type GenderOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    abbreviation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GenderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GenderWhereInput | GenderWhereInput[]
    OR?: GenderWhereInput[]
    NOT?: GenderWhereInput | GenderWhereInput[]
    name?: StringFilter<"Gender"> | string
    abbreviation?: StringFilter<"Gender"> | string
    createdAt?: DateTimeFilter<"Gender"> | Date | string
    updatedAt?: DateTimeFilter<"Gender"> | Date | string
  }, "id">

  export type GenderOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    abbreviation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GenderCountOrderByAggregateInput
    _avg?: GenderAvgOrderByAggregateInput
    _max?: GenderMaxOrderByAggregateInput
    _min?: GenderMinOrderByAggregateInput
    _sum?: GenderSumOrderByAggregateInput
  }

  export type GenderScalarWhereWithAggregatesInput = {
    AND?: GenderScalarWhereWithAggregatesInput | GenderScalarWhereWithAggregatesInput[]
    OR?: GenderScalarWhereWithAggregatesInput[]
    NOT?: GenderScalarWhereWithAggregatesInput | GenderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Gender"> | number
    name?: StringWithAggregatesFilter<"Gender"> | string
    abbreviation?: StringWithAggregatesFilter<"Gender"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Gender"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Gender"> | Date | string
  }

  export type DisciplineWhereInput = {
    AND?: DisciplineWhereInput | DisciplineWhereInput[]
    OR?: DisciplineWhereInput[]
    NOT?: DisciplineWhereInput | DisciplineWhereInput[]
    id?: IntFilter<"Discipline"> | number
    name?: StringFilter<"Discipline"> | string
    abbreviation?: StringFilter<"Discipline"> | string
    createdAt?: DateTimeFilter<"Discipline"> | Date | string
    updatedAt?: DateTimeFilter<"Discipline"> | Date | string
  }

  export type DisciplineOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    abbreviation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DisciplineWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DisciplineWhereInput | DisciplineWhereInput[]
    OR?: DisciplineWhereInput[]
    NOT?: DisciplineWhereInput | DisciplineWhereInput[]
    name?: StringFilter<"Discipline"> | string
    abbreviation?: StringFilter<"Discipline"> | string
    createdAt?: DateTimeFilter<"Discipline"> | Date | string
    updatedAt?: DateTimeFilter<"Discipline"> | Date | string
  }, "id">

  export type DisciplineOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    abbreviation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DisciplineCountOrderByAggregateInput
    _avg?: DisciplineAvgOrderByAggregateInput
    _max?: DisciplineMaxOrderByAggregateInput
    _min?: DisciplineMinOrderByAggregateInput
    _sum?: DisciplineSumOrderByAggregateInput
  }

  export type DisciplineScalarWhereWithAggregatesInput = {
    AND?: DisciplineScalarWhereWithAggregatesInput | DisciplineScalarWhereWithAggregatesInput[]
    OR?: DisciplineScalarWhereWithAggregatesInput[]
    NOT?: DisciplineScalarWhereWithAggregatesInput | DisciplineScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Discipline"> | number
    name?: StringWithAggregatesFilter<"Discipline"> | string
    abbreviation?: StringWithAggregatesFilter<"Discipline"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Discipline"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Discipline"> | Date | string
  }

  export type SubjectWhereInput = {
    AND?: SubjectWhereInput | SubjectWhereInput[]
    OR?: SubjectWhereInput[]
    NOT?: SubjectWhereInput | SubjectWhereInput[]
    id?: IntFilter<"Subject"> | number
    name?: StringFilter<"Subject"> | string
    levelId?: IntFilter<"Subject"> | number
    createdAt?: DateTimeFilter<"Subject"> | Date | string
    updatedAt?: DateTimeFilter<"Subject"> | Date | string
    level?: XOR<LevelScalarRelationFilter, LevelWhereInput>
  }

  export type SubjectOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    levelId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    level?: LevelOrderByWithRelationInput
  }

  export type SubjectWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SubjectWhereInput | SubjectWhereInput[]
    OR?: SubjectWhereInput[]
    NOT?: SubjectWhereInput | SubjectWhereInput[]
    name?: StringFilter<"Subject"> | string
    levelId?: IntFilter<"Subject"> | number
    createdAt?: DateTimeFilter<"Subject"> | Date | string
    updatedAt?: DateTimeFilter<"Subject"> | Date | string
    level?: XOR<LevelScalarRelationFilter, LevelWhereInput>
  }, "id">

  export type SubjectOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    levelId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SubjectCountOrderByAggregateInput
    _avg?: SubjectAvgOrderByAggregateInput
    _max?: SubjectMaxOrderByAggregateInput
    _min?: SubjectMinOrderByAggregateInput
    _sum?: SubjectSumOrderByAggregateInput
  }

  export type SubjectScalarWhereWithAggregatesInput = {
    AND?: SubjectScalarWhereWithAggregatesInput | SubjectScalarWhereWithAggregatesInput[]
    OR?: SubjectScalarWhereWithAggregatesInput[]
    NOT?: SubjectScalarWhereWithAggregatesInput | SubjectScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Subject"> | number
    name?: StringWithAggregatesFilter<"Subject"> | string
    levelId?: IntWithAggregatesFilter<"Subject"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Subject"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Subject"> | Date | string
  }

  export type SubGroupWhereInput = {
    AND?: SubGroupWhereInput | SubGroupWhereInput[]
    OR?: SubGroupWhereInput[]
    NOT?: SubGroupWhereInput | SubGroupWhereInput[]
    id?: IntFilter<"SubGroup"> | number
    name?: StringFilter<"SubGroup"> | string
    abbreviation?: StringFilter<"SubGroup"> | string
    createdAt?: DateTimeFilter<"SubGroup"> | Date | string
    updatedAt?: DateTimeFilter<"SubGroup"> | Date | string
  }

  export type SubGroupOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    abbreviation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubGroupWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SubGroupWhereInput | SubGroupWhereInput[]
    OR?: SubGroupWhereInput[]
    NOT?: SubGroupWhereInput | SubGroupWhereInput[]
    name?: StringFilter<"SubGroup"> | string
    abbreviation?: StringFilter<"SubGroup"> | string
    createdAt?: DateTimeFilter<"SubGroup"> | Date | string
    updatedAt?: DateTimeFilter<"SubGroup"> | Date | string
  }, "id">

  export type SubGroupOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    abbreviation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SubGroupCountOrderByAggregateInput
    _avg?: SubGroupAvgOrderByAggregateInput
    _max?: SubGroupMaxOrderByAggregateInput
    _min?: SubGroupMinOrderByAggregateInput
    _sum?: SubGroupSumOrderByAggregateInput
  }

  export type SubGroupScalarWhereWithAggregatesInput = {
    AND?: SubGroupScalarWhereWithAggregatesInput | SubGroupScalarWhereWithAggregatesInput[]
    OR?: SubGroupScalarWhereWithAggregatesInput[]
    NOT?: SubGroupScalarWhereWithAggregatesInput | SubGroupScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SubGroup"> | number
    name?: StringWithAggregatesFilter<"SubGroup"> | string
    abbreviation?: StringWithAggregatesFilter<"SubGroup"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SubGroup"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SubGroup"> | Date | string
  }

  export type YearCreateInput = {
    schoolYear: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type YearUncheckedCreateInput = {
    id?: number
    schoolYear: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type YearUpdateInput = {
    schoolYear?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type YearUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    schoolYear?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type YearCreateManyInput = {
    id?: number
    schoolYear: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type YearUpdateManyMutationInput = {
    schoolYear?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type YearUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    schoolYear?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LevelCreateInput = {
    name: string
    abbreviation: string
    createdAt?: Date | string
    updatedAt?: Date | string
    schools?: SchoolCreateNestedManyWithoutLevelInput
    subjects?: SubjectCreateNestedManyWithoutLevelInput
  }

  export type LevelUncheckedCreateInput = {
    id?: number
    name: string
    abbreviation: string
    createdAt?: Date | string
    updatedAt?: Date | string
    schools?: SchoolUncheckedCreateNestedManyWithoutLevelInput
    subjects?: SubjectUncheckedCreateNestedManyWithoutLevelInput
  }

  export type LevelUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    abbreviation?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schools?: SchoolUpdateManyWithoutLevelNestedInput
    subjects?: SubjectUpdateManyWithoutLevelNestedInput
  }

  export type LevelUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    abbreviation?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schools?: SchoolUncheckedUpdateManyWithoutLevelNestedInput
    subjects?: SubjectUncheckedUpdateManyWithoutLevelNestedInput
  }

  export type LevelCreateManyInput = {
    id?: number
    name: string
    abbreviation: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LevelUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    abbreviation?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LevelUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    abbreviation?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SchoolCreateInput = {
    name: string
    abbreviation: string
    otherNames: string
    population: number
    createdAt?: Date | string
    updatedAt?: Date | string
    level: LevelCreateNestedOneWithoutSchoolsInput
  }

  export type SchoolUncheckedCreateInput = {
    id?: number
    name: string
    abbreviation: string
    otherNames: string
    population: number
    levelId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SchoolUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    abbreviation?: StringFieldUpdateOperationsInput | string
    otherNames?: StringFieldUpdateOperationsInput | string
    population?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    level?: LevelUpdateOneRequiredWithoutSchoolsNestedInput
  }

  export type SchoolUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    abbreviation?: StringFieldUpdateOperationsInput | string
    otherNames?: StringFieldUpdateOperationsInput | string
    population?: IntFieldUpdateOperationsInput | number
    levelId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SchoolCreateManyInput = {
    id?: number
    name: string
    abbreviation: string
    otherNames: string
    population: number
    levelId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SchoolUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    abbreviation?: StringFieldUpdateOperationsInput | string
    otherNames?: StringFieldUpdateOperationsInput | string
    population?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SchoolUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    abbreviation?: StringFieldUpdateOperationsInput | string
    otherNames?: StringFieldUpdateOperationsInput | string
    population?: IntFieldUpdateOperationsInput | number
    levelId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RaceCreateInput = {
    name: string
    abbreviation: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RaceUncheckedCreateInput = {
    id?: number
    name: string
    abbreviation: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RaceUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    abbreviation?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RaceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    abbreviation?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RaceCreateManyInput = {
    id?: number
    name: string
    abbreviation: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RaceUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    abbreviation?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RaceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    abbreviation?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GenderCreateInput = {
    name: string
    abbreviation: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GenderUncheckedCreateInput = {
    id?: number
    name: string
    abbreviation: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GenderUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    abbreviation?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GenderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    abbreviation?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GenderCreateManyInput = {
    id?: number
    name: string
    abbreviation: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GenderUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    abbreviation?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GenderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    abbreviation?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DisciplineCreateInput = {
    name: string
    abbreviation: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DisciplineUncheckedCreateInput = {
    id?: number
    name: string
    abbreviation: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DisciplineUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    abbreviation?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DisciplineUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    abbreviation?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DisciplineCreateManyInput = {
    id?: number
    name: string
    abbreviation: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DisciplineUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    abbreviation?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DisciplineUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    abbreviation?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubjectCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    level: LevelCreateNestedOneWithoutSubjectsInput
  }

  export type SubjectUncheckedCreateInput = {
    id?: number
    name: string
    levelId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubjectUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    level?: LevelUpdateOneRequiredWithoutSubjectsNestedInput
  }

  export type SubjectUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    levelId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubjectCreateManyInput = {
    id?: number
    name: string
    levelId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubjectUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubjectUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    levelId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubGroupCreateInput = {
    name: string
    abbreviation: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubGroupUncheckedCreateInput = {
    id?: number
    name: string
    abbreviation: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubGroupUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    abbreviation?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubGroupUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    abbreviation?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubGroupCreateManyInput = {
    id?: number
    name: string
    abbreviation: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubGroupUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    abbreviation?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubGroupUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    abbreviation?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type YearCountOrderByAggregateInput = {
    id?: SortOrder
    schoolYear?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type YearAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type YearMaxOrderByAggregateInput = {
    id?: SortOrder
    schoolYear?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type YearMinOrderByAggregateInput = {
    id?: SortOrder
    schoolYear?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type YearSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type SchoolListRelationFilter = {
    every?: SchoolWhereInput
    some?: SchoolWhereInput
    none?: SchoolWhereInput
  }

  export type SubjectListRelationFilter = {
    every?: SubjectWhereInput
    some?: SubjectWhereInput
    none?: SubjectWhereInput
  }

  export type SchoolOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LevelCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    abbreviation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LevelAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LevelMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    abbreviation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LevelMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    abbreviation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LevelSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LevelScalarRelationFilter = {
    is?: LevelWhereInput
    isNot?: LevelWhereInput
  }

  export type SchoolCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    abbreviation?: SortOrder
    otherNames?: SortOrder
    population?: SortOrder
    levelId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SchoolAvgOrderByAggregateInput = {
    id?: SortOrder
    population?: SortOrder
    levelId?: SortOrder
  }

  export type SchoolMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    abbreviation?: SortOrder
    otherNames?: SortOrder
    population?: SortOrder
    levelId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SchoolMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    abbreviation?: SortOrder
    otherNames?: SortOrder
    population?: SortOrder
    levelId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SchoolSumOrderByAggregateInput = {
    id?: SortOrder
    population?: SortOrder
    levelId?: SortOrder
  }

  export type RaceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    abbreviation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RaceAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RaceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    abbreviation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RaceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    abbreviation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RaceSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GenderCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    abbreviation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GenderAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GenderMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    abbreviation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GenderMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    abbreviation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GenderSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DisciplineCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    abbreviation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DisciplineAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DisciplineMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    abbreviation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DisciplineMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    abbreviation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DisciplineSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SubjectCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    levelId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubjectAvgOrderByAggregateInput = {
    id?: SortOrder
    levelId?: SortOrder
  }

  export type SubjectMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    levelId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubjectMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    levelId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubjectSumOrderByAggregateInput = {
    id?: SortOrder
    levelId?: SortOrder
  }

  export type SubGroupCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    abbreviation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubGroupAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SubGroupMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    abbreviation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubGroupMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    abbreviation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubGroupSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SchoolCreateNestedManyWithoutLevelInput = {
    create?: XOR<SchoolCreateWithoutLevelInput, SchoolUncheckedCreateWithoutLevelInput> | SchoolCreateWithoutLevelInput[] | SchoolUncheckedCreateWithoutLevelInput[]
    connectOrCreate?: SchoolCreateOrConnectWithoutLevelInput | SchoolCreateOrConnectWithoutLevelInput[]
    createMany?: SchoolCreateManyLevelInputEnvelope
    connect?: SchoolWhereUniqueInput | SchoolWhereUniqueInput[]
  }

  export type SubjectCreateNestedManyWithoutLevelInput = {
    create?: XOR<SubjectCreateWithoutLevelInput, SubjectUncheckedCreateWithoutLevelInput> | SubjectCreateWithoutLevelInput[] | SubjectUncheckedCreateWithoutLevelInput[]
    connectOrCreate?: SubjectCreateOrConnectWithoutLevelInput | SubjectCreateOrConnectWithoutLevelInput[]
    createMany?: SubjectCreateManyLevelInputEnvelope
    connect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
  }

  export type SchoolUncheckedCreateNestedManyWithoutLevelInput = {
    create?: XOR<SchoolCreateWithoutLevelInput, SchoolUncheckedCreateWithoutLevelInput> | SchoolCreateWithoutLevelInput[] | SchoolUncheckedCreateWithoutLevelInput[]
    connectOrCreate?: SchoolCreateOrConnectWithoutLevelInput | SchoolCreateOrConnectWithoutLevelInput[]
    createMany?: SchoolCreateManyLevelInputEnvelope
    connect?: SchoolWhereUniqueInput | SchoolWhereUniqueInput[]
  }

  export type SubjectUncheckedCreateNestedManyWithoutLevelInput = {
    create?: XOR<SubjectCreateWithoutLevelInput, SubjectUncheckedCreateWithoutLevelInput> | SubjectCreateWithoutLevelInput[] | SubjectUncheckedCreateWithoutLevelInput[]
    connectOrCreate?: SubjectCreateOrConnectWithoutLevelInput | SubjectCreateOrConnectWithoutLevelInput[]
    createMany?: SubjectCreateManyLevelInputEnvelope
    connect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
  }

  export type SchoolUpdateManyWithoutLevelNestedInput = {
    create?: XOR<SchoolCreateWithoutLevelInput, SchoolUncheckedCreateWithoutLevelInput> | SchoolCreateWithoutLevelInput[] | SchoolUncheckedCreateWithoutLevelInput[]
    connectOrCreate?: SchoolCreateOrConnectWithoutLevelInput | SchoolCreateOrConnectWithoutLevelInput[]
    upsert?: SchoolUpsertWithWhereUniqueWithoutLevelInput | SchoolUpsertWithWhereUniqueWithoutLevelInput[]
    createMany?: SchoolCreateManyLevelInputEnvelope
    set?: SchoolWhereUniqueInput | SchoolWhereUniqueInput[]
    disconnect?: SchoolWhereUniqueInput | SchoolWhereUniqueInput[]
    delete?: SchoolWhereUniqueInput | SchoolWhereUniqueInput[]
    connect?: SchoolWhereUniqueInput | SchoolWhereUniqueInput[]
    update?: SchoolUpdateWithWhereUniqueWithoutLevelInput | SchoolUpdateWithWhereUniqueWithoutLevelInput[]
    updateMany?: SchoolUpdateManyWithWhereWithoutLevelInput | SchoolUpdateManyWithWhereWithoutLevelInput[]
    deleteMany?: SchoolScalarWhereInput | SchoolScalarWhereInput[]
  }

  export type SubjectUpdateManyWithoutLevelNestedInput = {
    create?: XOR<SubjectCreateWithoutLevelInput, SubjectUncheckedCreateWithoutLevelInput> | SubjectCreateWithoutLevelInput[] | SubjectUncheckedCreateWithoutLevelInput[]
    connectOrCreate?: SubjectCreateOrConnectWithoutLevelInput | SubjectCreateOrConnectWithoutLevelInput[]
    upsert?: SubjectUpsertWithWhereUniqueWithoutLevelInput | SubjectUpsertWithWhereUniqueWithoutLevelInput[]
    createMany?: SubjectCreateManyLevelInputEnvelope
    set?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    disconnect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    delete?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    connect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    update?: SubjectUpdateWithWhereUniqueWithoutLevelInput | SubjectUpdateWithWhereUniqueWithoutLevelInput[]
    updateMany?: SubjectUpdateManyWithWhereWithoutLevelInput | SubjectUpdateManyWithWhereWithoutLevelInput[]
    deleteMany?: SubjectScalarWhereInput | SubjectScalarWhereInput[]
  }

  export type SchoolUncheckedUpdateManyWithoutLevelNestedInput = {
    create?: XOR<SchoolCreateWithoutLevelInput, SchoolUncheckedCreateWithoutLevelInput> | SchoolCreateWithoutLevelInput[] | SchoolUncheckedCreateWithoutLevelInput[]
    connectOrCreate?: SchoolCreateOrConnectWithoutLevelInput | SchoolCreateOrConnectWithoutLevelInput[]
    upsert?: SchoolUpsertWithWhereUniqueWithoutLevelInput | SchoolUpsertWithWhereUniqueWithoutLevelInput[]
    createMany?: SchoolCreateManyLevelInputEnvelope
    set?: SchoolWhereUniqueInput | SchoolWhereUniqueInput[]
    disconnect?: SchoolWhereUniqueInput | SchoolWhereUniqueInput[]
    delete?: SchoolWhereUniqueInput | SchoolWhereUniqueInput[]
    connect?: SchoolWhereUniqueInput | SchoolWhereUniqueInput[]
    update?: SchoolUpdateWithWhereUniqueWithoutLevelInput | SchoolUpdateWithWhereUniqueWithoutLevelInput[]
    updateMany?: SchoolUpdateManyWithWhereWithoutLevelInput | SchoolUpdateManyWithWhereWithoutLevelInput[]
    deleteMany?: SchoolScalarWhereInput | SchoolScalarWhereInput[]
  }

  export type SubjectUncheckedUpdateManyWithoutLevelNestedInput = {
    create?: XOR<SubjectCreateWithoutLevelInput, SubjectUncheckedCreateWithoutLevelInput> | SubjectCreateWithoutLevelInput[] | SubjectUncheckedCreateWithoutLevelInput[]
    connectOrCreate?: SubjectCreateOrConnectWithoutLevelInput | SubjectCreateOrConnectWithoutLevelInput[]
    upsert?: SubjectUpsertWithWhereUniqueWithoutLevelInput | SubjectUpsertWithWhereUniqueWithoutLevelInput[]
    createMany?: SubjectCreateManyLevelInputEnvelope
    set?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    disconnect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    delete?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    connect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    update?: SubjectUpdateWithWhereUniqueWithoutLevelInput | SubjectUpdateWithWhereUniqueWithoutLevelInput[]
    updateMany?: SubjectUpdateManyWithWhereWithoutLevelInput | SubjectUpdateManyWithWhereWithoutLevelInput[]
    deleteMany?: SubjectScalarWhereInput | SubjectScalarWhereInput[]
  }

  export type LevelCreateNestedOneWithoutSchoolsInput = {
    create?: XOR<LevelCreateWithoutSchoolsInput, LevelUncheckedCreateWithoutSchoolsInput>
    connectOrCreate?: LevelCreateOrConnectWithoutSchoolsInput
    connect?: LevelWhereUniqueInput
  }

  export type LevelUpdateOneRequiredWithoutSchoolsNestedInput = {
    create?: XOR<LevelCreateWithoutSchoolsInput, LevelUncheckedCreateWithoutSchoolsInput>
    connectOrCreate?: LevelCreateOrConnectWithoutSchoolsInput
    upsert?: LevelUpsertWithoutSchoolsInput
    connect?: LevelWhereUniqueInput
    update?: XOR<XOR<LevelUpdateToOneWithWhereWithoutSchoolsInput, LevelUpdateWithoutSchoolsInput>, LevelUncheckedUpdateWithoutSchoolsInput>
  }

  export type LevelCreateNestedOneWithoutSubjectsInput = {
    create?: XOR<LevelCreateWithoutSubjectsInput, LevelUncheckedCreateWithoutSubjectsInput>
    connectOrCreate?: LevelCreateOrConnectWithoutSubjectsInput
    connect?: LevelWhereUniqueInput
  }

  export type LevelUpdateOneRequiredWithoutSubjectsNestedInput = {
    create?: XOR<LevelCreateWithoutSubjectsInput, LevelUncheckedCreateWithoutSubjectsInput>
    connectOrCreate?: LevelCreateOrConnectWithoutSubjectsInput
    upsert?: LevelUpsertWithoutSubjectsInput
    connect?: LevelWhereUniqueInput
    update?: XOR<XOR<LevelUpdateToOneWithWhereWithoutSubjectsInput, LevelUpdateWithoutSubjectsInput>, LevelUncheckedUpdateWithoutSubjectsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type SchoolCreateWithoutLevelInput = {
    name: string
    abbreviation: string
    otherNames: string
    population: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SchoolUncheckedCreateWithoutLevelInput = {
    id?: number
    name: string
    abbreviation: string
    otherNames: string
    population: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SchoolCreateOrConnectWithoutLevelInput = {
    where: SchoolWhereUniqueInput
    create: XOR<SchoolCreateWithoutLevelInput, SchoolUncheckedCreateWithoutLevelInput>
  }

  export type SchoolCreateManyLevelInputEnvelope = {
    data: SchoolCreateManyLevelInput | SchoolCreateManyLevelInput[]
    skipDuplicates?: boolean
  }

  export type SubjectCreateWithoutLevelInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubjectUncheckedCreateWithoutLevelInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubjectCreateOrConnectWithoutLevelInput = {
    where: SubjectWhereUniqueInput
    create: XOR<SubjectCreateWithoutLevelInput, SubjectUncheckedCreateWithoutLevelInput>
  }

  export type SubjectCreateManyLevelInputEnvelope = {
    data: SubjectCreateManyLevelInput | SubjectCreateManyLevelInput[]
    skipDuplicates?: boolean
  }

  export type SchoolUpsertWithWhereUniqueWithoutLevelInput = {
    where: SchoolWhereUniqueInput
    update: XOR<SchoolUpdateWithoutLevelInput, SchoolUncheckedUpdateWithoutLevelInput>
    create: XOR<SchoolCreateWithoutLevelInput, SchoolUncheckedCreateWithoutLevelInput>
  }

  export type SchoolUpdateWithWhereUniqueWithoutLevelInput = {
    where: SchoolWhereUniqueInput
    data: XOR<SchoolUpdateWithoutLevelInput, SchoolUncheckedUpdateWithoutLevelInput>
  }

  export type SchoolUpdateManyWithWhereWithoutLevelInput = {
    where: SchoolScalarWhereInput
    data: XOR<SchoolUpdateManyMutationInput, SchoolUncheckedUpdateManyWithoutLevelInput>
  }

  export type SchoolScalarWhereInput = {
    AND?: SchoolScalarWhereInput | SchoolScalarWhereInput[]
    OR?: SchoolScalarWhereInput[]
    NOT?: SchoolScalarWhereInput | SchoolScalarWhereInput[]
    id?: IntFilter<"School"> | number
    name?: StringFilter<"School"> | string
    abbreviation?: StringFilter<"School"> | string
    otherNames?: StringFilter<"School"> | string
    population?: IntFilter<"School"> | number
    levelId?: IntFilter<"School"> | number
    createdAt?: DateTimeFilter<"School"> | Date | string
    updatedAt?: DateTimeFilter<"School"> | Date | string
  }

  export type SubjectUpsertWithWhereUniqueWithoutLevelInput = {
    where: SubjectWhereUniqueInput
    update: XOR<SubjectUpdateWithoutLevelInput, SubjectUncheckedUpdateWithoutLevelInput>
    create: XOR<SubjectCreateWithoutLevelInput, SubjectUncheckedCreateWithoutLevelInput>
  }

  export type SubjectUpdateWithWhereUniqueWithoutLevelInput = {
    where: SubjectWhereUniqueInput
    data: XOR<SubjectUpdateWithoutLevelInput, SubjectUncheckedUpdateWithoutLevelInput>
  }

  export type SubjectUpdateManyWithWhereWithoutLevelInput = {
    where: SubjectScalarWhereInput
    data: XOR<SubjectUpdateManyMutationInput, SubjectUncheckedUpdateManyWithoutLevelInput>
  }

  export type SubjectScalarWhereInput = {
    AND?: SubjectScalarWhereInput | SubjectScalarWhereInput[]
    OR?: SubjectScalarWhereInput[]
    NOT?: SubjectScalarWhereInput | SubjectScalarWhereInput[]
    id?: IntFilter<"Subject"> | number
    name?: StringFilter<"Subject"> | string
    levelId?: IntFilter<"Subject"> | number
    createdAt?: DateTimeFilter<"Subject"> | Date | string
    updatedAt?: DateTimeFilter<"Subject"> | Date | string
  }

  export type LevelCreateWithoutSchoolsInput = {
    name: string
    abbreviation: string
    createdAt?: Date | string
    updatedAt?: Date | string
    subjects?: SubjectCreateNestedManyWithoutLevelInput
  }

  export type LevelUncheckedCreateWithoutSchoolsInput = {
    id?: number
    name: string
    abbreviation: string
    createdAt?: Date | string
    updatedAt?: Date | string
    subjects?: SubjectUncheckedCreateNestedManyWithoutLevelInput
  }

  export type LevelCreateOrConnectWithoutSchoolsInput = {
    where: LevelWhereUniqueInput
    create: XOR<LevelCreateWithoutSchoolsInput, LevelUncheckedCreateWithoutSchoolsInput>
  }

  export type LevelUpsertWithoutSchoolsInput = {
    update: XOR<LevelUpdateWithoutSchoolsInput, LevelUncheckedUpdateWithoutSchoolsInput>
    create: XOR<LevelCreateWithoutSchoolsInput, LevelUncheckedCreateWithoutSchoolsInput>
    where?: LevelWhereInput
  }

  export type LevelUpdateToOneWithWhereWithoutSchoolsInput = {
    where?: LevelWhereInput
    data: XOR<LevelUpdateWithoutSchoolsInput, LevelUncheckedUpdateWithoutSchoolsInput>
  }

  export type LevelUpdateWithoutSchoolsInput = {
    name?: StringFieldUpdateOperationsInput | string
    abbreviation?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subjects?: SubjectUpdateManyWithoutLevelNestedInput
  }

  export type LevelUncheckedUpdateWithoutSchoolsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    abbreviation?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subjects?: SubjectUncheckedUpdateManyWithoutLevelNestedInput
  }

  export type LevelCreateWithoutSubjectsInput = {
    name: string
    abbreviation: string
    createdAt?: Date | string
    updatedAt?: Date | string
    schools?: SchoolCreateNestedManyWithoutLevelInput
  }

  export type LevelUncheckedCreateWithoutSubjectsInput = {
    id?: number
    name: string
    abbreviation: string
    createdAt?: Date | string
    updatedAt?: Date | string
    schools?: SchoolUncheckedCreateNestedManyWithoutLevelInput
  }

  export type LevelCreateOrConnectWithoutSubjectsInput = {
    where: LevelWhereUniqueInput
    create: XOR<LevelCreateWithoutSubjectsInput, LevelUncheckedCreateWithoutSubjectsInput>
  }

  export type LevelUpsertWithoutSubjectsInput = {
    update: XOR<LevelUpdateWithoutSubjectsInput, LevelUncheckedUpdateWithoutSubjectsInput>
    create: XOR<LevelCreateWithoutSubjectsInput, LevelUncheckedCreateWithoutSubjectsInput>
    where?: LevelWhereInput
  }

  export type LevelUpdateToOneWithWhereWithoutSubjectsInput = {
    where?: LevelWhereInput
    data: XOR<LevelUpdateWithoutSubjectsInput, LevelUncheckedUpdateWithoutSubjectsInput>
  }

  export type LevelUpdateWithoutSubjectsInput = {
    name?: StringFieldUpdateOperationsInput | string
    abbreviation?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schools?: SchoolUpdateManyWithoutLevelNestedInput
  }

  export type LevelUncheckedUpdateWithoutSubjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    abbreviation?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schools?: SchoolUncheckedUpdateManyWithoutLevelNestedInput
  }

  export type SchoolCreateManyLevelInput = {
    id?: number
    name: string
    abbreviation: string
    otherNames: string
    population: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubjectCreateManyLevelInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SchoolUpdateWithoutLevelInput = {
    name?: StringFieldUpdateOperationsInput | string
    abbreviation?: StringFieldUpdateOperationsInput | string
    otherNames?: StringFieldUpdateOperationsInput | string
    population?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SchoolUncheckedUpdateWithoutLevelInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    abbreviation?: StringFieldUpdateOperationsInput | string
    otherNames?: StringFieldUpdateOperationsInput | string
    population?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SchoolUncheckedUpdateManyWithoutLevelInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    abbreviation?: StringFieldUpdateOperationsInput | string
    otherNames?: StringFieldUpdateOperationsInput | string
    population?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubjectUpdateWithoutLevelInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubjectUncheckedUpdateWithoutLevelInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubjectUncheckedUpdateManyWithoutLevelInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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