module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "react-app",
    "react-app/jest",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  rules: {
    "@typescript-eslint/explicit-module-boundary-types": "off",
    // 必须声明类型
    "@typescript-eslint/typedef": [
      "error",
      {
        arrowParameter: true,
        variableDeclaration: true,
      },
    ],
  },
};
