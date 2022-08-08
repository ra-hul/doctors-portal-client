import { Container, Grid, TextField, Typography, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import login from "../../../images/login.png";

const Register = () => {
  const [loginData, setLoginData] = useState({});

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("Your Password is incorrect");
      return;
    }
    e.preventDefault();
  };
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item sx={{ mt: 8 }} xs={12} md={6}>
          <Typography variant="body1" gutterBottom>
            Register
          </Typography>
          <form onSubmit={handleLoginSubmit}>
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Your Email"
              name="email"
              type="email"
              onChange={handleOnChange}
              variant="standard"
            />
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-password-input"
              label="Your Password"
              name="password"
              onChange={handleOnChange}
              type="password"
              autoComplete="current-password"
              variant="standard"
            />
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-password-input"
              label=" Confirm Password"
              name="password2"
              onChange={handleOnChange}
              type="password"
              autoComplete="current-password"
              variant="standard"
            />
            <Button
              variant="contained"
              type="submit"
              sx={{ width: "75%", m: 1 }}
            >
              Register
            </Button>
            <Link style={{ textDecoration: "none" }} to="/login">
              <Button variant="text">Already Registered? Please Login</Button>
            </Link>
          </form>
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{}} src={login}></img>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
