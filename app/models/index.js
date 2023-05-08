const mongoose = require("mongoose");
const dbConfig = require("../config/database");

module.exports = {
  mongoose,
  url: dbConfig.url,
  profile: require("./profile.model.js")(mongoose),
};
