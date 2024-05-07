module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",

    "eslint:recommended",
    "plugin:react/recommended",
  ],
  rules: {
    "consistent-return": "error",
  },
  env: {
    browser: true,
    node: true,
  },
};
