/**
 * 1. create a folder for your project
 * 2. go to that folder and type npm init -y
 * 3. create a folder named server
 * 4. go to the server folder and a create a file named server.js
 * 5. go to the root folder and edit package.json to set the project name and description if necessary
 * 6. add the following to the scripts property:
 * 
 * "start": "node server/server.js",
    "server": "nodemon server/server.js",
    "client": "npm run start --prefix client",
    "dev": "concurrently \"npm run server\" \"npm run client\" ",
    "heroku-postbuild": "NPM_CONFIG_PRODUCTION=false npm install --prefix client && npm run build --prefix client",
    "debug": "ndb server.js"
 */

/**
 * 7. while at the root folder type in the termninal: npm i concurrently dotenv express mongoose
 * 8. in the root folder type npx create-react-app client to create the client part of your project
 * 9. go to the client folder and while in terminal delete the .git folder
 * 10. go to the root folder and type npm run dev and you are done!
 */
/**
 * To solve CORS issues at the client or to connect to the server from your client app
 * add this line to client's package.json:
 * 
 * "proxy": "http://localhost:5000"
 * 
 * replace '5000' with the port that your server is listening to
 */