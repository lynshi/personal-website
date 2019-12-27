import React from "react";
import Col from "react-bootstrap/Col";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = ({ icon, iconName }) => (
    <Col xs={6} className="text-center">
        <h1><FontAwesomeIcon icon={icon} className="text-center myIcon" /></h1>
        <div className="text-center text-white">{iconName}</div>
    </Col>
);

export default Icon;
