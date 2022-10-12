const router = require("express").Router();
const {
  findAll,
  remove,
  update,
  findById,
} = require("../../controllers/blockController");

router.route("/").get(findAll);
router.route("/:id").delete(remove).put(update).get(findById);

module.exports = router;
