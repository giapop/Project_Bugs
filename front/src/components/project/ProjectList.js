import {useEffect, useState} from 'react'
import Project  from './Project'
import axios from "axios";
import {ProjectForm} from './ProjectForm';
const SERVER= 'http://localhost:8080'

function ProjectList(){
    const [projects,setProjects]=useState([]);
    const getProjects=async()=>{
        const response=await fetch(`${SERVER}/api/projects`)
        const data=await response.json()
        setProjects(data)
   
    }

    const addProject = async(project) => {
        await axios.post(`${SERVER}/api/projects`, project);
        getProjects();
    }

useEffect(()=>{
    getProjects()
},[])
    return(
        <div className='project_list'>
            {
                projects.map(e=><Project key={e.id} item={e}/>)
            }
               <ProjectForm onAdd={addProject}/>
        </div>
    )
}

export { ProjectList }