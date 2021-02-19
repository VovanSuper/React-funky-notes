import clsx from 'clsx';
import { Box, makeStyles } from '@material-ui/core';
import Form from '../components/Form';
import AlertCmp from '../components/Alert';
import Notes from '../components/Notes';
import Content from '../components/Content';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.secondary,
    color: theme.palette.primary,
    display: 'flex',
    flexDirection: 'column',
  },
}));

export default () => {
  const classes = useStyles();
  return (
    <Content title="All Notes" deletebtn>
      <Box>
        <AlertCmp />
        <div className={clsx(classes.container, '')}>
          <div className="row">
            <div className="col-12">
              <Form />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-12">
              <Notes />
            </div>
          </div>
        </div>
      </Box>
    </Content>
  );
};
