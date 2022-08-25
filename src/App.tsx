import Header from "./components/common/header/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/pages/Home/Home";
import {useToggle} from 'react-use';
import BurgerMenu from "./components/common/header/menu/BurgerMenu";
import Footer from "./components/common/footer/Footer";
import Feature from "./components/pages/Feature/Feature";
import Company from "./components/pages/Company/Company";
import {LoginFormWrapper} from "./components/pages/Feature/FeatureStyles";
import LoginForm from "./components/common/loginForm/LoginForm";
import LoginThankYou from "./components/pages/Feature/components/loginThankYou/loginThankYou";
import useOnClickOutside from "./hooks/useOnClickOutside";
import {useEffect, useState} from "react";
import Login from "./components/pages/Login/Login";

function App() {
    const [isOpenMenu, setIsOpenMenu] = useToggle(false);
    const [isOpen, setIsOpen] = useToggle(true);

    const [submitted, setSubmitted] = useState<boolean>(false);

    const modalRef = useOnClickOutside(() => {
        setIsOpen(false);
        document.body.style.overflow = 'unset'
    });

    useEffect(() => {
        setIsOpen(true)
        if (isOpen === true) {
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            document.body.style.overflow = 'hidden'
        }
    }, [isOpen, setIsOpen]);
    return (
        <BrowserRouter>
            <LoginFormWrapper isOpen={isOpen}>
                <LoginForm isOpen={isOpen} modalRef={modalRef} submitted={submitted} setSubmitted={setSubmitted}/>
                <LoginThankYou submitted={submitted}/>
            </LoginFormWrapper>
            {
                isOpenMenu ? <BurgerMenu setIsOpenMenu={setIsOpenMenu}/> :
                    <div className='app'>
                        <Header isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />
                        <Routes>
                            <Route path='/' element={<Home/>}/>
                            <Route path='/home' element={<Home/>}/>
                            <Route path='/features' element={<Feature/>}/>
                            <Route path='/company' element={<Company/>}/>
                            <Route path='/login' element={<Login/>}/>
                        </Routes>
                        <Footer/>
                    </div>
            }
        </BrowserRouter>
    );
}

export default App;
