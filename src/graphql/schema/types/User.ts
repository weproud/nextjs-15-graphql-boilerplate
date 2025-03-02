import { builder } from "../builder";

// User 타입 정의
builder.prismaObject("User", {
  description: "사용자 정보",
  fields: (t) => ({
    id: t.exposeID("id", { description: "사용자 ID" }),
    name: t.exposeString("name", { description: "사용자 이름" }),
    email: t.exposeString("email", {
      nullable: true,
      description: "이메일 주소",
    }),
    createdAt: t.expose("createdAt", {
      type: "DateTime",
      description: "생성 일시",
    }),
    updatedAt: t.expose("updatedAt", {
      type: "DateTime",
      description: "수정 일시",
    }),
    // 사용자의 게시물 목록
    posts: t.relation("posts", {
      description: "사용자가 작성한 게시물 목록",
      query: () => ({
        orderBy: { createdAt: "desc" },
      }),
    }),
  }),
});
