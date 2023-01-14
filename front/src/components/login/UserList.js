
import {useEffect, useState} from 'react'
import User  from './User'
import axios from "axios";
const SERVER= 'http://localhost:8080'

function UserList(){
    const [users,setUsers]=useState([]);
    const getUsers=async()=>{
        const response=await fetch(`${SERVER}/api/users`)
        const data=await response.json()
        setUsers(data)
     const database = [
    {
      username: data[0].email,
      password: data[0].password
    },
    {
      username: data[1].email,
      password: data[1].password
    },
    {
        username: data[2].email,
        password: data[2].password
      }
  ];
  console.log("databaseuserlist");
  console.log(database);
    }


useEffect(()=>{
    getUsers()
},[])
    return(
        <div className='users_list'>
            {
                users.map(e=><User key={e.id} item={e}/>)
            }
             
        </div>
    )
}

export { UserList }