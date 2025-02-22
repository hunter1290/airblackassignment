import React from 'react'
import styled from 'styled-components'
import certificate from '../utils/certificate.png'

function Fourth() {
  return (
    <Contain>
          <Top>
        <svg
          width="45"
          height="6"
          viewBox="0 0 45 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M42.7398 2.69367L44.5 0.372238L44.5 5.98774L42.7398 3.6663V2.69367ZM0 2.69368L42.9158 2.69367V3.6663L0 3.66631V2.69368Z"
            fill="url(#paint0_linear_1_226)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_226"
              x1="44.5"
              y1="3.17999"
              x2="0"
              y2="3.17999"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#E74D85" />
              <stop offset="1" stop-color="#E74D85" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>

        <h2>
          Get Certified From <br /> India's Biggest <br /> Beauty Platform
        </h2>
        <svg
          width="45"
          height="6"
          viewBox="0 0 45 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.26019 2.69367L0.5 0.372238L0.5 5.98774L2.26019 3.6663V2.69367ZM45 2.69368L2.08417 2.69367V3.6663L45 3.66631V2.69368Z"
            fill="url(#paint0_linear_1_228)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_228"
              x1="0.5"
              y1="3.17999"
              x2="45"
              y2="3.17999"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#E74D85" />
              <stop offset="1" stop-color="#E74D85" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </Top>

      <Cert src={certificate}></Cert>

    </Contain>
  )
}

const Contain = styled.div`
 margin-top: 4%;
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;
`;
const Top = styled.div`
 text-align: center;
 display: flex;
 justify-content: center;
 align-items: center;
 gap: 20px;
`;

const Cert = styled.img`
 margin-top: 30px;
 margin-bottom: 15px;
`;

export default Fourth