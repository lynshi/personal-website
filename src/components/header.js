import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const Header = ({ siteTitle }) => (
    <Navbar bg="light" expand="lg">
        <Navbar.Brand>
            <Link to="/" className="brandText">{siteTitle}</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/resume/">Resume</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

Header.propTypes = {
    siteTitle: PropTypes.string
};

Header.defaultProps = {
    siteTitle: ``
};

export default Header;
