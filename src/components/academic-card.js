import React from "react";

import Card from "./experience-card"

const AcademicCard = ({ experienceTitle, positionName, highlights, children }) => (
    <Card header={"Teaching and Research"} experienceTitle={experienceTitle} positionName={positionName} highlights={highlights} border={"border-secondary"}>
        {children}
    </Card>
);

export default AcademicCard;
