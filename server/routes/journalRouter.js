// * Import Libs
import express from "express";

// * Import files
import {
  getJournals,
  getJournal,
  createJournal,
  updateJournal,
  deleteJournal,
} from "../controllers/journalController.js";

// * Setup router
const router = express.Router();

// * Setup /journal routes
// getting all journal entries
router.get("/", getJournals);
// getting a singular journal entry
router.get("/:id", getJournal);
// creating a journal entry
router.post("/", createJournal);
// updating a journal entry
router.patch("/:id", updateJournal);
// delete journal entry
router.delete("/:id", deleteJournal);

export default router;
