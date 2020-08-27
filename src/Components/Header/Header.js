import React from 'react';
import logo from './header.png';
import './Header.css'
import { Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import Course from '../Courses/Course';

const Header = () => {
    return (
        <div className="header">
            <Navbar sticky="top" expand="lg"  className="navdes mb-5">
                <Navbar.Brand href="#home"><img src={logo} alt=""/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Courses</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
            <Course></Course>
        </div>
    );
};

export default Header;