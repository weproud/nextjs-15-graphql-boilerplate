import * as Client from '@prisma/client'

import { Context } from './context'

import { GraphQLResolveInfo } from 'graphql'

import { GetAggregateResult } from '@prisma/client/runtime/library'

type Resolver<T extends {}, A extends {}, R extends any> = (
  parent: T,
  args: A,
  context: Context,
  info: GraphQLResolveInfo,
) => Promise<R>

type NoExpand<T> = T extends unknown ? T : never

type AtLeast<O extends object, K extends string> = NoExpand<
  O extends unknown
    ?
        | (K extends keyof O ? { [P in K]: O[P] } & O : O)
        | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
    : never
>

export type Resolvers = {
  [key: string]: { [key: string]: Resolver<any, any, any> }
} & {
  User?: User
  Post?: Post
  CreateManyUserAndReturnOutputType?: CreateManyUserAndReturnOutputType
  UpdateManyUserAndReturnOutputType?: UpdateManyUserAndReturnOutputType
  CreateManyPostAndReturnOutputType?: CreateManyPostAndReturnOutputType
  UpdateManyPostAndReturnOutputType?: UpdateManyPostAndReturnOutputType
  Query?: Query
  Mutation?: Mutation
  AggregateUser?: AggregateUser
  UserGroupByOutputType?: UserGroupByOutputType
  AggregatePost?: AggregatePost
  PostGroupByOutputType?: PostGroupByOutputType
  AffectedRowsOutput?: AffectedRowsOutput
  UserCountOutputType?: UserCountOutputType
  UserCountAggregateOutputType?: UserCountAggregateOutputType
  UserMinAggregateOutputType?: UserMinAggregateOutputType
  UserMaxAggregateOutputType?: UserMaxAggregateOutputType
  PostCountAggregateOutputType?: PostCountAggregateOutputType
  PostMinAggregateOutputType?: PostMinAggregateOutputType
  PostMaxAggregateOutputType?: PostMaxAggregateOutputType
}

export type User = { [key: string]: Resolver<any, any, any> } & {
  id?: Resolver<Client.User, {}, string>
  name?: Resolver<Client.User, {}, string>
  email?: Resolver<Client.User, {}, string | null>
  createdAt?: Resolver<Client.User, {}, Date>
  updatedAt?: Resolver<Client.User, {}, Date>
  posts?: Resolver<Client.User, UserPostsArgs, Client.Post[] | null>
  _count?: Resolver<Client.User, {}, Client.Prisma.UserCountOutputType>
}

export type Post = { [key: string]: Resolver<any, any, any> } & {
  id?: Resolver<Client.Post, {}, string>
  userId?: Resolver<Client.Post, {}, string>
  content?: Resolver<Client.Post, {}, string>
  createdAt?: Resolver<Client.Post, {}, Date>
  updatedAt?: Resolver<Client.Post, {}, Date>
  user?: Resolver<Client.Post, {}, Client.User>
}

export type CreateManyUserAndReturnOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  id?: Resolver<
    ReturnType<Client.Prisma.UserDelegate['createManyAndReturn']>,
    {},
    string
  >
  name?: Resolver<
    ReturnType<Client.Prisma.UserDelegate['createManyAndReturn']>,
    {},
    string
  >
  email?: Resolver<
    ReturnType<Client.Prisma.UserDelegate['createManyAndReturn']>,
    {},
    string | null
  >
  createdAt?: Resolver<
    ReturnType<Client.Prisma.UserDelegate['createManyAndReturn']>,
    {},
    Date
  >
  updatedAt?: Resolver<
    ReturnType<Client.Prisma.UserDelegate['createManyAndReturn']>,
    {},
    Date
  >
}

export type UpdateManyUserAndReturnOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  id?: Resolver<Client.Prisma.UpdateManyUserAndReturnOutputType, {}, string>
  name?: Resolver<Client.Prisma.UpdateManyUserAndReturnOutputType, {}, string>
  email?: Resolver<
    Client.Prisma.UpdateManyUserAndReturnOutputType,
    {},
    string | null
  >
  createdAt?: Resolver<
    Client.Prisma.UpdateManyUserAndReturnOutputType,
    {},
    Date
  >
  updatedAt?: Resolver<
    Client.Prisma.UpdateManyUserAndReturnOutputType,
    {},
    Date
  >
}

export type CreateManyPostAndReturnOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  id?: Resolver<
    ReturnType<Client.Prisma.PostDelegate['createManyAndReturn']>,
    {},
    string
  >
  userId?: Resolver<
    ReturnType<Client.Prisma.PostDelegate['createManyAndReturn']>,
    {},
    string
  >
  content?: Resolver<
    ReturnType<Client.Prisma.PostDelegate['createManyAndReturn']>,
    {},
    string
  >
  createdAt?: Resolver<
    ReturnType<Client.Prisma.PostDelegate['createManyAndReturn']>,
    {},
    Date
  >
  updatedAt?: Resolver<
    ReturnType<Client.Prisma.PostDelegate['createManyAndReturn']>,
    {},
    Date
  >
  user?: Resolver<
    ReturnType<Client.Prisma.PostDelegate['createManyAndReturn']>,
    {},
    Client.User
  >
}

export type UpdateManyPostAndReturnOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  id?: Resolver<Client.Prisma.UpdateManyPostAndReturnOutputType, {}, string>
  userId?: Resolver<Client.Prisma.UpdateManyPostAndReturnOutputType, {}, string>
  content?: Resolver<
    Client.Prisma.UpdateManyPostAndReturnOutputType,
    {},
    string
  >
  createdAt?: Resolver<
    Client.Prisma.UpdateManyPostAndReturnOutputType,
    {},
    Date
  >
  updatedAt?: Resolver<
    Client.Prisma.UpdateManyPostAndReturnOutputType,
    {},
    Date
  >
  user?: Resolver<
    Client.Prisma.UpdateManyPostAndReturnOutputType,
    {},
    Client.User
  >
}

export type Query = { [key: string]: Resolver<any, any, any> } & {
  findFirstUser?: Resolver<{}, FindFirstUserArgs, Client.User | null>
  findFirstUserOrThrow?: Resolver<
    {},
    FindFirstUserOrThrowArgs,
    Client.User | null
  >
  findManyUser?: Resolver<{}, FindManyUserArgs, Client.User[]>
  findManyUserCount?: Resolver<{}, FindManyUserArgs, number>
  aggregateUser?: Resolver<
    {},
    AggregateUserArgs,
    GetAggregateResult<Client.Prisma.$UserPayload, AggregateUserArgs>
  >
  groupByUser?: Resolver<
    {},
    GroupByUserArgs,
    Client.Prisma.UserGroupByOutputType[]
  >
  findUniqueUser?: Resolver<{}, FindUniqueUserArgs, Client.User | null>
  findUniqueUserOrThrow?: Resolver<
    {},
    FindUniqueUserOrThrowArgs,
    Client.User | null
  >
  findFirstPost?: Resolver<{}, FindFirstPostArgs, Client.Post | null>
  findFirstPostOrThrow?: Resolver<
    {},
    FindFirstPostOrThrowArgs,
    Client.Post | null
  >
  findManyPost?: Resolver<{}, FindManyPostArgs, Client.Post[]>
  findManyPostCount?: Resolver<{}, FindManyPostArgs, number>
  aggregatePost?: Resolver<
    {},
    AggregatePostArgs,
    GetAggregateResult<Client.Prisma.$PostPayload, AggregatePostArgs>
  >
  groupByPost?: Resolver<
    {},
    GroupByPostArgs,
    Client.Prisma.PostGroupByOutputType[]
  >
  findUniquePost?: Resolver<{}, FindUniquePostArgs, Client.Post | null>
  findUniquePostOrThrow?: Resolver<
    {},
    FindUniquePostOrThrowArgs,
    Client.Post | null
  >
}

export type Mutation = { [key: string]: Resolver<any, any, any> } & {
  createOneUser?: Resolver<{}, CreateOneUserArgs, Client.User>
  upsertOneUser?: Resolver<{}, UpsertOneUserArgs, Client.User>
  createManyUser?: Resolver<{}, CreateManyUserArgs, Client.Prisma.BatchPayload>
  createManyUserAndReturn?: Resolver<
    {},
    CreateManyUserAndReturnArgs,
    ReturnType<Client.Prisma.UserDelegate['createManyAndReturn']>
  >
  deleteOneUser?: Resolver<{}, DeleteOneUserArgs, Client.User | null>
  updateOneUser?: Resolver<{}, UpdateOneUserArgs, Client.User | null>
  updateManyUser?: Resolver<{}, UpdateManyUserArgs, Client.Prisma.BatchPayload>
  updateManyUserAndReturn?: Resolver<
    {},
    UpdateManyUserAndReturnArgs,
    Client.Prisma.UpdateManyUserAndReturnOutputType[]
  >
  deleteManyUser?: Resolver<{}, DeleteManyUserArgs, Client.Prisma.BatchPayload>
  createOnePost?: Resolver<{}, CreateOnePostArgs, Client.Post>
  upsertOnePost?: Resolver<{}, UpsertOnePostArgs, Client.Post>
  createManyPost?: Resolver<{}, CreateManyPostArgs, Client.Prisma.BatchPayload>
  createManyPostAndReturn?: Resolver<
    {},
    CreateManyPostAndReturnArgs,
    ReturnType<Client.Prisma.PostDelegate['createManyAndReturn']>
  >
  deleteOnePost?: Resolver<{}, DeleteOnePostArgs, Client.Post | null>
  updateOnePost?: Resolver<{}, UpdateOnePostArgs, Client.Post | null>
  updateManyPost?: Resolver<{}, UpdateManyPostArgs, Client.Prisma.BatchPayload>
  updateManyPostAndReturn?: Resolver<
    {},
    UpdateManyPostAndReturnArgs,
    Client.Prisma.UpdateManyPostAndReturnOutputType[]
  >
  deleteManyPost?: Resolver<{}, DeleteManyPostArgs, Client.Prisma.BatchPayload>
  executeRaw?: Resolver<{}, ExecuteRawArgs, any>
  queryRaw?: Resolver<{}, QueryRawArgs, any>
}

