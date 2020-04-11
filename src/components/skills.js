import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

import Row from "react-bootstrap/Row";

import { faDatabase, faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { faAws, faMicrosoft, faPython } from "@fortawesome/free-brands-svg-icons";

import SkillIcon from "./skill-icon";

const Skills = () => (
    <Card className="bg-primary text-white" style={{ width: "100%" }}>
        <Card.Body>
            <Card.Title className="text-center">Skills</Card.Title>
            <Card.Text>
                <Container>
                    <Row className="justify-content-center">
                        <SkillIcon icon={faAws} iconName="AWS" />
                        <SkillIcon icon={faMicrosoft} iconName="Azure" />
                        <SkillIcon icon={faLaptopCode} iconName="C++" />
                        <SkillIcon icon={faPython} iconName="Python" />
                        <SkillIcon icon={faDatabase} iconName="SQL" />
                    </Row>
                </Container>
            </Card.Text>
        </Card.Body>
    </Card>
);

export default Skills;
