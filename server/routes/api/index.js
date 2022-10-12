const router = require("express").Router();
const blockRoutes = require("./blockRoutes");
const gridRoutes = require("./gridRoutes");

router.use("/block", blockRoutes);
router.use("/grid", gridRoutes);

module.exports = router;
