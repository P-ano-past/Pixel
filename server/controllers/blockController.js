const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    db.Block.find({})
      .then((dbModel) => {
        res.json(dbModel);
      })
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Block.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findByUser: function (req, res) {
    db.User.findById(req.params.username)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create: function ({ body }, res) {
    db.Block.insertOne({ _id: body.block });
  },
  createPost: function ({ body }, res) {
    db.Block.findByIdAndUpdate(
      {
        _id: body.posts.postAuthor_id,
      },
      {
        $push: {
          posts: {
            post: body.posts.post,
            postAuthor_id: body.posts.postAuthor_id,
            author: body.posts.author,

            upsert: true,
            returnNewDocument: true,
          },
        },
      },
      { upsert: true, returnNewDocument: true }
    )
      .then(res.sendStatus(200))
      .catch((err) => res.status(401).json(err));
  },
  deletePost: function ({ body }, res) {
    db.Block.updateOne(
      {
        _id: body.posts.postAuthor_id,
      },
      {
        $pull: {
          posts: {
            _id: body.posts._id,
            post: body.posts.post,
            postAuthor_id: body.posts.postAuthor_id,
          },
        },
      }
    )
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(401).json(err));
  },
  update: function (req, res) {
    db.Block.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Block.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
