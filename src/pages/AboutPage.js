import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return (
        <div>
            <Hero title={props.title} />

            <Content>
                <p>An Industry Leader</p>

                <p>We’re a young and talented group of entrepreneurs and engineers with a groundbreaking idea that we hope will contribute towards a better tomorrow. We provide smart solutions for companies of all sizes and pride ourselves on our unparalleled, dedicated service.</p>

                <p>At Wizative, we believe that the right understanding and technological edge can lead companies towards a successful future. We always seek valuable feedback from our clients in order to learn and evolve. Contact us today to set up a meeting with one of our sales representatives or request a demo.</p>
            
            </Content>
        </div>
    );
}

export default AboutPage;