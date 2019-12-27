import React from "react";
import Layout from "../components/layout";

import Container from "react-bootstrap/Container";

const Resume = () => (
    <Layout isResume={true}>
        <Container>
            <center style={{marginTop: "25vh"}}>
                <iframe
                    src="https://drive.google.com/file/d/1ZPBlG9RXX9-cW5WLZ6PoRG4vQcm1fPRC/preview"
                    width="100%"
                    height="800vh"
                    title="resume"
                ></iframe>
            </center>
        </Container>
    </Layout>
);

export default Resume;
