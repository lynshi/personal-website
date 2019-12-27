import React from "react";

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import AboutMe from "../components/about-me"
import Layout from "../components/layout";
import SEO from "../components/seo";
import Skills from "../components/skills"
import StyledIndexBackground from "../components/background-index";

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <StyledIndexBackground />
        <Container>
            <Row>
                <br></br>
            </Row>
            <Row>
                <Col className="center-block">
                    <AboutMe />
                </Col>
                <Col className="center-block" xs={3}>
                    <Skills />
                </Col>
            </Row>
        </Container>
    </Layout>
);

export default IndexPage;
