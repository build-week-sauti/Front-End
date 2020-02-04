import React, { useState } from "react";
import axios from "axios";


function LoginForm(props) {
    const [userInput, setUserInput] = useState({
      username: '',
      password: ''
    })
    function handleChange(e) {
      setUserInput({...userInput, [e.target.name]: e.target.value});
    }
    function submitForm(e) {
      e.preventDefault();
      axios.post('https://bw-weight-lifting.herokuapp.com/api/auth/login', userInput)
        .then(res => {
          console.log(res.data)
        //  localStorage.setItem('token', res.data.token);

        })
        .catch(err => {
          console.log("Login error:",err);
        })
        setUserInput({
          ...userInput,
          username: '',
          password: ''
        });
    }
    return (
        <div> 
            <h1>Login</h1>
          <form onSubmit={submitForm} className='forms'>

              <label htmlFor="username">Username: </label>
              <input type='text' 
                name='username' 
                value={userInput.username} 
                id='username' 
                placeholder='Enter username'
                onChange={handleChange}
                required
               />
               <br />


              <label htmlFor='password'>Password: </label>
              <input type='password' 
                name='password' 
                value={userInput.password} 
                id='password'
                placeholder='Enter password'
                onChange={handleChange}
                required /><br />

              <button type='submit'>Log In</button>
          </form>
          </div>
    )};

    export default LoginForm;