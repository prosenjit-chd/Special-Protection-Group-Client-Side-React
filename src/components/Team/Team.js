import React from 'react';
import './Team.css'

const Team = (props) => {
    const {team} = props
    // Check data already in this list 
    const totalPolice = team.length ? team.length : 0;
    let totalSalary = 0;
    // Loop for save data 
    for (const police of team) {
        totalSalary = totalSalary + police.salary;
        
    }

    // Save cart 
    return (
        <div className="text-center mt-4 bg-info me-3">
            <h3>Special Force</h3>
            <h5>Total Police: {totalPolice}</h5>
            <h5>Total Salary: {totalSalary}</h5>
            <ul className="list-group text-start ">
                {
                    team.map(pol => <li className="list-group-item ps-5 bg-light" key={pol.key}>
                        <img className="doc-img" src={pol.img} alt="" /> 
                        <span className="ms-2 fw-bold">{pol.name}</span>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Team;