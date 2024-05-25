import React from "react";
import LoginForm from "./LoginForm.jsx"

function Login() {
    return (
        <>
            <h1 className="title">Login</h1>
            <LoginForm />
            <p className="no-account">Don't have an account? <a href="/signup" className="to-signup">Sign up here!</a></p>
        </>
    )
}

export default Login;