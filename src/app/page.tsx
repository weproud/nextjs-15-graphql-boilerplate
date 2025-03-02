import { Suspense } from "react";
import UserListWrapper from "./components/UserListWrapper";
import PostListWrapper from "./components/PostListWrapper";

export default function Home() {
  return (
    <div className="min-h-screen p-8 font-[family-name:var(--font-geist-sans)]">
      <header className="max-w-4xl mx-auto mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2">Next.js 15 + GraphQL</h1>
        <p className="text-gray-600 dark:text-gray-400">
          GraphQL Yoga + Pothos + urql + Prisma를 이용한 소셜 애플리케이션
        </p>
      </header>

      <main className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <section>
          <Suspense fallback={<p className="text-center p-4">로딩 중...</p>}>
            <UserListWrapper />
          </Suspense>
        </section>

        <section>
          <Suspense fallback={<p className="text-center p-4">로딩 중...</p>}>
            <PostListWrapper />
          </Suspense>
        </section>
      </main>

      <footer className="max-w-4xl mx-auto mt-16 text-center text-sm text-gray-500">
        <p>Next.js 15 + GraphQL Yoga + Pothos + urql + Prisma 예제</p>
      </footer>
    </div>
  );
}
