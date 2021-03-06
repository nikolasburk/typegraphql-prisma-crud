import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";

@TypeGraphQL.ObjectType({
  isAbstract: true,
  description: undefined,
})
export class UserSumAggregateOutputType {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined
  })
  id!: number;
}
