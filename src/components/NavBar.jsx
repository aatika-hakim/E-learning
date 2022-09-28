import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const NavBar = () => {
    return (
        <>
        <Navbar className='nav' expand="lg">
            <Container className=''>
                <Navbar.Brand href="#home"></Navbar.Brand>
                <Navbar.Toggle className='bg-white'/>
                <Navbar.Collapse >
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className='text-white'>HOME</Nav.Link>
                        <NavDropdown title="COURSES" id="basic-nav-dropdown">
                        <div>
                            <NavDropdown.Item className='bg-black text-white' href="#">Action</NavDropdown.Item>
                            <NavDropdown.Item className='bg-black text-white' href="#">Another</NavDropdown.Item>
                            <NavDropdown.Item className='bg-black text-white' href="#">Something</NavDropdown.Item>
                        </div>
                        </NavDropdown>
                        <Nav.Link href="#home" className='text-white'>FEE</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    );
}

export default NavBar;