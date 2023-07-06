import React from "react";
import { useState } from "react";
import FlexBetween from "components/FlexBetween";
import { Header } from "components/Header";
import { Email, PointOfSale, PersonAdd, Traffic } from "@mui/icons-material";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";

const Login = (props) => {
  const theme = useTheme();
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };
  return (
    <div className='auth-form-container App'>
    <Box className='border'>
    <h2>Login</h2>
    <form onSubmit={handlesubmit} className='login-form'>
      <label htmlFor="email">Email</label>
      <input value = {email} onChange={(e) => setemail(e.target.value)} type='email' placeholder='abc@gmail.com'></input>
      <label htmlFor="password">Password</label>
      <input value = {pass} onChange={(e) => setpass(e.target.value)} type='password' placeholder='******'></input>
      <button className='button-form' type='submit'>login</button>
    </form>
    </Box>
  </div>
  );
};

export default Login;
