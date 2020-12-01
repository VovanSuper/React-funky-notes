import { useContext, useState, useRef, useEffect } from 'react';
import notesContext from '../context/notes/notesContext';
import alertContext from '../context/alert/alertContext';
import loaderContext from '../context/loader/loaderContext';

const Form = () => {
  const [noteTitle, setNoteTitle] = useState('');
  const { add, fetch } = useContext(notesContext);
  const { show, hide } = useContext(alertContext);
  const { showLoader, hideLoader } = useContext(loaderContext);
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const addNewNote = async (e) => {
    if (e.key === 'Enter') {
      if (noteTitle.trim() === '') {
        show({ type: 'warning', title: 'Enter note title!' });
        setNoteTitle('');
      } else {
        showLoader();
        add({ title: noteTitle });
        setNoteTitle('');
        hide();
        await fetch();
        hideLoader();
      }
    }
  };

  return (
    <div className="form-group">
      <input
        ref={inputRef}
        className="form-control"
        type="text"
        placeholder="введите название заметки"
        value={noteTitle}
        onKeyPress={(e) => addNewNote(e)}
        onChange={(e) => setNoteTitle(e.target.value)}
      />
    </div>
  );
};

export default Form;
