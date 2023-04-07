import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

export default function About() {

    const styles = {
        card: {
            flex: "1",
            flexGrow: "1",
        },
        cardTextSpc: {
            letterSpacing: "5px"
        }
    };

    return (
        <Container id="about" className="d-flex justify-content-center mt-5 pt-3 mb-2">
            <Card className="mt-4 m-3 p-1 background-shades" style={styles.card}>
                <Card.Body className="m-1">
                    <Card.Title className="display-4 text-center gradient-text fw-semibold heading-font mt-2">About Me</Card.Title>
                </Card.Body>
                <Row className="d-flex justify-content-center ms-2 mb-2">
                    <Col xs={12} md={11} className="me-2 mb-3">
                        <Row>
                            <Col className="card-text me-2 pb-3">
                                <p className="justify light-accent fs-medium">
                                    Write About Me here.
                                </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Card>
        </Container>
    )
}