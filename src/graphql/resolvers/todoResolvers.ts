import { builder } from "../schema/builder";
import { v4 as uuidv4 } from "uuid";

// 임시 데이터 저장소
let todos = [
  { id: "1", title: "그래프큐엘 배우기", completed: false },
  { id: "2", title: "Next.js 15 살펴보기", completed: true },
  { id: "3", title: "Pothos로 스키마 만들기", completed: false },
];

// 모든 할 일 목록 조회 쿼리
builder.queryField("todos", (t) =>
  t.field({
    type: ["Todo"],
    description: "모든 할 일 목록을 반환합니다",
    resolve: () => todos,
  })
);

// ID로 특정 할 일 조회 쿼리
builder.queryField("todo", (t) =>
  t.field({
    type: "Todo",
    nullable: true,
    description: "ID로 특정 할 일을 조회합니다",
    args: {
      id: t.arg.string({ required: true }),
    },
    resolve: (_, { id }) => todos.find((todo) => todo.id === id) || null,
  })
);

// 새 할 일 추가 뮤테이션
builder.mutationField("createTodo", (t) =>
  t.field({
    type: "Todo",
    description: "새 할 일을 추가합니다",
    args: {
      title: t.arg.string({ required: true }),
    },
    resolve: (_, { title }) => {
      const newTodo = {
        id: uuidv4(),
        title,
        completed: false,
      };
      todos.push(newTodo);
      return newTodo;
    },
  })
);

// 할 일 완료 상태 토글 뮤테이션
builder.mutationField("toggleTodo", (t) =>
  t.field({
    type: "Todo",
    nullable: true,
    description: "할 일의 완료 상태를 토글합니다",
    args: {
      id: t.arg.string({ required: true }),
    },
    resolve: (_, { id }) => {
      const todo = todos.find((todo) => todo.id === id);
      if (!todo) return null;

      todo.completed = !todo.completed;
      return todo;
    },
  })
);

// 할 일 삭제 뮤테이션
builder.mutationField("deleteTodo", (t) =>
  t.field({
    type: "Todo",
    nullable: true,
    description: "할 일을 삭제합니다",
    args: {
      id: t.arg.string({ required: true }),
    },
    resolve: (_, { id }) => {
      const todo = todos.find((todo) => todo.id === id);
      if (!todo) return null;

      todos = todos.filter((todo) => todo.id !== id);
      return todo;
    },
  })
);
