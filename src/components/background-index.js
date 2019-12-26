import React from "react";
import { graphql, StaticQuery } from "gatsby";
import styled from "styled-components";

import BackgroundImage from "gatsby-background-image";

import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import Typist from "react-typist";

const IndexBackground = ({ className }) => (
    <StaticQuery
        query={graphql`
            query {
                desktop: file(relativePath: { eq: "artechouse.jpg" }) {
                    childImageSharp {
                        fluid(quality: 100, maxWidth: 1920) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        `}
        render={data => {
            // Set ImageData.
            const imageData = data.desktop.childImageSharp.fluid;
            return (
                <BackgroundImage
                    Tag="section"
                    className={className}
                    fluid={imageData}
                    backgroundColor={`#040e18`}
                >
                    <Jumbotron className="indexJumbotron">
                        <Container>
                            <Row>
                                <br />
                                <br />
                                <br />
                            </Row>
                            <Row>
                                <Col>
                                    <Typist
                                        cursor={{ show: false }}
                                        startDelay="100"
                                    >
                                        <h1>Hi, I'm Lyndon.</h1>
                                        <h3>Developer | CS @ UMich</h3>
                                    </Typist>
                                    <Typist
                                        cursor={{ show: false }}
                                        startDelay="3200"
                                    >
                                        <h3>Machine Learning | Algorithms</h3>
                                    </Typist>
                                    <Typist
                                        cursor={{ show: false }}
                                        startDelay="3200"
                                    >
                                        <h3>
                                            Smash Ultimate | Fantasy Football
                                        </h3>
                                    </Typist>
                                </Col>
                            </Row>
                        </Container>
                    </Jumbotron>
                </BackgroundImage>
            );
        }}
    />
);

const StyledIndexBackground = styled(IndexBackground)`
    width: 100%;
    background-position: 50% 28.5%;
    background-repeat: repeat-y;
    background-size: cover;
    background-attachment: fixed;
    min-height: 70vh;
`;

export default StyledIndexBackground;
