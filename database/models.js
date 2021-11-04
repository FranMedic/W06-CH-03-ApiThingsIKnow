const { Schema, model } = require("mongoose");

const thingSchema = new Schema({
  thing: {
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

const Thing = model("Thing", thingSchema, "thingsIKnow");

module.exports = Thing;
