import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

import Row from "react-bootstrap/Row";

import { faDatabase, faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { faAws, faPython } from "@fortawesome/free-brands-svg-icons";

import { FluentUISkillIcon, FontAwesomeSkillIcon } from "./skill-icon";

const Skills = () => (
    <Card className="bg-primary text-white" style={{ width: "100%" }}>
        <Card.Body>
            <Card.Title className="text-center">Skills</Card.Title>
            <Card.Text>
                <Container>
                    <Row className="justify-content-center">
                        <FontAwesomeSkillIcon icon={faAws} iconName="AWS" />
                        <FluentUISkillIcon icon={"AzureLogo"} iconName="Azure" />
                        <FontAwesomeSkillIcon icon={faLaptopCode} iconName="C++" />
                        <FontAwesomeSkillIcon icon={faLaptopCode} iconName="Go" />
                        <FontAwesomeSkillIcon icon={faPython} iconName="Python" />
                        <FontAwesomeSkillIcon icon={faDatabase} iconName="SQL" />
                    </Row>
                </Container>
            </Card.Text>
        </Card.Body>
    </Card>
);

export default Skills;
