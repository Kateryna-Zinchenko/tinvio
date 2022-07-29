import React from 'react';
import TryIt from './components/tryIt/TryIt';
import Dashboard from "./components/dashboard/Dashboard";
import ManageOrders from "./components/manageOrders/ManageOrders";

const Features = () => {
    return (
        <main className='features'>
            <TryIt/>
            <Dashboard/>
            <ManageOrders/>
        </main>
    );
};

export default Features;
