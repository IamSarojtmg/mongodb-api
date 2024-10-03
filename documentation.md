setting up env
need dotenv package
db.js is the connection between the test(jest) and the database.

on ackage.json script
    "test": "NODE_ENV=test jest",
    "server": "node server.js",
    "dev": "nodemon server.js"