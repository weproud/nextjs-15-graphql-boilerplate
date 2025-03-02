"use client";

import { ReactNode } from "react";
import { cacheExchange, createClient, fetchExchange, Provider } from "urql";

// urql 클라이언트 생성
const client = createClient({
  url: "/api/graphql",
  exchanges: [cacheExchange, fetchExchange],
});

// 프로바이더 컴포넌트
export function Providers({ children }: { children: ReactNode }) {
  return <Provider value={client}>{children}</Provider>;
}
