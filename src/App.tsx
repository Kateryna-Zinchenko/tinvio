import Header from "./components/common/header/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/pages/Home/Home";
import {useToggle} from 'react-use';
import BurgerMenu from "./components/common/header/menu/BurgerMenu";
import Footer from "./components/common/footer/Footer";
import Features from "./components/pages/Features/Features";
import {useRef} from "react";

function App() {
    const [isOpenMenu, setIsOpenMenu] = useToggle(false);

    const scrollListener = useRef(null);
    const [reachedBottom, setReachedBottom] = useToggle(false);

    const onScroll = () => {
        if (scrollListener.current) {
            const { scrollTop, scrollHeight, clientHeight } = scrollListener.current;

            if (scrollTop + clientHeight >= scrollHeight * 0.85) {
                if (!reachedBottom) {
                    setReachedBottom(true);
                }
            } else {
                if (reachedBottom) {
                    setReachedBottom(false);
                }
            }
        }
    };


    return (
        <BrowserRouter>
            {
                isOpenMenu ? <BurgerMenu setIsOpenMenu={setIsOpenMenu}/> :
                    <div className='app' onScroll={() => onScroll} ref={scrollListener}>
                        <Header isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} reachedBottom={reachedBottom}/>
                        <Routes>
                            <Route path='/' element={<Home/>}/>
                            <Route path='/home' element={<Home/>}/>
                            <Route path='/features' element={<Features/>}/>
                        </Routes>
                        <Footer/>
                    </div>
            }
        </BrowserRouter>
    );
}

export default App;
