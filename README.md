# GraphQL Server CRUD Example (SQLite)

This example shows how to **implement a CRUD GraphQL API with TypeScript** based on [Prisma Client](https://github.com/prisma/prisma2/blob/master/docs/prisma-client-js/api.md), [TypeGraphQL](https://typegraphql.com/) and the [`typegraphql-prisma`](https://www.npmjs.com/package/typegraphql-prisma) integration. It is based on a SQLite database - you can find the database file with some dummy data at [`./prisma/dev.db`](./prisma/dev.db).

## How to use

### 1. Download example & install dependencies

Clone this repository:

```
git clone https://github.com/nikolasburk/typegraphql-prisma-crud.git --depth=1
```

Install npm dependencies:

```
cd typegraphql-prisma-crud
npm install
```

or 

```
cd typegraphql-prisma-crud
yarn
```


and generate the schema:

```
npx prisma generate
```

or:

```
yarn prisma generate
```


### 2. Start the GraphQL server

Launch your GraphQL server with this command:

```
npm run dev
```

or 

```
yarn run dev
```


Navigate to [http://localhost:4000](http://localhost:4000) in your browser to explore the CRUD API of your GraphQL server in a [GraphQL Playground](https://github.com/prisma/graphql-playground). 


### 3. Explore GraphQL API

#### Retrieve all posts

```graphql
{
  posts {
    id
    title
    author {
      email
      name
      id
    }
  }
}
```

#### Create new post with author (nested mutation)

```graphql
mutation {
  createPost(data: {
    title: "Hello World"
    author: {
      create: {
        name: "James"
        email: "james@prisma.io"
      }
    }
  }) {
    id
    author {
      id
    }
  }
}
```
