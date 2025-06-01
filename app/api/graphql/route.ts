import { makeExecutableSchema } from '@graphql-tools/schema';
import { createYoga } from 'graphql-yoga';
import { NextRequest } from 'next/server';
import { resolvers } from '../../graphql/resolvers';
import { typeDefs } from '../../graphql/typeDefs';

const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});

const yoga = createYoga<{ req: NextRequest }>({
    schema,
    graphqlEndpoint: '/api/graphql',
    fetchAPI: { Request, Response },
});

export { yoga as GET, yoga as POST };
