import { useReducer } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import { addNote, fetchNotes, removeNote } from '../actions';
import NotesContext from './notesContext';
import notesReducer from './notesReducer';

const baseUrl = process.env.REACT_APP_URL;
const notesUrl = `${baseUrl}/notes.json`;

const NotesProvider = ({ children }) => {
  const [notes, dispatch] = useReducer(notesReducer, []);

  const add = async ({ title }) => {
    const newNote = { title, date: `${new Date().toLocaleTimeString()}` };
    const addResult = await axios.post(notesUrl, newNote);
    dispatch(addNote({ ...newNote, id: addResult.data?.name }));
    return newNote;
  };

  const remove = async ({ id }) => {
    await axios.delete(`${baseUrl}/notes/${id}.json`);
    dispatch(removeNote({ id }));
    return id;
  };

  const fetch = async () => {
    const allNotesFromServerResult = await axios.get(notesUrl);
    const allNotes = Object.entries(allNotesFromServerResult?.data || []).map(([noteKey, noteBody]) => ({ ...noteBody, id: noteKey }));
    dispatch(fetchNotes({ notes: allNotes }));
    return allNotes;
  };

  return <NotesContext.Provider value={{ notes, add, remove, fetch }}>{children}</NotesContext.Provider>;
};

NotesProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};
NotesProvider.defaultProps = {
  children: {},
};

export default NotesProvider;
