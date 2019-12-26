import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const Navigation = ({ siteTitle }) => (
    <Navbar bg="light" expand="lg" fixed="top" className="navbarTop">
        <Navbar.Brand>
            <Link to="/" className="brandText">
                {siteTitle}
            </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="/" className="navLink">
                    Home
                </Nav.Link>
                <Nav.Link href="/resume/" className="navLink">
                    Resume
                </Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

Navigation.propTypes = {
    siteTitle: PropTypes.string
};

Navigation.defaultProps = {
    siteTitle: ``
};

export default Navigation;
