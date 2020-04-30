const router = require("express").Router();
const loginRoutes = require("./login");

//Login Routes
router.use("/login", loginRoutes);

module.exports = router;