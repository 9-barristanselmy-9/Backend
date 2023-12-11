const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const baladePersonnaliseSchema = new Schema(
  {
    nom: {
      type: String,
      required: true,
    },
    food: {
      type: String,
      required: true,
    },
    duree: {
      type: Date,
      required: true,
    },
    destination: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
