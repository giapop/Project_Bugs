import {useEffect, useState} from 'react';
import React from "react";
import './styles.css'
import {Link, Routes, useNavigate} from 'react-router-dom';

const SERVER= 'http://localhost:8080'

var arrayUser=[];
const Login=() =>{
const navigate=useNavigate();
   const [users,setUsers]=useState([]);

  const getUsers=async()=>{
      const response=await fetch(`${SERVER}/api/users`)
      const data=await response.json()
     
      setUsers(data);
      console.log(data.length);
 
for(var i=0;i<data.length;i++){
const database = [
    {
      username: data[i].email,
      password: data[i].password
    }
  ]

console.log("database app.js");
console.log(database);
arrayUser.push(database[0])
}
}
console.log("arrayUser app.js");
console.log(arrayUser);

useEffect(()=>{
  getUsers()
},[])

  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const errors = {
    uname: "invalid email",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    const userData = arrayUser.find((user) => user.username === uname.value);

    if (userData) {
      if (userData.password !== pass.value) {
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
        navigate("/forms");
      }
    } else {
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Email </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
       
      </div>
    </div>
  );
}

export { Login};

