const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blockSchema = new Schema({
  blockID: { type: String, unique: true, max: 5000 },
  username: { type: String, unique: true, max: 50 },
  discriminator: { type: String, unique: true, max: 5 },
});

const Block = mongoose.model("Block", blockSchema);

module.exports = Block;
