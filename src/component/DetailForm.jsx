import React from 'react'
import styled from 'styled-components'

function DetailForm() {
  return (
    <Contain>
      <Heading>
        FILL THE FORM BELOW TO ENQUIRE
      </Heading>
      <MainForm>
        <p>*Enter your name</p>
        <input type="text" placeholder='Eg. Aneesha Mehra'/>
        <p>* Enter your WhatsApp Number</p>
         <Twin>
              <input type="number" placeholder='+91 ▽'/>
              <input type="number" placeholder='Eg. 0000000000' />
         </Twin>
        <p>* Select your profession</p>
        <input type="text" placeholder='Choose the most relevant option'/>

        <p>* Select your goal</p>
        <input type="text" placeholder='Choose the most relevant option'/>

        <p>* Select your city</p>
        <input type="text" placeholder='Choose the most relevant option'/>

        <button>Submit</button>
         
      </MainForm>
    </Contain>
  )
}

const Contain = styled.div`
padding-left: 8%;
padding-right: 8%;
border-radius: 10px;
margin-bottom: 10px;
`;
const Heading = styled.div`
     text-align: center;
     font-size: 13px;
     font-weight: 400;
    background-color: #E84D84;
    padding: 1%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`;
const MainForm = styled.div`
font-size:14px;
 padding-top: 10px;
 padding-left: 6px;
 padding-right: 5px;
 padding-bottom: 12px;
 background-color: #fff;
 color: #000;
 border-bottom-left-radius: 10px;
 border-bottom-right-radius: 10px;
 display: flex;
 flex-direction: column;
 gap: 8px;

   input{
    padding: 5px;
    border: 1px solid #D3D3D3;
    border-radius: 5px;
   }

   button{
    padding-top: 6px;
    padding-bottom: 4px;
    border: none;
    border-radius: 4px;
    color: #fff;
    background: rgb(245,101,99);
    background: linear-gradient(90deg, rgba(245,101,99,1) 0%, rgba(229,73,136,1) 100%);
   }
`;
const Twin = styled.div`
 display: grid;
  grid-template-columns: 20% 60%;
  gap: 15px;
`;
export default DetailForm