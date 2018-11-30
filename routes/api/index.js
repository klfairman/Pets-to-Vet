const router = require("express").Router();
const UserRoutes = require("./UsersRoute");
const VetRoutes = require("./VetRoute");
const PetRoutes = require("./PetRoute")

// All routes
router.use("/users", UserRoutes);
router.use("/VetRoutes", VetRoutes);
router.use("/PetRoutes", PetRoutes);
router.use("/")

module.exports = router;