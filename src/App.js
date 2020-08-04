import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeView from './views/home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={HomeView} />
      </div>
    </BrowserRouter>
  );
}

export default App;
