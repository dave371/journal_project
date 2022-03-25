import { SET, RESET } from "../constants/actionTypes";
// eslint-disable-next-line import/no-anonymous-default-export
export default (currentId = "", action) => {
  switch (action.type) {
    case SET:
      return action.payload;
    case RESET:
      return null;
    default:
      return currentId;
  }
};
