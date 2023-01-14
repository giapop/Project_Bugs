import './App.css';
import { BugList } from './components/BugList';
import { ProjectList } from './components/project/ProjectList';
import { UserList } from './components/login/UserList';
import{Login} from './components/login/Login';
import {useEffect, useState} from 'react';
import User  from './components/login/User';
import axios from "axios";
import React,{ Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter,Route, Switch,Router, Routes } from "react-router-dom"

import {Link, useNavigate} from 'react-router-dom';
import Forms from './Forms';

// function App() {
//   return (
//     <div className="App">
       
//         <div className='forms'>
//           <div>
//       <div className='bugs_collection'>My bugs collection</div>
//       <BugList/>
//     </div>
//     <div>
//       <div className='project_collection'>My projects</div>
//     <ProjectList/>
//        </div>
//        <div>
//       <div className='login'></div>
//     <Login/>
//        </div>
//        </div>
//     </div>
//   );
// }

// export default App;

class App extends Component {
  render() {
    return (
    <BrowserRouter>
    <div className="App">

     <Routes>
    <Route path="/forms" element={<Forms/>}/>
    <Route path="/" element={<Login/>}/>
    </Routes>
    </div>
    </BrowserRouter>
)
  }
}

export default App;
