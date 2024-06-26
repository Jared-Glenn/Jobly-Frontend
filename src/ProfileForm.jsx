import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "./userContext.jsx";
import "./Forms.css";

function ProfileForm() {
    
    const [ isLoading, setIsLoading ] = useState(false);
    const { user, updateUser } = useContext(UserContext);
    const [ error, setError ] = useState(null);
    const navigate = useNavigate();

    const [ formData, setFormData ] = useState({
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(data => ({
            ...data, 
            [ name ]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { username, firstName, lastName, email } = formData;

        setIsLoading(true);
        setError(null);
        try {
            await updateUser(username, firstName, lastName, email);
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
            <form className="profile-form form" onSubmit={ handleSubmit }>
                {error && <p className="error">{error}</p>}
                <label htmlFor="username">Username</label>
                <br />
                <input className="username-input"
                    id="username"
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username || ""}
                    onChange={ handleChange }
                />
                <br />
                <label htmlFor="firstName">First Name</label>
                <br />
                <input className="firstName-input"
                    id="firstName"
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName || ""}
                    onChange={ handleChange }
                />
                <br />
                <label htmlFor="lastName">Last Name</label>
                <br />
                <input className="lastName-input"
                    id="lastName"
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName || ""}
                    onChange={ handleChange }
                />
                <br />
                <label htmlFor="email">Last Name</label>
                <br />
                <input className="email-input"
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email || ""}
                    onChange={ handleChange }
                />
                <br />
                <button className="form-button" type="submit" disabled={isLoading}>Save Changes</button>
            </form>
        </>
    )
}

export default ProfileForm;