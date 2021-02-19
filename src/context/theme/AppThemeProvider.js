import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { colors } from '@material-ui/core';

const theme = createMuiTheme({
  typography: {
    h1: {
      fontSize: 18,
    },
    h2: {
      fontSize: 16,
    },
    h3: {
      fontSize: 14,
    },
    h4: {
      fontSize: 8,
    },
    body1: {
      fontSize: 16,
    },
  },
  palette: {
    primary: {
      main: '#9e9d2',
      light: '#d2ce56',
      dark: '#6c6f00',
    },
    secondary: {
      main: '#546e7a',
      light: '#819ca9',
      dark: '#29434e',
    },
    success: {
      main: colors.green[700],
    },
  },
  overrides: {
    MuiButton: {
      text: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 33px 25px 32px rgba(255, 105, 135, .3)',
      },
    },
  },
});

// eslint-disable-next-line react/prop-types
export default ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;
