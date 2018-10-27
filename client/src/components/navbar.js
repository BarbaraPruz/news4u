import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

//import LogoutButton from './logout'
// ToDo: replace navbar.text with navitem
// ToDo: only show options that are enabled
// ToDo: not collapsing to hamburger...

const NavBar = () => 
    <Navbar>
        <Navbar.Header>
            <Navbar.Brand>
            <a href="/">News4u</a>
            </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Collapse> 
            <Nav>                   
                <Navbar.Text>Headlines</Navbar.Text>  
                <Navbar.Text>Stories</Navbar.Text>  
                <Navbar.Text>Preferences</Navbar.Text> 
                <NavItem href="/about">About</NavItem>                                                  
            </Nav>
            <Nav pullRight>
                <Navbar.Text>Logout</Navbar.Text>
            </Nav>
        </Navbar.Collapse>      
    </Navbar>
;

export default NavBar;