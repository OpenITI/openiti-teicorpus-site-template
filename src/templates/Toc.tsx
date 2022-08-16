import React from "react"

import SEO from "../components/seo"
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"

import theme from "../theme"
import Layout from "../components/layout"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemText from "@mui/material/ListItemText"
import IconButton from "@mui/material/IconButton"
import TeiLogo from "../components/TeiLogo"
import Box from "@mui/material/Box"

import { navigate } from "gatsby"


interface Props {
  pageContext: {
    group: string
    authors: {
      name: string
      id: string
      books: {
        title: string
        id: string
        files: {
          title: string
          version: string
          file: string
        }[]
      }[]
    }[]
  },
  location: string
}



export default function Introduction({pageContext}: Props) {
  console.log(pageContext)

  return (
    <Layout location="toc">
      <SEO title="Table of Contents" />
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Container component="main" maxWidth="md">
          <Typography variant="h3" component="h2" gutterBottom={false}>
            OpenITI Corpus folder: {pageContext.group}
          </Typography>
          {
            pageContext.authors.map(a => (<div key={a.name}>
              <Typography variant="h4" component="h3">
                {a.name}
              </Typography>
              { a.books.map(b => (<div key={b.title}>
                <Typography variant="h5" component="h4">
                  {b.title}
                </Typography>
                <List>
                  {b.files.map(f => (
                    <ListItem dense key={f.title} secondaryAction={<Box sx={{paddingRight: "40px"}}>
                      <IconButton onClick={() => navigate(`/tei/${a.id}/${b.id}/${f.file}.xml`)}><TeiLogo style={{width: "40px", height: "40px"}}/></IconButton>
                      <IconButton onClick={() => navigate(`https://raw.githubusercontent.com/OpenITI/${pageContext.group}/master/data/${a.id}/${b.id}/${f.file}`)} sx={{width: "40px", height: "40px"}}>MD</IconButton>
                    </Box>}>
                      <ListItemButton onClick={() => navigate(f.file)}>
                        <ListItemText primary={f.title} secondary={f.version}/>
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </div>))}
            </div>))
          }
          </Container>
        </ThemeProvider>
      </StyledEngineProvider>
    </Layout>
  );
}
