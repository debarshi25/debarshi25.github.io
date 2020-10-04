import React from 'react';
import { Card, CardHeader, CardBody } from 'reactstrap';

function RenderProjects({project}) {
    
    return (
        <Card>
            <CardHeader>
                <strong>{project.name} </strong>
                <a className="fa fa-external-link" href={project.githubLink}></a>
            </CardHeader>
            <CardBody align="justify">{project.description}</CardBody>
        </Card>
    );
}

const Projects = (props) => {

    const projects = props.projects.map((project) => {
        return (
            <div key={project.id} className="mb-3">
                <RenderProjects project={project} />
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row row-content">
                <div className="col-12 text-center">
                    <h3>List of Projects</h3>
                    <hr />
                </div>
                <div className="col-12 lead">
                    {projects}
                </div>
            </div>
        </div>
    );
}

export default Projects;
