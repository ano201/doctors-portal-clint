import { Alert, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import Booking from '../Booking/Booking';



const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodontics',
        time: '8.00 AM - 9.00 AM',
        space: 10
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '10.05 AM - 11.30 AM',
        space: 10
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '5.00 PM - 6.30 PM',
        space: 10
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '7.00 AM - 8.30 AM',
        space: 10
    },
    {
        id: 5,
        name: 'Teeth Orthodontics',
        time: '8.00 AM - 9.00 AM',
        space: 10
    },
    {
        id: 6,
        name: 'Teeth Orthodontics',
        time: '11.00 AM - 12.00 PM',
        space: 10
    }
]

const AvailableAppointments = ({ date }) => {
    const [ bookingSuccess, setBookingSucess ] = useState(false);
    return (
        <Container>
            <Typography variant='h4' sx={{ color: 'info.main', mb: 3 }}>Available appointment on {date.toDateString()}</Typography>
                    {bookingSuccess && <Alert severity="success">Appointment Booked Successfully!</Alert>}
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking key={booking.id} date={date} setBookingSucess={setBookingSucess} booking={booking}></Booking>)
                }
            </Grid>

        </Container>
    );
};

export default AvailableAppointments;