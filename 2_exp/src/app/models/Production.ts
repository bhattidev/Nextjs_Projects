import mongoose, { Schema, model, models } from "mongoose";

const ProductionSchema = new Schema({
  production: { type: Number, required: true },
  target: { type: Number, required: true },
});

const Production = models.Production || model("Production", ProductionSchema);
export default Production;
