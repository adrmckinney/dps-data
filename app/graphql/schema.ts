import { GraphQLJSON } from 'graphql-scalars';

export const resolverTypes = {
    JSON: GraphQLJSON,
};

export const typeDefs = `
  enum Operator {
    equals
    in
    notIn
    lt
    lte
    gt
    gte
    contains
    startsWith
    endsWith
    not
  }

  enum OrderDirection {
    asc
    desc
  }

  input FilterOperatorObject {
    operator: Operator!
    value: JSON! # We'll use JSON scalar for the mixed value types
  }

  input FilterPayload {
    filters: FiltersInput
    sort: SortInput
  }

  input FiltersInput {
    subgroupId: FilterOperatorObject
    gradeId: FilterOperatorObject
    schoolId: FilterOperatorObject
    yearId: FilterOperatorObject
    levelId: FilterOperatorObject
  }

  input SortInput {
    field: String!
    direction: OrderDirection!
  }

  type Year {
    id: ID!
    schoolYear: String!
  }

  type School {
    id: ID!
    name: String!
    levelId: Int!
  }

  type Grade {
    id: ID!
    name: String!
    levelId: Int!
  }

  type Population {
    id: ID!
    count: Int!
    yearId: Int!
    schoolId: Int!
    gradeId: Int
    subgroupId: Int!
  }

  type Query {
    years: [Year!]!
    schools: [School!]!
    grades: [Grade!]!
    subgroupPopulation(filters: FilterPayload): [Population!]!
    gradePopulation(filters: FilterPayload): [Population!]!
  }
`;
