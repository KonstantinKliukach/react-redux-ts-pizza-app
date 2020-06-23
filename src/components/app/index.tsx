import React from 'react';
import { Flex } from 'rebass';

import AppRoutes from 'components/routes';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import Mainlayout from 'layouts/mainLayout';
import styles from './App.module.css';

const App: React.FC = () => (
    <Flex className={styles.app}>
      <Router>
        <Mainlayout>
          <AppRoutes />
        </Mainlayout>
      </Router>
    </Flex>
);

export default App;
