import React from "react";

import { ProgressBar } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const SkillProgress = ({ skillName, skillValue, barVariant }) => (
    <Row>
        <Col md={5} xs={12}>
            {skillName}
        </Col>
        <Col>
            <ProgressBar animated now={skillValue} variant={barVariant} />
        </Col>
    </Row>
);

export default SkillProgress;
