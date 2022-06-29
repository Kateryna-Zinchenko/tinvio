import React from 'react';
import Header from "./components/common/Header/Header";
import {BrowserRouter, Routes} from "react-router-dom";
import Home from "./components/Home/Home";
import styled from "styled-components";

function App() {
    return (
        <BrowserRouter>
            <Wrapper>
                <Header/>
                <Home/>
                <Routes>
                </Routes>
            </Wrapper>
        </BrowserRouter>
    );
}

const Wrapper = styled.div`
  max-width: 375px;
  margin: 0 auto;
  overflow: hidden;
`;

export default App;
