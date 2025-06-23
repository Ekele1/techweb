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
    rules: {
      // Disable problematic rules
      "react/no-unescaped-entities": "off",
      
      
      // Configure unused vars to ignore underscores
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/parser": "off",
      
      // Additional recommended settings
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off"
    }
  }
];

export default eslintConfig;