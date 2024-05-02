import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./Home";
import Companies from "./Companies";
import Company from "./Company";
import Jobs from "./Jobs";
import Login from "./Login";
import SignUp from "./SignUp";
import Profile from "./Profile";

function RouteList() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/companies" element={ <Companies /> } />
                <Route path="/companies/:company" element={ <Company companyId={ "apple" } /> } />
                <Route path="/jobs" element={ <Jobs /> } />
                <Route path="/login" element={ <Login /> } />
                <Route path="/signup" element={ <SignUp /> } />
                <Route path="/profile" element={ <Profile /> } />
            </Routes>
        </BrowserRouter>
    )  
}

export default RouteList;