export type AggregateUser = { [key: string]: Resolver<any, any, any> } & {
  _count?: Resolver<
    Client.Prisma.AggregateUser,
    {},
    Client.Prisma.UserCountAggregateOutputType | null
  >
  _min?: Resolver<
    Client.Prisma.AggregateUser,
    {},
    Client.Prisma.UserMinAggregateOutputType | null
  >
  _max?: Resolver<
    Client.Prisma.AggregateUser,
    {},
    Client.Prisma.UserMaxAggregateOutputType | null
  >
}

export type UserGroupByOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  id?: Resolver<Client.Prisma.UserGroupByOutputType, {}, string>
  name?: Resolver<Client.Prisma.UserGroupByOutputType, {}, string>
  email?: Resolver<Client.Prisma.UserGroupByOutputType, {}, string | null>
  createdAt?: Resolver<Client.Prisma.UserGroupByOutputType, {}, Date>
  updatedAt?: Resolver<Client.Prisma.UserGroupByOutputType, {}, Date>
  _count?: Resolver<
    Client.Prisma.UserGroupByOutputType,
    {},
    Client.Prisma.UserCountAggregateOutputType | null
  >
  _min?: Resolver<
    Client.Prisma.UserGroupByOutputType,
    {},
    Client.Prisma.UserMinAggregateOutputType | null
  >
  _max?: Resolver<
    Client.Prisma.UserGroupByOutputType,
    {},
    Client.Prisma.UserMaxAggregateOutputType | null
  >
}

export type AggregatePost = { [key: string]: Resolver<any, any, any> } & {
  _count?: Resolver<
    Client.Prisma.AggregatePost,
    {},
    Client.Prisma.PostCountAggregateOutputType | null
  >
  _min?: Resolver<
    Client.Prisma.AggregatePost,
    {},
    Client.Prisma.PostMinAggregateOutputType | null
  >
  _max?: Resolver<
    Client.Prisma.AggregatePost,
    {},
    Client.Prisma.PostMaxAggregateOutputType | null
  >
}

export type PostGroupByOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  id?: Resolver<Client.Prisma.PostGroupByOutputType, {}, string>
  userId?: Resolver<Client.Prisma.PostGroupByOutputType, {}, string>
  content?: Resolver<Client.Prisma.PostGroupByOutputType, {}, string>
  createdAt?: Resolver<Client.Prisma.PostGroupByOutputType, {}, Date>
  updatedAt?: Resolver<Client.Prisma.PostGroupByOutputType, {}, Date>
  _count?: Resolver<
    Client.Prisma.PostGroupByOutputType,
    {},
    Client.Prisma.PostCountAggregateOutputType | null
  >
  _min?: Resolver<
    Client.Prisma.PostGroupByOutputType,
    {},
    Client.Prisma.PostMinAggregateOutputType | null
  >
  _max?: Resolver<
    Client.Prisma.PostGroupByOutputType,
    {},
    Client.Prisma.PostMaxAggregateOutputType | null
  >
}

export type AffectedRowsOutput = { [key: string]: Resolver<any, any, any> } & {
  count?: Resolver<Client.Prisma.BatchPayload, {}, number>
}

export type UserCountOutputType = { [key: string]: Resolver<any, any, any> } & {
  posts?: Resolver<
    Client.Prisma.UserCountOutputType,
    UserCountOutputTypePostsArgs,
    number
  >
}

export type UserCountAggregateOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  id?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>
  name?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>
  email?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>
  createdAt?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>
  updatedAt?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>
  _all?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>
}

export type UserMinAggregateOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  id?: Resolver<Client.Prisma.UserMinAggregateOutputType, {}, string | null>
  name?: Resolver<Client.Prisma.UserMinAggregateOutputType, {}, string | null>
  email?: Resolver<Client.Prisma.UserMinAggregateOutputType, {}, string | null>
  createdAt?: Resolver<
    Client.Prisma.UserMinAggregateOutputType,
    {},
    Date | null
  >
  updatedAt?: Resolver<
    Client.Prisma.UserMinAggregateOutputType,
    {},
    Date | null
  >
}

export type UserMaxAggregateOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  id?: Resolver<Client.Prisma.UserMaxAggregateOutputType, {}, string | null>
  name?: Resolver<Client.Prisma.UserMaxAggregateOutputType, {}, string | null>
  email?: Resolver<Client.Prisma.UserMaxAggregateOutputType, {}, string | null>
  createdAt?: Resolver<
    Client.Prisma.UserMaxAggregateOutputType,
    {},
    Date | null
  >
  updatedAt?: Resolver<
    Client.Prisma.UserMaxAggregateOutputType,
    {},
    Date | null
  >
}

