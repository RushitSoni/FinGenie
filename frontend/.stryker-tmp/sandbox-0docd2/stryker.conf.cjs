// @ts-nocheck
module.exports = {
  mutate: ["src/components/**/*.js"],
  concurrency: 1,
  coverageAnalysis: "off",
  ignorePatterns: [
    "node_modules/**",
    "dist/**",
    "build/**"
  ],
};