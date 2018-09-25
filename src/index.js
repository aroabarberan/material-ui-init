import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MuiThemeProvider } from '@material-ui/core'
import { createMuiTheme } from '@material-ui/core'
import { deepOrange, brown } from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: deepOrange[500],
      contrastText: '#fff',
    },
    secondary: {
      main: brown[700],
      contrastText: '#fff',
    },
  },
})

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>
  , document.getElementById('root'));
