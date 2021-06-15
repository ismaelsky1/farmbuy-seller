import React from 'react';
import { Container, Navbar, Nav, NavDropdown, Dropdown, DropdownButton } from 'react-bootstrap';

import avatar from '../assets/image/avatar.jpg';
import logo from '../assets/image/logo.png';

function Header() {
    return (<Navbar expand="md" collapseOnSelect>
        <Container>
            <Navbar.Brand href="#home">
                <img
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />{' '}
                FarmBuy
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />

            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#features">Dashboard</Nav.Link>
                    <Nav.Link href="#pricing">Contato</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <Navbar.Collapse className="text-muted justify-content-end">
                <NavDropdown title="AgroCFG" flip={true} id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">Perfil</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">Sair</NavDropdown.Item>
                </NavDropdown>
                {/* <img
                    src={avatar}
                    width="40"
                    height="40"
                    alt="React Bootstrap logo"

                    className="d-none d-md-block align-top" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                /> */}
            </Navbar.Collapse>
        </Container>
    </Navbar>
    )
};

export default Header;
