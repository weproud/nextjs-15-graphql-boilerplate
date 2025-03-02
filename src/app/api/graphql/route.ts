import { createYoga } from "graphql-yoga";
import { schema } from "@/graphql/schema";

// GraphQL Yoga 서버 생성
const { handleRequest } = createYoga({
  schema,
  graphqlEndpoint: "/api/graphql",
  fetchAPI: { Response },
});

// Next.js 15 API 라우트 핸들러
export const GET = handleRequest;
export const POST = handleRequest;
