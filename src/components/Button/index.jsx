import React, { useContext } from 'react';
import styled from 'react-emotion';

import buttonStyles from './styles';
import { ThemeContext } from '../../ThemeContext';

const Button = styled('button')(({theme, styles}) => {
  return { ...buttonStyles, ...theme.button };
});

export default (props) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Button {...props} theme={theme}>
      {props.children}
    </Button>
  )
}