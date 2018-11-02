import React, {useContext, useState} from 'react';
import styled from 'react-emotion';

import { ThemeContext } from '../../ThemeContext';
import AppStyles from './styles';

import Home from '../../pages/Home';
import Button from '../Button';

const App = styled('div')(({theme, styles}) => {
  return { ...AppStyles, ...theme.app, ...styles  };
});

export default (props) => {
  const { theme, themeActive, toggleTheme } = useContext(ThemeContext);
  return (
    <App theme={theme}>
      <Button onClick={toggleTheme}>
        {themeActive ? 'Go back to the boring theme...' : 'This is boring. Apply a theme!'}
      </Button>
      <Home/>
    </App>
  )
}
