import { builder } from "../builder";

// Post 타입 정의
builder.prismaObject("Post", {
  description: "게시물 정보",
  fields: (t) => ({
    id: t.exposeID("id", { description: "게시물 ID" }),
    content: t.exposeString("content", { description: "게시물 내용" }),
    createdAt: t.expose("createdAt", {
      type: "DateTime",
      description: "생성 일시",
    }),
    updatedAt: t.expose("updatedAt", {
      type: "DateTime",
      description: "수정 일시",
    }),
    // 게시물 작성자 정보
    user: t.relation("user", {
      description: "게시물 작성자",
    }),
  }),
});
