import React from "react";
import LoginForm from "./LoginForm.jsx"

function Login() {
    return (
        <>
            <h1>Login</h1>
            <LoginForm />
            <p>Don't have an account? <a href="/signup">Sign up here!</a></p>
        </>
    )
}

export default Login;