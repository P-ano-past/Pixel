const router = require("express").Router();
const {
  findAll,
  remove,
  update,
  findById,
  create,
} = require("../../controllers/blockController");

router.route("/").get(findAll);
router.route("/:id").delete(remove).put(update).get(findById);
router.route("/find/").get(findAll);
router.route("/post/").post(create);

module.exports = router;
