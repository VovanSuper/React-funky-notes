import PropTypes from 'prop-types';
import styled from 'styled-components';

const CloseBtn = styled.button`
  border-radius: 20%;
  box-shadow: 0.3px 0.5px 3px 1px #ccc;
  transition: 200ms ease-in;
  &:hover {
    background-color: #fdd;
  }
`;

const Note = ({ note, remove }) => {
  const delNote = (e) => {
    e.preventDefault();
    remove({ id: note.id });
  };

  return (
    <div className="note-item list-group-item">
      <div className="note-info">
        <strong>{note.title}</strong>
        &nbsp;
        <small>{note.date}</small>
      </div>
      <CloseBtn type="button" className="btn btn-outline-danger btn-sm" onClick={delNote}>
        &times;
      </CloseBtn>
    </div>
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
