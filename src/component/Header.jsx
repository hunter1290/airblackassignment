import React from 'react'
import styled from 'styled-components';
import headerimage from '../utils/headerimgae.png'
import logo from '../utils/logo.png'

function Header() {
  return (
    <Contain>
        <Logo src={logo}></Logo>
        <Headline>PRESENTS</Headline>
    </Contain>
  )
}

const Contain = styled.div`
width: 100%;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 background-image: url(${headerimage});
 height: 20vh;

`;
const Logo = styled.img``;
const Headline = styled.p`
 font-size: 14px;
 margin-top:15px;
`;

export default Header