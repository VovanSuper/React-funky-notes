import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, ButtonGroup, makeStyles, useTheme, Avatar, useMediaQuery } from '@material-ui/core';
import { HomeRounded, Info, Reorder as ReorderIcon } from '@material-ui/icons';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Bar = styled(AppBar)`
  background-image: linear-gradient(
    to top right,
    rgba(189, 189, 189, 0.25) 0%,
    rgba(201, 201, 201, 0.55) 5%,
    rgba(65, 64, 64, 0.35) 25%,
    rgba(80, 79, 108, 0.55) 55%,
    rgba(43, 4, 110, 0.9) 100%
  );
`;

const StyledNavBtn = styled(Button)`
  background-image: linear-gradient(to top left, rgba(20, 3, 80, 0.55), #8f8f8f);
`;

const useStyles = makeStyles((styles) => ({
  tile: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    verticalAlign: 'middle',
    gap: '1rem',
    lineHeight: '100%',
    fontSize: styles.spacing(8),
  },
  navButton: {
    minWidth: '10rem',
    padding: '.5rem 4rem',
    '&.active': {
      background: styles.palette.action.focus,
    },
  },
}));

const NavbarTitle = ({ title = 'Notes App' }) => {
  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.up('xs'));
  const isSmScreen = useMediaQuery(theme.breakpoints.up('sm'));
  const isMdScreen = useMediaQuery(theme.breakpoints.up('md'));

  if (isMdScreen)
    return (
      <>
        {title}
        <Avatar sizes="150,200">
          <ReorderIcon color="action" fontSize="small" />
        </Avatar>
      </>
    );
  if (isSmScreen) return <>{title}</>;
  if (isXsScreen)
    return (
      <Avatar sizes="50px">
        <ReorderIcon color="action" fontSize="large" />
      </Avatar>
    );

  return null;
};

const Navbar = ({ title }) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Bar position="fixed">
      <Toolbar color={theme.palette.success.main}>
        <Typography className={clsx(classes.tile)} align="left" variant="h4" color="secondary" component="h4">
          <NavbarTitle title={title} />
        </Typography>
        <ButtonGroup color="secondary" size="large" variant="contained" aria-label="contained primary button group">
          <StyledNavBtn
            startIcon={<HomeRounded color="primary" fontSize="large" />}
            className={clsx(classes.navButton, 'link-home')}
            size="large"
            variant="contained"
            component={NavLink}
            to="/"
          >
            <Typography>Home</Typography>
          </StyledNavBtn>
          <StyledNavBtn
            startIcon={<Info color="primary" fontSize="large" />}
            className={clsx(classes.navButton, 'link-about')}
            size="large"
            variant="contained"
            component={NavLink}
            to="/about"
          >
            About
          </StyledNavBtn>
        </ButtonGroup>
      </Toolbar>
    </Bar>
  );
};
Navbar.propTypes = {
  title: PropTypes.string,
};
Navbar.defaultProps = {
  title: 'Notes App',
};
NavbarTitle.propTypes = {
  title: PropTypes.string,
};
NavbarTitle.defaultProps = {
  title: 'Notes',
};
export default Navbar;
