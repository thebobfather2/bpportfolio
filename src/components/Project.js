import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

export default function Project({ project }) {
    return (
        <Container className="justify-content-center mt-5 mb-5 pb-4">
            <Row className="align-items-center">
                <Col lg={6}>
                    <Container className="text-center">
                        <a href={project.link} target="_blank" rel="noreferrer">
                            <img src={project.image} alt="Project 1" className="img-fluid radius-15" />
                        </a>
                    </Container>
                </Col>
                <Col lg={6}>
                    <Container className="text-center text-lg-start">
                        <h3 className="gradient-text fw-semibold">{project.title}</h3>
                        <p className="light-accent">{project.description}</p>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}