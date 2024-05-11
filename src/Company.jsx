import React from "react";

function Company({ name, description, logoUrl }) {
    return (
        <div className="company">
            <h2>{ name }</h2>
            <p>{ description }</p>
            {logoUrl && <img src={logoUrl} alt={name} />}
        </div>
    )
}

export default Company;