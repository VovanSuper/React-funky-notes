import { HIDE_ALERT, SHOW_ALERT, ADD_NOTE, REMOVE_NOTE, FETCH_NOTES, SHOW_LOADER, HIDE_LOADER } from './types';

export function hideAlert() {
  return { type: HIDE_ALERT };
}

export function showAlert({ title, type }) {
  return { type: SHOW_ALERT, payload: { title, type } };
}

export function addNote({ title, date, id }) {
  return { type: ADD_NOTE, payload: { title, date, id } };
}

export function removeNote({ id }) {
  return { type: REMOVE_NOTE, payload: { id } };
}

export function fetchNotes({ notes }) {
  return { type: FETCH_NOTES, payload: notes };
}

export function hideLoading() {
  return { type: HIDE_LOADER };
}
export function showLoading() {
  return { type: SHOW_LOADER };
}
