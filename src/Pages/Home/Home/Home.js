import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentBAnner from '../AppointmentBAnner/AppointmentBAnner';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <AppointmentBAnner></AppointmentBAnner>
        </div>
    );
};

export default Home;