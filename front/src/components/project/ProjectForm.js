import React, {useState} from "react";

import './ProjectForm.css';

const ProjectForm = (props) => {
    const [name, setName] = useState('');
    const [repository, setRepository] = useState('');
    
    const {onAdd} = props;

    const addProject = () => {
        onAdd({
          name,
          repository
        }).then(() =>  {
            
            setName('');
            setRepository('');
           
        });
    }

    return (
        <div className="project-form">
            <h2>Add a project</h2>
            <div className="project-form-fields">
                <input type="text" placeholder="project name" onChange={(event) => setName(event.target.value)} value={name}/>
                <input type="text" placeholder="project repo" onChange={(event) => setRepository(event.target.value)} value={repository} />
              

                <button className="add-project-btn" onClick={addProject}>Add project</button>
            </div>
        </div>
    )
};

export {ProjectForm};