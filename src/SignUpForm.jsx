import React, { useState } from "react";

function SignUpForm({ onSubmit }) {
    const [ formData, setFormData ] = useState({
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        email: ""
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(data => ({
            ...data, 
            [ name ]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const { username, password, firstName, lastName, email } = formData;
        onSubmit( username, password, firstName, lastName, email);
        setFormData({
            username: "",
            password: "",
            firstName: "",
            lastName: "",
            email: ""
        });
    }

    return (
        <>
            <form className="signupForm" onSubmit={ handleSubmit }>
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
                    type="text"
                    name="password"
                    placeholder="Password"
                    value={formData.password || ""}
                    onChange={ handleChange }
                />
                <label htmlFor="fname">First Name</label>
                <input className="fname-input"
                    id="fname"
                    type="text"
                    name="fname"
                    placeholder="First Name"
                    value={formData.fname || ""}
                    onChange={ handleChange }
                />
                <label htmlFor="lname">Last Name</label>
                <input className="lname-input"
                    id="lname"
                    type="text"
                    name="lname"
                    placeholder="Last Name"
                    value={formData.lname || ""}
                    onChange={ handleChange }
                />
                <button className="signup-form" onClick={ handleSubmit }>Sign Up!</button>
            </form>
        </>
    )
}

export default SignUpForm;