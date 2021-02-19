import { useContext } from 'react';
import { Alert, AlertTitle } from '@material-ui/lab';
import IconButton from '@material-ui/core/IconButton';
import Zoom from '@material-ui/core/Zoom';
import CloseIcon from '@material-ui/icons/Close';
import clsx from 'clsx';
import alertContext from '../context/alert/alertContext';

const AlertCmp = () => {
  const { alert, hide } = useContext(alertContext);
  const alertClasses = clsx('alert', `alert-${alert.type}`);

  if (!alert?.type) return null;
  return (
    <Zoom in={alert.visible}>
      <Alert
        className={alertClasses}
        variant={alert.type === 'danger' ? 'filled' : 'standard'}
        severity={alert.type === 'danger' ? 'error' : alert.type}
        action={
          <IconButton aria-label="close" color="inherit" size="small" onClick={hide}>
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      >
        <AlertTitle>{alert.type}</AlertTitle>
        {alert.title}
      </Alert>
    </Zoom>
  );
};

export default AlertCmp;
