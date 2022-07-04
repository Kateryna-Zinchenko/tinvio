import React from 'react';
import Header from "./components/common/Header/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/pages/Home/Home";
import {useToggle} from 'react-use';
import BurgerMenu from "./components/common/Header/Menu/BurgerMenu";

function App() {
    const [isOpenMenu, setIsOpenMenu] = useToggle(false);

    return (
        <BrowserRouter>
            {
                isOpenMenu ? <BurgerMenu setIsOpenMenu={setIsOpenMenu}/> :
                    <div className='app'>
                        <Header isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu}/>
                        <Routes>
                            <Route path='/' element={<Home/>}/>
                            <Route path='/home' element={<Home/>}/>
                        </Routes>
                    </div>
            }
        </BrowserRouter>
    );
}

export default App;
