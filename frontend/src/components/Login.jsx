import Axios from 'axios';
import React, { useState } from 'react';
// import {useNavigate} from 'react-router-dom'
import { useHistory } from 'react-router-dom';
import Cookies from 'js-cookie'
import './form.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  let history = useHistory()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    const data = {
      username: username,
      password: password
    }
    
    // Axios.post("http://localhost:9080/login", data).then(() => {
      // diisi sama golang
    Axios.post("http://localhost:9080/login", data).then(() => {
      console.log("Login successful!");
      Cookies.set("username", data.username, { expires: 1 });
      Cookies.set("password", data.password, { expires: 1 });
      history.push("/users")
    }).catch((err) => {
      console.log(err)
    })
    // console.log(data)
    // event.preventDefault();

    // Perform login here, using the username and password from the form
  }

  function handleClick(){
    window.location.href = '/register';
  }

  return (

      <div className="form-container">
        <div  className='form-trans'>

  
        <h1 className="form-title">WELCOME TO EDUSASTER</h1>
        <form onSubmit={handleSubmit} className="form-cons">
          <div>

            <label htmlFor="username">Username:</label>
            <input
              type="text"
              className="input-form"
              id="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          <div>

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              className="input-form"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <button type="button" className="button-form" onClick={() => { handleSubmit() }}>Log in</button>
          <button type="button" className="button-form" onClick={handleClick}>Register</button>
        </form>
        </div>
      </div>
    
  );
};

export default Login;
