exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  await makeToc(createPage, reporter, graphql)
}

const makeToc = async (createPage, reporter, graphql) => {
  const component = require.resolve(`./src/templates/Toc.tsx`)

  const result = await graphql(`
    query {
      staticJson {
        group
        authors {
          books {
            id
            files {
              file
              title
              version
            }
            title
          }
          id
          name
        }
      }
    }  
  `)
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  createPage({
    path: "/",
    component,
    context: result.data.staticJson
  })
}

