import axios from "axios";

import { url } from "../constants/apiUrl";

const URL = url;

export const fetchPosts = () => axios.get(URL);
export const fetchPost = (id) => axios.get(`${URL}/${id}`);
export const updateJournal = (id, newJournal) =>
  axios.patch(`${URL}/${id}`, newJournal);
export const deleteJournal = (id) => axios.delete(`${URL}/${id}`);
export const createJournal = (newJournal) => axios.post(URL, newJournal);
