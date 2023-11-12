//imports
const { connect, connection } = require("mongoose");

//creates the database
const connectionString =
    process.env.MONGODB_URI || ""

//connects Mongose and MongoDB
connect(connectionString);

//exports
module.exports = connection;