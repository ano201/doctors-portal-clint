import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import BookingModal from '../AvailableAppointments/BookingModal/BookingModal';

const Booking = ({ booking, date, setBookingSucess }) => {

    const [bookingOpen, setBookingOpen] = React.useState(false);
    const handleBookingOpen = () => setBookingOpen(true);
    const handleBookingClose = () => setBookingOpen(false);

    const { name, time, space } = booking;

    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={3} sx={{ py: 5 }}>
                    <Typography sx={{ color: 'info.main', fontWeight: 600 }} variant='h5' gutterBottom component='div'>
                        {name}
                    </Typography>
                    <Typography variant='h6' gutterBottom component='div'>
                        {time}
                    </Typography>
                    <Typography variant='hcaption' display='block' gutterBottom>
                        {space} SPACES AVAILABLE
                    </Typography>
                    <Button onClick={handleBookingOpen} variant="contained">BOOK APPOINMENT</Button>
                </Paper>
            </Grid>
            <BookingModal booking={booking} setBookingSucess={setBookingSucess} date={date} handleBookingClose={handleBookingClose} bookingOpen={bookingOpen}></BookingModal>
        </>
    );
};

export default Booking;