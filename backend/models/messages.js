const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  sender: {
    type: String,
    required: true,
  },
  isUser: {
    type: Boolean,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  owner_id: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "user"
}
});

module.exports = mongoose.model("message", messageSchema)