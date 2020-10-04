import React from 'react';

function Footer() {

    return(
    <div className="footer">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12">
                    <div className="text-center">
                        <a className="btn btn-social-icon btn-linkedin" href="https://www.linkedin.com/in/debarshi-roy25/"><i className="fa fa-linkedin"></i></a>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a className="btn btn-social-icon btn-github" href="https://github.com/debarshi25"><i className="fa fa-github"></i></a>
                    </div>
                </div>
            </div>
            <div className="row"><br /></div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p><strong>Debarshi Roy</strong> | Developed with React</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;
