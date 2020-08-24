import React from 'react';
import { BrowserRouter, Route, useLocation, Switch } from 'react-router-dom';
import { animated, useSpring, useTransition } from 'react-spring';

import HomeView from './views/home';
import ProjectsView from './views/projects';
import NavBar from './components/Nav';

import Theme from './common/Theme';
import './App.css';
import ScrollIntoView from './components/ScrollIntoView';
import ProjectView from './views/project';

const barefootData = {
  href: 'barefoot-uploader',
  title: 'Barefoot Uploader'
};

const gooseData = {
  href: 'goose-island',
  title: 'Goose Island Web Redesign'
};

function App() {
  const location = useLocation();

  const transitions = useTransition(location, (location) => location.pathname, {
    from: {
      opacity: 1
    },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });

  return (
    <div>
      {transitions.map(({ item: location, props, key }) => (
        <animated.div key={key}>
          <ScrollIntoView>
            <Switch location={location}>
              <Route path="/" exact component={HomeView} />
              <Route path="/projects" exact component={ProjectsView} />
              <Route
                path="/projects/barefoot-uploader"
                render={(props) => (
                  <ProjectView {...props} projectData={barefootData} />
                )}
              />
              <Route
                path="/projects/goose-redesign"
                render={(props) => (
                  <ProjectView {...props} projectData={gooseData} />
                )}
              />
            </Switch>
          </ScrollIntoView>
        </animated.div>
      ))}
    </div>
  );
}

export default App;
