// @ts-nocheck
module.exports = {
  mutate: ["src/components/**/*.jsx"],
  concurrency: 1,
  coverageAnalysis: "perTest",
  ignorePatterns: [
    "node_modules/**",
    "dist/**",
    "build/**"
  ],
};