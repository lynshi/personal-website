import React from "react";
import Card from "react-bootstrap/Card";

const AboutMe = () => (
    <Card className="aboutMeCard" style={{ width: "100%" }}>
        <Card.Body>
            <Card.Title>About Me</Card.Title>
            <Card.Text>
                I graduated from the University of Michigan with a B.S.E. in Computer Science in December 2019. In February 2020, I started working at Microsoft.

                <br />
                <br />

                I'm interested in leveraging my research experience and knowledge in machine learning, algorithms, and optimization to improve cybersecurity and protect people's privacy.

                <br />
                <br />

                In my free time, I am often playing Smash Ultimate &#8212; I main Incineroar. I also dabble in fantasy football and enjoy cooking.
            </Card.Text>
        </Card.Body>
    </Card>
);

export default AboutMe;
