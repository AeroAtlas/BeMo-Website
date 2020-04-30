const router = require("express").Router();
const loginRoutes = require("./login");

//Score Routes
router.use("/login", loginRoutes);

module.exports = router;