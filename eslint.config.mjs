import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  js.configs.recommended,
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    // Your custom rules
    rules: {
      // Disable apostrophe escaping requirement
      "react/no-unescaped-entities": "off",
      
      // Configure unused vars rule to be less strict
      "@typescript-eslint/no-unused-vars": [
        "warn", // or "error" if you want to keep it enabled
        { 
          "argsIgnorePattern": "^_",
          "varsIgnorePattern": "^_",
          "caughtErrorsIgnorePattern": "^_"
        }
      ]
    }
  },
  {
    // Apply these rules only to specific files if needed
    files: ["*.ts", "*.tsx"],
    rules: {
      // Additional TypeScript-specific rules
    }
  }
];

export default eslintConfig;