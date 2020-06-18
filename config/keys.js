// keys.js ==> figure out what set of keys to return
if (process.env.NODE_ENV === "production") {
  // production ==> return prod set keys
  module.exports = require("./prod");
} else {
  // development ==> return dev set keys
  module.exports = require("./dev");
}
