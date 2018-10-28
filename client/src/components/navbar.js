import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
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
                    <NavItem><Link to='/headlines'>Headlines</Link></NavItem> 
                    <Navbar.Text>Stories</Navbar.Text> 
                    <NavItem><Link to={`/users/${this.props.userId}/edit`}>Preferences</Link></NavItem>                    
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
                    <Link to='/'>News4u</Link>
                    </Navbar.Brand>
                </Navbar.Header>
                <Navbar.Collapse> 
                    <Nav>
                        {userOptions}
                        <NavItem><Link to='/about'>About</Link></NavItem>                 
                    </Nav>
                    <Nav pullRight>
                        {logoutOption}
                    </Nav>
                </Navbar.Collapse>      
            </Navbar>
        );
    }
}
// <NavItem href="/about">About</NavItem> 
  
const mapStateToProps = state => {
    return {
      userLoggedIn: state.user.isLoggedIn,
      userId: state.user.id
    }
  }
  
export default connect(mapStateToProps)(NavBar);
