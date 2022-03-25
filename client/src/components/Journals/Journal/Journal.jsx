import React from "react";
import { useDispatch } from "react-redux";
import { setCurrentId } from "../../../actions/currentId";
import { deleteJournal } from "../../../actions/journals";

function Journal({ journal }) {
  const dispatch = useDispatch();

  return (
    <div className="card__container">
      <div className="card__header">
        <h2 className="card__title">{journal.title}</h2>
        <div className="card__functions">
          <button onClick={() => dispatch(setCurrentId(journal._id))}>
            Edit
          </button>
          <button onClick={() => dispatch(deleteJournal(journal._id))}>
            Delete
          </button>
        </div>
      </div>
      <div className="card__content">
        <p>{journal.journalEntry}</p>
      </div>
    </div>
  );
}

export default Journal;
