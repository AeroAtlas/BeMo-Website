const router = require("express").Router();
const loginController = require("../../controllers/loginController");

//For making a username
router.route("/")
  .get(loginController.findAll)
  // .get(scoreController.findHighest)
  .post(loginController.create)

//For getting the score for the user
router.route("/:id")
  .get(loginController.findByName)
  .put(loginController.update)
  .delete(loginController.remove)

module.exports = router;