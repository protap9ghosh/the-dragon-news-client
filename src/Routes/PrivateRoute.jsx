import React, { useContext } from 'react';
import AuthProvider from '../providers/AuthProvider';

const PrivateRoute = () => {
    const { user } = useContext(AuthProvider);

    return (
        <div>
            
        </div>
    );
};

export default PrivateRoute;


/*
 ? Private Route Step 
 * 1. Check user is logged in or not
 * 2. If user is logged in, then allow then to visit the route
 * 3. Else redirect the user to the login page
 * 
 * */