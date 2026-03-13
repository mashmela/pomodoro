import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import sonarjs from "eslint-plugin-sonarjs";
import reactPlugin from "eslint-plugin-react";
import importPlugin from "eslint-plugin-import";
import reactHooks from "eslint-plugin-react-hooks";

export default tseslint.config(
  {
    ignores: ["dist", "node_modules", "*.config.js"]
  },

  {
    files: ["**/*.{js,ts,jsx,tsx}"],
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.es2021
      },
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      sonarjs: sonarjs
    },
    rules: {
      "max-len": [
        "error",
        {
          code: 120,
          ignoreStrings: true,
          ignoreTrailingComments: true,
          ignoreUrls: true,
          ignoreRegExpLiterals: true
        }
      ],
      complexity: ["error", { max: 15 }],
      "no-unused-expressions": "error",
      "no-unused-vars": "off",

      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/ban-types": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/no-var-requires": "off",
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/no-unused-vars": ["error", {}],

      ...sonarjs.configs.recommended.rules,
      "sonarjs/no-commented-code": "off"
    }
  },

  {
    files: ["**/*.{jsx,tsx}"],
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooks
    },
    rules: {
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "error",

      "react/jsx-closing-bracket-location": ["error", "tag-aligned"],
      "react/jsx-curly-brace-presence": ["error", "never"],
      "react/jsx-curly-spacing": "error",

      "react/display-name": "off",
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off"
    },
    settings: {
      react: {
        version: "detect"
      }
    }
  },

  {
    files: ["**/*.{js,ts,jsx,tsx}"],
    plugins: {
      import: importPlugin
    },
    rules: {
      "import/order": [
        "error",
        {
          "newlines-between": "always-and-inside-groups",
          distinctGroup: true,
          groups: [["builtin", "external"], "internal", "parent", "sibling", "index", "unknown"],
          pathGroupsExcludedImportTypes: ["builtin"],
          pathGroups: [
            {
              pattern: "react",
              group: "builtin"
            },
            {
              pattern: "react-dom/**",
              group: "builtin"
            },

            {
              pattern: "components/**",
              group: "internal",
              position: "before"
            },
            {
              pattern: "primitives/**",
              group: "internal",
              position: "before"
            },
            {
              pattern: "views/**",
              group: "internal",
              position: "before"
            },
            {
              pattern: "pages/**",
              group: "internal",
              position: "before"
            },

            {
              pattern: "store/**",
              group: "parent",
              position: "before"
            },
            {
              pattern: "hooks/**",
              group: "parent",
              position: "before"
            },
            {
              pattern: "utils/**",
              group: "parent",
              position: "before"
            },
            {
              pattern: "types/**",
              group: "parent",
              position: "before"
            },
            {
              pattern: "themes/**",
              group: "parent",
              position: "before"
            },

            {
              pattern: "{.,..}/**/*.{ts,tsx}",
              group: "index"
            },

            {
              pattern: "{.,..}/**/*.css",
              group: "unknown"
            }
          ]
        }
      ]
    }
  }
);
