import globals from "globals";
import pluginJs from "@eslint/js";
import mateAcademyConfig from "@mate-academy/eslint-config";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "script",
      globals: globals.browser,
    },
    ...pluginJs.configs.recommended,
    ...mateAcademyConfig,
  },
];
