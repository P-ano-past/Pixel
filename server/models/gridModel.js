const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gridSchema = new Schema({
  blockID: { type: String, max: 5000 },
});

const Grid = mongoose.model("Grid", gridSchema);

module.exports = Grid;
