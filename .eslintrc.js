module.exports = {
    root: true,
    env: {
      node: true,
    },
    extends: [
      'plugin:vue/vue3-essential',
      'eslint:recommended',
    ],
    parserOptions: {
      parser: '@babel/eslint-parser',
      requireConfigFile: false,
    },
    rules: {
      'vue/multi-word-component-names': 'off', // Disables the multi-word component names rule
      // Add other rules you want to disable or modify
    },
  };
  