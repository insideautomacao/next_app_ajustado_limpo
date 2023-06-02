module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "prettier/prettier",
        "plugin:react/recommended",
        "plugin:react-hooks/recomended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
        "prettier"

    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins":  ["@typescript-eslint"],

    "settings": {
      "version": "detect"
    },
    "rules": {
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'react/react-in-jsx-scope': 'off'
    }
}
