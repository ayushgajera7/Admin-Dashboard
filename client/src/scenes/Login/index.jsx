import React from "react";
import { useState } from "react";
import FlexBetween from "components/FlexBetween";
import { Header } from "components/Header";
import { Email, PointOfSale, PersonAdd, Traffic } from "@mui/icons-material";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { Navigate } from "react-router-dom";
import axios from "axios"

const Login = () => {
  const navigate = useHistory();
  const theme = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      await axios.post("http://localhost:5001/login",{email,password})
      .then(res=>{
        alert('success');
          if(res.data==="exist"){
             alert('logged in');
            //  navigate.push('/dashboard');
              return <Navigate to="/dashboard"/>;
          }
          else if(res.data==="notexist"){
              alert("wrong details1")
          }
      })
      .catch(e=>{
          alert("wrong details2")
          console.log(e);
      })
  }
  catch(e){
      console.log(e);
  }
  };
  return (
    <div className="auth-form-container App">
      <Box className="border">
        <h2>Login</h2>
        <form method="post" onSubmit={handleSubmit} className="login-form">
          <label htmlFor="email">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="abc@gmail.com"
          />
          <label htmlFor="password">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="******"
          />
          <button className="button-form" type="submit">
            Login
          </button>
        </form>
      </Box>
    </div>
  );
};

export default Login;