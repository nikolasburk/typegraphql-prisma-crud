import 'reflect-metadata'
import * as tq from 'type-graphql'
import { ApolloServer } from 'apollo-server'
import {
  CreateUserResolver,
  UpdateUserResolver,
  DeleteUserResolver,
  FindOneUserResolver,
  FindManyUserResolver,
  CreatePostResolver,
  UpdatePostResolver,
  DeletePostResolver,
  FindOnePostResolver,
  FindManyPostResolver,
} from './generated/type-graphql'
import { createContext } from './context'

const app = async () => {
  const schema = await tq.buildSchema({
    validate: false,
    resolvers: [
      CreateUserResolver,
      UpdateUserResolver,
      DeleteUserResolver,
      FindOneUserResolver,
      FindManyUserResolver,
      CreatePostResolver,
      UpdatePostResolver,
      DeletePostResolver,
      FindOnePostResolver,
      FindManyPostResolver,
    ],
  })

  new ApolloServer({ schema, context: createContext() }).listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at: http://localhost:4000`),
  )
}

app()
