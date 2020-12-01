import PropTypes from 'prop-types';
import { useReducer } from 'react';
import AlertContext from './alertContext';
import alertReducer from './alertReducer';
import { hideAlert, showAlert } from '../actions';

const AlertProvider = ({ children }) => {
  const iniAlert = { visible: false, title: null, type: null };
  const [alert, dispatch] = useReducer(alertReducer, iniAlert);

  let alertTimeout;

  const hide = () => {
    dispatch(hideAlert());
    clearTimeout(alertTimeout);
  };

  const show = ({ title, type }, timeout = 1500) => {
    if (!alertTimeout) {
      dispatch(showAlert({ title, type }));
      alertTimeout = setTimeout(() => {
        dispatch(hideAlert());
        clearTimeout(alertTimeout);
      }, timeout);
    }
  };

  return <AlertContext.Provider value={{ alert, show, hide }}>{children}</AlertContext.Provider>;
};

AlertProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};
AlertProvider.defaultProps = {
  children: {},
};

export default AlertProvider;
