import React from "react";
import Journal from "./Journal/Journal";
import { useSelector } from "react-redux";
import Form from "../Form/Form";

const Journals = () => {
  const journals = useSelector((state) => state.journals);

  return (
    <>
      <div className="app__bar">
        <h1 className="app__title">My Journal</h1>
      </div>

      <Form />

      <div className="journal__posts">
        {journals.map((journal) => (
          <Journal key={journal._id} journal={journal} />
        ))}
      </div>
    </>
  );
};

export default Journals;
