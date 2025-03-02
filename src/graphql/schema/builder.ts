import SchemaBuilder from "@pothos/core";
import PrismaPlugin from "@pothos/plugin-prisma";
import RelayPlugin from "@pothos/plugin-relay";
import type PrismaTypes from "../generated/prisma-types";
import { prisma } from "@/lib/prisma";

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

// 스키마 빌더 생성
export const builder = new SchemaBuilder<{
  PrismaTypes: PrismaTypes;
  Objects: {
    Todo: Todo;
  };
}>({
  plugins: [PrismaPlugin, RelayPlugin],
  prisma: {
    client: prisma,
    // 모든 모델을 자동으로 노출하지 않음
    // 필요한 모델만 명시적으로 노출
    dmmf: prisma._dmmf,
    // 필터링 및 정렬 기능 활성화
    filterConnectionTotalCount: true,
  },
  // 릴레이 플러그인 설정
  relay: {
    // 커넥션 필드에 대한 기본 설정
    clientMutationId: "omit",
    cursorType: "String",
  },
});

// 쿼리 타입 정의
builder.queryType({});

// 뮤테이션 타입 정의
builder.mutationType({});

// Todo 타입 정의
builder.objectType("Todo", {
  description: "할 일 항목",
  fields: (t) => ({
    id: t.exposeString("id", { description: "할 일의 고유 ID" }),
    title: t.exposeString("title", { description: "할 일 제목" }),
    completed: t.exposeBoolean("completed", { description: "완료 여부" }),
  }),
});
