import React from 'react';
import Preview from "./components/preview/Preview";
import Numbers from "./components/numbers/Numbers";
import Powered from "./components/powered/Powered";
import Commitments from "./components/commitments/Commitments";
import Role from './components/role/Role';

const Company = () => {
    return (
        <main className='company'>
            <Preview/>
            <Numbers/>
            <Powered/>
            <Commitments/>
            <Role/>
        </main>
    );
};

export default Company;
