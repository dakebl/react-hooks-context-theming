import React, { Fragment } from 'react';

import Heading from '../../components/Heading';
import Card from '../../components/Card';

export default (props) => {
  return (
    <Fragment>
      <Card>
        <Heading size='1'>
          React Hooks
        </Heading>
        <Heading size='2'>
          Theming with with useContext, useState, and useEffect
        </Heading>
        <p>
          In this 
        </p>
      </Card>
    </Fragment>
  )
};
