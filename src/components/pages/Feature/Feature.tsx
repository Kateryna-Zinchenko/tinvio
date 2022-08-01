import React from 'react';
import TryIt from './components/tryIt/TryIt';
import Dashboard from "./components/dashboard/Dashboard";
import ManageOrders from "./components/manageOrders/ManageOrders";
import BreezeOrders from "./components/breezeOrders/BreezeOrders";
import SoundsEasy from "./components/soundsEasy/SoundsEasy";
import MakeFast from "./components/makeFast/MakeFast";
import GetSmarter from "./components/getSmarter/GetSmarter";
import Supercharge from "./components/supercharge/Supercharge";

const Feature = () => {
    return (
        <main className='features'>
            <TryIt/>
            <Dashboard/>
            <ManageOrders/>
            <BreezeOrders/>
            <SoundsEasy/>
            <MakeFast/>
            <GetSmarter/>
            <Supercharge/>
        </main>
    );
};

export default Feature;
