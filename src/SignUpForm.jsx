import React from "react";

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
            <form className="searchForm" onSubmit={ handleSubmit }>
                <input className="searchBar"
                    id="searchTerm"
                    type="text"
                    name="searchTerm"
                    placeholder="Enter search term"
                    value={formData.searchTerm || ""}
                    onChange={ handleChange }
                />
                <button className="searchButton" onClick={ handleSubmit }>Search</button>
            </form>
        </>
    )
}

export default SignUpForm;