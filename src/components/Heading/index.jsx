import React, { useContext } from 'react';
import styled from 'react-emotion';

import styles from './styles';
import { ThemeContext } from '../../ThemeContext';

function createStyledHeading (theme = {}, size = 1) {
  const tag = `h${size}`;
  const headingStyles = theme.heading || {};

  console.log([ styles, headingStyles[tag] ]);



  return styled(tag)({ ...styles.base, ...styles[tag], ...headingStyles[tag] })
}

const Heading = (props) => {
  const { theme } = useContext(ThemeContext);
  const StyledHeading = createStyledHeading(props.theme || theme, props.size);
  return (
    <StyledHeading {...props}>
      {props.children}
    </StyledHeading>
  )
}

export default Heading;