export type PostCountAggregateOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  id?: Resolver<Client.Prisma.PostCountAggregateOutputType, {}, number>
  userId?: Resolver<Client.Prisma.PostCountAggregateOutputType, {}, number>
  content?: Resolver<Client.Prisma.PostCountAggregateOutputType, {}, number>
  createdAt?: Resolver<Client.Prisma.PostCountAggregateOutputType, {}, number>
  updatedAt?: Resolver<Client.Prisma.PostCountAggregateOutputType, {}, number>
  _all?: Resolver<Client.Prisma.PostCountAggregateOutputType, {}, number>
}

export type PostMinAggregateOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  id?: Resolver<Client.Prisma.PostMinAggregateOutputType, {}, string | null>
  userId?: Resolver<Client.Prisma.PostMinAggregateOutputType, {}, string | null>
  content?: Resolver<
    Client.Prisma.PostMinAggregateOutputType,
    {},
    string | null
  >
  createdAt?: Resolver<
    Client.Prisma.PostMinAggregateOutputType,
    {},
    Date | null
  >
  updatedAt?: Resolver<
    Client.Prisma.PostMinAggregateOutputType,
    {},
    Date | null
  >
}

export type PostMaxAggregateOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  id?: Resolver<Client.Prisma.PostMaxAggregateOutputType, {}, string | null>
  userId?: Resolver<Client.Prisma.PostMaxAggregateOutputType, {}, string | null>
  content?: Resolver<
    Client.Prisma.PostMaxAggregateOutputType,
    {},
    string | null
  >
  createdAt?: Resolver<
    Client.Prisma.PostMaxAggregateOutputType,
    {},
    Date | null
  >
  updatedAt?: Resolver<
    Client.Prisma.PostMaxAggregateOutputType,
    {},
    Date | null
  >
}

export type UserPostsArgs = {
  where?: PostWhereInput
  orderBy?: PostOrderByWithRelationInput[]
  cursor?: PostWhereUniqueInput
  take?: number
  skip?: number
  distinct?: PostScalarFieldEnum[]
}

export type FindFirstUserArgs = {
  where?: UserWhereInput
  orderBy?: UserOrderByWithRelationInput[]
  cursor?: UserWhereUniqueInput
  take?: number
  skip?: number
  distinct?: UserScalarFieldEnum[]
}

export type FindFirstUserOrThrowArgs = {
  where?: UserWhereInput
  orderBy?: UserOrderByWithRelationInput[]
  cursor?: UserWhereUniqueInput
  take?: number
  skip?: number
  distinct?: UserScalarFieldEnum[]
}

export type FindManyUserArgs = {
  where?: UserWhereInput
  orderBy?: UserOrderByWithRelationInput[]
  cursor?: UserWhereUniqueInput
  take?: number
  skip?: number
  distinct?: UserScalarFieldEnum[]
}

export type AggregateUserArgs = {
  where?: UserWhereInput
  orderBy?: UserOrderByWithRelationInput[]
  cursor?: UserWhereUniqueInput
  take?: number
  skip?: number
  _count?: Client.Prisma.UserCountAggregateInputType
  _min?: Client.Prisma.UserMinAggregateInputType
  _max?: Client.Prisma.UserMaxAggregateInputType
}

export type GroupByUserArgs = {
  where?: UserWhereInput
  orderBy?: UserOrderByWithAggregationInput[]
  by: UserScalarFieldEnum[]
  having?: UserScalarWhereWithAggregatesInput
  take?: number
  skip?: number
}

export type FindUniqueUserArgs = {
  where: UserWhereUniqueInput
}

export type FindUniqueUserOrThrowArgs = {
  where: UserWhereUniqueInput
}

export type FindFirstPostArgs = {
  where?: PostWhereInput
  orderBy?: PostOrderByWithRelationInput[]
  cursor?: PostWhereUniqueInput
  take?: number
  skip?: number
  distinct?: PostScalarFieldEnum[]
}

export type FindFirstPostOrThrowArgs = {
  where?: PostWhereInput
  orderBy?: PostOrderByWithRelationInput[]
  cursor?: PostWhereUniqueInput
  take?: number
  skip?: number
  distinct?: PostScalarFieldEnum[]
}

export type FindManyPostArgs = {
  where?: PostWhereInput
  orderBy?: PostOrderByWithRelationInput[]
  cursor?: PostWhereUniqueInput
  take?: number
  skip?: number
  distinct?: PostScalarFieldEnum[]
}

export type AggregatePostArgs = {
  where?: PostWhereInput
  orderBy?: PostOrderByWithRelationInput[]
  cursor?: PostWhereUniqueInput
  take?: number
  skip?: number
  _count?: Client.Prisma.PostCountAggregateInputType
  _min?: Client.Prisma.PostMinAggregateInputType
  _max?: Client.Prisma.PostMaxAggregateInputType
}

