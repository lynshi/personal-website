import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

import Row from "react-bootstrap/Row";

import Icon from "./icon";
import AWSIcon from "./icons/aws";
import CppIcon from "./icons/cplusplus";
import PostgresIcon from "./icons/postgres";
import PythonIcon from "./icons/python";

const Skills = () => (
    <Card className="bg-primary text-white" style={{ width: "100%" }}>
        <Card.Body>
            <Card.Title className="text-center">Skills</Card.Title>
            <Card.Text>
                <Container>
                    <Row>
                        <Icon>
                            <AWSIcon />
                        </Icon>
                        <Icon>
                            <CppIcon />
                        </Icon>
                        <Icon>
                            <PostgresIcon />
                        </Icon>
                        <Icon>
                            <PythonIcon />
                        </Icon>
                    </Row>
                </Container>
            </Card.Text>
        </Card.Body>
    </Card>
);

export default Skills;
