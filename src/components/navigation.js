import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { Navbar, Nav } from "react-bootstrap";

class Navigation extends React.Component {
    state = {
        isTop: true
    };

    constructor(props) {
        super(props);
        this.siteTitle = props.siteTitle;
        this.state.transparentAtTop = props.transparentAtTop;
        this.scrollListener = this.scrollListener.bind(this);
    }

    scrollListener() {
        const isTop = window.scrollY < 10;
        if (isTop !== this.state.isTop) {
            this.setState({ isTop });
        }
    }

    componentDidMount() {
        window.addEventListener("scroll", this.scrollListener);
    }

    render() {
        return (
            <Navbar bg="primary" variant="dark" expand="lg" fixed="top" className={"navbarTop " + (this.state.isTop && this.state.transparentAtTop ? "navbarNotScrolled" : "")}>
                <Navbar.Brand>
                    <Link to="/" className="brandText">
                        {this.siteTitle}
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/" className="navLink">Home</Nav.Link>
                        {/* <Nav.Link href="/projects" className="navLink">Projects</Nav.Link> */}
                        <Nav.Link href="/resume" className="navLink">Resume</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

Navigation.propTypes = {
    siteTitle: PropTypes.string
};

Navigation.defaultProps = {
    siteTitle: ``
};

export default Navigation;
