import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import { ThemeProvider } from './ThemeContext';
import theme from './config/theme';
import App from './components/App';

ReactDOM.render( 
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
