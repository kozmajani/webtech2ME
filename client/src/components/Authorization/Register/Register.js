import React, { useState } from "react";
import { FormControl, InputLabel, Input, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import "../Login/Login.css";

export default function Register() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const sendRegister = (e) => {
    e.preventDefault();
    const newUser = { name, password };
    fetch("http://localhost:9000/user/register/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    }).then((e) => {
      history.push("/login");
    });
  };

  return (
    <div className="container">
      <div>
        <h1>Register</h1>
      </div>
      <FormControl className="email-container">
        <InputLabel htmlFor="name">Username</InputLabel>
        <Input
          id="name"
          onChange={(e) => setName(e.target.value)}
          aria-describedby="my-helper-text"
        />
      </FormControl>

      <FormControl className="password-container">
        <InputLabel htmlFor="password">Password</InputLabel>
        <Input
          id="email"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          aria-describedby="my-helper-text"
        />
      </FormControl>

      <Button color="grey" onClick={sendRegister}>
        Sign Up
      </Button>
    </div>
  );
}
