# PROJECT SPECIFIC NOTES

Problem: Our cat Tristan continually changes his eating habits and schedule. We experiment with different food and different times for feeding in order to see what works best. This makes it difficult to maintain a habit, especially with 2 people responsible for feeding Tristan in the household.

Solution: Create a program to simplify the feeding process. The program will be coded with React and TypeScript using TailwindCSS for simplicity, and should ideally only include one page.

Program functionality (and possible level ups):

- a list of Tristan's mealtimes and what he is fed during each mealtime
- the possibility to change both his food options and the meal times
- (level 1 - session based, level 2 - using local storage, level 3 - using an API)
- A simple check-function whenever Tristan is fed
- (possible level up: a notes function, writing how well he ate, which parts of the meal he ate, etc)

Once the foundation for the program is built, level up the program by using a login, making it possible for other cat owners to use the program.

This is a hobby project to maintain coding skills and learn new coding skills along the way. This ReadMe will be updated as the project - and hopefully me as a coder - evolves.

# AUTOMATIC README FROM USING VITE

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```
