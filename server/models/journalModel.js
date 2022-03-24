// * Import Libs
import mongoose from "mongoose";

// * Make a Schema
const journal = mongoose.Schema({
  name: String,
  title: String,
  journalEntry: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

// * Assign the Schema
const Journal = mongoose.model("Journal", journal);
export default Journal;
