import { GraphQLServer } from 'graphql-yoga';

//Tipos escalares de GraphQL String, Boolean, Int, Float, ID

// Definición de tipos (Schema)
const typeDefs = `
  type Query {
    greeting(name: String): String!
    me: User!
    post: Post!
    add(a: Int!, b: Int!): Int!
  }

  type User {
    id: ID!
    name: String!
    email: String!
    age: Int
  }

  type Post {
    id: ID!
    title: String!
    body: String!
    published: Boolean!
  }
`

//Resolvers
const resolvers = {
  Query: {
    greeting(parent, args, ctx, info){
      if(args.name){
        return `Hola ${args.name}`;
      }else{
        return 'Hola';
      }
    },
    me(){
      return { id:'abc123', name:'Sebastián', email:'slcaniob@gmail.com', age:23 }
    },
    post(){
      return { 
        id: '123456',
        title: 'Testing with Jest',
        body: 'blablalblalblalblalblalalblalblal',
        published: false
      }
    },
    add(parent, args, ctx, info){
      return args.a + args.b;
    }
  }
}

//Configuración del servidor
const server = new GraphQLServer({
  typeDefs,
  resolvers
})


//Inicio el servidor, por defecto inicia en puerto :4000
server.start(() => {
  console.log('The server is up on port 4000');
})