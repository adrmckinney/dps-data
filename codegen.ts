import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    schema: 'http://localhost:3000/api/graphql', // your Yoga GraphQL endpoint
    documents: 'app/**/*.{ts,tsx}', // wherever your queries are defined
    generates: {
        './generated/graphql.ts': {
            plugins: ['typescript', 'typescript-operations', 'typescript-react-query'],
            config: {
                exposeFetcher: true,
                exposeDocument: true,
                fetcher: 'fetch',
            },
        },
    },
};
export default config;
