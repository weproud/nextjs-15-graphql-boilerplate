"use client";

import { useState } from "react";
import { useQuery, useMutation } from "urql";
import { gql } from "urql";

// GraphQL 쿼리 정의
const POSTS_QUERY = gql`
  query {
    posts {
      id
      content
      createdAt
      user {
        id
        name
      }
    }
  }
`;

const USERS_QUERY = gql`
  query {
    users {
      id
      name
    }
  }
`;

// GraphQL 뮤테이션 정의
const CREATE_POST = gql`
  mutation ($userId: String!, $content: String!) {
    createPost(userId: $userId, content: $content) {
      id
      content
      user {
        id
        name
      }
    }
  }
`;

const DELETE_POST = gql`
  mutation ($id: String!) {
    deletePost(id: $id) {
      id
    }
  }
`;

// Post 타입 정의
interface Post {
  id: string;
  content: string;
  createdAt: string;
  user: {
    id: string;
    name: string;
  };
}

// User 타입 정의
interface User {
  id: string;
  name: string;
}

export default function PostList() {
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  // 게시물 목록 쿼리
  const [postsResult, reexecutePostsQuery] = useQuery({
    query: POSTS_QUERY,
  });

  // 사용자 목록 쿼리
  const [usersResult] = useQuery({
    query: USERS_QUERY,
  });

  // 게시물 생성 뮤테이션
  const [, createPost] = useMutation(CREATE_POST);

  // 게시물 삭제 뮤테이션
  const [, deletePost] = useMutation(DELETE_POST);

  // 로딩 상태 처리
  if (postsResult.fetching || usersResult.fetching) {
    return <div className="p-4">로딩 중...</div>;
  }

  // 에러 상태 처리
  if (postsResult.error) {
    return (
      <div className="p-4 text-red-500">
        게시물 에러: {postsResult.error.message}
      </div>
    );
  }

  if (usersResult.error) {
    return (
      <div className="p-4 text-red-500">
        사용자 에러: {usersResult.error.message}
      </div>
    );
  }

  // 게시물 추가 핸들러
  const handleAddPost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim() || !userId) return;

    createPost({ userId, content }).then(() => {
      setContent("");
      reexecutePostsQuery({ requestPolicy: "network-only" });
    });
  };

  // 게시물 삭제 핸들러
  const handleDeletePost = (id: string) => {
    deletePost({ id }).then(() => {
      reexecutePostsQuery({ requestPolicy: "network-only" });
    });
  };

  const posts = postsResult.data?.posts || [];
  const users = usersResult.data?.users || [];

  // 날짜 포맷 함수
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">게시물 목록</h1>

      {/* 게시물 작성 폼 */}
      <form onSubmit={handleAddPost} className="mb-8 p-4 border rounded">
        <div className="mb-4">
          <label className="block mb-2 font-medium">작성자</label>
          <select
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className="w-full px-4 py-2 border rounded"
            required
          >
            <option value="">작성자 선택</option>
            {users.map((user: User) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-medium">내용</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="게시물 내용 입력..."
            className="w-full px-4 py-2 border rounded min-h-32"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          게시물 작성
        </button>
      </form>

      {/* 게시물 목록 */}
      <div className="space-y-4">
        {posts.map((post: Post) => (
          <div key={post.id} className="p-4 border rounded">
            <div className="flex justify-between items-start mb-2">
              <div className="font-semibold">{post.user.name}</div>
              <button
                onClick={() => handleDeletePost(post.id)}
                className="text-red-500 hover:text-red-700"
              >
                삭제
              </button>
            </div>
            <div className="mb-2 whitespace-pre-wrap">{post.content}</div>
            <div className="text-sm text-gray-500">
              {formatDate(post.createdAt)}
            </div>
          </div>
        ))}
      </div>

      {posts.length === 0 && (
        <p className="text-center text-gray-500 mt-4">게시물이 없습니다.</p>
      )}
    </div>
  );
}
