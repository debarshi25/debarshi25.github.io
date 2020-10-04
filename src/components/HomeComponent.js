import React from 'react';
import { Media } from 'reactstrap';

function Home() {

    return(
        <div className="container">
            <div className="row row-content">
                <Media body className="col-auto">
                    <Media heading>
                        <h1><strong>Hey! I'm Debarshi Roy</strong></h1>
                        <h2><strong>I'm a Software Developer</strong></h2>
                    </Media>
                    <p className="lead text-muted" align="justify">Browse to learn more about me. You can read about my educational qualifications, employment history, technical skills, projects, and more.</p>
                </Media>
                <Media right middle className="col-auto">
                    <Media object src="/assets/images/Debarshi.jpg" alt="Debarshi Roy" className="my_image rounded border border-dark" />
                </Media>
            </div>
        </div>
    );
}

export default Home;
