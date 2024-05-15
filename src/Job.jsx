import React from "react";
import "./Job.css";

function Job({ id, title, salary, equity }) {
    return (
        <div className="job-div">
            <h4>{ title }</h4>
            <p>Job# { id }</p>
            <p>Salary: ${ salary }</p>
            {equity ? (<p>Equity: { equity }%</p>) :
            (<p>Equity: Not Disclosed</p>)}
        </div>
    )
}

export default Job;