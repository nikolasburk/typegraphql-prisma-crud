import * as TypeGraphQL from "type-graphql";

export enum PostDistinctFieldEnum {
  authorId = "authorId",
  content = "content",
  id = "id",
  published = "published",
  title = "title"
}
TypeGraphQL.registerEnumType(PostDistinctFieldEnum, {
  name: "PostDistinctFieldEnum",
  description: undefined,
});
