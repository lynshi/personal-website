import React from "react";
import Card from "react-bootstrap/Card"

const ExperienceCard = ({ companyName, positionName, children }) => (
    <Card className="bg-light border-primary experienceCard">
        <Card.Header>Experience</Card.Header>
        <Card.Body>
            <Card.Title className="experienceTitle">
                {companyName}
            </Card.Title>
            <Card.Text>
                <span className="experiencePosition">
                    {positionName}
                </span>

                <br />

                {children   }
            </Card.Text>
        </Card.Body>
    </Card>
);

export default ExperienceCard;
