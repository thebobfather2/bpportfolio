import React, { useState } from 'react';
import { Container, Collapse } from "react-bootstrap";
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Home from './pages/Home';

export default function Main({ currentPage }) {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [showAbout, setShowAbout] = useState(false);

    const handleClick = () => { setShowAbout(!showAbout) };

    switch (currentPage) {
        case 'Portfolio':
            return <Portfolio />
        case 'Contact':
            return <Contact fullName={fullName} setFullName={setFullName} email={email} setEmail={setEmail} message={message} setMessage={setMessage} />
        default:
            return renderHome()
    }

    function renderHome() {
        return (
            <Container className="pt-4 main">
                <Home handleClick={handleClick} />
                <Collapse in={showAbout}>
                    <Container>
                        <About />
                    </Container>
                </Collapse>
            </Container>
        )
    }
}