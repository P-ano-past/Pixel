const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gridSchema = new Schema({
  cellID: { type: Array },
});

const Grid = mongoose.model("Grid", gridSchema);

module.exports = Grid;
