import React, { useContext } from 'react';
import { DataContext } from '../../ContextProvider/FetchContext';
import Loader from '../Shared/Loader';
import Products from '../Shared/Products';

const LaptopsBattery = () => {
    const { laptopsBattery, laptopsBatteryLoading } = useContext(DataContext)

    if (laptopsBatteryLoading) {
        return <Loader />
    }
    return (
        <div className='grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-12 lg:px-8 lg:py-12'>
            {
                laptopsBattery.map(laptopBattery =>
                    <Products allProduct={laptopBattery} key={laptopBattery._id} />)
            }
        </div>
    );
};

export default LaptopsBattery;