import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { MenuIcon } from '@heroicons/react/solid';
import './Header.css';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand>
                <Link to="/" className='logo'>Food Villa</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" >
                <MenuIcon className='menu-icon'></MenuIcon>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto navigation">
                    <CustomLink to="/">Home</CustomLink>
                    <CustomLink to="/restaurant">Restaurant</CustomLink>
                </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
};

export default Header;