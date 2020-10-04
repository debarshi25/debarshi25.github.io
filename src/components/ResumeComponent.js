import React from 'react';
import { Card, CardHeader, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

function RenderEducation({education}) {

    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    <strong>{education.school}</strong><br />
                    <span className="fa fa-map-marker"></span> {education.location}
                </CardTitle>
                <CardSubtitle>
                    {education.degree}, {education.fieldOfStudy}<br />
                    <span className="fa fa-calendar"></span> {education.startDate} – {education.endDate}
                </CardSubtitle>
            </CardHeader>
            <CardBody align="justify">{education.description}</CardBody>
        </Card>
    );
}

function RenderEmployment({employment}) {

    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    <strong>{employment.company}</strong><br />
                    <span className="fa fa-map-marker"></span> {employment.location}
                </CardTitle>
                <CardSubtitle>
                    {employment.designation}<br />
                    <span className="fa fa-calendar"></span> {employment.startDate} – {employment.endDate}
                </CardSubtitle>
            </CardHeader>
            <CardBody align="justify">
                <ul>
                    <li>{employment.description1}</li>
                    <li>{employment.description2}</li>
                    <li>{employment.description3}</li>
                    <li>{employment.description4}</li>
                    <li>{employment.description5}</li>
                </ul>
            </CardBody>
        </Card>
    );
}

function RenderSkills({skills}) {

    return (
        <Card>
            <CardHeader><strong>{skills.category}</strong></CardHeader>
            <CardBody align="justify">{skills.skillSet}</CardBody>
        </Card>
    );
}

const Resume = (props) => {

    const education = props.education.map((education) => {
        return (
            <div key={education.id} className="mb-3">
                <RenderEducation education={education} />
            </div>
        );
    });

    const employment = props.employment.map((employment) => {
        return (
            <div key={employment.id} className="mb-3">
                <RenderEmployment employment={employment} />
            </div>
        );
    });

    const skills = props.skills.map((skills) => {
        return (
            <div key={skills.id} className="mb-3">
                <RenderSkills skills={skills} />
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row row-content">
                <div className="col-12 text-center">
                    <h3>Educational Qualifications</h3>
                    <hr />
                </div>
                <div className="col-12 lead">
                    {education}
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12 text-center">
                    <h3>Employment History</h3>
                    <hr />
                </div>
                <div className="col-12 lead">
                    {employment}
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12 text-center">
                    <h3>Technical Skills</h3>
                    <hr />
                </div>
                <div className="col-12 lead">
                    {skills}
                </div>
            </div>
        </div>
    );
}

export default Resume;
