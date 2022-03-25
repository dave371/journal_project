import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateJournal, createJournal } from "../../actions/journals";
import { resetCurrentId } from "../../actions/currentId";

const Form = () => {
  const [journalData, setJournalData] = useState({
    name: "",
    title: "",
    journalEntry: "",
  });
  const currentId = useSelector((state) => state.currentId);
  const journal = useSelector((state) =>
    currentId
      ? state.journals.find((journal) => journal._id === currentId)
      : null
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (journal) setJournalData(journal);
  }, [journal]);

  const handleChange = (event) => {
    event.preventDefault();

    if (currentId) {
      dispatch(updateJournal(currentId, journalData));
    } else {
      dispatch(createJournal(journalData));
    }

    clear();
  };

  const clear = () => {
    dispatch(resetCurrentId());
    setJournalData({
      name: "",
      title: "",
      journalEntry: "",
    });
  };

  return (
    <div className="form__container">
      <h2 className="form__header">
        {currentId ? "Edit" : "Create"} a Journal Entry
      </h2>
      <form onSubmit={handleChange} className="form">
        <input
          input="text"
          placeholder="Name"
          value={journalData.name}
          onChange={(event) =>
            setJournalData({ ...journalData, name: event.target.value })
          }
        />
        <input
          input="text"
          placeholder="Title"
          value={journalData.title}
          onChange={(event) =>
            setJournalData({ ...journalData, title: event.target.value })
          }
        />
        <textarea
          placeholder="Journal Entry"
          value={journalData.journalEntry}
          onChange={(event) =>
            setJournalData({ ...journalData, journalEntry: event.target.value })
          }
        />
        <button type="submit">
          {currentId ? "Edit" : "Create"} Journal Entry
        </button>
        <button onClick={clear}>Clear</button>
      </form>
    </div>
  );
};

export default Form;
