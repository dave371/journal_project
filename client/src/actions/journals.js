import * as api from "../api";
import {
  FETCH_ALL,
  FETCH,
  DELETE,
  UPDATE,
  CREATE,
} from "../constants/actionTypes";

// * Action Creators
//Get journals
export const getJournals = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};
//Get a journal
export const getJournal = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchPost(id);
    dispatch({ type: FETCH, payload: data });
  } catch (error) {
    console.log(error);
  }
};
//Create a journal
export const createJournal = (newJournal) => async (dispatch) => {
  try {
    const { data } = await api.createJournal(newJournal);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
//Update a journal
export const updateJournal = (id, newJournal) => async (dispatch) => {
  try {
    const { data } = await api.updateJournal(id, newJournal);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
//Delete a journal
export const deleteJournal = (id) => async (dispatch) => {
  try {
    await api.deleteJournal(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};
