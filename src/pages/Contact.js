import React, { useState } from 'react';
import { Form, Button, Container, Card, Col, Modal } from 'react-bootstrap';

export default function Contact({ fullName, setFullName, email, setEmail, message, setMessage }) {
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'fullName') {
            setFullName(value)
        }
        else if (name === 'email') {
            setEmail(value)
        }
        else if (name === 'message') {
            setMessage(value)
        }
    };

    const [showModal, setShowModal] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [modalBody, setModalBody] = useState('');

    const handleCloseModal = () => setShowModal(false);

    const handleShowModal = (title, body) => {
        setModalTitle(title);
        setModalBody(body);
        setShowModal(true);
    };

    const handleBlur = (fieldName) => {
        if (fieldName === "fullName" && !fullName) {
            handleShowModal("Error", "Please enter your name!");
            return;
        } else if (fieldName === "email" && !email) {
            handleShowModal("Error", "Please enter your email address!");
            return;
        } else if (fieldName === "message" && !message) {
            handleShowModal("Error", "Please enter a message!");
            return
        }
    };

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();
        if (!emailRegex.test(email)) {
            handleShowModal("Error", "Please enter a valid email address!");
            return;
        }
        else if (!fullName || !email || !message) {
            handleShowModal("Error", "Please fill in all required fields!");
            return;
        }
        else {
            // Alert the user their message was submited successfully, and clear the inputs/textarea
            handleShowModal(`Thank you ${fullName}!`, "I received your message and will respond within 24 hours!");
            setFullName('');
            setEmail('');
            setMessage('')
        }
    };

    return (
        <Container className='main'>
            <Container className="d-flex justify-content-center mt-5 pt-3 mb-4">
                <h2 className="display-4 text-center gradient-text fw-bold heading-font mt-2">Contact Me</h2>
            </Container>
            <Container className='d-flex justify-content-center'>
                <Col xs={12} md={8} lg={6} className="justify-content-center">
                    <Card className='w-100 justify-content-center p-4 background-shades'>
                        <h4 className='main-brand heading-font text-center mb-4'>Please complete the form below:</h4>
                        <Form id="contact" name="newMessage" method="post" action="newMessage" className="card-body cardbody-color p-lg-2" >
                            <Form.Group className="mb-4">
                                <Form.Control
                                    value={fullName}
                                    name="fullName"
                                    onChange={handleInputChange}
                                    type="text"
                                    placeholder="Name"
                                    required
                                    className='background-shades'
                                    onBlur={(e) => handleBlur(e.target.name)}
                                />
                            </Form.Group>
                            <Form.Group className="mb-4">
                                <Form.Control
                                    value={email}
                                    name="email"
                                    onChange={handleInputChange}
                                    type="email"
                                    placeholder="Email Address"
                                    required
                                    className='background-shades'
                                    onBlur={(e) => handleBlur(e.target.name)}
                                />
                            </Form.Group>
                            <Form.Group className="mb-4">
                                <Form.Control
                                    value={message}
                                    name="message"
                                    onChange={handleInputChange}
                                    as="textarea"
                                    rows={6}
                                    placeholder="I am contacting you because..."
                                    required
                                    className='background-shades'
                                    onBlur={(e) => handleBlur(e.target.name)}
                                />
                            </Form.Group>
                            <Container className="d-flex justify-content-center mt-1">
                                <Button type="button" className="background-gradient fs-5 light no-border ps-3 pe-3 d-flex justify-content-center radius-15 flex-nowrap mb-2 mt-4 width-20" onClick={handleFormSubmit}>
                                    Submit
                                </Button>
                            </Container>
                        </Form>
                    </Card>
                </Col>
            </Container>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton className='background-shades no-border'>
                    <Modal.Title className='gradient-dark heading-font fs-3'>{modalTitle}</Modal.Title>
                </Modal.Header>
                <Modal.Body className='background-shades no-border light-shades fw-semibold fs-medium'>{modalBody}</Modal.Body>
                <Modal.Footer className='background-shades no-border'>
                    <Button className='background-gradient no-border radius-15' onClick={handleCloseModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

        </Container>
    )
} 