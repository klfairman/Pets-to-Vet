const router = require("express").Router();
const UserRoutes = require("./UsersRoute");
const VetRoutes = require("./VetRoute");
const PetRoutes = require("./PetRoute")

// All routes
router.use("/users", UserRoutes);
router.use("/Vets", VetRoutes);
router.use("/Pets", PetRoutes);

module.exports = router;