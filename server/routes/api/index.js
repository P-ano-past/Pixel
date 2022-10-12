const router = require("express").Router();
const blockRoutes = require("./blockRoutes");
const publicRoutes = require("./publicRoutes");

router.use("/block", blockRoutes);
router.use("/public", publicRoutes);

module.exports = router;
