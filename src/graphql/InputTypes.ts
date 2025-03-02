import gql from 'graphql-tag'

export default gql`
  scalar DateTime
  type BatchPayload {
    count: Int!
  }

  enum TransactionIsolationLevel {
    Serializable
  }

  enum UserScalarFieldEnum {
    id
    name
    email
    createdAt
    updatedAt
  }

  enum PostScalarFieldEnum {
    id
    userId
    content
    createdAt
    updatedAt
  }

  enum SortOrder {
    asc
    desc
  }

  enum NullsOrder {
    first
    last
  }

  input UserWhereInput {
    AND: [UserWhereInput!]
    OR: [UserWhereInput!]
    NOT: [UserWhereInput!]
    id: StringFilter
    name: StringFilter
    email: StringNullableFilter
    createdAt: DateTimeFilter
    updatedAt: DateTimeFilter
    posts: PostListRelationFilter
  }

  input UserOrderByWithRelationInput {
    id: SortOrder
    name: SortOrder
    email: SortOrderInput
    createdAt: SortOrder
    updatedAt: SortOrder
    posts: PostOrderByRelationAggregateInput
  }

  input UserWhereUniqueInput {
    id: String
    name: String
    email: String
    AND: [UserWhereInput!]
    OR: [UserWhereInput!]
    NOT: [UserWhereInput!]
    createdAt: DateTimeFilter
    updatedAt: DateTimeFilter
    posts: PostListRelationFilter
  }

  input UserOrderByWithAggregationInput {
    id: SortOrder
    name: SortOrder
    email: SortOrderInput
    createdAt: SortOrder
    updatedAt: SortOrder
    _count: UserCountOrderByAggregateInput
    _max: UserMaxOrderByAggregateInput
    _min: UserMinOrderByAggregateInput
  }

  input UserScalarWhereWithAggregatesInput {
    AND: [UserScalarWhereWithAggregatesInput!]
    OR: [UserScalarWhereWithAggregatesInput!]
    NOT: [UserScalarWhereWithAggregatesInput!]
    id: StringWithAggregatesFilter
    name: StringWithAggregatesFilter
    email: StringNullableWithAggregatesFilter
    createdAt: DateTimeWithAggregatesFilter
    updatedAt: DateTimeWithAggregatesFilter
  }

  input PostWhereInput {
    AND: [PostWhereInput!]
    OR: [PostWhereInput!]
    NOT: [PostWhereInput!]
    id: StringFilter
    userId: StringFilter
    content: StringFilter
    createdAt: DateTimeFilter
    updatedAt: DateTimeFilter
    user: UserScalarRelationFilter
  }

  input PostOrderByWithRelationInput {
    id: SortOrder
    userId: SortOrder
    content: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
    user: UserOrderByWithRelationInput
  }

  input PostWhereUniqueInput {
    id: String
    AND: [PostWhereInput!]
    OR: [PostWhereInput!]
    NOT: [PostWhereInput!]
    userId: StringFilter
    content: StringFilter
    createdAt: DateTimeFilter
    updatedAt: DateTimeFilter
    user: UserScalarRelationFilter
  }

  input PostOrderByWithAggregationInput {
    id: SortOrder
    userId: SortOrder
    content: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
    _count: PostCountOrderByAggregateInput
    _max: PostMaxOrderByAggregateInput
    _min: PostMinOrderByAggregateInput
  }

  input PostScalarWhereWithAggregatesInput {
    AND: [PostScalarWhereWithAggregatesInput!]
    OR: [PostScalarWhereWithAggregatesInput!]
    NOT: [PostScalarWhereWithAggregatesInput!]
    id: StringWithAggregatesFilter
    userId: StringWithAggregatesFilter
    content: StringWithAggregatesFilter
    createdAt: DateTimeWithAggregatesFilter
    updatedAt: DateTimeWithAggregatesFilter
  }

  input UserCreateInput {
    id: String
    name: String!
    email: String
    createdAt: DateTime
    updatedAt: DateTime
    posts: PostCreateNestedManyWithoutUserInput
  }

  input UserUncheckedCreateInput {
    id: String
    name: String!
    email: String
    createdAt: DateTime
    updatedAt: DateTime
    posts: PostUncheckedCreateNestedManyWithoutUserInput
  }

  input UserUpdateInput {
    id: StringFieldUpdateOperationsInput
    name: StringFieldUpdateOperationsInput
    email: NullableStringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    posts: PostUpdateManyWithoutUserNestedInput
  }

  input UserUncheckedUpdateInput {
    id: StringFieldUpdateOperationsInput
    name: StringFieldUpdateOperationsInput
    email: NullableStringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    posts: PostUncheckedUpdateManyWithoutUserNestedInput
  }

  input UserCreateManyInput {
    id: String
    name: String!
    email: String
    createdAt: DateTime
    updatedAt: DateTime
  }

  input UserUpdateManyMutationInput {
    id: StringFieldUpdateOperationsInput
    name: StringFieldUpdateOperationsInput
    email: NullableStringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
  }

  input UserUncheckedUpdateManyInput {
    id: StringFieldUpdateOperationsInput
    name: StringFieldUpdateOperationsInput
    email: NullableStringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
  }

  input PostCreateInput {
    id: String
    content: String!
    createdAt: DateTime
    updatedAt: DateTime
    user: UserCreateNestedOneWithoutPostsInput!
  }

  input PostUncheckedCreateInput {
    id: String
    userId: String!
    content: String!
    createdAt: DateTime
    updatedAt: DateTime
  }

  input PostUpdateInput {
    id: StringFieldUpdateOperationsInput
    content: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    user: UserUpdateOneRequiredWithoutPostsNestedInput
  }

  input PostUncheckedUpdateInput {
    id: StringFieldUpdateOperationsInput
    userId: StringFieldUpdateOperationsInput
    content: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
  }

  input PostCreateManyInput {
    id: String
    userId: String!
    content: String!
    createdAt: DateTime
    updatedAt: DateTime
  }

  input PostUpdateManyMutationInput {
    id: StringFieldUpdateOperationsInput
    content: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
  }

  input PostUncheckedUpdateManyInput {
    id: StringFieldUpdateOperationsInput
    userId: StringFieldUpdateOperationsInput
    content: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
  }

  input StringFilter {
    equals: String
    in: [String!]
    notIn: [String!]
    lt: String
    lte: String
    gt: String
    gte: String
    contains: String
    startsWith: String
    endsWith: String
    not: NestedStringFilter
  }

  input StringNullableFilter {
    equals: String
    in: [String!]
    notIn: [String!]
    lt: String
    lte: String
    gt: String
    gte: String
    contains: String
    startsWith: String
    endsWith: String
    not: NestedStringNullableFilter
  }

  input DateTimeFilter {
    equals: DateTime
    in: [DateTime!]
    notIn: [DateTime!]
    lt: DateTime
    lte: DateTime
    gt: DateTime
    gte: DateTime
    not: NestedDateTimeFilter
  }

  input PostListRelationFilter {
    every: PostWhereInput
    some: PostWhereInput
    none: PostWhereInput
  }

  input SortOrderInput {
    sort: SortOrder!
    nulls: NullsOrder
  }

  input PostOrderByRelationAggregateInput {
    _count: SortOrder
  }

  input UserCountOrderByAggregateInput {
    id: SortOrder
    name: SortOrder
    email: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
  }

  input UserMaxOrderByAggregateInput {
    id: SortOrder
    name: SortOrder
    email: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
  }

  input UserMinOrderByAggregateInput {
    id: SortOrder
    name: SortOrder
    email: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
  }

  input StringWithAggregatesFilter {
    equals: String
    in: [String!]
    notIn: [String!]
    lt: String
    lte: String
    gt: String
    gte: String
    contains: String
    startsWith: String
    endsWith: String
    not: NestedStringWithAggregatesFilter
    _count: NestedIntFilter
    _min: NestedStringFilter
    _max: NestedStringFilter
  }

  input StringNullableWithAggregatesFilter {
    equals: String
    in: [String!]
    notIn: [String!]
    lt: String
    lte: String
    gt: String
    gte: String
    contains: String
    startsWith: String
    endsWith: String
    not: NestedStringNullableWithAggregatesFilter
    _count: NestedIntNullableFilter
    _min: NestedStringNullableFilter
    _max: NestedStringNullableFilter
  }

  input DateTimeWithAggregatesFilter {
    equals: DateTime
    in: [DateTime!]
    notIn: [DateTime!]
    lt: DateTime
    lte: DateTime
    gt: DateTime
    gte: DateTime
    not: NestedDateTimeWithAggregatesFilter
    _count: NestedIntFilter
    _min: NestedDateTimeFilter
    _max: NestedDateTimeFilter
  }

  input UserScalarRelationFilter {
    is: UserWhereInput
    isNot: UserWhereInput
  }

  input PostCountOrderByAggregateInput {
    id: SortOrder
    userId: SortOrder
    content: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
  }

  input PostMaxOrderByAggregateInput {
    id: SortOrder
    userId: SortOrder
    content: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
  }

  input PostMinOrderByAggregateInput {
    id: SortOrder
    userId: SortOrder
    content: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
  }

  input PostCreateNestedManyWithoutUserInput {
    create: [PostCreateWithoutUserInput!]
    connectOrCreate: [PostCreateOrConnectWithoutUserInput!]
    createMany: PostCreateManyUserInputEnvelope
    connect: [PostWhereUniqueInput!]
  }

  input PostUncheckedCreateNestedManyWithoutUserInput {
    create: [PostCreateWithoutUserInput!]
    connectOrCreate: [PostCreateOrConnectWithoutUserInput!]
    createMany: PostCreateManyUserInputEnvelope
    connect: [PostWhereUniqueInput!]
  }

  input StringFieldUpdateOperationsInput {
    set: String
  }

  input NullableStringFieldUpdateOperationsInput {
    set: String
  }

  input DateTimeFieldUpdateOperationsInput {
    set: DateTime
  }

  input PostUpdateManyWithoutUserNestedInput {
    create: [PostCreateWithoutUserInput!]
    connectOrCreate: [PostCreateOrConnectWithoutUserInput!]
    upsert: [PostUpsertWithWhereUniqueWithoutUserInput!]
    createMany: PostCreateManyUserInputEnvelope
    set: [PostWhereUniqueInput!]
    disconnect: [PostWhereUniqueInput!]
    delete: [PostWhereUniqueInput!]
    connect: [PostWhereUniqueInput!]
    update: [PostUpdateWithWhereUniqueWithoutUserInput!]
    updateMany: [PostUpdateManyWithWhereWithoutUserInput!]
    deleteMany: [PostScalarWhereInput!]
  }

  input PostUncheckedUpdateManyWithoutUserNestedInput {
    create: [PostCreateWithoutUserInput!]
    connectOrCreate: [PostCreateOrConnectWithoutUserInput!]
    upsert: [PostUpsertWithWhereUniqueWithoutUserInput!]
    createMany: PostCreateManyUserInputEnvelope
    set: [PostWhereUniqueInput!]
    disconnect: [PostWhereUniqueInput!]
    delete: [PostWhereUniqueInput!]
    connect: [PostWhereUniqueInput!]
    update: [PostUpdateWithWhereUniqueWithoutUserInput!]
    updateMany: [PostUpdateManyWithWhereWithoutUserInput!]
    deleteMany: [PostScalarWhereInput!]
  }

  input UserCreateNestedOneWithoutPostsInput {
    create: UserCreateWithoutPostsInput
    connectOrCreate: UserCreateOrConnectWithoutPostsInput
    connect: UserWhereUniqueInput
  }

  input UserUpdateOneRequiredWithoutPostsNestedInput {
    create: UserCreateWithoutPostsInput
    connectOrCreate: UserCreateOrConnectWithoutPostsInput
    upsert: UserUpsertWithoutPostsInput
    connect: UserWhereUniqueInput
    update: UserUpdateToOneWithWhereWithoutPostsInput
  }

  input NestedStringFilter {
    equals: String
    in: [String!]
    notIn: [String!]
    lt: String
    lte: String
    gt: String
    gte: String
    contains: String
    startsWith: String
    endsWith: String
    not: NestedStringFilter
  }

  input NestedStringNullableFilter {
    equals: String
    in: [String!]
    notIn: [String!]
    lt: String
    lte: String
    gt: String
    gte: String
    contains: String
    startsWith: String
    endsWith: String
    not: NestedStringNullableFilter
  }

  input NestedDateTimeFilter {
    equals: DateTime
    in: [DateTime!]
    notIn: [DateTime!]
    lt: DateTime
    lte: DateTime
    gt: DateTime
    gte: DateTime
    not: NestedDateTimeFilter
  }

  input NestedStringWithAggregatesFilter {
    equals: String
    in: [String!]
    notIn: [String!]
    lt: String
    lte: String
    gt: String
    gte: String
    contains: String
    startsWith: String
    endsWith: String
    not: NestedStringWithAggregatesFilter
    _count: NestedIntFilter
    _min: NestedStringFilter
    _max: NestedStringFilter
  }

  input NestedIntFilter {
    equals: Int
    in: [Int!]
    notIn: [Int!]
    lt: Int
    lte: Int
    gt: Int
    gte: Int
    not: NestedIntFilter
  }

  input NestedStringNullableWithAggregatesFilter {
    equals: String
    in: [String!]
    notIn: [String!]
    lt: String
    lte: String
    gt: String
    gte: String
    contains: String
    startsWith: String
    endsWith: String
    not: NestedStringNullableWithAggregatesFilter
    _count: NestedIntNullableFilter
    _min: NestedStringNullableFilter
    _max: NestedStringNullableFilter
  }

  input NestedIntNullableFilter {
    equals: Int
    in: [Int!]
    notIn: [Int!]
    lt: Int
    lte: Int
    gt: Int
    gte: Int
    not: NestedIntNullableFilter
  }

  input NestedDateTimeWithAggregatesFilter {
    equals: DateTime
    in: [DateTime!]
    notIn: [DateTime!]
    lt: DateTime
    lte: DateTime
    gt: DateTime
    gte: DateTime
    not: NestedDateTimeWithAggregatesFilter
    _count: NestedIntFilter
    _min: NestedDateTimeFilter
    _max: NestedDateTimeFilter
  }

  input PostCreateWithoutUserInput {
    id: String
    content: String!
    createdAt: DateTime
    updatedAt: DateTime
  }

  input PostUncheckedCreateWithoutUserInput {
    id: String
    content: String!
    createdAt: DateTime
    updatedAt: DateTime
  }

  input PostCreateOrConnectWithoutUserInput {
    where: PostWhereUniqueInput!
    create: PostCreateWithoutUserInput!
  }

  input PostCreateManyUserInputEnvelope {
    data: [PostCreateManyUserInput!]!
  }

  input PostUpsertWithWhereUniqueWithoutUserInput {
    where: PostWhereUniqueInput!
    update: PostUpdateWithoutUserInput!
    create: PostCreateWithoutUserInput!
  }

  input PostUpdateWithWhereUniqueWithoutUserInput {
    where: PostWhereUniqueInput!
    data: PostUpdateWithoutUserInput!
  }

  input PostUpdateManyWithWhereWithoutUserInput {
    where: PostScalarWhereInput!
    data: PostUpdateManyMutationInput!
  }

  input PostScalarWhereInput {
    AND: [PostScalarWhereInput!]
    OR: [PostScalarWhereInput!]
    NOT: [PostScalarWhereInput!]
    id: StringFilter
    userId: StringFilter
    content: StringFilter
    createdAt: DateTimeFilter
    updatedAt: DateTimeFilter
  }

  input UserCreateWithoutPostsInput {
    id: String
    name: String!
    email: String
    createdAt: DateTime
    updatedAt: DateTime
  }

  input UserUncheckedCreateWithoutPostsInput {
    id: String
    name: String!
    email: String
    createdAt: DateTime
    updatedAt: DateTime
  }

  input UserCreateOrConnectWithoutPostsInput {
    where: UserWhereUniqueInput!
    create: UserCreateWithoutPostsInput!
  }

  input UserUpsertWithoutPostsInput {
    update: UserUpdateWithoutPostsInput!
    create: UserCreateWithoutPostsInput!
    where: UserWhereInput
  }

  input UserUpdateToOneWithWhereWithoutPostsInput {
    where: UserWhereInput
    data: UserUpdateWithoutPostsInput!
  }

  input UserUpdateWithoutPostsInput {
    id: StringFieldUpdateOperationsInput
    name: StringFieldUpdateOperationsInput
    email: NullableStringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
  }

  input UserUncheckedUpdateWithoutPostsInput {
    id: StringFieldUpdateOperationsInput
    name: StringFieldUpdateOperationsInput
    email: NullableStringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
  }

  input PostCreateManyUserInput {
    id: String
    content: String!
    createdAt: DateTime
    updatedAt: DateTime
  }

  input PostUpdateWithoutUserInput {
    id: StringFieldUpdateOperationsInput
    content: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
  }

  input PostUncheckedUpdateWithoutUserInput {
    id: StringFieldUpdateOperationsInput
    content: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
  }

  input PostUncheckedUpdateManyWithoutUserInput {
    id: StringFieldUpdateOperationsInput
    content: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
  }

  type AggregateUser {
    _count: UserCountAggregateOutputType
    _min: UserMinAggregateOutputType
    _max: UserMaxAggregateOutputType
  }

  type UserGroupByOutputType {
    id: String!
    name: String!
    email: String
    createdAt: DateTime!
    updatedAt: DateTime!
    _count: UserCountAggregateOutputType
    _min: UserMinAggregateOutputType
    _max: UserMaxAggregateOutputType
  }

  type AggregatePost {
    _count: PostCountAggregateOutputType
    _min: PostMinAggregateOutputType
    _max: PostMaxAggregateOutputType
  }

  type PostGroupByOutputType {
    id: String!
    userId: String!
    content: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    _count: PostCountAggregateOutputType
    _min: PostMinAggregateOutputType
    _max: PostMaxAggregateOutputType
  }

  type UserCountOutputType {
    posts: Int!
  }

  type UserCountAggregateOutputType {
    id: Int!
    name: Int!
    email: Int!
    createdAt: Int!
    updatedAt: Int!
    _all: Int!
  }

  type UserMinAggregateOutputType {
    id: String
    name: String
    email: String
    createdAt: DateTime
    updatedAt: DateTime
  }

  type UserMaxAggregateOutputType {
    id: String
    name: String
    email: String
    createdAt: DateTime
    updatedAt: DateTime
  }

  type PostCountAggregateOutputType {
    id: Int!
    userId: Int!
    content: Int!
    createdAt: Int!
    updatedAt: Int!
    _all: Int!
  }

  type PostMinAggregateOutputType {
    id: String
    userId: String
    content: String
    createdAt: DateTime
    updatedAt: DateTime
  }

  type PostMaxAggregateOutputType {
    id: String
    userId: String
    content: String
    createdAt: DateTime
    updatedAt: DateTime
  }

  type CreateManyUserAndReturnOutputType {
    id: String!
    name: String!
    email: String
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type UpdateManyUserAndReturnOutputType {
    id: String!
    name: String!
    email: String
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type CreateManyPostAndReturnOutputType {
    id: String!
    userId: String!
    content: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    user: User!
  }

  type UpdateManyPostAndReturnOutputType {
    id: String!
    userId: String!
    content: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    user: User!
  }
`
