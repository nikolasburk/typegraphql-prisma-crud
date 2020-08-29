import "reflect-metadata";
import * as tq from "type-graphql";
import { PostResolver } from "./PostResolver";
import { UserResolver } from "./UserResolver";
import { GraphQLServer } from "graphql-yoga";
import { createContext } from "./context";
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
} from "./generated/type-graphql";

const app = async () => {
  const schema = await tq.buildSchema({
    resolvers: [CreateUserResolver, UpdateUserResolver, DeleteUserResolver, FindOneUserResolver, FindManyUserResolver, CreatePostResolver, UpdatePostResolver, DeletePostResolver, FindOnePostResolver, FindManyPostResolver],
  });

  const context = createContext();

  new GraphQLServer({ schema, context }).start(() =>
    console.log(`🚀 Server ready at: http://localhost:4000`)
  );
};

app();
