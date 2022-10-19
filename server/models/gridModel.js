const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gridSchema = new Schema({
  cellID: [
    {
      cellID: { type: String },
      pickedColor: { type: String },
      userCell: { type: String },
    },
  ],
});

const Grid = mongoose.model("Grid", gridSchema);

module.exports = Grid;
