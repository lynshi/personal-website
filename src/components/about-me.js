import React from "react";
import Card from "react-bootstrap/Card";

const AboutMe = () => (
    <Card className="aboutMeCard" style={{ width: "100%" }}>
        <Card.Body>
            <Card.Title>About Me</Card.Title>
            <Card.Text>
                <p>
                    I'm a software engineer at Microsoft working in Azure Security. 
                    Previously, I interned at Capital One in the Cyber division, 
                    and worked on research in power systems optimization and 
                    automotive cybersecurity.
                </p>

                <p>
                    In my free time, I enjoy playing Smash Ultimate &#8212; 
                    I main Sheik. I also dabble in fantasy football and enjoy 
                    cooking.
                </p>
            </Card.Text>
        </Card.Body>
    </Card>
);

export default AboutMe;
