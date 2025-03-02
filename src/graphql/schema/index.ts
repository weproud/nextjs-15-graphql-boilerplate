import { builder } from "./builder";

// 타입 정의 임포트
import "./types/User";
import "./types/Post";

// 리졸버 정의 임포트
import "../resolvers/userResolvers";
import "../resolvers/postResolvers";

// 스키마 생성
export const schema = builder.toSchema();
