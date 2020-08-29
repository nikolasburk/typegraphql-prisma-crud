import * as TypeGraphQL from "type-graphql";

export enum UserDistinctFieldEnum {
  email = "email",
  id = "id",
  name = "name"
}
TypeGraphQL.registerEnumType(UserDistinctFieldEnum, {
  name: "UserDistinctFieldEnum",
  description: undefined,
});
