import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import HomeView from './views/home';
import NavBar from './components/Nav';

import Theme from './common/Theme';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Theme>
          <Route exact path="/" component={HomeView} />
          <Route exact path="/" component={NavBar} />
        </Theme>
      </div>
    </BrowserRouter>
  );
}

export default App;
