import { ADD_NOTE, FETCH_NOTES, REMOVE_NOTE, REMOVE_NOTES } from '../types';

export default function NotesReducer(notes = [], { type, payload }) {
  switch (type) {
    case REMOVE_NOTE:
      return [...notes.filter((note) => note.id !== payload.id)];

    case REMOVE_NOTES:
      return [];

    case ADD_NOTE:
      return [
        ...notes.concat({
          title: payload.title,
          date: payload.date,
          id: payload.id,
        }),
      ];

    case FETCH_NOTES:
      return [...payload];

    default:
      return notes;
  }
}
