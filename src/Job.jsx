import React, { useContext } from "react";
import "./Job.css";

import UserContext from "./userContext";

function Job({ id, title, salary, equity }) {

    const { user, apply } = useContext(UserContext);

    const appliedAlready = user.applications.includes(id);

    const handleApply = () => {
        if (user) {
            apply(user.username, id);
        }
        else {
            console.error("User must be logged in to apply for a job.");
        }
    }

    return (
        <div className="job-div">
            <h4>{ title }</h4>
            <p>Job# { id }</p>
            <p>Salary: ${ salary }</p>
            {equity ? (<p>Equity: { equity }%</p>) :
            (<p>Equity: Not Disclosed</p>)}
            {appliedAlready ? (
                <button type="button" disabled>Applied</button>
            ) : (
                <button type="button" className="job-apply" onClick={ handleApply }>Apply</button>
            )}
        </div>
    )
}

export default Job;