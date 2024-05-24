import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./Home";
import ProtectedRoute from "./ProtectedRoute";
import Companies from "./Companies";
import CompanyDetail from "./CompanyDetail";
import Jobs from "./Jobs";
import Login from "./Login";
import SignUp from "./SignUp";
import Profile from "./Profile";

function RouteList() {

    return (
        <BrowserRouter >
            <Navbar />
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/companies" element={ <ProtectedRoute><Companies /></ProtectedRoute> } />
                <Route path="/companies/:company" element={ <ProtectedRoute><CompanyDetail /></ProtectedRoute> } />
                <Route path="/jobs" element={ <ProtectedRoute><Jobs /></ProtectedRoute> } />
                <Route path="/login" element={ <Login /> } />
                <Route path="/signup" element={ <SignUp /> } />
                <Route path="/profile" element={ <ProtectedRoute><Profile /></ProtectedRoute> } />
            </Routes>
        </BrowserRouter>
    )  
}

export default RouteList;