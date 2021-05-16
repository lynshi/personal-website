import React from "react";

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import Layout from "../components/layout";
import SEO from "../components/seo";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Container>
      <Row className="marginForNavbar">
        <Col>
          <h2>
            Sorry, this page does not exist yet. Maybe in an alternate
            timeline...
          </h2>
        </Col>
      </Row>
    </Container>
  </Layout>
);

export default NotFoundPage;
