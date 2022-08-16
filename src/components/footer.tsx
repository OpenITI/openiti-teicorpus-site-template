import React from "react"
import Grid from "@mui/material/Grid"
import Container from "@mui/material/Container"
import { Box } from "@mui/material"
import logo from "../images/logo.png"

const styles = {
  footer: {
    backgroundColor: "#efefef",
    padding: "1rem 0",
    borderTop: "1px solid #dadada",
    fontSize: "1rem"
  },
  logo: {
    textAlign: "right",
  }
}


const Footer = () => (
  <Box component="footer" sx={styles.footer}>
    <Container maxWidth="lg">
      <Grid container={true}>
        <Grid item={true} xs={9}>
          <a
            rel="license"
            href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
          >
            <img
              alt="Creative Commons License"
              src="http://i.creativecommons.org/l/by-nc-sa/3.0/88x31.png"
            />
          </a>
          <br />
          This work is licensed under a{" "}
          <a
            rel="license"
            href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
          >
            Creative Commons Attribution-NonCommercial-ShareAlike 4.0
            International License
          </a>
          . 
          
        </Grid>
        <Grid item={true} xs={3} sx={styles.logo}>
          <a href="https://openiti.org">
            <img
              src={logo}
              alt="OpenITI logo"
              width={100}
            />
          </a>
        </Grid>
      </Grid>
    </Container>
  </Box>
)

export default Footer