import {
  FETCH_ALL,
  FETCH,
  DELETE,
  UPDATE,
  CREATE,
} from "../constants/actionTypes";

// eslint-disable-next-line import/no-anonymous-default-export
export default (journals = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case FETCH:
      return journals.find((journal) => journal._id === action.payload._id);
    case CREATE:
      return [...journals, action.payload];
    case UPDATE:
      return journals.map((journal) =>
        journal._id === action.payload._id ? action.payload : journal
      );
    case DELETE:
      return journals.filter((journal) => journal._id !== action.payload);
    default:
      return journals;
  }
};
