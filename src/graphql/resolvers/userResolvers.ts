import { builder } from "../schema/builder";
import { prisma } from "@/lib/prisma";

// 모든 사용자 조회 쿼리
builder.queryField("users", (t) =>
  t.prismaField({
    type: ["User"],
    description: "모든 사용자 목록을 반환합니다",
    resolve: async (query) => {
      return prisma.user.findMany({ ...query });
    },
  })
);

// ID로 특정 사용자 조회 쿼리
builder.queryField("user", (t) =>
  t.prismaField({
    type: "User",
    nullable: true,
    description: "ID로 특정 사용자를 조회합니다",
    args: {
      id: t.arg.string({ required: true }),
    },
    resolve: async (query, _, { id }) => {
      return prisma.user.findUnique({
        ...query,
        where: { id },
      });
    },
  })
);

// 새 사용자 생성 뮤테이션
builder.mutationField("createUser", (t) =>
  t.prismaField({
    type: "User",
    description: "새 사용자를 생성합니다",
    args: {
      name: t.arg.string({ required: true }),
      email: t.arg.string(),
    },
    resolve: async (query, _, { name, email }) => {
      return prisma.user.create({
        ...query,
        data: {
          name,
          email,
        },
      });
    },
  })
);

// 사용자 정보 업데이트 뮤테이션
builder.mutationField("updateUser", (t) =>
  t.prismaField({
    type: "User",
    nullable: true,
    description: "사용자 정보를 업데이트합니다",
    args: {
      id: t.arg.string({ required: true }),
      name: t.arg.string(),
      email: t.arg.string(),
    },
    resolve: async (query, _, { id, name, email }) => {
      return prisma.user.update({
        ...query,
        where: { id },
        data: {
          ...(name && { name }),
          ...(email && { email }),
        },
      });
    },
  })
);

// 사용자 삭제 뮤테이션
builder.mutationField("deleteUser", (t) =>
  t.prismaField({
    type: "User",
    nullable: true,
    description: "사용자를 삭제합니다",
    args: {
      id: t.arg.string({ required: true }),
    },
    resolve: async (query, _, { id }) => {
      return prisma.user.delete({
        ...query,
        where: { id },
      });
    },
  })
);
