import {useEffect, useState} from 'react'
import Bug  from './Bug'
import axios from "axios";
import {BugForm} from './BugForm';
const SERVER= 'http://localhost:8080'

function BugList(){
    const [bugs,setBugs]=useState([]);

    const getBugs=async()=>{
        const response=await fetch(`${SERVER}/api/bugs`)
        const data=await response.json()
        setBugs(data)
    }

    const addBug = async(bug) => {
        await axios.post(`${SERVER}/api/bugs`, bug);
        getBugs();
    }

useEffect(()=>{
    getBugs()
},[])


    return(
        <div className='bug_list'>
            {
                bugs.map(e=><Bug key={e.id} item={e}/>)
            }
               <BugForm onAdd={addBug}/>
        </div>
    )
}

export { BugList}