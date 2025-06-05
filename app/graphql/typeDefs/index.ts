import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeTypeDefs } from '@graphql-tools/merge';
import { DocumentNode } from 'graphql';
import path from 'path';
import { defaultDefs } from './defaultSchema';

const currentDir = path.dirname(new URL(import.meta.url).pathname);

// Debug the resolved path
console.log('Resolved directory:', currentDir);

// Load internal types (used only in nested structures)
const internalTypes = loadFilesSync(path.join(currentDir, 'internal'), {
    extensions: ['.graphql'],
});

// Load top-level types (exposed in root Query)
const topLevelTypes = loadFilesSync(path.join(currentDir, '*.graphql'), {
    extensions: ['.graphql'],
    recursive: false,
    ignoreIndex: true,
});

// console.log(
//     'Internal Types:',
//     internalTypes.map((doc: DocumentNode) => {
//         const typeDefinitions = doc.definitions.map(def => {
//             if (def.kind === 'ObjectTypeDefinition') {
//                 return {
//                     typeName: def.name.value,
//                     fields: def.fields?.map(field => ({
//                         name: field.name.value,
//                         type:
//                             field.type.kind === 'NamedType'
//                                 ? field.type.name.value
//                                 : 'List/NonNull',
//                     })),
//                 };
//             }
//             return { typeName: 'Non-object type', kind: def.kind };
//         });

//         return {
//             filename: doc.loc?.source?.name,
//             sourceText: doc.loc?.source?.body,
//             types: typeDefinitions,
//         };
//     })
// );

// console.log(
//     '\nTop Level Types:',
//     topLevelTypes.map((doc: DocumentNode) => {
//         const typeDefinitions = doc.definitions.map(def => {
//             if (def.kind === 'ObjectTypeDefinition') {
//                 return {
//                     typeName: def.name.value,
//                     fields: def.fields?.map(field => ({
//                         name: field.name.value,
//                         type:
//                             field.type.kind === 'NamedType'
//                                 ? field.type.name.value
//                                 : 'List/NonNull',
//                     })),
//                 };
//             }
//             return { typeName: 'Non-object type', kind: def.kind };
//         });

//         return {
//             filename: doc.loc?.source?.name,
//             sourceText: doc.loc?.source?.body,
//             types: typeDefinitions,
//         };
//     })
// );
// Extract type names from top-level definitions to create Query fields
const getTypeNames = (typeDefs: DocumentNode[]) =>
    typeDefs
        .flatMap(doc => doc.definitions || [])
        .filter(def => def.kind === 'ObjectTypeDefinition')
        .map(def => def.name.value)
        .filter(name => name !== 'Query');

const topLevelTypeNames = getTypeNames(topLevelTypes);

const queryFields = topLevelTypeNames
    .map(name => `  ${name.charAt(0).toLowerCase() + name.slice(1)}: ${name}!`)
    .join('\n');

// Have to pre-populate a reference to some of the internal schemas
// because the are trying to be read before they are implemented
const queryTypeDef = `type Query {
  _empty: String
  years: [Year!]!
  schools: [School!]!
  grades: [Grade!]!
  dataSources: [DataSource!]!
  visualizeData(payload: QueryModifiers!): DataVisualization!
${queryFields}
}`;

export const typeDefs = mergeTypeDefs([
    // baseTypes,
    defaultDefs,
    ...internalTypes,
    ...topLevelTypes,
    queryTypeDef,
]);
