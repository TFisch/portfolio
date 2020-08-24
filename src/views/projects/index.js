import React from 'react';
import * as Styles from './styles.sc';
import ProjectListing from '../../components/ProjectListing';

const barefootData = {
  href: 'barefoot-uploader',
  title: 'Barefoot Uploader'
};

const gooseData = {
  href: 'goose-island',
  title: 'Goose Island Web Redesign'
};

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
          projectData={barefootData}
          projectTitle="Barefoot Uploader"
        />
        <ProjectListing
          imgurl="/goose_preview.jpg"
          projectData={gooseData}
          projectTitle="Goose Island Web Redesign"
        />
      </Styles.projectsWrapper>
    </Styles.projectsView>
  );
};

export default ProjectsView;
