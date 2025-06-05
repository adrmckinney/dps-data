import { gql } from 'graphql-tag';

export const typeDefs = gql`
    type Query {
        referenceData: ReferenceData!
        dataSources: [DataSource!]!
        subgroupPopulation(filters: FilterInput!): [SubgroupPopulation!]!
        gradePopulation(filters: FilterInput!): [GradePopulation!]!
    }

    type ReferenceData {
        years: [Year!]!
        grades: [Grade!]!
        levels: [Level!]!
        schools: [School!]!
        disciplines: [Discipline!]!
        subjects: [Subject!]!
        subgroupTypes: [SubgroupType!]!
        subgroups: [Subgroup!]!
        dataSources: [DataSource!]!
    }

    input FilterInput {
        dataTypes: [String!]
        years: [Int!]
        schools: [Int!]
        subgroups: [Int!]
        grades: [Int!]
    }

    type SubgroupPopulation {
        id: ID!
        schoolId: ID!
        yearId: ID!
        subgroupId: ID!
        pdfSourceId: ID!
        count: Int!
    }

    type GradePopulation {
        id: ID!
        schoolId: ID!
        yearId: ID!
        gradeId: ID!
        pdfSourceId: ID!
        count: Int!
    }
`;
