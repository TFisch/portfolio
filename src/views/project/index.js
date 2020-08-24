import React from 'react';

const project = ({ location }) => {
  const { projectData } = location.state;
  console.log(projectData);
  return <div>{projectData.title}</div>;
};

export default project;
