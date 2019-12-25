import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { Navbar, Nav } from "react-bootstrap";

class Header extends React.Component {
    state = {
        isTop: true
    };

    constructor(props) {
        super(props);
        this.siteTitle = props.siteTitle;
        this.scrollListener = this.scrollListener.bind(this);
    }

    scrollListener() {
        const isTop = window.scrollY < 100;
        if (isTop !== this.state.isTop) {
            this.setState({ isTop });
        }
        console.log("scrolled");
    }

    componentDidMount() {
        window.addEventListener("scroll", this.scrollListener);
    }

    render() {
        return (
            <Navbar bg={this.state.isTop ? "" : "light"} expand="lg" fixed="top" className={"navbarTop " + (this.state.isTop ? "" : "navbarScrolled")}>
                <Navbar.Brand>
                    <Link to="/" className="brandText">
                        {this.siteTitle}
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/" className="navLink">Home</Nav.Link>
                        <Nav.Link href="/resume/" className="navLink">Resume</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

Header.propTypes = {
    siteTitle: PropTypes.string
};

Header.defaultProps = {
    siteTitle: ``
};

export default Header;
