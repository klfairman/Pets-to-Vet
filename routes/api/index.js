const router = require("express").Router();
const UserRoutes = require("./UsersRoute");
const PetRoutes = require("./PetRoute")

// All routes
router.use("/users", UserRoutes);
router.use("/Pets", PetRoutes);

module.exports = router;