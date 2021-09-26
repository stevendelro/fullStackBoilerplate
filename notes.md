run concurrently in /client/package.json:
"dev": "concurrently \"cross-env NODE_ENV=development webpack serve --hot --open\" \"cross-env NODE_ENV=development nodemon ../server/index.js\""
