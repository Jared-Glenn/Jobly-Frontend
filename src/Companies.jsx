import React from "react";
import './Companies.css';

import Company from "./Company";
import SearchBar from "./SearchBar";

function Companies() {
    return (
        <div className="centered">
            {/* Move className to the actual components. */}
            <SearchBar className="centered" />
            <Company className="centered" />
        </div>
    )
}

export default Companies;