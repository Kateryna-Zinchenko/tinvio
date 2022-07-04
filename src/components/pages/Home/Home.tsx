import React from 'react';
import Preview from "./components/prewiew/Preview";
import HowItWorks from './components/howItWorks/HowItWorks';
import Features from "./components/features/Features";

const Home = () => {
    return (
        <main className='home'>
            <Preview/>
            <HowItWorks/>
            <Features/>
        </main>

    );
};

export default Home;
