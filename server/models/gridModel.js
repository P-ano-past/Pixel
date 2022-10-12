const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gridSchema = new Schema({
  blockID: { type: String, max: 5000 },
  username: { type: String, max: 50 },
  discriminator: { type: String, max: 5 },
});

const Grid = mongoose.model("Block", gridSchema);

module.exports = Grid;
