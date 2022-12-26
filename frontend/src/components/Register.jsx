import Axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import "./form.css"

const Register = () => {
  const [namaLengkap, setNamaLengkap] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    const data = {
      namaLengkap: namaLengkap,
      username: username,
      password: password
    }

    console.log(data)

    Axios.post("http://localhost:9080/register", data).then(() => {
      console.log("success")
    }).catch(err => {
      console.log(err)
    })
    // Perform registration here, using the username, email, and password from the form
  }

  useEffect(() => {
    console.log(username)
  }, [username])

  function handleClick(){
    window.location.href = '/login';
  }

  return (
    <div className="form-container">
      <div className="form-trans">
        <h1 className="form-title">WELCOME TO EDUSASTER</h1>
        <form onSubmit={handleSubmit} className="form-cons">
          <div>
            <label htmlFor="namaLengkap">Nama Lengkap :</label>
            <input
              type="text"
              id="namaLengkap"
              className="input-form"
              value={namaLengkap}
              onChange={(event) => setNamaLengkap(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="username">Username :</label>
            <input
              type="text"
              id="username"
              className="input-form"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password :</label>
            <input
              type="password"
              id="password"
              className="input-form"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <button type="button" className="button-form" onClick={() => { handleSubmit() }}>Sign up</button>
          <button type="button" className="button-form" onClick={handleClick}>Login</button>
        </form>
      </div >
    </div >
  );
};

export default Register;
