"use client";

import { useState } from "react";
import { useQuery, useMutation } from "urql";
import { gql } from "urql";

// GraphQL 쿼리 정의
const USERS_QUERY = gql`
  query {
    users {
      id
      name
      email
      createdAt
    }
  }
`;

// GraphQL 뮤테이션 정의
const CREATE_USER = gql`
  mutation ($name: String!, $email: String) {
    createUser(name: $name, email: $email) {
      id
      name
      email
    }
  }
`;

const DELETE_USER = gql`
  mutation ($id: String!) {
    deleteUser(id: $id) {
      id
    }
  }
`;

// User 타입 정의
interface User {
  id: string;
  name: string;
  email: string | null;
  createdAt: string;
}

export default function UserList() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // 사용자 목록 쿼리
  const [usersResult, reexecuteQuery] = useQuery({
    query: USERS_QUERY,
  });

  // 사용자 생성 뮤테이션
  const [, createUser] = useMutation(CREATE_USER);

  // 사용자 삭제 뮤테이션
  const [, deleteUser] = useMutation(DELETE_USER);

  // 로딩 상태 처리
  if (usersResult.fetching) {
    return <div className="p-4">로딩 중...</div>;
  }

  // 에러 상태 처리
  if (usersResult.error) {
    return (
      <div className="p-4 text-red-500">에러: {usersResult.error.message}</div>
    );
  }

  // 사용자 추가 핸들러
  const handleAddUser = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    createUser({ name, email: email || undefined }).then(() => {
      setName("");
      setEmail("");
      reexecuteQuery({ requestPolicy: "network-only" });
    });
  };

  // 사용자 삭제 핸들러
  const handleDeleteUser = (id: string) => {
    deleteUser({ id }).then(() => {
      reexecuteQuery({ requestPolicy: "network-only" });
    });
  };

  const users = usersResult.data?.users || [];

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">사용자 목록</h1>

      {/* 사용자 추가 폼 */}
      <form onSubmit={handleAddUser} className="mb-6">
        <div className="flex flex-col gap-2 mb-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="이름 입력..."
            className="px-4 py-2 border rounded"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="이메일 입력..."
            className="px-4 py-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          사용자 추가
        </button>
      </form>

      {/* 사용자 목록 */}
      <ul className="space-y-2">
        {users.map((user: User) => (
          <li
            key={user.id}
            className="flex items-center justify-between p-3 border rounded"
          >
            <div>
              <div className="font-semibold">{user.name}</div>
              {user.email && (
                <div className="text-sm text-gray-500">{user.email}</div>
              )}
            </div>
            <button
              onClick={() => handleDeleteUser(user.id)}
              className="text-red-500 hover:text-red-700"
            >
              삭제
            </button>
          </li>
        ))}
      </ul>

      {users.length === 0 && (
        <p className="text-center text-gray-500 mt-4">사용자가 없습니다.</p>
      )}
    </div>
  );
}
