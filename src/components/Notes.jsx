import { useContext, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core';
import Note from './Note';
import notesContext from '../context/notes/notesContext';
import loadingContext from '../context/loader/loaderContext';
import alertContext from '../context/alert/alertContext';
import Loader from './Loader';

const useItemsListStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    justifyItems: 'center',
    backgroundColor: theme.palette.background.paper,
  },
}));

const Notes = () => {
  const [dataLoaded, setDataLoaded] = useState(false);
  const { notes, remove, fetch } = useContext(notesContext);
  const { loading, showLoader, hideLoader } = useContext(loadingContext);
  const { show } = useContext(alertContext);
  const listClasses = useItemsListStyles();

  const loadData = async () => {
    if (!!dataLoaded) return;
    setDataLoaded(false);
    try {
      showLoader();
      await fetch();
      setDataLoaded(true);
      hideLoader();
    } catch (e) {
      // eslint-disable-next-line
      console.error(e);
      show({ title: `Error Fetching data -- ${e.message || e}`, type: 'danger' });
      hideLoader();
      setDataLoaded(false);
    }
  };

  const del = async ({ id }) => {
    try {
      showLoader();
      await remove({ id });
      await fetch();
      hideLoader();
    } catch (e) {
      show({ title: `Error deleting Note id ${id}`, type: 'danger' });
    }
  };

  useEffect(async () => {
    let isMounted = true;
    if (isMounted) {
      await loadData();
      if (!!notes.length) show({ title: `Notes are Loaded`, type: 'success' });
    }
    return () => {
      isMounted = false;
    };
  }, [dataLoaded]);

  return (
    <div className={listClasses.root}>{loading ? <Loader /> : notes.map((note) => <Note note={note} remove={del} key={note.id} />)}</div>
  );
};

export default Notes;
