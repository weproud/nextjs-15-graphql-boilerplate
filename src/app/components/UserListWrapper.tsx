"use client";

import dynamic from "next/dynamic";

// UserList 컴포넌트를 클라이언트 사이드에서 동적으로 로드
const UserList = dynamic(() => import("./UserList"), {
  ssr: false,
  loading: () => <p className="text-center p-4">로딩 중...</p>,
});

export default function UserListWrapper() {
  return <UserList />;
}
