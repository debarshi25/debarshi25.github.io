import React, { Component } from 'react';
import Home from './HomeComponent';
import About from './AboutComponent';
import Resume from './ResumeComponent';
import Projects from './ProjectComponent'
import Contact from './ContactComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { EDUCATION } from '../shared/education';
import { EMPLOYMENT } from '../shared/employment';
import { SKILLS } from '../shared/skills';
import { PROJECTS } from '../shared/projects';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            education: EDUCATION,
            employment: EMPLOYMENT,
            skills: SKILLS,
            projects: PROJECTS
        };
    }

    render () {
        return (
            <div>
                <Header />
                    <Switch>
                        <Route path="/home" component={Home} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/resume" component={() => <Resume education={this.state.education} employment={this.state.employment} skills={this.state.skills} /> } />
                        <Route exact path="/projects" component={() => <Projects projects={this.state.projects} /> } />
                        <Route exact path="/contact" component={Contact} />
                        <Redirect to="/home" />
                    </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;
