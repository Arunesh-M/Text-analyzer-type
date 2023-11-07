import React, { FC } from 'react';
import './App.css';
import Text from './components/text';
import Nav1 from './components/nav1';
import Nav2 from './components/nav2';
import { DataProvider } from './context/datacontext';

const App: React.FC = () => {
  return (
    <div className="App">
      <DataProvider>
          <Nav1 />
          <Text />
          <Nav2 />
      </DataProvider>
    </div>
  );
}

export default App;