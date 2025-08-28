// module.exports = {
//   root: true,
//   env: { browser: true, es2020: true },
//   extends: [
//     "eslint:recommended",
//     "@eslint/react",
//     "plugin:react/recommended",
//     "plugin:react-hooks/recommended",
//     "plugin:prettier/recommended",
//   ],
//   ignorePatterns: ["dist", ".eslintrc.cjs"],
//   parserOptions: {
//     ecmaVersion: "latest",
//     sourceType: "module",
//     ecmaFeatures: {
//       jsx: true,
//     },
//   },
//   settings: { react: { version: "18.2" } },
//   plugins: ["react-refresh", "prettier"],
//   rules: {
//     "react-refresh/only-export-components": [
//       "warn",
//       { allowConstantExport: true },
//     ],
//     "react/react-in-jsx-scope": "off",
//     "prettier/prettier": "error",
//   },
// };
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react", "react-hooks", "react-refresh"],
  rules: {
    "react-refresh/only-export-components": "warn",
    "react/react-in-jsx-scope": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
