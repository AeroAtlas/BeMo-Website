const router = require("express").Router();
const loginController = require("../../controllers/loginController");

//For signing up
router.route("/")
  .get(loginController.findAll)
  // .get(scoreController.findHighest)
  .post(loginController.create)

//For logging in
router.route("/:id")
  .get(loginController.findByName)
  .put(loginController.update)
  .delete(loginController.remove)

module.exports = router;