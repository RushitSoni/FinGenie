// @ts-nocheck
module.exports = {
  mutate: ["src/components/**/*.jsx"],
  concurrency: 4,
  coverageAnalysis: "perTest",
  ignorePatterns: [
    "node_modules/**",
    "dist/**",
    "build/**"
  ],
};