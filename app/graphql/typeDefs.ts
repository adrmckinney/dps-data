import { gql } from 'graphql-tag';

export const typeDefs = gql`
    type ReferenceData {
        years: [Year!]!
        grades: [Grade!]!
        levels: [Level!]!
        schools: [School!]!
        disciplines: [Discipline!]!
        subjects: [Subject!]!
        subgroupTypes: [SubgroupType!]!
        subgroups: [Subgroup!]!
    }

    type Year {
        id: ID!
        startYear: Int!
        endYear: Int!
        schoolYear: String!
    }

    type Level {
        id: ID!
        name: String!
        abbreviation: String!
    }

    type Discipline {
        id: ID!
        name: String!
        abbreviation: String!
    }

    type Subject {
        id: ID!
        name: String!
        levelId: Int!
    }

    type Subgroup {
        id: ID!
        name: String!
        abbreviation: String!
        typeId: ID!
        key: String!
        secondaryKey: String!
        availableForDataTypes: [String!]!
    }

    type Query {
        referenceData: ReferenceData!
        years: [Year!]!
        schools: [School!]!
        grades: [Grade!]!
        subgroupPopulation(filters: FilterInput!): [SubgroupPopulation!]!
        gradePopulation(filters: FilterInput!): [GradePopulation!]!
    }

    input FilterInput {
        dataTypes: [String!]
        years: [Int!]
        schools: [Int!]
        subgroups: [Int!]
        grades: [Int!]
    }

    type School {
        id: ID!
        name: String!
        code: Int!
        abbreviation: String!
        otherNames: [String!]!
        levelId: ID!
    }

    type Grade {
        id: ID!
        name: String!
        abbreviation: String!
        alternativeName: String!
        levelId: ID!
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

    type DataSource {
        id: ID!
        url: String!
        localPath: String
        title: String!
        yearId: ID!
        published: String!
        notes: String
        dataType: String!
        docType: String!
    }

    type SubgroupType {
        id: ID!
        name: String!
    }
`;
