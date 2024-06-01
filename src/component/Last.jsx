import React from 'react'
import styled  from 'styled-components'
import headerimage from '../utils/headerimgae.png'
import fb from '../utils/fb.png'
import instagram from '../utils/instagram.png'
import linkedin from '../utils/linkedin.png'
import twitter from '../utils/twitter.png'

function Last() {
  return (
    <Contain>
        <h2>Join Our Growing <br /> community of <br /> 35,000+ alumni</h2>
        <button>Apply Now</button>

        <Socials>
          <img src={instagram} alt="" />
          <img src={fb} alt="" />
          <img src={linkedin} alt="" />
          <img src={twitter} alt="" />
        </Socials>

    </Contain>
  )
}

const Contain = styled.div`
 
background: url(${headerimage});
 height: 50vh;
 text-align: center;
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;
 gap: 20px;

 button{
     width: 65vw;
     height: 6vh;
     font-size: 16px;
     font-weight: 600;
    padding-top: 6px;
    padding-bottom: 4px;
    border: none;
    border-radius: 4px;
    color: #fff;
    background: rgb(245,101,99);
    background: linear-gradient(90deg, rgba(245,101,99,1) 0%, rgba(229,73,136,1) 100%);
   }
`;

const Socials = styled.div`
margin-top: 3%;
 display: flex;
 justify-content: center;
 align-items: center;
 gap: 25px;

`;

export default Last