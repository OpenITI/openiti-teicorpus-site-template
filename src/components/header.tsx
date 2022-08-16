import { Link } from "gatsby"
import React from "react"
import Container from "@mui/material/Container"

import Nav from "./nav"

import titleImg from "../images/logo.png"
import banner from "../images/banner.png"
import theme from "../theme"

import styled from '@emotion/styled'

interface Links {
  name: string
  link: string
}

interface Props {
  location: string
  siteTitle: string
  menuLinks: Links[]
  doi: string
  issue: {
    short: string
    path: string
  }
}

// Styled components

const Banner = styled.div(() => ({
  backgroundImage: `url(${banner})`,
  backgroundPositionY: "-25px",
}))

const Wrapper = styled.header(() => ({
  background: theme.palette.secondary.main,
  marginBottom: "1.45rem",
}))

const Logo = styled.div(() => ({
  padding: "1.45rem 0 0 0",
  alignItems: "center",
  marginLeft: "-24px",
  display: "flex",
  "& a": {
    textDecoration: "none",
  },
  "& img": {
    maxWidth: "300px",
    padding: "10px 20px 15px 20px",
  },
  "& h1": {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: ".35em"
  }
}))

// Main Component

const Header = ({ location, menuLinks }: Props) => (
    <Wrapper>
      <Banner>
        <Container maxWidth="md" sx={{paddingTop: "1em", paddingBottom: "1em"}}>
          <Logo>
            <Link to="https://openiti.org">
              <img src={titleImg} alt="OpenITI logo" width={200} />
            </Link>
            <h1>Open Islamicate Texts Initiative</h1>
          </Logo>
        </Container>
      </Banner>
      <Nav location={location} menuLinks={menuLinks} />
    </Wrapper>
)

export default Header
