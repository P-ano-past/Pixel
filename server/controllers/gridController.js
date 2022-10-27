const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    db.Grid.find({})
      .then((dbModel) => {
        res.json(dbModel);
      })
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    console.log("req.body", req.body);
    // console.log("res.body", res.body);
    // db.Grid.findOne(req.params.id)
    //   .then((dbModel) => res.json(dbModel))
    //   .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Grid.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel), res.status(200))
      .catch((err) => res.status(422).json(err));
  },
  create: function ({ body }, res) {
    console.log("Grid created <3");
    // console.log(body);
    db.Grid.create(body.iArr);
  },
};
