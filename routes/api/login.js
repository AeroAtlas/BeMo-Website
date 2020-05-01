const router = require("express").Router();
const loginController = require("../../controllers/loginController");

//For signing up
router.route("/")
  .get(loginController.findAll)
  .post(loginController.create)

//For logging in
router.route("/:id")
  .get(loginController.findById)
  .put(loginController.update)
  .delete(loginController.remove)

module.exports = router;