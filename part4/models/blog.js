const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const blogSchema = new mongoose.Schema({
  title: String,
  author: { type: String, require: true },
  url: { type: String, require: true },
  likes: { type: Number, default: 0 },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

blogSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

blogSchema.plugin(uniqueValidator);
module.exports = mongoose.model("Blog", blogSchema);
