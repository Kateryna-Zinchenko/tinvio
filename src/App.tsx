import Header from "./components/common/header/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/pages/Home/Home";
import {useToggle} from 'react-use';
import BurgerMenu from "./components/common/header/menu/BurgerMenu";
import Footer from "./components/common/footer/Footer";
import Feature from "./components/pages/Feature/Feature";
import Company from "./components/pages/Company/Company";

function App() {
    const [isOpenMenu, setIsOpenMenu] = useToggle(false);

    return (
        <BrowserRouter>
            {
                isOpenMenu ? <BurgerMenu setIsOpenMenu={setIsOpenMenu}/> :
                    <div className='app'>
                        <Header isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />
                        <Routes>
                            <Route path='/' element={<Home/>}/>
                            <Route path='/home' element={<Home/>}/>
                            <Route path='/features' element={<Feature/>}/>
                            <Route path='/company' element={<Company/>}/>
                        </Routes>
                        <Footer/>
                    </div>
            }
        </BrowserRouter>
    );
}

export default App;
