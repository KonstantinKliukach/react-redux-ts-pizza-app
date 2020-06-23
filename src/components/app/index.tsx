import React from 'react';
import { Box } from 'rebass';

import AppRoutes from 'components/routes';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import Mainlayout from 'layouts/mainLayout';
import styles from './App.module.css';

const App: React.FC = () => (
    <Box className={styles.app}>
      <Router>
        <Mainlayout>
          <AppRoutes />
        </Mainlayout>
      </Router>
    </Box>
);

export default App;
