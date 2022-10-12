const router = require("express").Router();
const { findAll, findByUser } = require("../../controllers/gridController");

router.route("/").get(findAll);
router.route("/:id").get(findByUser);

module.exports = router;
