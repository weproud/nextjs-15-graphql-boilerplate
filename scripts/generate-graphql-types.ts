const { Generator } = require("@paljs/generator");
const path = require("path");

async function main() {
  console.log("Prisma 스키마로부터 GraphQL 타입 생성 중...");

  const schemaPath = path.join(__dirname, "../prisma/schema.prisma");
  const outputDir = path.join(__dirname, "../src/graphql/generated");

  const generator = new Generator({
    name: "sdl",
    schemaPath,
    output: outputDir,
    javaScript: false,
  });

  await generator.run();

  console.log(`GraphQL 타입이 생성되었습니다: ${outputDir}`);
}

main().catch((error) => {
  console.error("GraphQL 타입 생성 중 오류 발생:", error);
  process.exit(1);
});
