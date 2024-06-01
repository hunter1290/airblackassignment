import React from 'react'
import styled from 'styled-components'
import Header from './component/Header';
import Second from './component/Second';
import './App.css'
import DetailForm from './component/DetailForm';
import Third from './component/Third';
import Fourth from './component/Fourth';
import Last from './component/Last';


function App() {
  return (
    <Contain>
         <Header/>
         <Second/>
         <DetailForm/>
         <Third/>
         <Fourth/>
         <Last/>
    </Contain>
  )
}

const Contain = styled.div`
 display: flex;
 flex-direction: column;
 background-color: #000;
 color: #fff;
`;

export default App