import React from 'react';
import './Police.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonBooth } from '@fortawesome/free-solid-svg-icons';

const Police = (props) => {
    // Distructure use here for getting dada 
    const {name, img, designation, speciality, salary} = props.police;

    return (
        // Card section
        <div className="col">
            <div className="card h-100 single-police">
                <img src={img} className="card-img-top police-img" alt="..." />
                <div className="card-body">
                    <h4 className="card-title person-name">Name: {name}</h4>
                    <h5 className="card-text deg">Designation: {designation}</h5>
                    <p className="card-text bold">Speciality Arms: {speciality}</p>
                    <p className="card-text bold">Salary: {salary}</p>
                </div>
                {/* Add to List section  */}
                <div className="card-footer">
                    <button onClick={() => props.handleAddToTeam(props.police)} type="button" className="btn btn-primary"><FontAwesomeIcon icon={faPersonBooth} /> Add to Group</button>
                </div>
            </div>
        </div>
    );
};

export default Police;