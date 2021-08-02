{
  "parser": "babel-eslint",
    "env": {
    "browser": true,
      "amd": true
  },
  "plugins": [
    "react",
    "react-native"
  ],
    "extends": [
      "eslint:recommended",
      "plugin:react/recommended"
    ],
      "rules": {
      "comma-dangle": 0,
      "react-native/no-unused-styles": 2,
      "react-native/split-platform-components": 2,
      "react-native/no-inline-styles": 0,
      "react-native/no-color-literals": 0,
      "react-native/no-raw-text": 2,
      "react-native/no-color-literal": 0,
      "react-native/no-unused-prop-types": 0,
      "react/prop-types": 0,
      "no-console": 0,
      "react/no-deprecated": 0,
      "react/display-name": 0
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true,
        "modules": true
    }
  }
}