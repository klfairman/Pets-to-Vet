const router = require("express").Router();
const PetController = require("../../controller/PetController");

// Matches with "/api/Pet"
router.route("/")
  .get(PetController.findAll)
  .post(PetController.create);

// Matches with "/api/Pet/:id"
router
  .route("/:id")
  .get(PetController.findById)
  .put(PetController.update)
  .delete(PetController.remove);

module.exports = router;