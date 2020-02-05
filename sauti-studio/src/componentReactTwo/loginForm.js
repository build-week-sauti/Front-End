import React, { useState } from "react";
import axios from "axios";

const LoginForm = (props) => {
  const [login, setLogin] = useState({
    name: "",
    password: ""
  });

  const handleChange = event => {
    setLogin({ 
        ...login, 
        [event.target.name]: event.target.value 
    });
  };

  const handleSubmit = event => {
    console.log("login: ", login);
    event.preventDefault();
    axios
      .post("https://sauti-studios-bw.herokuapp.com/api/auth/login", login)
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.payload);
        props.history.push("/dashboard");
      })
      .catch(err => {
          console.log(err.message);
          props.history.push("/");
      });
  };

  const handleRegister = event => {
    props.history.push("/register");
  };

  return (
    <div>
      <h1>Log in to Sauti Studio</h1>

      <form onSubmit={e => handleSubmit(e)}>
        <label htmlFor="name">
            Name: 
        <input
          type="text"
          name="name"
          value={login.name}
          id="name"
          placeholder="Enter name"
          onChange={handleChange}
          required
        />
        </label>
        <br />

        <label htmlFor="password">
            Password: 
        <input
          type="password"
          name="password"
          value={login.password}
          id="password"
          placeholder="●●●●●●●●"
          onChange={handleChange}
          required
        />
        </label>
        <br />

        <button
          type="submit"
          size="lg"
          color="warning"
          style={{ width: "50%", margin: "auto" }}
        >
          Log In
        </button>
      </form>
      <button onClick={handleRegister}>No account? Sign up!</button>
    </div>
  );
}

export default LoginForm;