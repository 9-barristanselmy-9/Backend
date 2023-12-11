const express = require("express");

const {
  createBaladePersonnalise,
  getBaladePersonnalises,
  getBaladePersonnalise,
  updateBaladePersonnalise,
  deleteBaladePersonnalise,
} = require("../controllers/baladePersonnaliseController");

const router = express.Router();
//get all baladePersonnalise

router.get("/", getBaladePersonnalises);
//get one baadePersonnalise
router.get("/:id", getBaladePersonnalise);
//create new baladePersonnalise
router.post("/add", createBaladePersonnalise);
//update baladePersonnalise
router.patch("/update/:id", updateBaladePersonnalise);
//delete baladePersonnalise
router.delete("/delete/:id", deleteBaladePersonnalise);
module.exports = router;
