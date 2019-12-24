import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { Navbar, Nav, NavDropdown, NavItem } from "react-bootstrap";

const ListLink = props => (
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
        <Link to={props.to}>{props.children}</Link>
    </li>
);

const Header = ({ siteTitle }) => (
    <Navbar bg="light" expand="lg">
        <Navbar.Brand>
            <Link to="/">{siteTitle}</Link>
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
