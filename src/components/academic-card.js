import React from "react";
import Card from "react-bootstrap/Card"

const AcademicCard = ({ experienceTitle, positionName, highlights, children }) => (
    <Card className="border-secondary experienceCard">
        <Card.Header>Teaching and Research</Card.Header>
        <Card.Body>
            <Card.Title className="experienceTitle">
                {experienceTitle}
            </Card.Title>
            <Card.Text>
                <span className="experiencePosition">
                    {positionName}
                </span>

                <br />

                {children}
            </Card.Text>
        </Card.Body>
        <Card.Footer>
            {highlights}
        </Card.Footer>
    </Card>
);

export default AcademicCard;
