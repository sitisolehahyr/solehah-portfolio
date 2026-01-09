import coreWebVitals from "eslint-config-next/core-web-vitals";

export default [
  {
    ignores: ["node_modules/**", ".next/**", "out/**"],
  },
  ...coreWebVitals,
  {
    rules: {
      "react/react-in-jsx-scope": "off",
      "@next/next/no-img-element": "off",
      "import/no-anonymous-default-export": "off",
      "react-hooks/set-state-in-effect": "off",
    },
  },
];
