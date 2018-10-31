import styled from 'styled-components';

import img from '../images/holdingnewspaper2.jpg';

export const Splash = styled.div`
    min-height: 100%;
    min-width: 1024px;
    width: 100%;
    height: auto;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    background-image: url(${img});
    background-size: cover; 
`;

export const UserForm = styled.div`
    background-color: #464240; 
    color: #f2efef;
    margin-left: auto;
    margin-right: auto;
    width: 40%;
    margin-top: 225px;
    text-align: center;
    border-radius: 10px;
    padding: 2em;
    box-shadow: 0px 0px 10px 10px #464240;
`;

export const UserInput = styled.input`
    width:75%;
    margin: 1em auto 1em auto;
    padding: 0.5em;
    color: #464240;
`;

export const UserButton = styled.button`
    color: #464240;
    display: block;
    margin: auto;
`;
