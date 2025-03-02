import type { Prisma, User, Post } from "@prisma/client";
import type { Builder } from "@pothos/core";
import type { PrismaModelTypes } from "@pothos/plugin-prisma";

// Pothos Prisma 플러그인을 위한 타입 정의
type Models = {
  User: {
    model: User;
    create: Prisma.UserCreateInput;
    update: Prisma.UserUpdateInput;
    where: Prisma.UserWhereUniqueInput;
    select: Prisma.UserSelect;
    include: Prisma.UserInclude;
  };
  Post: {
    model: Post;
    create: Prisma.PostCreateInput;
    update: Prisma.PostUpdateInput;
    where: Prisma.PostWhereUniqueInput;
    select: Prisma.PostSelect;
    include: Prisma.PostInclude;
  };
};

// 기본 타입 내보내기
export default PrismaModelTypes<Models>;

// 빌더 타입 확장
declare global {
  export namespace PothosSchemaTypes {
    export interface UserSchemaTypes {
      PrismaTypes: PrismaModelTypes<Models>;
    }
  }
}
