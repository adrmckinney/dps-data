import { makeExecutableSchema } from '@graphql-tools/schema';
import { GraphQLJSON } from 'graphql-scalars';
import { createYoga } from 'graphql-yoga';
import { NextRequest } from 'next/server';
import { resolvers } from '../../graphql/resolvers';
import { typeDefs } from '../../graphql/typeDefs';

const schema = makeExecutableSchema({
    typeDefs,
    resolvers: {
        JSON: GraphQLJSON,
        ...resolvers,
    },
});

const yoga = createYoga<{ req: NextRequest }>({
    graphqlEndpoint: '/api/graphql',
    fetchAPI: { Request, Response },
    schema,
});

export { yoga as GET, yoga as POST };
