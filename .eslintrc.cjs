module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:react/jsx-runtime',
      'plugin:react-hooks/recommended',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    settings: { react: { version: 'latest' } }, // Cambiado a 'latest' para adaptarse a cualquier versión de React
    plugins: ['react', 'react-hooks'],
    rules: {
      'react/jsx-no-target-blank': 'off', // Desactiva la regla que requiere rel="noopener noreferrer" en enlaces con target="_blank"
      'react-hooks/exhaustive-deps': 'off', // Desactiva la advertencia sobre dependencias faltantes en los efectos de los hooks
    },
  };
  