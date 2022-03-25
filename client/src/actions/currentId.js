import { SET, RESET } from "../constants/actionTypes";

export const setCurrentId = (id) => (dispatch) => {
  dispatch({ type: SET, payload: id });
};

export const resetCurrentId = () => (dispatch) => {
  dispatch({ type: RESET });
};
