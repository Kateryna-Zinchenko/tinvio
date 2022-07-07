import React from 'react';
import Preview from "./components/prewiew/Preview";
import HowItWorks from './components/howItWorks/HowItWorks';
import Features from "./components/features/Features";
import FeaturedOn from "./components/featuredOn/FeaturedOn";
import WhyChoose from "./components/whyChoose/WhyChoose";
import Businesses from "./components/businesses/Businesses";
import Form from "./components/form/Form";
import Footer from "./components/footer/Footer";

const Home = () => {
    return (
        <main className='home'>
            <Preview/>
            <HowItWorks/>
            <Features/>
            <FeaturedOn/>
            <WhyChoose/>
            <Businesses/>
            <Form/>
            <Footer/>
        </main>

    );
};

export default Home;
