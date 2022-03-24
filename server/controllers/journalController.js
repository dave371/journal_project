// * Import Libs
import mongoose from "mongoose";
import Journal from "../models/journalModel.js";

// * GET ALL JOURNALS LOGIC
export const getJournals = async (req, res) => {
  try {
    // finding all the journals
    const journals = await Journal.find();
    console.log(journals);
    // responding back with a code of 200 (OK) and the journal json object
    res.status(200).json(journals);
  } catch (error) {
    // if and error occurs send out a 404 (NOT FOUND) and a json object
    res.status(404).json({ message: error });
  }
};

// * GET A JOURNAL ENTRY
export const getJournal = async (req, res) => {
  // get the id of the journal entry
  const { id: journalId } = req.params;
  // checking to see if id is in the valid format
  if (!mongoose.Types.ObjectId.isValid(journalId)) {
    return res.status(404).send(`No post with the id of ${journalId}`);
  }
  // getting the journal entry that matches the id or outputting an error
  try {
    // finding the journal entry by id
    const journalEntry = await Journal.findById(journalId);
    // responding with 200 (OK) and the journal entry
    return res.status(200).json(journalEntry);
  } catch (error) {
    // sending out error 409 (CONFLICT) and error message
    res.status(409).json({ message: error });
  }
};

// * CREATE A JOURNAL ENTRY
export const createJournal = async (req, res) => {
  // getting the journal data
  const entry = req.body;
  // lets pass in the new journal
  const newJournalEntry = Journal(entry);
  try {
    // save the entry
    await newJournalEntry.save();
    // responding with a 201 (SUC CREATION) and json data with the new entry
    res.status(201).json(newJournalEntry);
  } catch (error) {
    // if and error occurs send out a 409 (CONFLICT) and a json object
    res.status(409).json({ message: error });
  }
};

// * UPDATE A JOURNAL ENTRY
export const updateJournal = async (req, res) => {
  // get the id of the journal entry
  const { id: journalId } = req.params;
  // need the journal data
  const journalEntry = req.body;
  // checking to make sure that the ID matches the format of the database
  if (!mongoose.Types.ObjectId.isValid(journalId)) {
    return res.status(404).send(`No post with the id of ${journalId}`);
  }
  // updating the journal entry
  const updatedJournalEntry = await Journal.findByIdAndUpdate(
    journalId,
    { ...journalEntry, journalId },
    { new: true }
  );
  // sending the updated journal entry
  res.json(updatedJournalEntry);
};

// * DELETE A JOURNAL ENTRY
export const deleteJournal = async (req, res) => {
  //getting journal id
  const { id: journalId } = req.params;
  // checking to make sure that the ID matches the format of the database
  if (!mongoose.Types.ObjectId.isValid(journalId)) {
    return res.status(404).send(`No post with the id of ${journalId}`);
  }
  // delete the journal entry
  await Journal.findByIdAndDelete(journalId);
  res.json({ message: "Journal entry successfully deleted" });
};
