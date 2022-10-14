const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    db.Grid.find({})
      .then((dbModel) => {
        res.json(dbModel);
      })
      .catch((err) => res.status(422).json(err));
  },
  create: function ({ body }, res) {
    // db.Grid.create({
    //   cellId: body.id,
    // });
    console.log("body", body);
  },
};
