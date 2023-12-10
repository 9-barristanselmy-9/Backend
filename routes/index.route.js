const express = require("express");

const baladeRoutes = require("./balades");
const bateauRoutes = require("./bateau");

const router = express.Router();

router.use("/api/zrayeb/balade", baladeRoutes);

router.use("/api/zrayeb/bateau", bateauRoutes);

module.exports = router;