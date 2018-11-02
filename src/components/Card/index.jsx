import React, { useContext } from 'react';
import styled from 'react-emotion';

import styles from './styles';
import { ThemeContext } from '../../ThemeContext';

const StyledCard = styled('div')(({theme}) => {
  return { ...styles, ...theme.card };
});

const Card = (props) => {
  
  const { theme } = useContext(ThemeContext);
   
  return (
    <StyledCard {...props} theme={theme}>
      {props.children}
    </StyledCard>
  )
}

export default Card;