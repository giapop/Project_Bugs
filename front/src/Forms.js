import { BugList } from './components/BugList';
import { ProjectList } from './components/project/ProjectList';
import React from "react";

const Forms=function AppList() {
  return (
    <div className="App">
       
        <div className='forms'>
          <div>
      <div className='bugs_collection'>My bugs</div>
      <BugList/>
    </div>
    <div>
      <div className='project_collection'>My projects</div>
    <ProjectList/>
       </div>

       </div>
    </div>
  );
}

export default Forms;