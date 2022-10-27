const router = require("express").Router();
const {
  findAll,
  create,
  update,
  findById,
} = require("../../controllers/gridController");

router.route("/").get(findAll);
router.route("/color/:id").post(update).get(findById);
router.route("/post/").post(create);

module.exports = router;