export type GroupByPostArgs = {
  where?: PostWhereInput
  orderBy?: PostOrderByWithAggregationInput[]
  by: PostScalarFieldEnum[]
  having?: PostScalarWhereWithAggregatesInput
  take?: number
  skip?: number
}

export type FindUniquePostArgs = {
  where: PostWhereUniqueInput
}

export type FindUniquePostOrThrowArgs = {
  where: PostWhereUniqueInput
}

export type CreateOneUserArgs = {
  data: UserCreateInput
}

export type UpsertOneUserArgs = {
  where: UserWhereUniqueInput
  create: UserCreateInput
  update: UserUpdateInput
}

export type CreateManyUserArgs = {
  data: UserCreateManyInput[]
}

export type CreateManyUserAndReturnArgs = {
  data: UserCreateManyInput[]
}

export type DeleteOneUserArgs = {
  where: UserWhereUniqueInput
}

export type UpdateOneUserArgs = {
  data: UserUpdateInput
  where: UserWhereUniqueInput
}

export type UpdateManyUserArgs = {
  data: UserUpdateManyMutationInput
  where?: UserWhereInput
  limit?: number
}

export type UpdateManyUserAndReturnArgs = {
  data: UserUpdateManyMutationInput
  where?: UserWhereInput
  limit?: number
}

export type DeleteManyUserArgs = {
  where?: UserWhereInput
  limit?: number
}

export type CreateOnePostArgs = {
  data: PostCreateInput
}

export type UpsertOnePostArgs = {
  where: PostWhereUniqueInput
  create: PostCreateInput
  update: PostUpdateInput
}

export type CreateManyPostArgs = {
  data: PostCreateManyInput[]
}

export type CreateManyPostAndReturnArgs = {
  data: PostCreateManyInput[]
}

export type DeleteOnePostArgs = {
  where: PostWhereUniqueInput
}

export type UpdateOnePostArgs = {
  data: PostUpdateInput
  where: PostWhereUniqueInput
}

export type UpdateManyPostArgs = {
  data: PostUpdateManyMutationInput
  where?: PostWhereInput
  limit?: number
}

export type UpdateManyPostAndReturnArgs = {
  data: PostUpdateManyMutationInput
  where?: PostWhereInput
  limit?: number
}

export type DeleteManyPostArgs = {
  where?: PostWhereInput
  limit?: number
}

export type ExecuteRawArgs = {
  query: string
  parameters?: any
}

export type QueryRawArgs = {
  query: string
  parameters?: any
}

export type UserCountOutputTypePostsArgs = {
  where?: PostWhereInput
}

export type UserWhereInput = {
  AND?: UserWhereInput[]
  OR?: UserWhereInput[]
  NOT?: UserWhereInput[]
  id?: StringFilter
  name?: StringFilter
  email?: StringNullableFilter | null
  createdAt?: DateTimeFilter
  updatedAt?: DateTimeFilter
  posts?: PostListRelationFilter
}

export type UserOrderByWithRelationInput = {
  id?: SortOrder
  name?: SortOrder
  email?: SortOrderInput
  createdAt?: SortOrder
  updatedAt?: SortOrder
  posts?: PostOrderByRelationAggregateInput
}

export type UserWhereUniqueInput = AtLeast<
  {
    id?: string
    name?: string
    email?: string
    AND?: UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput[]
    createdAt?: DateTimeFilter
    updatedAt?: DateTimeFilter
    posts?: PostListRelationFilter
  },
  'id' | 'name' | 'email'
>

export type UserOrderByWithAggregationInput = {
  id?: SortOrder
  name?: SortOrder
  email?: SortOrderInput
  createdAt?: SortOrder
  updatedAt?: SortOrder
  _count?: UserCountOrderByAggregateInput
  _max?: UserMaxOrderByAggregateInput
  _min?: UserMinOrderByAggregateInput
}

export type UserScalarWhereWithAggregatesInput = {
  AND?: UserScalarWhereWithAggregatesInput[]
  OR?: UserScalarWhereWithAggregatesInput[]
  NOT?: UserScalarWhereWithAggregatesInput[]
  id?: StringWithAggregatesFilter
  name?: StringWithAggregatesFilter
  email?: StringNullableWithAggregatesFilter | null
  createdAt?: DateTimeWithAggregatesFilter
  updatedAt?: DateTimeWithAggregatesFilter
}

export type PostWhereInput = {
  AND?: PostWhereInput[]
  OR?: PostWhereInput[]
  NOT?: PostWhereInput[]
  id?: StringFilter
  userId?: StringFilter
  content?: StringFilter
  createdAt?: DateTimeFilter
  updatedAt?: DateTimeFilter
  user?: UserScalarRelationFilter
}

export type PostOrderByWithRelationInput = {
  id?: SortOrder
  userId?: SortOrder
  content?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
  user?: UserOrderByWithRelationInput
}

