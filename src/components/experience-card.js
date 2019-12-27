import React from "react";
import BootstrapCard from "react-bootstrap/Card"

const Card = ({ header, experienceTitle, positionName, highlights, border, children }) => (
    <BootstrapCard className={{border} + " experienceCard"}>
        <BootstrapCard.Header>{header}</BootstrapCard.Header>
        <BootstrapCard.Body>
            <BootstrapCard.Title className="experienceTitle">
                {experienceTitle}
            </BootstrapCard.Title>
            <BootstrapCard.Text>
                <span className="experiencePosition">
                    {positionName}
                </span>

                <br />

                {children}
            </BootstrapCard.Text>
        </BootstrapCard.Body>
        <BootstrapCard.Footer>
            {highlights}
        </BootstrapCard.Footer>
    </BootstrapCard>
);

export default Card;
