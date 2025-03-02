# Next.js 15 + GraphQL

이 프로젝트는 Next.js 15와 GraphQL을 사용한 풀스택 애플리케이션입니다. 최신 기술 스택을 활용하여 타입 안전성과 개발 경험을 극대화했습니다.

## 기술 스택

### GraphQL

- **설명**: 페이스북에서 개발한 쿼리 언어로, 클라이언트가 필요한 데이터를 정확히 요청할 수 있게 해줍니다.
- **장점**:
  - 오버페칭/언더페칭 문제 해결
  - 강력한 타입 시스템
  - 단일 엔드포인트로 다양한 데이터 요청 처리
  - 자체 문서화 기능

### GraphQL Yoga

- **설명**: GraphQL 서버 구현을 위한 완전한 기능을 갖춘 서버 라이브러리입니다.
- **장점**:
  - 간편한 설정
  - Next.js API 라우트와 쉽게 통합
  - 파일 업로드, 구독 등 다양한 기능 지원
  - 성능 최적화 및 캐싱 기능

### Prisma

- **설명**: 차세대 ORM(Object-Relational Mapping)으로, 데이터베이스 작업을 간소화합니다.
- **장점**:
  - 직관적인 데이터 모델링
  - 타입 안전성 보장
  - 자동 마이그레이션
  - 강력한 쿼리 빌더
  - 다양한 데이터베이스 지원 (PostgreSQL, MySQL, SQLite 등)

### Pothos (GraphQL Schema Builder)

- **설명**: 코드 우선(Code-first) 접근 방식의 GraphQL 스키마 빌더입니다.
- **장점**:
  - TypeScript와 완벽한 통합
  - 플러그인 시스템으로 확장 가능
  - Prisma와 원활한 통합
  - 자동 타입 생성
  - 릴레이 스펙 지원

### URQL

- **설명**: 경량화된 GraphQL 클라이언트 라이브러리입니다.
- **장점**:
  - 작은 번들 크기
  - 캐싱 시스템
  - 직관적인 API
  - React와 완벽한 통합
  - 서버 사이드 렌더링 지원

## 프로젝트 구조

```
src/
├── app/                    # Next.js 앱 라우터
│   ├── api/                # API 라우트
│   │   └── graphql/        # GraphQL API 엔드포인트
│   ├── components/         # 리액트 컴포넌트
│   └── providers.tsx       # URQL 프로바이더
├── graphql/                # GraphQL 관련 코드
│   ├── generated/          # 자동 생성된 타입
│   ├── resolvers/          # GraphQL 리졸버
│   └── schema/             # GraphQL 스키마 정의
├── lib/                    # 유틸리티 함수
│   └── prisma.ts           # Prisma 클라이언트
└── prisma/                 # Prisma 설정
    └── schema.prisma       # 데이터베이스 스키마
```

## 주요 기능

- 사용자 및 게시물 관리 (CRUD 작업)
- 실시간 데이터 업데이트
- 타입 안전성 보장
- 최적화된 데이터 요청

## 시작하기

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# GraphQL 타입 생성
npm run generate
```

## 참고 자료

- [Next.js 문서](https://nextjs.org/docs)
- [GraphQL 공식 문서](https://graphql.org/learn/)
- [Prisma 문서](https://www.prisma.io/docs)
- [Pothos 문서](https://pothos-graphql.dev/)
- [URQL 문서](https://formidable.com/open-source/urql/docs/)