export type PostWhereUniqueInput = AtLeast<
  {
    id?: string
    AND?: PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput[]
    userId?: StringFilter
    content?: StringFilter
    createdAt?: DateTimeFilter
    updatedAt?: DateTimeFilter
    user?: UserScalarRelationFilter
  },
  'id'
>

export type PostOrderByWithAggregationInput = {
  id?: SortOrder
  userId?: SortOrder
  content?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
  _count?: PostCountOrderByAggregateInput
  _max?: PostMaxOrderByAggregateInput
  _min?: PostMinOrderByAggregateInput
}

export type PostScalarWhereWithAggregatesInput = {
  AND?: PostScalarWhereWithAggregatesInput[]
  OR?: PostScalarWhereWithAggregatesInput[]
  NOT?: PostScalarWhereWithAggregatesInput[]
  id?: StringWithAggregatesFilter
  userId?: StringWithAggregatesFilter
  content?: StringWithAggregatesFilter
  createdAt?: DateTimeWithAggregatesFilter
  updatedAt?: DateTimeWithAggregatesFilter
}

export type UserCreateInput = {
  id?: string
  name: string
  email?: string | null
  createdAt?: Date
  updatedAt?: Date
  posts?: PostCreateNestedManyWithoutUserInput
}

export type UserUncheckedCreateInput = {
  id?: string
  name: string
  email?: string | null
  createdAt?: Date
  updatedAt?: Date
  posts?: PostUncheckedCreateNestedManyWithoutUserInput
}

export type UserUpdateInput = {
  id?: StringFieldUpdateOperationsInput
  name?: StringFieldUpdateOperationsInput
  email?: NullableStringFieldUpdateOperationsInput | null
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  posts?: PostUpdateManyWithoutUserNestedInput
}

export type UserUncheckedUpdateInput = {
  id?: StringFieldUpdateOperationsInput
  name?: StringFieldUpdateOperationsInput
  email?: NullableStringFieldUpdateOperationsInput | null
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  posts?: PostUncheckedUpdateManyWithoutUserNestedInput
}

export type UserCreateManyInput = {
  id?: string
  name: string
  email?: string | null
  createdAt?: Date
  updatedAt?: Date
}

export type UserUpdateManyMutationInput = {
  id?: StringFieldUpdateOperationsInput
  name?: StringFieldUpdateOperationsInput
  email?: NullableStringFieldUpdateOperationsInput | null
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
}

export type UserUncheckedUpdateManyInput = {
  id?: StringFieldUpdateOperationsInput
  name?: StringFieldUpdateOperationsInput
  email?: NullableStringFieldUpdateOperationsInput | null
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
}

export type PostCreateInput = {
  id?: string
  content: string
  createdAt?: Date
  updatedAt?: Date
  user: UserCreateNestedOneWithoutPostsInput
}

export type PostUncheckedCreateInput = {
  id?: string
  userId: string
  content: string
  createdAt?: Date
  updatedAt?: Date
}

export type PostUpdateInput = {
  id?: StringFieldUpdateOperationsInput
  content?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  user?: UserUpdateOneRequiredWithoutPostsNestedInput
}

export type PostUncheckedUpdateInput = {
  id?: StringFieldUpdateOperationsInput
  userId?: StringFieldUpdateOperationsInput
  content?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
}

export type PostCreateManyInput = {
  id?: string
  userId: string
  content: string
  createdAt?: Date
  updatedAt?: Date
}

export type PostUpdateManyMutationInput = {
  id?: StringFieldUpdateOperationsInput
  content?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
}

export type PostUncheckedUpdateManyInput = {
  id?: StringFieldUpdateOperationsInput
  userId?: StringFieldUpdateOperationsInput
  content?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
}

export type StringFilter = {
  equals?: string
  in?: string[]
  notIn?: string[]
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  not?: NestedStringFilter
}

export type StringNullableFilter = {
  equals?: string | null
  in?: string[] | null
  notIn?: string[] | null
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  not?: NestedStringNullableFilter | null
}

export type DateTimeFilter = {
  equals?: Date
  in?: Date[]
  notIn?: Date[]
  lt?: Date
  lte?: Date
  gt?: Date
  gte?: Date
  not?: NestedDateTimeFilter
}

export type PostListRelationFilter = {
  every?: PostWhereInput
  some?: PostWhereInput
  none?: PostWhereInput
}

export type SortOrderInput = {
  sort: SortOrder
  nulls?: NullsOrder
}

export type PostOrderByRelationAggregateInput = {
  _count?: SortOrder
}

export type UserCountOrderByAggregateInput = {
  id?: SortOrder
  name?: SortOrder
  email?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
}

export type UserMaxOrderByAggregateInput = {
  id?: SortOrder
  name?: SortOrder
  email?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
}

export type UserMinOrderByAggregateInput = {
  id?: SortOrder
  name?: SortOrder
  email?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
}

