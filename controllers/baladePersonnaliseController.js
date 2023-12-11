const baladePersonnalise = require("../models/baladePersonnaliseModel");
const mongoose = require("mongoose");

//Get all baladePersonnalise
const getBaladePersonnalises = async (req, res) => {
  const baladePersonnalises = await baladePersonnalise
    .find({})
    .sort({ createdAt: -1 });
  res.status(200).json(baladePersonnalises);
};

//get a single baladePersonnalise
const getBaladePersonnalise = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no such baladePersonnalise" });
  }
  const baladePersonnalise = await baladePersonnalise.findById(id);
  if (!baladePersonnalise) {
    res.status(404).json({ error: "baladePersonnalise not found" });
  }
  res.status(200).json(baladePersonnalise);
};
//Create new baladePersonnalise
const createBaladePersonnalise = async (req, res) => {
  const { nom, food, duree, destination } = req.body;
  try {
    const baladePersonnalise = await baladePersonnalise.create({
      nom,
      food,
      duree,
      destination,
    });
    res.status(200).json(baladePersonnalise);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
// delete a baladePersonnalise
const deleteBaladePersonnalise = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no such baladePersonnalise" });
  }
  const baladePersonnalise = await baladePersonnalise.findOneAndDelete({
    _id: id,
  });
  if (!baladePersonnalise) {
    res.status(404).json({ error: "baladePersonnalise not found" });
  }
  res.status(200).json({ message: "baladePersonnalise deleted successfully" });
};

//update a baladePersonnalise
const updateBaladePersonnalise = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no such baladePersonnalise" });
  }

  const baladePersonnalise = await baladePersonnalise.findOneAndUpdate(
    { _id: id },
    {
      $set: req.body,
    },
    { new: true }
  );
  if (!baladePersonnalise) {
    res.status(404).json({ error: "baladePersonnalise not found" });
  }
  res.status(200).json(baladePersonnalise);
};

module.exports = {
  getBaladePersonnalises,
  getBaladePersonnalise,
  createBaladePersonnalise,
  deleteBaladePersonnalise,
  updateBaladePersonnalise,
};
