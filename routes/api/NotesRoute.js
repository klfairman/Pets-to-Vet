const router = require("express").Router();
const NotesController = require("../../controller/NotesController")

// Matches with "/api/Pet"
router.route("/")
  .get(NotesController.findAll)
  .post(NotesController.create);

// Matches with "/api/Pet/:id"
router
  .route("/:id")
  .get(NotesController.findById)
  .put(NotesController.update)
  .delete(NotesController.remove);

module.exports = router;