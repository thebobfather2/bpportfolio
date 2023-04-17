import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import Project from '../components/Project';
import {projects} from '../data/projects.js';

export default function Portfolio() {

    return (
        <Container className='main'>
        <Container id="portfolio" className="d-flex justify-content-center mt-5 pt-3 mb-4">
          <h2 className="display-4 text-center gradient-text fw-bold heading-font mt-2">Portfolio</h2>
        </Container>
        <Carousel id="portfolioCarousel" className='d-flex align-items-center justify-content-center'>
          {projects.map((project, index) => (
            <Carousel.Item key={index}>
                <Project project={project} />
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
      
    )
}