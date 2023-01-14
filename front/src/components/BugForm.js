import React, {useState} from "react";

import './BugForm.css';

const BugForm = (props) => {
    const [severity, setSeverity] = useState('');
    const [priority, setPriority] = useState('');
    const [description, setDescription] = useState('');
    const [commit, setCommit] = useState('');
    const [status, setStatus] = useState('');

    const {onAdd} = props;


    const addBug = () => {
    
        onAdd({
           severity,
           priority,
           description,
           commit,
           status
        }).then(() =>  {
      
            setSeverity('');
            setPriority('');
            setDescription('');
            setCommit('');
            setStatus('');
        });
    }

    return (
        <div className="bug-form">
            <h2>Add a bug</h2>
            <div className="bug-form-fields">
                <input type="text" placeholder="bug severity" onChange={(event) => setSeverity(event.target.value)} value={severity}/>
                <input type="text" placeholder="bug priority" onChange={(event) => setPriority(event.target.value)} value={priority} />
                <input type="text" placeholder="bug description" onChange={(event) => setDescription(event.target.value)} value={description} />
                <input type="text" placeholder="bug commit" onChange={(event) => setCommit(event.target.value)} value={commit} />
                <input type="text" placeholder="bug status" onChange={(event) => setStatus(event.target.value)} value={status} />

                <button className="add-bug-btn" onClick={addBug}>Add bug</button>
            </div>
        </div>
    )
};

export {BugForm};