import React from "react";
import Grid from "@mui/material/Grid";
import chair from "../../../images/chair.png";
import bg from "../../../images/bg.png";
import { Button, Typography, Container, Box } from "@mui/material";

const bannerBg = {
  background: `url(${bg})`,
  height: "450px",
};

const verticalCenter = {
  display: "flex",
  alignItems: "center",
  height: 400,
};

const Banner = () => {
  return (
    <Container style={bannerBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid
          item
          style={{ ...verticalCenter, textAlign: "left" }}
          xs={12}
          md={6}
        >
          <Box>
            <Typography variant="h3">
              Your New Smile <br />
              Starts Here
            </Typography>
            <Typography
              variant="h6"
              sx={{ my: 3, fontSize: 13, color: "gray", fontWeight: 300 }}
            >
              This is the doctors portal where you can make an online meetup
              with doctors and take advice form them doctors and take advice
              form them doctors and take advice form them
            </Typography>
            <Button style={{ backgroundColor: "#5CE7ED" }} variant="contained">
              GET Appointment
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} style={verticalCenter}>
          <img style={{ width: "300px" }} src={chair}></img>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
