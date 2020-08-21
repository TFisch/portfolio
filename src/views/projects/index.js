import React from 'react';
import * as Styles from './styles.sc';
import ProjectListing from '../../components/ProjectListing';

const ProjectsView = () => {
  return (
    <Styles.projectsView
      className="projects-view"
      imgurl={process.env.PUBLIC_URL + '/bagacian.jpg'}
    >
      <Styles.headLine>PROJECTS</Styles.headLine>
      <Styles.projectsWrapper>
        <ProjectListing
          imgurl="/barefoot_top.jpg"
          projectTitle="Barefoot Uploader"
        />
        <ProjectListing
          imgurl="/goose_preview.jpg"
          projectTitle="Goose Island Website Redesign"
        />
      </Styles.projectsWrapper>
    </Styles.projectsView>
  );
};

export default ProjectsView;
