Web Development React Js

Node js installed
npm installed.
npm init. This will create a file called package.json.
Create a file called .editorconfig at the root of the project.
npm i --save-dev eslint babel-eslint eslint-plugin-react.
Create a file called .eslintrc.js at the root of the project.
npm i --save react react-dom
Create a file in this path: src/client/index.js
npm i --save-dev @babel/core @babel/preset-env @babel/preset-react @babel/plugin-proposal-class-properties @babel/plugin-syntax-dynamic-import (Transpiler)
npm i babel-loader
npm i --save-dev webpack webpack-cli (Tasker)
Create a file called _webpack/webpack.config.js and _webpack/webpack.dev.js at the root.
Execute command : npx webpack --env=dev --config=_webpack/webpack.config.js
Create a file called webpack/webpack.prod.js at the root.
npm i --save-dev webpack-merge
Create a file called _webpack/webpack.common.js
Webpack plugins (htmlwebpack-plugin) npm i --save-dev html-webpack-plugin
To Build Dev : npx webpack --env=dev --config=_webpack/webpack.config.js
To Build prod: npx webpack --env=prod --config=_webpack/webpack.config.js
To Build devserver: npx webpack-dev-server --open --env=dev --config=_webpack/webpack.config.js",
Heroku:  "start": "npm run build:client:prod && node src/server/index.js"
Webpack Dev Server
Firebase Hosting setup : 1) npm i -D firebase-tools 2) npx firebase login 3) npx firebase init
Integrate your code with Circle CI :create /circleci/config.yml and add configuration
Add header in firebase.jason for Cache-Control