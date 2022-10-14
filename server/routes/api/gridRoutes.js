const router = require("express").Router();
const { findAll, create } = require("../../controllers/gridController");

router.route("/").get(findAll);
router.route("/post/").post(create);

module.exports = router;
