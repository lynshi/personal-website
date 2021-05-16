import React from "react";

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import Layout from "../components/layout";
import SEO from "../components/seo";

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" />
    <Container>
      <Row className="marginForNavbar">
        <Col className="center-block">
          <h1>Here's what I work on (or have completed) in my free time.</h1>
        </Col>
      </Row>
    </Container>
  </Layout>
);

export default ProjectsPage;
