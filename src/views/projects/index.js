import React from 'react';
import * as Styles from './styles.sc';
import ProjectListing from '../../components/ProjectListing';
import './grid.css';
const ProjectsView = () => {
  return (
    <Styles.projectsView className="projects-view">
      <Styles.headLine>PROJECTS</Styles.headLine>
      <Styles.projectsWrapper>
        <ProjectListing
          className="listing-container proj-one"
          imgurl="/barefoot_top.jpg"
          projectTitle="Barefoot Uploader"
          link="barefoot-uploader"
        />
        <ProjectListing
          className="listing-container proj-two"
          imgurl="/goose_preview.jpg"
          projectTitle="Goose Island Web Redesign"
          link="goose-redesign"
        />
        <ProjectListing
          className="listing-container proj-three"
          imgurl="/goose_preview.jpg"
          projectTitle="Goose Island Web Redesign"
          link="goose-redesign"
        />
        <ProjectListing
          className="listing-container proj-four"
          imgurl="/goose_preview.jpg"
          projectTitle="Goose Island Web Redesign"
          link="goose-redesign"
        />
        <ProjectListing
          className="listing-container proj-five"
          imgurl="/goose_preview.jpg"
          projectTitle="Goose Island Web Redesign"
          link="goose-redesign"
        />
        <ProjectListing
          className="listing-container proj-six"
          imgurl="/goose_preview.jpg"
          projectTitle="Goose Island Web Redesign"
          link="goose-redesign"
        />
      </Styles.projectsWrapper>
    </Styles.projectsView>
  );
};

export default ProjectsView;
