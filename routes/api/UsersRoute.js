const router = require("express").Router();
const UserController = require("../../controller/UserController");

// Matches with "/api/User"
router.route("/")
  .get(UserController.findAll)
  .post(UserController.create);

// Matches with "/api/User/:id"
router
  .route("/:id")
  .get(UserController.findById)
  .put(UserController.update)
  .delete(UserController.remove);

module.exports = router;