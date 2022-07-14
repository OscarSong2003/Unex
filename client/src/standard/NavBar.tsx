import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";

const NavBar = (): React.ReactElement => {
    return (
        <Navbar bg="light" variant="light">
            <Container>
            <Navbar.Brand href="/">Unex</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar;