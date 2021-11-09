import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import loginImg from '../../../images/login.png';

const Login = () => {

    const [loginData, setLoginData] = useState({});
    const { user, userLogin, error, loading, googleSignIn } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLOginSubmit = e => {
        userLogin(loginData.email, loginData.password, location, history)
        e.preventDefault();
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant='body1' gutterBottom>
                        Login
                    </Typography>
                    <form onSubmit={handleLOginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name='email'
                            type="email"
                            onChange={handleOnChange}
                            variant="standard" />

                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name='password'
                            onChange={handleOnChange}
                            variant="standard" />

                        <Button variant='contained' sx={{ width: '75%', m: 1 }} type='submit'>Log In</Button>
                        <NavLink style={{ textDecoration: 'none    ' }} to='/registration'><Button variant='text'>New User? Please Register</Button></NavLink>
                    </form>
                    <p>=============================</p>
                    <Button onClick={() => googleSignIn(location, history)} variant='contained' sx={{ width: '75%', m: 1 }} type='submit'>Sign In With Google</Button>
                    {loading && <CircularProgress />}
                    {user?.email && <Alert severity="success">User Logged In Successfully!</Alert>}
                    {error && <Alert severity="error">{error}!</Alert>}
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={loginImg} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;