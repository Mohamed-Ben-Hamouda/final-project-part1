const mongoose = require("mongoose");

const PatientSchema = mongoose.Schema({
  infermier: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "infermier",
  },
  medecin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "medecin",
  },
  soin: [
    {
      type: Object,
      default: [],
    },
  ],
  prescription: [
    {
      type: Object,
      default: [],
    },
  ],
  suivie: [
    {
      type: Object,
      default: [],
    },
  ],

  covidTest: [
    {
      type: Object,
      default: [],
    },
  ],
  cin: {
    type: Number,
    required: true,
  },
  nom: {
    type: String,
    required: true,
  },
  prenom: {
    type: String,
    required: true,
  },
  dateEn: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  origin: {
    type: String,
    required: true,
  },
  numChambre: {
    type: String,
    required: true,
  },
  numLit: {
    type: String,
    required: true,
  },
  etat: {
    type: String,
    required: true,
  },
  ATCD: {
    type: Array,
    required: false,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("patient", PatientSchema);
