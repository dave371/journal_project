import React, { useEffect } from "react";
import Journals from "./components/Journals/Journals";
import { useDispatch, useSelector } from "react-redux";

import "./styles/journal.css";
import "./styles/journals.css";
import "./styles/form.css";
import "./styles/default.css";
import { getJournals } from "./actions/journals";

const App = () => {
  const dispatch = useDispatch();
  const currentId = useSelector((state) => state.currentId);

  useEffect(() => {
    dispatch(getJournals());
  }, [currentId, dispatch]);

  return (
    <>
      <Journals />
    </>
  );
};

export default App;
