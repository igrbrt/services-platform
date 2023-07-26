module.exports = {
  root: true,

  parser: "@typescript-eslint/parser",

  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },

  env: {
    node: true,
    jest: true,
  },

  extends: ["next", "turbo", "prettier", "next/core-web-vitals", "@rocketseat/eslint-config/react"],

  ignorePatterns: [".eslintrc.js"],

  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "react/jsx-key": "off",
  },
};
