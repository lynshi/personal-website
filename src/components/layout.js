/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithubSquare,
    faLinkedin,
    faMedium
} from "@fortawesome/free-brands-svg-icons";

import Navigation from "./navigation";

import "../style.scss";

const Layout = ({ children, transparentAtTop }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <>
            <Navigation
                siteTitle={data.site.siteMetadata.title}
                transparentAtTop={transparentAtTop}
            />
            <main>{children}</main>
            <Container>
                <Row>
                    <br />
                </Row>
                <Row className="footer">
                    <Col xs={9}>
                        <Row>
                        <footer>
                            © Lyndon Shi {new Date().getFullYear()}. View on <a href="https://github.com/lynshi/personal-website">GitHub</a>!
                        </footer> 
                        </Row>
                    </Col>
                    <Col>
                        <Row className="float-right">
                            <h2>
                                <a
                                    href="https://github.com/lynshi"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FontAwesomeIcon
                                        icon={faGithubSquare}
                                        className="text-center socialIcon"
                                    />
                                </a>
                                &nbsp;
                                <a
                                    href="https://www.linkedin.com/in/lynshi/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FontAwesomeIcon
                                        icon={faLinkedin}
                                        className="text-center socialIcon"
                                    />
                                </a>
                                &nbsp;
                                <a
                                    href="https://medium.com/@shilyndon"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FontAwesomeIcon
                                        icon={faMedium}
                                        className="text-center socialIcon"
                                    />
                                </a>
                            </h2>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;
