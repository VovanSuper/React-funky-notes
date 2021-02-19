import { useContext, useState, useRef, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
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
    const timeout = setTimeout(() => {
      inputRef.current.focus();
    }, 100);

    return () => {
      clearTimeout(timeout);
    };
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
    // <div className="form-group">
    //   <input
    //     ref={inputRef}
    //     className="form-control"
    //     type="text"
    //     placeholder="введите название заметки"
    //     value={noteTitle}
    //     onKeyPress={(e) => addNewNote(e)}
    //     onChange={(e) => setNoteTitle(e.target.value)}
    //   />
    // </div>
    <TextField
      autoFocus
      inputRef={inputRef}
      id="filled-full-width"
      label="Note title"
      style={{ margin: 8 }}
      placeholder="Enter note"
      helperText="value*"
      fullWidth
      margin="normal"
      InputLabelProps={{
        shrink: true,
      }}
      variant="filled"
      value={noteTitle}
      onKeyPress={(e) => addNewNote(e)}
      onChange={(e) => setNoteTitle(e.target.value)}
    />
  );
};

export default Form;
