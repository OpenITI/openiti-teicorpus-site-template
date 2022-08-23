const basePath = process.env.BASEPATH
const title = "OpenITI TEI Corpus Template"
const htmlTitle = title

// Determined remote TEI files to process
const sitemap = require("./static/sitemap.json")
const remotes = sitemap.authors.map(a => a.books.map(b => b.files.map(f => ({
    resolve: "gatsby-source-remote-file",
    options: {
      url: f.url,
      name: f.url.split('/').at(-1).replace(/\.xml$/, "")
    }
  })
))).flat(3)

module.exports = {
  pathPrefix: basePath,
  siteMetadata: {
    title,
    htmlTitle,
    description: `OpenITI TEI Corpus Template`,
    menuLinks: [
      {
        name: 'Table of Contents',
        link: '/'
      },
    ]
  },
  plugins: [
    ...remotes,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-material-ui`,
    {
      resolve: `gatsby-theme-ceteicean`,
      options: {
        namespaces: {
          "http://www.tei-c.org/ns/1.0": "tei",
          "http://www.w3.org/XML/1998/namespace": "xml",
          "http://www.w3.org/2001/XInclude": "xi"
        }
      }
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `static`,
        name: 'map'
      },
    },
  ],
}
