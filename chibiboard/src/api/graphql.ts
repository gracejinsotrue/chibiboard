import { ApolloServer, gql } from "apollo-server-micro";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const typeDefs = gql`
  type MoodBoard {
    id: ID!
    title: String!
    images: [String!]!
    createdAt: String!
  }
  type Query {
    getMoodBoards: [MoodBoard!]!
  }
  type Mutation {
    createMoodBoard(title: String!, images: [String!]!): MoodBoard!
  }
`;

const resolvers = {
  Query: {
    getMoodBoards: async () => await prisma.moodBoard.findMany(),
  },
  Mutation: {
    createMoodBoard: async (_: any, { title, images }: { title: string; images: string[] }) => {
      return await prisma.moodBoard.create({ data: { title, images } });
    },
  },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export default apolloServer.createHandler({ path: "/api/graphql" });

export const config = { api: { bodyParser: false } };
