import React from "react";
import Col from "react-bootstrap/Col";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SkillIcon = ({ icon, iconName }) => (
    <Col xl={2} l={2} m={3} s={3} xs={6} className="text-center">
        <h1><FontAwesomeIcon icon={icon} className="text-center skillIcon" /></h1>
        <div className="text-center text-white">{iconName}</div>
    </Col>
);

export default SkillIcon;
