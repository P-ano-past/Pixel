const router = require("express").Router();
const { findAll, create, update } = require("../../controllers/gridController");

router.route("/").get(findAll);
router.route("/color/").put(update);
router.route("/post/").post(create);

module.exports = router;
