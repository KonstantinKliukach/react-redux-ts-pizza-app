import React from 'react';

import ReduxContext from './redux';

const AppContext: React.FC = (props) => (
  <ReduxContext>
    {props.children}
  </ReduxContext>
);

export default AppContext;
