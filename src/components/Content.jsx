import { useContext } from 'react';
import PropTypes from 'prop-types';
import { palette, spacing } from '@material-ui/system';
import { Box, Button, IconButton, Card, CardHeader, colors, Grid, Paper, useTheme } from '@material-ui/core';
import styled from 'styled-components';
import { Delete, MoreHorizOutlined } from '@material-ui/icons';

import notesContext from '../context/notes/notesContext';
import loadingContext from '../context/loader/loaderContext';
import alertContext from '../context/alert/alertContext';

const StyledBox = styled(Box)`
  margin: 0;
  padding: 0;
  background: #2e2e2e;
  background: linear-gradient(95deg, rgba(0, 0, 0, 0.25) 0%, rgba(196, 196, 196, 0.75) 100%);
  height: 100%;
  ${spacing}
  ${palette}
`;
const StyledDelButton = styled(Button)`
  background: ${colors.deepOrange[900]};
  box-shadow: none;
`;
const StyledPaper = styled(Paper)`
  ${spacing};
  ${palette};
  background-image: linear-gradient(to top right, rgba(168, 202, 17, 0.45), rgba(26, 78, 0, 0.25));
`;

const StyledCard = styled(Card)`
  ${spacing};
  ${palette};
  display: ${(props) => props.display};
  place-content: ${(props) => (props.display === 'grid' ? props.content : null)};
  flex-direction: ${(props) => (props.display === 'flex' ? props.flexdirection : null)};
  text-align: ${(props) => props.align || 'left'};
`;

const Content = ({ children, title = 'Notes app', deletebtn = false }) => {
  const { removeAll, fetch } = useContext(notesContext);
  const { showLoader, hideLoader } = useContext(loadingContext);
  const { show } = useContext(alertContext);
  const theme = useTheme();

  const delAll = async () => {
    try {
      showLoader();
      await removeAll();
      show({ type: 'warning', title: 'All deleted!' });
      await fetch();
      hideLoader();
    } catch (e) {
      console.error(e);
      show({ title: `Error deleting Notes`, type: 'danger' });
    }
  };

  return (
    <StyledBox p={2} pt={14}>
      <StyledPaper elevation={24} p={2}>
        <StyledCard
          p={2}
          color={theme.palette.secondary.dark}
          m={1}
          display="flex"
          content="space-around"
          flexdirection="column"
          align="center"
        >
          <Grid container justify="space-around" alignItems="center">
            <Grid item>
              <CardHeader titleTypographyProps={{ variant: 'h3', color: 'secondary', component: 'h1' }} title={title} />
            </Grid>
            {deletebtn && (
              <Grid item>
                <StyledDelButton startIcon={<Delete color="primary" />} onClick={delAll}>
                  Delete all
                </StyledDelButton>
              </Grid>
            )}
          </Grid>
          {children}
        </StyledCard>
      </StyledPaper>
    </StyledBox>
  );
};

Content.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  title: PropTypes.string,
  deletebtn: PropTypes.bool,
};
Content.defaultProps = {
  title: 'Notes App',
  deletebtn: false,
};
export default Content;
