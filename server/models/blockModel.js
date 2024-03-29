const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blockSchema = new Schema({
  blockID: { type: String, max: 5000 },
  username: { type: String, max: 50 },
  discriminator: { type: String, max: 5 },
});

const Block = mongoose.model("Block", blockSchema);

module.exports = Block;
