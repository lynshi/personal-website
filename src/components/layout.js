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
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import Navigation from "./navigation";

import "../style.scss";

const Layout = ({ children, isResume }) => {
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
                isResume={isResume}
            />
            <main>{children}</main>
            <Container>
                <Row>
                    <br />
                </Row>
                <Row>
                    <Col>
                        <footer>
                            © Lyndon Shi {new Date().getFullYear()}, Built with
                            {` `}
                            <a href="https://www.gatsbyjs.org">
                                Gatsby
                            </a> and <a href="https://reactjs.org/">React</a>
                        </footer>
                    </Col>
                    <Col>
                        <div className="text-right">
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
                            </h2>
                        </div>
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
