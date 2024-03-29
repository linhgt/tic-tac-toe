module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  rules: {
    "no-undef": false
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended"
  ],
  parserOptions: {
    sourceType: "module"
  }
};
