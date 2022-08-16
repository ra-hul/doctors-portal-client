import {
  Alert,
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import login from "../../../images/login.png";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth;
  const location = useLocation();
  const history = useNavigate();
  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };
  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history);
  };
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item sx={{ mt: 8 }} xs={12} md={6}>
          <Typography variant="body1" gutterBottom>
            Login
          </Typography>
          <form onSubmit={handleLoginSubmit}>
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Your Email"
              name="email"
              type="email"
              onBlur={handleOnChange}
              variant="standard"
            />
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-password-input"
              label="Your Password"
              name="password"
              onBlur={handleOnChange}
              type="password"
              autoComplete="current-password"
              variant="standard"
            />
            <Button
              variant="contained"
              type="submit"
              sx={{ width: "75%", m: 1 }}
            >
              Login
            </Button>
            <Link style={{ textDecoration: "none" }} to="/register">
              <Button variant="text">New User? Please Register</Button>
            </Link>
            {isLoading && <CircularProgress />}
            {user?.email && (
              <Alert severity="success">User Created successfully</Alert>
            )}
            {authError && <Alert severity="error">{authError}</Alert>}
          </form>
          <p>------------------</p>
          <Button onClick={handleGoogleSignIn} variant="contained">
            Google Sign In
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{}} src={login}></img>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
