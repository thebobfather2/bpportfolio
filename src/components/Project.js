import { Container, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsTurnRight, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

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
                        <Container className="mb-3">
                            <FontAwesomeIcon icon={faArrowsTurnRight} className="fs-5 main-brand me-2" />
                            <a href={project.repository} target="_blank" rel="noreferrer" className="dark-accent gradient-hv"> Check GitHub Repository </a>
                        </Container>
                        <Container className="mb-3">
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="fs-5 main-brand me-2" />
                            <a href={project.link} target="_blank" rel="noreferrer" className="dark-accent gradient-hv"> Check out Website </a>
                        </Container>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}