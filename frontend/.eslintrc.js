{
  "extends": ["react-app", "prettier"],
  "plugins": ["react", "prettier"],
  "rules": {
    "prettier/prettier": [
      "warn",
      {
        "arrowParens": "avoid",
        "semi": false,
        "trailingComma": "none",
        "endOfLine": "lf",
        "tabWidth": 2,
        "printWidth": 80,
        "useTabs": false
      }
    ],
    "no-console": "warn"
  }
}