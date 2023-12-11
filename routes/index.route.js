const express = require("express");

const baladeRoutes = require("./balades");
const bateauRoutes = require("./bateau");
const pecheurRoutes = require("./pecheur");
const inscriptionsRoutes = require("./inscription");
const baladePersonnalise = require("./baladePersonnalise");

const router = express.Router();

router.use("/api/zrayeb/balade", baladeRoutes);
router.use("/api/zrayeb/pecheur", pecheurRoutes);
router.use("/api/zrayeb/bateau", bateauRoutes);
router.use("/api/zrayeb/inscriptions", inscriptionsRoutes);
router.use("/api/zrayeb/baladePersonnalise", baladePersonnalise);

module.exports = router;
