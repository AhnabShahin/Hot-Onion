import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import logo2 from '../../Resource/logo2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import "./Header.css"


const Header = () => {
    return (
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={logo2}
                        height="30"
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto navItemsContainer">
                         <FontAwesomeIcon  className="navItems" icon={faCartPlus} />
                        <Nav.Link className="navItems">Login</Nav.Link>
                        <Nav.Link className="navItems buttonMain">Sign Up</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;