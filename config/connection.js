//imports
const { connect, connection } = require("mongoose");

//creates the database
const connectionString =
    process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/studentsDB";

//connects Mongose and MongoDB
connect(connectionString);

//exports
module.exports = connection;