import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { UserAvgAggregateOutputType } from "../outputs/UserAvgAggregateOutputType";
import { UserMaxAggregateOutputType } from "../outputs/UserMaxAggregateOutputType";
import { UserMinAggregateOutputType } from "../outputs/UserMinAggregateOutputType";
import { UserSumAggregateOutputType } from "../outputs/UserSumAggregateOutputType";

@TypeGraphQL.ObjectType({
  isAbstract: true,
  description: undefined,
})
export class AggregateUser {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined
  })
  count!: number;

  @TypeGraphQL.Field(_type => UserAvgAggregateOutputType, {
    nullable: true,
    description: undefined
  })
  avg?: UserAvgAggregateOutputType | undefined;

  @TypeGraphQL.Field(_type => UserSumAggregateOutputType, {
    nullable: true,
    description: undefined
  })
  sum?: UserSumAggregateOutputType | undefined;

  @TypeGraphQL.Field(_type => UserMinAggregateOutputType, {
    nullable: true,
    description: undefined
  })
  min?: UserMinAggregateOutputType | undefined;

  @TypeGraphQL.Field(_type => UserMaxAggregateOutputType, {
    nullable: true,
    description: undefined
  })
  max?: UserMaxAggregateOutputType | undefined;
}
