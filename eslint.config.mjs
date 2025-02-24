 


 import globals from "globals";

 import pluginJs from "@eslint/js";

 import pluginReact from "eslint-plugin-react";

 /** @type {import('eslint').Linter.FlatConfig[]} */

 export default [
   {
     files: ["**/*.{js,mjs,cjs,jsx}"],

     languageOptions: {
       globals: globals.browser,

       parserOptions: {
         ecmaFeatures: {
           jsx: true,
         },

         ecmaVersion: 2021,

         sourceType: "module",
       },
     },

     rules: {
       "react/react-in-jsx-scope": "off", // Niepotrzebne od React 17+

       "import/extensions": "off",

       "react/prop-types": "off",

       "linebreak-style": "off",

       "react/state-in-constructor": "off",

       "import/prefer-default-export": "off",

       "react/function-component-definition": [
         "error",

         {
           namedComponents: "arrow-function",

           unnamedComponents: "arrow-function",
         },
       ],

       "max-len": [
         "error",

         {
           code: 250,
         },
       ],

       "no-multiple-empty-lines": [
         "error",

         {
           max: 1,

           maxEOF: 1,
         },
       ],

       "no-underscore-dangle": [
         "error",

         {
           allow: ["_d", "_dh", "_h", "_id", "_m", "_n", "_t", "_text"],
         },
       ],

       "object-curly-newline": "off",

       "react/jsx-filename-extension": "off",

       "react/jsx-one-expression-per-line": "off",

       "jsx-a11y/click-events-have-key-events": "off",

       "jsx-a11y/alt-text": "off",

       "jsx-a11y/no-autofocus": "off",

       "jsx-a11y/no-static-element-interactions": "off",

       "react/no-array-index-key": "off",

       "jsx-a11y/anchor-is-valid": [
         "error",

         {
           components: ["Link"],

           specialLink: ["to", "hrefLeft", "hrefRight"],

           aspects: ["noHref", "invalidHref", "preferButton"],
         },
       ],
     },
   },

   pluginJs.configs.recommended, // Standardowe reguły JavaScript

   pluginReact.configs.flat.recommended, // Standardowe reguły Reacta
 ];