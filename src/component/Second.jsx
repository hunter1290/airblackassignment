import React from "react";
import styled from "styled-components";

function Second() {
  return (
    <Contain>
      <p>
        Professional Online <br />
        Makeup Course
      </p>
      <Middle>
        <MBanner>
          <svg
            width="10"
            height="13"
            viewBox="0 0 10 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1_109)">
              <g clip-path="url(#clip1_1_109)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.95383 0.0762939H0.291824V11.745C0.291824 11.9639 0.476264 12.0422 0.701674 11.9189L4.21295 10.647C4.43836 10.5237 4.80726 10.5237 5.03266 10.6469L8.54397 11.9189C8.76937 12.0421 8.95383 11.9639 8.95383 11.7449V0.0762939ZM4.621 3.59266C3.98747 3.59266 3.41049 3.83434 2.9772 4.23039L2.37147 3.62484C2.3026 3.55598 2.1848 3.60472 2.1848 3.70207V6.02695C2.1848 7.37132 3.27552 8.46119 4.621 8.46119C5.25451 8.46119 5.8315 8.2195 6.26481 7.82345L6.87051 8.42877C6.9394 8.49761 7.05717 8.44887 7.05717 8.35152V6.02695C7.05717 4.68254 5.96646 3.59266 4.621 3.59266ZM4.62451 7.06969C4.04788 7.06969 3.58043 6.6026 3.58043 6.02641C3.58043 5.45023 4.04788 4.98318 4.62451 4.98318C5.20114 4.98318 5.6686 5.45023 5.6686 6.02641C5.6686 6.6026 5.20114 7.06969 4.62451 7.06969Z"
                  fill="#FAFAFA"
                />
              </g>
            </g>
            <defs>
              <clipPath id="clip0_1_109">
                <rect
                  width="9"
                  height="12.1406"
                  fill="white"
                  transform="translate(0.0800018 0.0196533)"
                />
              </clipPath>
              <clipPath id="clip1_1_109">
                <rect
                  width="9"
                  height="12.1406"
                  fill="white"
                  transform="translate(0.0800018 0.0196533)"
                />
              </clipPath>
            </defs>
          </svg>

          <p>Certification Programme</p>
        </MBanner>
          <Rating>
          ⭐️ Rated 4.85/5
          </Rating>         
      </Middle>
       
       <Points>
            <p>✔ &nbsp;India's No.1 Online Makeup Course</p>
            <p>✔ &nbsp;Learn by LIVE Do-it-Together Classes</p>
            <p>✔ &nbsp;Unlimited Practise Session to master skills</p>
       </Points>

    </Contain>
  );
}

const Contain = styled.div`
  padding: 8%;
  display: flex;
  flex-direction: column;
  p {
    font-size: 24px;
    font-weight: 500;
  }
`;

const Middle = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 4px;
`;

const MBanner = styled.div`
margin-top: 10px;
padding: 7px;
border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 6px;
  background-color: #7877776b;
 
    p{
        font-size: 13px;
    }
`;
const Rating = styled.div`
 font-size: 15px;
`;

const Points = styled.div`
margin-top: 12px;
display: flex;
flex-direction: column;
gap: 8px;
p{
    font-size: 16px;
}
`;


export default Second;
