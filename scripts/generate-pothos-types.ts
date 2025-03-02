import { PrismaClient } from "@prisma/client";
import path from "path";
import fs from "fs";

// Prisma 클라이언트 인스턴스
const prisma = new PrismaClient();

// 출력 파일 경로
const outputPath = path.join(
  __dirname,
  "../src/graphql/generated/pothos-types.ts"
);

// 타입 생성 함수
async function generateTypes() {
  console.log("Prisma 스키마로부터 Pothos 타입 생성 중...");

  // 디렉토리가 없으면 생성
  const dir = path.dirname(outputPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  // Prisma 모델 정보 가져오기
  const dmmf = (prisma as any)._baseDmmf;

  // 모델 타입 생성
  const modelTypes = dmmf.datamodel.models
    .map((model: any) => {
      const fields = model.fields
        .map((field: any) => {
          return `${field.name}: ${mapPrismaTypeToTS(field)};`;
        })
        .join("\n    ");

      return `
  ${model.name}: {
    model: ${model.name};
    create: Prisma.${model.name}CreateInput;
    update: Prisma.${model.name}UpdateInput;
    where: Prisma.${model.name}WhereUniqueInput;
    select: Prisma.${model.name}Select;
    include: Prisma.${model.name}Include;
  };`;
    })
    .join("");

  // 파일에 저장
  fs.writeFileSync(
    outputPath,
    `
// 이 파일은 자동으로 생성되었습니다. 직접 수정하지 마세요.
// Prisma 스키마가 변경되면 다시 생성해야 합니다.

import type { Prisma, ${dmmf.datamodel.models
      .map((m: any) => m.name)
      .join(", ")} } from '@prisma/client';
import type { PrismaModelTypes } from '@pothos/plugin-prisma';

// Pothos Prisma 플러그인을 위한 타입 정의
type Models = {${modelTypes}
};

// 기본 타입 내보내기
export type PothosTypes = PrismaModelTypes<Models>;

// Pothos 스키마 타입 확장
declare global {
  interface PothosSchemaTypes {
    PrismaTypes: PothosTypes;
  }
}
`.trim()
  );

  console.log(`타입이 생성되었습니다: ${outputPath}`);

  // Prisma 연결 종료
  await prisma.$disconnect();
}

// Prisma 타입을 TypeScript 타입으로 변환
function mapPrismaTypeToTS(field: any): string {
  const type = field.type;
  const isRequired = !field.isNullable;

  let tsType = "any";

  switch (type) {
    case "String":
      tsType = "string";
      break;
    case "Int":
    case "Float":
      tsType = "number";
      break;
    case "Boolean":
      tsType = "boolean";
      break;
    case "DateTime":
      tsType = "Date";
      break;
    case "Json":
      tsType = "any";
      break;
    default:
      if (field.kind === "object") {
        if (field.isList) {
          tsType = `${field.type}[]`;
        } else {
          tsType = field.type;
        }
      } else if (field.kind === "enum") {
        tsType = field.type;
      }
  }

  return isRequired ? tsType : `${tsType} | null`;
}

// 타입 생성 실행
generateTypes().catch((error) => {
  console.error("타입 생성 중 오류 발생:", error);
  process.exit(1);
});
