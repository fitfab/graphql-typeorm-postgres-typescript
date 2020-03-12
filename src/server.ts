import 'reflect-metadata'
import { ApolloServer } from 'apollo-server'
import { createConnection } from 'typeorm'
import typeDefs from './schemas/'
import resolvers from './resolvers'

const startServer = async () => {
  // The ApolloServer constructor requires two parameters: your schema
  // definition and your set of resolvers.
  const server = new ApolloServer({ typeDefs, resolvers })

  // Connect to the Postgres database
  await createConnection()

  // The `listen` method launches a web server.
  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`)
  })
}

startServer()
