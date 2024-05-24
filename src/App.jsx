import React, { useEffect, useState } from 'react';
import './App.css';

import RouteList from "./RouteList.jsx";
import UserContext from "./userContext.jsx";
import JoblyApi from './api.js';

function App() {
  
  const getUserFromLocalStorage = () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  };

  const getSignedInFromLocalStorage = () => {
    const signedIn = localStorage.getItem('signedIn');
    return signedIn ? JSON.parse(signedIn) : null;
  };
  
  const [ user, setUser ] = useState(getUserFromLocalStorage);
  const [ token, setToken ] = useState(() => localStorage.getItem('token') || null);
  const [ signedIn, setSignedIn ] = useState(getSignedInFromLocalStorage);

  useEffect(() => {
    console.log("User state changed:", user);
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    console.log("Token state changed:", token);
    localStorage.setItem('token', token);
    JoblyApi.token = token;
  }, [token]);

  useEffect(() => {
    console.log("SignedIn state changed:", signedIn);
    localStorage.setItem('signedIn', JSON.stringify(signedIn));
  }, [signedIn]);

  const registerUser = async (username, password, firstName, lastName, email) => {
    try {
      const res = await JoblyApi.registerUser(username, password, firstName, lastName, email);
      const applications = [];
      setUser({ username, firstName, lastName, email, applications });
      setToken(res.token);
      JoblyApi.token = res.token;

      setSignedIn(true);
    }
    catch (err) {
      console.error("Registration Error:", err);
    }
  };

  const loginUser = async (user, password) => {
    try {
      const res = await JoblyApi.loginUser(user, password);
      setToken(res.token);
      JoblyApi.token = res.token;

      const secRes = await JoblyApi.getUserInfo(user);
      const { username, firstName, lastName, email, applications } = secRes.user;
      setUser({ username, firstName, lastName, email, applications });

      setSignedIn(true);
    }
    catch (err) {
      console.error("Registration Error:", err);
    }
  };

  const updateUser = async (username, firstName, lastName, email) => {
    try {
      await JoblyApi.updateUserInfo(username, firstName, lastName, email);
      const res = await JoblyApi.getUserInfo(user);
      const { username, firstName, lastName, email, applications } = res.user;
      setUser({ username, firstName, lastName, email, applications });
    }
    catch (err) {
      console.error("Update Error", err);
    }
  }

  return (
    <div className='main-div'>
      <UserContext.Provider value={{ user, token, signedIn, setUser, setToken, setSignedIn, registerUser, loginUser, updateUser }}>
        <RouteList />
      </UserContext.Provider>
    </div>
  )
}

export default App