export type StringWithAggregatesFilter = {
  equals?: string
  in?: string[]
  notIn?: string[]
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  not?: NestedStringWithAggregatesFilter
  _count?: NestedIntFilter
  _min?: NestedStringFilter
  _max?: NestedStringFilter
}

export type StringNullableWithAggregatesFilter = {
  equals?: string | null
  in?: string[] | null
  notIn?: string[] | null
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  not?: NestedStringNullableWithAggregatesFilter | null
  _count?: NestedIntNullableFilter
  _min?: NestedStringNullableFilter
  _max?: NestedStringNullableFilter
}

export type DateTimeWithAggregatesFilter = {
  equals?: Date
  in?: Date[]
  notIn?: Date[]
  lt?: Date
  lte?: Date
  gt?: Date
  gte?: Date
  not?: NestedDateTimeWithAggregatesFilter
  _count?: NestedIntFilter
  _min?: NestedDateTimeFilter
  _max?: NestedDateTimeFilter
}

export type UserScalarRelationFilter = {
  is?: UserWhereInput
  isNot?: UserWhereInput
}

export type PostCountOrderByAggregateInput = {
  id?: SortOrder
  userId?: SortOrder
  content?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
}

export type PostMaxOrderByAggregateInput = {
  id?: SortOrder
  userId?: SortOrder
  content?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
}

export type PostMinOrderByAggregateInput = {
  id?: SortOrder
  userId?: SortOrder
  content?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
}

export type PostCreateNestedManyWithoutUserInput = {
  create?: PostCreateWithoutUserInput[]
  connectOrCreate?: PostCreateOrConnectWithoutUserInput[]
  createMany?: PostCreateManyUserInputEnvelope
  connect?: PostWhereUniqueInput[]
}

export type PostUncheckedCreateNestedManyWithoutUserInput = {
  create?: PostCreateWithoutUserInput[]
  connectOrCreate?: PostCreateOrConnectWithoutUserInput[]
  createMany?: PostCreateManyUserInputEnvelope
  connect?: PostWhereUniqueInput[]
}

export type StringFieldUpdateOperationsInput = {
  set?: string
}

export type NullableStringFieldUpdateOperationsInput = {
  set?: string | null
}

export type DateTimeFieldUpdateOperationsInput = {
  set?: Date
}

export type PostUpdateManyWithoutUserNestedInput = {
  create?: PostCreateWithoutUserInput[]
  connectOrCreate?: PostCreateOrConnectWithoutUserInput[]
  upsert?: PostUpsertWithWhereUniqueWithoutUserInput[]
  createMany?: PostCreateManyUserInputEnvelope
  set?: PostWhereUniqueInput[]
  disconnect?: PostWhereUniqueInput[]
  delete?: PostWhereUniqueInput[]
  connect?: PostWhereUniqueInput[]
  update?: PostUpdateWithWhereUniqueWithoutUserInput[]
  updateMany?: PostUpdateManyWithWhereWithoutUserInput[]
  deleteMany?: PostScalarWhereInput[]
}

export type PostUncheckedUpdateManyWithoutUserNestedInput = {
  create?: PostCreateWithoutUserInput[]
  connectOrCreate?: PostCreateOrConnectWithoutUserInput[]
  upsert?: PostUpsertWithWhereUniqueWithoutUserInput[]
  createMany?: PostCreateManyUserInputEnvelope
  set?: PostWhereUniqueInput[]
  disconnect?: PostWhereUniqueInput[]
  delete?: PostWhereUniqueInput[]
  connect?: PostWhereUniqueInput[]
  update?: PostUpdateWithWhereUniqueWithoutUserInput[]
  updateMany?: PostUpdateManyWithWhereWithoutUserInput[]
  deleteMany?: PostScalarWhereInput[]
}

export type UserCreateNestedOneWithoutPostsInput = {
  create?: UserCreateWithoutPostsInput
  connectOrCreate?: UserCreateOrConnectWithoutPostsInput
  connect?: UserWhereUniqueInput
}

export type UserUpdateOneRequiredWithoutPostsNestedInput = {
  create?: UserCreateWithoutPostsInput
  connectOrCreate?: UserCreateOrConnectWithoutPostsInput
  upsert?: UserUpsertWithoutPostsInput
  connect?: UserWhereUniqueInput
  update?: UserUpdateToOneWithWhereWithoutPostsInput
}

export type NestedStringFilter = {
  equals?: string
  in?: string[]
  notIn?: string[]
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  not?: NestedStringFilter
}

export type NestedStringNullableFilter = {
  equals?: string | null
  in?: string[] | null
  notIn?: string[] | null
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  not?: NestedStringNullableFilter | null
}

export type NestedDateTimeFilter = {
  equals?: Date
  in?: Date[]
  notIn?: Date[]
  lt?: Date
  lte?: Date
  gt?: Date
  gte?: Date
  not?: NestedDateTimeFilter
}

