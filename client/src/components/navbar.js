import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

//import LogoutButton from './logout'
// ToDo: replace navbar.text with navitem
// ToDo: only show options that are enabled
// ToDo: not collapsing to hamburger...

class NavBar extends Component {
    render() {
        let userOptions=null;
        let logoutOption=null;        
        if (this.props.userLoggedIn) {            
            userOptions = 
                <React.Fragment>
                    <Navbar.Text>Headlines</Navbar.Text>  
                    <Navbar.Text>Stories</Navbar.Text>  
                    <Navbar.Text>Preferences</Navbar.Text>
                </React.Fragment>
            logoutOption = 
                <Nav pullRight>
                    <Navbar.Text>Logout</Navbar.Text>
                </Nav>
        }

        
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                    <a href="/">News4u</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Navbar.Collapse> 
                    <Nav>
                        {userOptions}
                        <NavItem href="/about">About</NavItem>                                                  
                    </Nav>
                    <Nav pullRight>
                        {logoutOption}
                    </Nav>
                </Navbar.Collapse>      
            </Navbar>
        );
    }
}

const mapStateToProps = state => {
    return {
      userLoggedIn: state.user.isLoggedIn
    }
  }
  
export default connect(mapStateToProps)(NavBar);
