import React from 'react';
import { Media } from 'reactstrap';

function About() {

    return(
        <div className="container">
            <div className="row row-content">
                <div className="col-12 text-center">
                    <h3>About Me</h3>
                    <hr />
                </div>
                <Media left middle className="col-auto">
                    <Media object src="/assets/images/Debarshi.jpg" alt="Debarshi Roy" className="my_image rounded border border-dark" />
                </Media>
                <Media body className="col-auto lead">
                    <p align="justify">Hi! I am Debarshi Roy. I am a Software Developer. I started my professional career as a Full Stack Developer with Capgemini in 2016. And in 2019, I took a break from the corporate world and came to United States to pursue Master’s in Computer Science.</p>
                    <p align="justify">I have 3 years of industry experience in front-end web development using React, hybrid mobile app development using React Native, and server-side development using Node.js and MongoDB.</p>
                    <p align="justify">In addition, I have keen interests in Artificial intelligence and Machine Learning, and developed a few projects pertaining to same domain.</p>
                    <p align="justify">Currently, I am looking for full-time opportunities starting May 2021, where I can utilize my learning and technical expertise to develop solutions and make meaningful contributions to the organization as well as the tech community.</p>
                </Media>
            </div>
        </div>
    );
}

export default About;
