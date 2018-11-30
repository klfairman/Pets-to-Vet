const router = require("express").Router();
const VetController = require("../../controller/VetController");

// Matches with "/api/Vet"
router.route("/")
  .get(VetController.findAll)
  .post(VetController.create);

// Matches with "/api/Vet/:id"
router
  .route("/:id")
  .get(VetController.findById)
  .put(VetController.update)
  .delete(VetController.remove);

module.exports = router;