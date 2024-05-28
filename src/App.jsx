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
    JoblyApi.setToken = token;
  }, [token]);

  useEffect(() => {
    console.log("SignedIn state changed:", signedIn);
    localStorage.setItem('signedIn', JSON.stringify(signedIn));
  }, [signedIn]);

  const registerUser = async (userName, pw, fName, lName, emailAddress) => {
    try {
      const res = await JoblyApi.registerUser(userName, pw, fName, lName, emailAddress);
      const applications = [];
      setUser({ username, firstName, lastName, email, applications });
      console.log("TOKEN!!!!", res.token);
      setToken(res.token);
      JoblyApi.token = res.token;

      setSignedIn(true);
    }
    catch (err) {
      console.error("Registration Error:", err);
    }
  };

  const loginUser = async (userName, password) => {
    try {
      const res = await JoblyApi.loginUser(userName, password);
      console.log("TOKEN!!!!", res.token);
      setToken(res.token);
      JoblyApi.token = res.token;

      const secRes = await JoblyApi.getUserInfo(userName);
      const { username, firstName, lastName, email, applications } = secRes.user;
      setUser({ username, firstName, lastName, email, applications });

      setSignedIn(true);
    }
    catch (err) {
      console.error("Registration Error:", err);
    }
  };

  const updateUser = async (userName, fName, lName, emailAddress) => {
    try {
      await JoblyApi.updateUserInfo(userName, fName, lName, emailAddress);
      const res = await JoblyApi.getUserInfo(userName);
      const { username, firstName, lastName, email, applications } = res.user;
      setUser({ username, firstName, lastName, email, applications });
    }
    catch (err) {
      console.error("Update Error", err);
    }
  }

  const apply = async (userName, job_id) => {
    try {
      await JoblyApi.applyUserForJob(userName, job_id);
      const res = await JoblyApi.getUserInfo(userName);
      const { username, firstName, lastName, email, applications } = res.user;
      setUser({ username, firstName, lastName, email, applications });
    }
    catch (err) {
      console.error("Update Error", err);
    }
  }

  return (
    <div className='main-div'>
      <UserContext.Provider value={{ user, token, signedIn, setUser, setToken, setSignedIn, registerUser, loginUser, updateUser, apply }}>
        <RouteList />
      </UserContext.Provider>
    </div>
  )
}

export default App
