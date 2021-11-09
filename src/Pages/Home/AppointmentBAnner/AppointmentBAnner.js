import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png';
import Bg from '../../../images/appointment-bg.png';
import { Button, Typography } from '@mui/material';


const appointmentBanner = {
    background: `url(${Bg})`,
    backgroundColor: 'rgba(45, 58, 74, 0.8)',
    backgroundBlendMode: 'darken,luminosity',
    marginTop: 175
}

const AppointmentBAnner = () => {
    return (
        <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img style={{ width: 400, marginTop: -120 }} src={doctor} alt="" />
                </Grid>
                <Grid xs={12} md={6} sx={{ display: 'flex', justifyContent: 'flex-start', textAlign: 'left' }}>
                    <Box>
                        <Typography variant='h6' sx={{ my: 5 }} style={{ color: '#5CE7ED' }}>
                            Appointment
                        </Typography>
                        <Typography variant='h4' sx={{ mb: 5 }} style={{ color: 'white' }}>
                            Make An Appointment Today
                        </Typography>
                        <Typography variant='h6' sx={{ mb: 5 }} style={{ color: 'white', fontSize: 14, fontWeight: 300 }}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus voluptatibus officia dolorum consequatur. Velit voluptatibus natus, maiores magni quisquam eligendi?
                        </Typography>
                        <Button variant='contained' style={{ backgroundColor: '#5CE7ED' }}>Learn More</Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>

    );
};

export default AppointmentBAnner;