const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Book {
        _id: ID
        authors: String
        description: String
        image: String
        title: String
    }

    type User {
        _id: ID
        username: String
        email: String
        password: String
        
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        books: [Book]
        users: [User]
        user(username: String!): User
        me: User
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        
    }
`;

module.exports = typeDefs;