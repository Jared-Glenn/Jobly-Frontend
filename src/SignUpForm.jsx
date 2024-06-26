import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "./userContext.jsx";
import "./Forms.css";

function SignUpForm() {
    const [ formData, setFormData ] = useState({
        username: "",
        password: "",
        passwordRepeat: "",
        firstName: "",
        lastName: "",
        email: ""
    });
    const [ isLoading, setIsLoading ] = useState(false);
    const { registerUser } = useContext(UserContext);
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
        const { username, password, passwordRepeat, firstName, lastName, email } = formData;

        if (password !== passwordRepeat) {
            setError("Passwords do not match");
            return;
        }

        setIsLoading(true);
        setError(null);
        try {
            await registerUser(username, password, firstName, lastName, email);
            navigate("/")
        }
        catch (err) {
            console.error("Registration Error:", err);
            setError("Registration failed. Please try again.")
        }
        finally {
            setIsLoading(false);
        }
    }

    return (
        <>
            <form className="signupForm form" onSubmit={ handleSubmit }>
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
                <label htmlFor="password-repeat">Repeat Password</label>
                <input className="password-input"
                    id="password-repeat"
                    type="password"
                    name="passwordRepeat"
                    placeholder="Repeat Password"
                    value={formData.passwordRepeat || ""}
                    onChange={ handleChange }
                />
                <label htmlFor="firstName">First Name</label>
                <input className="firstName-input"
                    id="firstName"
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName || ""}
                    onChange={ handleChange }
                />
                <label htmlFor="lastName">Last Name</label>
                <input className="lastName-input"
                    id="lastName"
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName || ""}
                    onChange={ handleChange }
                />
                <label htmlFor="email">Email</label>
                <input className="email-input"
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email || ""}
                    onChange={ handleChange }
                />
                <button className="form-button" type="submit" disabled={isLoading}>Sign Up</button>
            </form>
        </>
    )
}

export default SignUpForm;