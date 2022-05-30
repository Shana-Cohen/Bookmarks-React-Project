import React from 'react';
import { useUser } from '../AuthContext.js';
import Login from '../pages/Login';
import { Route } from 'react-router-dom';

const PrivateRoute = ({ component, ...options }) => {
    const { user } = useUser();
    const finalComponent = !!user ? component : Login;
    return <Route {...options} component={finalComponent} />;
};

export default PrivateRoute;