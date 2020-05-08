import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const Resume = () => (
    <Layout>
        <SEO title="Resume" />
        <Container className="marginForNavbar">
            <Row className="resume">
                <center>
                    <iframe
                        src="https://drive.google.com/file/d/1ZPBlG9RXX9-cW5WLZ6PoRG4vQcm1fPRC/preview"
                        title="resume"
                    ></iframe>
                </center>
            </Row>
        </Container>
    </Layout>
);

export default Resume;
