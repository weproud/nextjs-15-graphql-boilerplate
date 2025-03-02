import SchemaBuilder from "@pothos/core";
import PrismaPlugin from "@pothos/plugin-prisma";
import RelayPlugin from "@pothos/plugin-relay";
import { prisma } from "@/lib/prisma";
import { DateTimeResolver } from "graphql-scalars";

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

// 스키마 빌더 생성
export const builder = new SchemaBuilder({
  plugins: [PrismaPlugin, RelayPlugin],
  prisma: {
    client: prisma,
  },
  // 릴레이 플러그인 설정
  relay: {
    // 커넥션 필드에 대한 기본 설정
    clientMutationId: "omit",
    cursorType: "String",
  },
});

// 쿼리 타입 정의
builder.queryType({
  fields: (t) => ({
    _dummy: t.string({
      resolve: () => "dummy",
    }),
  }),
});

// 뮤테이션 타입 정의
builder.mutationType({
  fields: (t) => ({
    _dummy: t.string({
      resolve: () => "dummy",
    }),
  }),
});

// DateTime 스칼라 타입 정의
builder.addScalarType("DateTime", DateTimeResolver, {});

// Todo 타입 정의
builder.objectType("Todo", {
  description: "할 일 항목",
  fields: (t) => ({
    id: t.exposeString("id", { description: "할 일의 고유 ID" }),
    title: t.exposeString("title", { description: "할 일 제목" }),
    completed: t.exposeBoolean("completed", { description: "완료 여부" }),
  }),
});
