const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema(
  {
    inventoryType: {
      type: String,
      required: ["true", "inventory type required"],
      enum: ["in", "out"],
    },
    bloodGroup: {
      type: String,
      required: ["true", "bloodGroup is required"],
      enum: ["A+", "A-", "AB+", "AB-", "O-", "O+"],
    },
    quantity: {
      type: Number,
      require: ["true", "blood quantity required"],
    },
    organization: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: ["true", "organization is required"],
    },
    hospital: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: function () {
        return this.inventoryType === "out";
      },
    },
    donar: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: function () {
        return this.inventoryType === "in";
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Inventory", inventorySchema);
