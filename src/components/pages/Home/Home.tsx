import React from 'react';
import Preview from "./components/prewiew/Preview";
import HowItWorks from './components/howItWorks/HowItWorks';
import Features from "./components/features/Features";
import FeaturedOn from "./components/featuredOn/FeaturedOn";
import WhyChoose from "./components/whyChoose/WhyChoose";

const Home = () => {
    return (
        <main className='home'>
            <Preview/>
            <HowItWorks/>
            <Features/>
            <FeaturedOn/>
            <WhyChoose/>
            <div>iung</div>
        </main>

    );
};

export default Home;
