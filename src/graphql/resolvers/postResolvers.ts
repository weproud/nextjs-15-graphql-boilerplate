import { builder } from "../schema/builder";
import { prisma } from "@/lib/prisma";

// 모든 게시물 조회 쿼리
builder.queryField("posts", (t) =>
  t.prismaField({
    type: ["Post"],
    description: "모든 게시물 목록을 반환합니다",
    resolve: async (query) => {
      return prisma.post.findMany({
        ...query,
        orderBy: { createdAt: "desc" },
      });
    },
  })
);

// ID로 특정 게시물 조회 쿼리
builder.queryField("post", (t) =>
  t.prismaField({
    type: "Post",
    nullable: true,
    description: "ID로 특정 게시물을 조회합니다",
    args: {
      id: t.arg.string({ required: true }),
    },
    resolve: async (query, _, { id }) => {
      return prisma.post.findUnique({
        ...query,
        where: { id },
      });
    },
  })
);

// 사용자별 게시물 조회 쿼리
builder.queryField("postsByUser", (t) =>
  t.prismaField({
    type: ["Post"],
    description: "특정 사용자의 게시물 목록을 반환합니다",
    args: {
      userId: t.arg.string({ required: true }),
    },
    resolve: async (query, _, { userId }) => {
      return prisma.post.findMany({
        ...query,
        where: { userId },
        orderBy: { createdAt: "desc" },
      });
    },
  })
);

// 새 게시물 생성 뮤테이션
builder.mutationField("createPost", (t) =>
  t.prismaField({
    type: "Post",
    description: "새 게시물을 생성합니다",
    args: {
      userId: t.arg.string({ required: true }),
      content: t.arg.string({ required: true }),
    },
    resolve: async (query, _, { userId, content }) => {
      return prisma.post.create({
        ...query,
        data: {
          userId,
          content,
        },
      });
    },
  })
);

// 게시물 내용 업데이트 뮤테이션
builder.mutationField("updatePost", (t) =>
  t.prismaField({
    type: "Post",
    nullable: true,
    description: "게시물 내용을 업데이트합니다",
    args: {
      id: t.arg.string({ required: true }),
      content: t.arg.string({ required: true }),
    },
    resolve: async (query, _, { id, content }) => {
      return prisma.post.update({
        ...query,
        where: { id },
        data: { content },
      });
    },
  })
);

// 게시물 삭제 뮤테이션
builder.mutationField("deletePost", (t) =>
  t.prismaField({
    type: "Post",
    nullable: true,
    description: "게시물을 삭제합니다",
    args: {
      id: t.arg.string({ required: true }),
    },
    resolve: async (query, _, { id }) => {
      return prisma.post.delete({
        ...query,
        where: { id },
      });
    },
  })
);
