const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);

module.exports = app => {
  //stripe payment
  app.post("/api/stripe", (req, res) => {});
};
