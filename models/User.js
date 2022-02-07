const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    pseudo: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    admin: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
