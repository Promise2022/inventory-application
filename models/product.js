const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: [{ type: Schema.Types.ObjectId, ref: "Category", required: true }],
});

// Virtual for product's URL
ProductSchema.virtual("url").get(function () {});

// Export model
module.exports = mongoose.model("Product", ProductSchema);
