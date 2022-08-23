import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import CssBaseline from "@mui/material/CssBaseline"
import { ThemeProvider, Theme, StyledEngineProvider } from "@mui/material/styles";

import theme from "../theme"
import Header from "./header"
import Footer from "./footer"
import EditionFooter from "./editionFooter"

import styled from '@emotion/styled'

type Children = JSX.Element | JSX.Element[]

interface Props {
  location?: string
  children?: Children
}

const Main = styled.div(() => ({
  paddingBottom: '1.45rem',
  minHeight: "60vh",
  "& h2, & h3": {
    paddingBottom: '1rem'
  }
}))

const Layout = ({ location, children }: Props) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)
  
  const {title, menuLinks, doi, issue} = data.site.siteMetadata

  let footer = <Footer/>
  if (location === "example") {
    footer = <EditionFooter>{footer}</EditionFooter>
  }

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header
          issue={issue}
          location={location || ''}
          siteTitle={title}
          menuLinks={menuLinks}
          doi={doi}
        />
        <Main>{children}</Main>
        {footer}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default Layout
