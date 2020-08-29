# GraphQL Server Example

This example shows how to **implement a CRUD GraphQL API with TypeScript** based on [Prisma Client](https://github.com/prisma/prisma2/blob/master/docs/prisma-client-js/api.md), [TypeGraphQL](https://typegraphql.com/) and the [`typegraphql-prisma`](https://www.npmjs.com/package/typegraphql-prisma) integration. It is based on a SQLite database - you can find the database file with some dummy data at [`./prisma/dev.db`](./prisma/dev.db).

## How to use

### 1. Download example & install dependencies

Clone this repository:

```
git clone git@github.com:nikolasburk/typegraphql-prisma-crud.git --depth=1
```

Install npm dependencies:

```
cd typegraphql-prisma-crud
npm install
```


### 2. Start the GraphQL server

Launch your GraphQL server with this command:

```
npm run dev
```

Navigate to [http://localhost:4000](http://localhost:4000) in your browser to explore the CRUD API of your GraphQL server in a [GraphQL Playground](https://github.com/prisma/graphql-playground).
