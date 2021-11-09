import { CircularProgress } from '@mui/material';
import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {

    const { user, admin, loading } = useAuth();
    if (loading) {
        return <CircularProgress />
    }

    return (
        <div>
            <Route
                {...rest}
                render={({ location }) =>
                    user?.email && admin ? (
                        children
                    ) : (
                        <Redirect
                            to={{
                                pathname: "/",
                                state: { from: location }
                            }}
                        />
                    )
                }
            />
        </div>
    );
};

export default AdminRoute;