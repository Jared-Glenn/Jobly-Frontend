import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import UserContext from './userContext';

const ProtectedRoute = ({ children }) => {
    const { signedIn } = useContext(UserContext);
    return signedIn ? children : <Navigate to='/login' />;
};

export default ProtectedRoute;