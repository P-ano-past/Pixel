const router = require("express").Router();
const { findAll, create, update } = require("../../controllers/gridController");

router.route("/").get(findAll);
router.route("/color/:id").post(update);
router.route("/post/").post(create);

module.exports = router;
