import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from '../Service/Service';
import flouride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import Typography from '@mui/material/Typography';

const services = [
    {
        name: 'Flouride Treatment',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta soluta et eos optio rerum aut vero ducimus ratione molestiae assumenda.',
        img: flouride
    },
    {
        name: 'Cavity Filling',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta soluta et eos optio rerum aut vero ducimus ratione molestiae assumenda.',
        img: cavity
    },
    {
        name: 'Teeth Whitening',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta soluta et eos optio rerum aut vero ducimus ratione molestiae assumenda.',
        img: whitening
    }
]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ color: 'success.main', m: 2 }} variant="h6" component="div">
                    OUR Services
                </Typography>
                <Typography sx={{ fontWeight: 600, m: 5 }} variant="h4" component="div">
                    Services We Provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {services.map((service) => (
                        <Grid item xs={4} sm={4} md={4}>
                            <Service key={service.name} service={service}></Service>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;