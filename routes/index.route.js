const express = require("express");

const baladeRoutes = require("./balades");
const bateauRoutes = require("./bateau");
const pecheurRoutes = require("./pecheur");

const router = express.Router();

router.use("/api/zrayeb/balade", baladeRoutes);
router.use("/api/zrayeb/pecheur", pecheurRoutes);
router.use("/api/zrayeb/bateau", bateauRoutes);

module.exports = router;
