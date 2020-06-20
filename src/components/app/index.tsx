import React from 'react';
import { Box } from 'rebass';

const App: React.FC = () => {
  document.documentElement.setAttribute('data-theme', 'dark');
  return (
    <Box>
      Here will be app
    </Box>
  );
};

export default App;
