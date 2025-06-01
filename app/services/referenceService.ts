import { print } from 'graphql';
import { REFERENCE_DATA_QUERY } from '../graphql/queries/referenceData';

export async function getAllReferenceData() {
    const res = await fetch('/api/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: print(REFERENCE_DATA_QUERY),
        }),
    });

    const json = await res.json();

    if (json.errors) {
        console.error('GraphQL Error:', json.errors);
        throw new Error(json.errors[0]?.message ?? 'Unknown error');
    }

    return json.data.referenceData;
}
