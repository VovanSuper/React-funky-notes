import PropTypes from 'prop-types';
import { Button, Divider, ListItem, makeStyles } from '@material-ui/core';
import { CloseSharp } from '@material-ui/icons';
import styled from 'styled-components';

const useItemStyles = makeStyles((theme) => ({
  root: {
    alignItems: 'center',
    justifyContent: 'space-between',
    color: theme.palette.action.active,
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
  },
  title: {
    fontSize: 28,
    flex: 2,
    color: theme.palette.primary.dark,
  },
  date: {
    flex: 1,
    fontSize: 12,
    padding: '1rem',
    textAlign: 'center',
    verticalAlign: 'middle',
    color: theme.palette.primary.main,
  },
  divider: {
    color: theme.palette.grey[300],
  },
}));

const StyledCloseBtn = styled(Button)`
  border-radius: 15%;
  height: 3.5rem;
  width: 2.5rem;
  box-shadow: 0.3px 0.5px 3px 1px #ccc;
  transition: all 100ms ease-in;
  &:hover {
    background-image: linear-gradient(45deg, #8baaaa 0%, #ae8b9c 100%);
    color: #490000;
  }
  & > span {
    font-size: 1.2rem;
    font-weight: 900;
  }
`;

// const NoteLine = styled(ListItem)``;

const Note = ({ note, remove }) => {
  const listClasses = useItemStyles();

  const delNote = (e) => {
    e.preventDefault();
    remove({ id: note.id });
  };

  return (
    <>
      <ListItem className={listClasses.root} ContainerComponent="div">
        <div className={listClasses.item}>
          <strong className={listClasses.title}>{note.title}</strong>
          &nbsp;
          <small className={listClasses.date}>{note.date}</small>
        </div>
        <StyledCloseBtn type="button" className="btn-close" onClick={delNote}>
          <CloseSharp fontSize="large" color="primary" />
        </StyledCloseBtn>
      </ListItem>
      <Divider className={listClasses.divider} />
    </>
  );
};

Note.propTypes = {
  note: PropTypes.shape({ id: PropTypes.string, title: PropTypes.string, date: PropTypes.string }),
  remove: PropTypes.func,
};
Note.defaultProps = {
  note: {},
  remove: () => undefined,
};

export default Note;
