const functions = require("firebase-functions");
const admin = require("firebase-admin");
const binance = require("node-binance-api")().options({
  APIKEY: "oGZEIQVcHk6YqYE72IzG4tqYgU7G7VJTHO7BAYLBK6XxkB6CFrG3mo5aPZ3pQ9HN",
  APISECRET: "WmcSnj99KOoQsNqw2kqrtnk6L92824jWOmCe5aE9MhnYpDdHeVYsnOISmaMZlizF",
  useServerTime: true // If you get timestamp errors, synchronize to server time at startup
});
binance.bookTickers("BNBBTC", (error, ticker) => {
  console.log("bookTickers", ticker);
});
const _ = require("lodash");
admin.initializeApp();
