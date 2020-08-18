import React from 'react';
import { BrowserRouter, Route, useLocation, Switch } from 'react-router-dom';
import { animated, useSpring, useTransition } from 'react-spring';

import HomeView from './views/home';
import ProjectsView from './views/projects';
import NavBar from './components/Nav';

import Theme from './common/Theme';
import './App.css';

function App() {
  const location = useLocation();

  const transitions = useTransition(location, (location) => location.pathname, {
    from: { opactiy: 0, width: '0%' },
    enter: { opactiy: 1, width: '100%' },
    leave: { opactiy: 0, width: '0%' }
  });

  return (
    <div>
      {transitions.map(({ item: location, props, key }) => (
        <animated.div style={props} key={key}>
          <Switch location={location}>
            <Route path="/" exact component={HomeView} />
            <Route path="/projects" component={ProjectsView} />
          </Switch>
        </animated.div>
      ))}
    </div>
  );
}

export default App;
