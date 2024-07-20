// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import { CssBaseline } from '@mui/material';

// const theme = createTheme({
//   palette: {
//     background: {
//       default: '#f4f6f8',
//     },
//   },
// });

// ReactDOM.render(
//   <React.StrictMode>
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <App />
//     </ThemeProvider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

const theme = createTheme({
  palette: {
    background: {
      default: '#f4f6f8',
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
