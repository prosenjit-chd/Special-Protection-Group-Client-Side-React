import React, { useEffect, useState } from 'react';
import Police from '../Police/Police';
import Team from '../Team/Team';
import './Force.css';

const Force = () => {
    // Use State here 
    const [polices, setPolices] = useState([]);
    const [team, setTeam] = useState([]);

    // Fetch data 
    useEffect( () => {
        fetch('./polices.JSON')
        .then(res => res.json())
        .then(data => setPolices(data));
    },[])

    const handleAddToTeam = (police) => {
        const teamPolice = team.find(pol => pol.key === police.key);
        if (!teamPolice){
            const newTeam = [...team, police];
            setTeam(newTeam);
        }
    }

    return (
            // Divide row coloum 
            <div className="row">
                <div className="col-9">
                   <div className="row row-cols-1 row-cols-md-3 g-4 ms-3 mt-2">
                   {
                    //    use map function 
                    polices.map(police => <Police
                        key={police.key}
                        police={police}
                        handleAddToTeam={handleAddToTeam}
                    ></Police>)
                    }
                   </div>
                </div>
                    {/* Set cart data  */}
                <div className="col-3">
                    <Team team={team}></Team>
                </div>
            </div>
     
    );
};

export default Force;