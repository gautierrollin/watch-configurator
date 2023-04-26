module.exports = {
  env : {
    browser : true,
    es2021 : true
  },

  extends : [
    "airbnb",
    "airbnb-typescript",
    "plugin:react-hooks/recommended"
  ],

  ignorePatterns: [
    "node_modules/*"
  ],

  parser : "@typescript-eslint/parser",

  parserOptions : {
    project : "./tsconfig.json"
  },

  rules : {
    /**
     * Misc
     */
    "arrow-parens" : ["error", "as-needed"],

    "import/order" : ["error", {
      alphabetize : {
        order : "asc",
        caseInsensitive : true
      },
      groups : [
        "builtin",
        "external",
        "internal",
        "parent",
        "sibling",
        "index",
        "object"
      ]
    }],

    "key-spacing" : ["error", {
      singleLine : {
        beforeColon : false,
        afterColon : true
      },
      multiLine : {
        beforeColon : true,
        afterColon : true
      }
    }],

    "no-console" : "error",

    "no-multiple-empty-lines" : ["error", {
      max : 2
    }],

    "padded-blocks" : ["error", {
      classes : "always"
    }],

    "no-restricted-exports" : ["error", {
      restrictDefaultExports : {
        defaultFrom : false
      }
    }],

    /**
     * React
     */
    "react/destructuring-assignment" : "off",
    "react/jsx-one-expression-per-line" : "off",
    "react/require-default-props" : "off",

    /**
     * Typescript
     */
    "@typescript-eslint/comma-dangle": ["error", "never"],
    "@typescript-eslint/quotes": ["error", "double"]
  }
};
