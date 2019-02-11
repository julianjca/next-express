/* eslint-disable no-console */

const mongoose = require('mongoose');
const config = require('./index');

// Build the connection string
let dbURI = null;
dbURI = config.dbUrl;


// Create the database connection
mongoose.connect(dbURI, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;

// CONNECTION EVENTS
// When successfully connected
db.on('connected', () => {
  console.log(`[${new Date()}] Mongoose connection successful`);
});

// If the connection throws an error
db.on('error', (err) => {
  console.log(`[${new Date()}] Mongoose default connection error: ${err}`);
});

// When the connection is disconnected
db.on('disconnected', () => {
  console.log(`[${new Date()}] Mongoose default connection disconnected`);
});

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', () => {
  db.close(() => {
    console.log(`[${new Date()}] Mongoose default connection disconnected through app termination`);
    process.exit(0);
  });
});

module.exports = db;
