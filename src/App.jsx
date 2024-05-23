import React, { useState } from 'react';
import './App.css';

import RouteList from "./RouteList.jsx";
import UserContext from "./userContext.jsx";
import JoblyApi from './api.js';

function App() {
  const [ user, setUser ] = useState(null);
  const [ token, setToken ] = useState(null);

  const registerUser = async (username, password, firstName, lastName, email) => {
    try {
      const res = await JoblyApi.registerUser(username, password, firstName, lastName, email);
      setUser({ username, firstName, lastName, email });
      setToken(res.token);
      JoblyApi.token = res.token;
    }
    catch (err) {
      console.error("Registration Error:", err);
    }
  };

  const loginUser = async (user, password) => {
    try {
      const res = await JoblyApi.loginUser(user, password);
      const { username, firstName, lastName, email } = res.user;
      setUser({ username, firstName, lastName, email });
      console.log("TOKEN!!!!!!!!", res.token)
      setToken(res.token);
      JoblyApi.token = res.token;
    }
    catch (err) {
      console.error("Registration Error:", err);
    }
  };

  return (
    <div className='main-div'>
      <UserContext.Provider value={{ user, token, registerUser, loginUser }}>
        <RouteList />
      </UserContext.Provider>
    </div>
  )
}

export default App
