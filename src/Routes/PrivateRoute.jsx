import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const { user } = useContext(AuthContext);
    console.log(user);
    const location = useLocation();
    console.log(location);

    if (user) {
        return children;
    }

    return <Navigate state={{from: location}} to="/login" replace></Navigate>;
};

export default PrivateRoute;


/*
 ? Private Route Step 
 * 1. Check user is logged in or not
 * 2. If user is logged in, then allow then to visit the route
 * 3. Else redirect the user to the login page
 * 4. setup the private route
 * */