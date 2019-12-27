import React from "react";

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import AboutMe from "../components/about-me"
import Layout from "../components/layout";
import SEO from "../components/seo";
import Skills from "../components/skills"
import StyledIndexBackground from "../components/background-index";
import Work from "../components/work";
import Academic from "../components/academic";

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <StyledIndexBackground />
        <Container>
            <Row className="marginTop">
                <Col className="center-block">
                    <AboutMe />
                </Col>
                <Col className="center-block" xl={3} lg={3} md={3} s={12} xs={12}>
                    <Skills />
                </Col>
            </Row>
            <Row className="marginTop">
                <Col className="center-block" xl={6} lg={6} md={6} s={12} xs={12}>
                    <Work />
                </Col>
                <Col className="center-block" xl={6} lg={6} md={6} s={12} xs={12}>
                    <Academic />
                </Col>
            </Row>
        </Container>
    </Layout>
);

export default IndexPage;
