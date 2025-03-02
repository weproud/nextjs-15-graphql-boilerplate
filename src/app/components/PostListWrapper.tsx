"use client";

import dynamic from "next/dynamic";

// PostList 컴포넌트를 클라이언트 사이드에서 동적으로 로드
const PostList = dynamic(() => import("./PostList"), {
  ssr: false,
  loading: () => <p className="text-center p-4">로딩 중...</p>,
});

export default function PostListWrapper() {
  return <PostList />;
}
