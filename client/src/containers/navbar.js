import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { Navbar, Nav } from 'react-bootstrap'
import styled from 'styled-components';

const NewsNavbar = styled(Navbar)`
  width: 100%;
  border: solid 5px #3F5941;
  background-color: white;
  color: #3F5941;
  text-align: left;
  position: fixed;
  top: 0; 
`;

const NewsBrand = styled(NavLink)`
    padding: 5px 12px 12px 12px;
    margin: 0 0 0 0.5em;
    color: #3F5941;
    font-size: 48px;
    font-weight: bold;
    font-family: Impact, Times New Roman, Times, serif;
`;

const NewsLink = styled(NavLink)`
    padding: 12px;
    margin: 0 12px 0px 0px;
    textDecoration: none;
    color: black;
    font-size: 18px;
`;


class NavBar extends Component {
    render() {
        let userOptions=null;
        let logoutOption=null;        
        if (this.props.userLoggedIn) {            
            userOptions = 
                <React.Fragment>
                    <NewsLink to="/headlines">Headlines</NewsLink> 
                    <NewsLink to="/search">Search</NewsLink>  
                    <NewsLink to={`/users/${this.props.userId}/edit`}>Preferences</NewsLink>                              
                </React.Fragment>
            logoutOption = 
                <NewsLink to={`/users/${this.props.userId}/logout`}>Logout</NewsLink>            
        }
             
        return (
            <NewsNavbar collapseOnSelect expand="lg">
                <NewsBrand
                    to="/" exact activeStyle={{textDecoration: 'underline'}}>
                    news4u
                </NewsBrand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav >
                    {userOptions}
                    <NewsLink to="/about"  >About</NewsLink>
                    {logoutOption}
                </Nav>
                </Navbar.Collapse>
          </NewsNavbar>                      

        );
    }
}
  
const mapStateToProps = state => {
    return {
      userLoggedIn: state.user.isLoggedIn,
      userId: state.user.id
    }
  }
  
export default connect(mapStateToProps)(NavBar);
