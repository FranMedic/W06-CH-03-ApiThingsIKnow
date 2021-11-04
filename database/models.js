const { Schema, model } = require("mongoose");

const thingSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  week: {
    type: Number,
    required: true,
    min: 0,
    max: 6,
  },
});

const Thing = model("Thing", thingSchema);

module.exports = Thing;
