import React from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';

function Hero(props) {

    return (
        <Jumbotron className="bg-dark jumbotron-fluid p-0">
            <Container fluid={true}>
                <Row className="justify-content-center bg-dark">
                    <Col md={8} sm={6} >
                        { props.title && <h1 className="display-4 font-weight-light text-light">{props.title}</h1> } 
                        { props.subTitle && <h3 className="text-light">{props.subTitle}</h3> } 
                        { props.text && <h5 className="display-6 font-weight-light text-light">{props.text}</h5> } 

                    </Col>
                </Row>
            </Container>

        </Jumbotron>
    );
}

export default Hero;