export type NestedStringWithAggregatesFilter = {
  equals?: string
  in?: string[]
  notIn?: string[]
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  not?: NestedStringWithAggregatesFilter
  _count?: NestedIntFilter
  _min?: NestedStringFilter
  _max?: NestedStringFilter
}

export type NestedIntFilter = {
  equals?: number
  in?: number[]
  notIn?: number[]
  lt?: number
  lte?: number
  gt?: number
  gte?: number
  not?: NestedIntFilter
}

export type NestedStringNullableWithAggregatesFilter = {
  equals?: string | null
  in?: string[] | null
  notIn?: string[] | null
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  not?: NestedStringNullableWithAggregatesFilter | null
  _count?: NestedIntNullableFilter
  _min?: NestedStringNullableFilter
  _max?: NestedStringNullableFilter
}

export type NestedIntNullableFilter = {
  equals?: number | null
  in?: number[] | null
  notIn?: number[] | null
  lt?: number
  lte?: number
  gt?: number
  gte?: number
  not?: NestedIntNullableFilter | null
}

export type NestedDateTimeWithAggregatesFilter = {
  equals?: Date
  in?: Date[]
  notIn?: Date[]
  lt?: Date
  lte?: Date
  gt?: Date
  gte?: Date
  not?: NestedDateTimeWithAggregatesFilter
  _count?: NestedIntFilter
  _min?: NestedDateTimeFilter
  _max?: NestedDateTimeFilter
}

export type PostCreateWithoutUserInput = {
  id?: string
  content: string
  createdAt?: Date
  updatedAt?: Date
}

export type PostUncheckedCreateWithoutUserInput = {
  id?: string
  content: string
  createdAt?: Date
  updatedAt?: Date
}

export type PostCreateOrConnectWithoutUserInput = {
  where: PostWhereUniqueInput
  create: PostCreateWithoutUserInput
}

export type PostCreateManyUserInputEnvelope = {
  data: PostCreateManyUserInput[]
}

export type PostUpsertWithWhereUniqueWithoutUserInput = {
  where: PostWhereUniqueInput
  update: PostUpdateWithoutUserInput
  create: PostCreateWithoutUserInput
}

export type PostUpdateWithWhereUniqueWithoutUserInput = {
  where: PostWhereUniqueInput
  data: PostUpdateWithoutUserInput
}

export type PostUpdateManyWithWhereWithoutUserInput = {
  where: PostScalarWhereInput
  data: PostUpdateManyMutationInput
}

export type PostScalarWhereInput = {
  AND?: PostScalarWhereInput[]
  OR?: PostScalarWhereInput[]
  NOT?: PostScalarWhereInput[]
  id?: StringFilter
  userId?: StringFilter
  content?: StringFilter
  createdAt?: DateTimeFilter
  updatedAt?: DateTimeFilter
}

export type UserCreateWithoutPostsInput = {
  id?: string
  name: string
  email?: string | null
  createdAt?: Date
  updatedAt?: Date
}

export type UserUncheckedCreateWithoutPostsInput = {
  id?: string
  name: string
  email?: string | null
  createdAt?: Date
  updatedAt?: Date
}

export type UserCreateOrConnectWithoutPostsInput = {
  where: UserWhereUniqueInput
  create: UserCreateWithoutPostsInput
}

export type UserUpsertWithoutPostsInput = {
  update: UserUpdateWithoutPostsInput
  create: UserCreateWithoutPostsInput
  where?: UserWhereInput
}

export type UserUpdateToOneWithWhereWithoutPostsInput = {
  where?: UserWhereInput
  data: UserUpdateWithoutPostsInput
}

export type UserUpdateWithoutPostsInput = {
  id?: StringFieldUpdateOperationsInput
  name?: StringFieldUpdateOperationsInput
  email?: NullableStringFieldUpdateOperationsInput | null
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
}

export type UserUncheckedUpdateWithoutPostsInput = {
  id?: StringFieldUpdateOperationsInput
  name?: StringFieldUpdateOperationsInput
  email?: NullableStringFieldUpdateOperationsInput | null
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
}

export type PostCreateManyUserInput = {
  id?: string
  content: string
  createdAt?: Date
  updatedAt?: Date
}

export type PostUpdateWithoutUserInput = {
  id?: StringFieldUpdateOperationsInput
  content?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
}

export type PostUncheckedUpdateWithoutUserInput = {
  id?: StringFieldUpdateOperationsInput
  content?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
}

export type PostUncheckedUpdateManyWithoutUserInput = {
  id?: StringFieldUpdateOperationsInput
  content?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
}

export enum TransactionIsolationLevel {
  Serializable = 'Serializable',
}
export enum UserScalarFieldEnum {
  id = 'id',
  name = 'name',
  email = 'email',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}
export enum PostScalarFieldEnum {
  id = 'id',
  userId = 'userId',
  content = 'content',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}
export enum SortOrder {
  asc = 'asc',
  desc = 'desc',
}
export enum NullsOrder {
  first = 'first',
  last = 'last',
}
