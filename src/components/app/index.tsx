import React from 'react';
import logo from 'assets/icons/logo.svg';
import './App.css';

const App: React.FC = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/components/index.tsx</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        My small CRA template with TS, Redux and ESlint
      </a>
    </header>
  </div>
);

export default App;
