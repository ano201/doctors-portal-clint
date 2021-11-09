import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import loginImg from '../../../images/login.png';

const Register = () => {

    const { registerUser, loading, user, error, googleSignIn } = useAuth();
    const [loginData, setLoginData] = useState({});

    const location = useLocation();
    const history = useHistory();

    const handleonBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLOginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your Password Did Not Match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history)
        e.preventDefault();
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant='body1' gutterBottom>
                        Registration
                    </Typography>
                    {!loading ? <form onSubmit={handleLOginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Name"
                            type="text"
                            name='name'
                            onBlur={handleonBlur}
                            variant="standard"
                            required />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            type="email"
                            name='email'
                            onBlur={handleonBlur}
                            variant="standard"
                            required />

                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            type="Password"
                            name='password'
                            onBlur={handleonBlur}
                            variant="standard"
                            required />

                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Confirm Password"
                            type="Password"
                            name='password2'
                            onBlur={handleonBlur}
                            variant="standard"
                            required />

                        <Button variant='contained' sx={{ width: '75%', m: 1 }} type='submit'>Register</Button>
                        <NavLink style={{ textDecoration: 'none    ' }} to='/login'>
                            <Button variant='text'>Already Registered? Please Log In</Button>
                        </NavLink>
                    </form> : <CircularProgress />}
                    <p>=============================</p>
                    <Button onClick={() => googleSignIn(location, history)} variant='contained' sx={{ width: '75%', m: 1 }} type='submit'>Sign Up With Google</Button>
                    {user?.email && <Alert severity="success">User Created Successfully!</Alert>}
                    {error && <Alert severity="error">{error}!</Alert>}
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={loginImg} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;