import React from 'react';
import TryIt from './components/tryIt/TryIt';
import Dashboard from "./components/dashboard/Dashboard";
import ManageOrders from "./components/manageOrders/ManageOrders";
import BreezeOrders from "./components/breezeOrders/BreezeOrders";

const Feature = () => {
    return (
        <main className='features'>
            <TryIt/>
            <Dashboard/>
            <ManageOrders/>
            <BreezeOrders/>
        </main>
    );
};

export default Feature;
