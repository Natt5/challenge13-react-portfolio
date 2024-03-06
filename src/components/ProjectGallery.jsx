
import React from 'react';
import projectsData from '../projects.json';

function ProjectGallery() {
  return (
    <div className="container" id="projects">
      <h2 className="text-center mb-4">Projects</h2>
      <div className="row">
        {projectsData.map((project) => (
          <div className="col-md-4 mb-4" key={project.id}>
            <div className="card">
              <img src={project.image} className="card-img-top" alt={project.title} />
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <a href={project.githubLink} className="btn btn-primary me-2 mb-2" target="_blank" rel="noopener noreferrer">View Project on GitHub</a>
                <br />
                {/* Deployed Project Link */}
                {project.deployedLink && <a href={project.deployedLink} className="btn btn-primary mb-2" target="_blank" rel="noopener noreferrer">View Deployed Project</a>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectGallery;
