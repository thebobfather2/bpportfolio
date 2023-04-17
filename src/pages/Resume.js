import React from 'react';
import previewResume from '../assets/images/bryanpikeresume.pdf';

function Resume () {
    return (
        <section>
            <h2>Resume</h2>
            <a href={previewResume} target="_blank" rel="noreferrer">
            <h5>View my resume here!</h5>
          </a>
        </section>
    )
}
export default Resume;