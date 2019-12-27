import React from "react";

import Card from "./experience-card"

const WorkCard = ({ companyName, positionName, highlights, children }) => (
    <Card header="Work Experience" experienceTitle={companyName} positionName={positionName} highlights={highlights} border={"border-primary"}>
        {children}
    </Card>
);

export default WorkCard;
