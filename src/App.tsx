import React from 'react';
import Header from "./components/common/Header/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home";
import styled from "styled-components";
import {useToggle} from 'react-use';
import MenuList from "./components/common/Menu/MenuList";

function App() {
    const [isOpenMenu, setIsOpenMenu] = useToggle(false);

    return (
        <BrowserRouter>
            {
                isOpenMenu ? <MenuList setIsOpenMenu={setIsOpenMenu}/> :
                    <Wrapper>
                        <Header isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu}/>
                        <Routes>
                            <Route path='/' element={<Home/>}/>
                        </Routes>
                    </Wrapper>
            }

        </BrowserRouter>
    );
}

const Wrapper = styled.div`
  margin: 0 auto;
  overflow: hidden;
`;

export default App;
