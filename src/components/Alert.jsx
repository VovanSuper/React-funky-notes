import { useContext } from 'react';
import { Transition } from 'react-transition-group';
import alertContext from '../context/alert/alertContext';

const Alert = () => {
  const { alert, hide } = useContext(alertContext);

  const defaultStyle = {
    opacity: 0,
    transition: 'opacity 500ms ease-in',
  };
  const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };

  return (
    <Transition timeout={300} in={alert.visible}>
      {(state) => (
        <div
          style={{ ...defaultStyle, ...transitionStyles[state] }}
          className={`alert alert-${alert.type || 'warning'} alert-dismissible fade show`}
          role="alert"
        >
          <strong>Внимание!</strong>
          &nbsp;
          {alert.title}
          <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      )}
    </Transition>
  );
};

export default Alert;
