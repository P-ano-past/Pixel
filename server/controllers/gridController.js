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
    console.log("req", req);
    console.log("res", res);
    db.Grid.findOneAndUpdate(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    console.log("req", req);
    console.log("res", res);
    db.User.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create: function ({ body }, res) {
    db.Grid.create({
      cellID: body.iArr,
    });
  },
};
