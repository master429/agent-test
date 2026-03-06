import js from "@eslint/js";
import globals from "globals";

export default [
  {
    ignores: ["node_modules/**", "react-todo-app/**"],
  },
  {
    files: ["src/**/*.mjs"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.node,
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      eqeqeq: ["error", "always"],
      curly: ["error", "all"],
      "no-var": "error",
      "no-irregular-whitespace": [
        "error",
        {
          skipComments: true,
          skipStrings: true,
          skipTemplates: true,
        },
      ],
      "prefer-const": ["warn", { destructuring: "all" }],
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    },
  },
];
