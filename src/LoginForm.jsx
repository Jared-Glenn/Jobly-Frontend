import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "./userContext.jsx";

function LoginForm() {
    const [ formData, setFormData ] = useState({
        username: "",
        password: ""
    });
    const [ isLoading, setIsLoading ] = useState(false);
    const { loginUser } = useContext(UserContext);
    const [ error, setError ] = useState(null);
    const navigate = useNavigate();

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(data => ({
            ...data, 
            [ name ]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { username, password } = formData;

        setIsLoading(true);
        setError(null);
        try {
            await loginUser(username, password);
            navigate("/")
        }
        catch (err) {
            console.error("Login Error:", err);
            setError("Login failed. Please try again.")
        }
        finally {
            setIsLoading(false);
        }
    }

    return (
        <>
            <form className="loginForm" onSubmit={ handleSubmit }>
                {error && <p className="error">{error}</p>}
                <label htmlFor="username">Username</label>
                <input className="username-input"
                    id="username"
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username || ""}
                    onChange={ handleChange }
                />
                <label htmlFor="password">Password</label>
                <input className="password-input"
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password || ""}
                    onChange={ handleChange }
                />
                <button className="login-form" type="submit" disabled={isLoading}>Sign Up!</button>
            </form>
        </>
    )
}

export default LoginForm;