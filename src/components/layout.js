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

import Navigation from "./navigation";

import "../style.scss";

const Layout = ({ children }) => {
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
            <Navigation siteTitle={data.site.siteMetadata.title} />
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
                            <a href="https://www.gatsbyjs.org">Gatsby</a>
                        </footer>
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
