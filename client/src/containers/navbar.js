
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from "react-router-dom";

import styled from 'styled-components';

const NewsNavbar = styled.div`
  padding: 1em;
  width: 100%;
  border: solid 5px #3F5941;
  background-color: white;
  color: #3F5941;
  text-align: left;
  height: auto;
  position: fixed;
  top: 0; 
`;

const NewsBrand = styled(NavLink)`
    width: 100px;
    padding: 5px 12px 12px 12px;
    margin: 0 6px 6px;
    color: #3F5941;
    font-size: 48px;
    font-weight: bold;
    font-family: Impact, Times New Roman, Times, serif;
`;

const NewsLink = styled(NavLink)`
    width: 100px;
    padding: 12px;
    margin: 0 6px 6px;
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
                    <NewsLink to="/headlines" exact >Headlines</NewsLink> 
                    <NewsLink to="/search" exact >Search</NewsLink>  
                    <NewsLink to={`/users/${this.props.userId}/edit`}>Preferences</NewsLink>                              
                </React.Fragment>
            logoutOption = 
                <NewsLink to={`/users/${this.props.userId}/logout`} exact>Logout</NewsLink>            
        }
             
        return (
            <NewsNavbar>
                <NewsBrand
                    to="/" exact activeStyle={{textDecoration: 'underline'}}>
                    news4u
                </NewsBrand>
                {userOptions}
                <NewsLink to="/about" exact >About</NewsLink>
                {logoutOption}   
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
