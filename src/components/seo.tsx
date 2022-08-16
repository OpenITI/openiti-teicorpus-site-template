import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import theme from "../theme"
import { Box } from "@mui/material"

interface Props {
  description?: string
  lang?: string
  meta?: []
  title?: string
}

const styles = {
  Body: {
    "&& ::selection": { 
      background: theme.palette.primary.main,
      color: theme.palette.secondary.main
    }
  }
}

const SEO = ({ description, lang, meta, title }: Props) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const fullTitle = `${title} | ${site.siteMetadata.title}` 

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={fullTitle}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: fullTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:title`,
          content: fullTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta || [])}
    >
      <link
        href="https://fonts.googleapis.com/css?family=Fira+Sans:400,400i,600,600i"
        rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css2?family=Amiri&display=swap" rel="stylesheet"/>
      <Box component="body" sx={styles.Body} />
    </Helmet>
  )
}

export default SEO
