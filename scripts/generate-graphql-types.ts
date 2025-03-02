const { Generator } = require("@paljs/generator");
const path = require("path");
const fs = require("fs");

async function main() {
  console.log("Prisma 스키마로부터 GraphQL 타입 생성 중...");

  const schemaPath = path.join(__dirname, "../prisma/schema.prisma");
  const outputDir = path.join(__dirname, "../src/graphql/generated");

  // 디렉토리가 없으면 생성
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Pothos 타입만 생성하고 SDL 파일은 생성하지 않음
  const generator = new Generator({
    name: "sdl",
    schemaPath,
    output: outputDir,
    javaScript: false,
    // SDL 파일 생성 비활성화
    excludeFields: ["*"],
    excludeModels: ["*"],
    excludeQueries: ["*"],
    excludeMutations: ["*"],
    disableQueries: true,
    disableMutations: true,
  });

  await generator.run();

  // 불필요한 파일 삭제
  const filesToDelete = [
    path.join(__dirname, "../src/graphql/typeDefs.ts"),
    path.join(__dirname, "../src/graphql/resolvers.ts"),
    path.join(__dirname, "../src/graphql/InputTypes.ts"),
  ];

  for (const file of filesToDelete) {
    if (fs.existsSync(file)) {
      fs.unlinkSync(file);
      console.log(`삭제됨: ${file}`);
    }
  }

  // User, Post 디렉토리 삭제
  const dirsToDelete = [
    path.join(__dirname, "../src/graphql/User"),
    path.join(__dirname, "../src/graphql/Post"),
  ];

  for (const dir of dirsToDelete) {
    if (fs.existsSync(dir)) {
      fs.rmSync(dir, { recursive: true, force: true });
      console.log(`삭제됨: ${dir}`);
    }
  }

  console.log(`GraphQL 타입이 생성되었습니다: ${outputDir}`);
}

main().catch((error) => {
  console.error("GraphQL 타입 생성 중 오류 발생:", error);
  process.exit(1);
});
