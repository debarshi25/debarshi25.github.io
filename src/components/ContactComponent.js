import React from 'react';
import { Card, CardHeader, CardBody } from 'reactstrap';

function Contact() {

    return(
        <div className="container">
            <div className="row row-content">
                <div className="col-12 text-center">
                    <h3>Contact Information</h3>
                    <hr />
                </div>
                <div className="col-12 lead">
                    <Card>
                        <CardHeader><strong>Address</strong></CardHeader>
                        <CardBody>
                            1255 East University Drive<br />
                            Tempe, Arizona 85281<br />
                            United States<br />
                            <i className="fa fa-phone"></i>: +1 (602) 245-5964<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:debarshi.roy4@gmail.com">debarshi.roy4@gmail.com</a>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Contact;
