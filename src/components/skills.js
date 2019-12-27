import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import Icon from "./icon";
import AWSIcon from "./icons/aws";
import CppIcon from "./icons/cplusplus";
// import GoIcon from "./icons/go";
import PostgresIcon from "./icons/postgres";
import PythonIcon from "./icons/python";
import { ProgressBar } from "react-bootstrap";
import SkillProgress from "./skill-progress";

const Skills = () => (
    <Card className="bg-primary text-white" style={{ width: "100%" }}>
        <Card.Body>
            <Card.Title>Skills</Card.Title>
            <Card.Text>
                <Container>
                    <SkillProgress
                        skillName="C++"
                        skillValue={80}
                        barVariant="success"
                    />
                </Container>
            </Card.Text>
        </Card.Body>
    </Card>
);

export default Skills;
