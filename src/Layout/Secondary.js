import React from 'react';
import { Outlet } from 'react-router-dom';

const Secondary = () => {
    return (
        <div className='mx-auto '>
            <Outlet />
        </div>
    );
};

export default Secondary;