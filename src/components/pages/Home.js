import React from 'react';

import { Button, Container, Row, Col } from "react-bootstrap";

export default function Home({ handleClick }) {
    return (
        <Container className="justify-content-start mt-5 pt-5 mb-5 pb-4">
            <Row className="justify-content-start mt-3 pt-2">
                <Col md={12} className="ms-5 ps-4">
                    <Row className="justify-content-center align-items-center">
                        <Col md={3} className="text-end">

                        </Col>
                        <Col md={9} className="align-items-center">
                            <Row className="me-5">
                                <h1 className="display-5 gradient-text typing fw-light">
                                    Welcome!
                                </h1>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}