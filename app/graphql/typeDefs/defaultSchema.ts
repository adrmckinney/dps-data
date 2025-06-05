export const defaultDefs = `
  scalar JSON
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

  enum DataType {
    POPULATION_GRADE
    POPULATION_SUBGROUP
    ACHIEVEMENT_OVERALL
    ACHIEVEMENT_SUBGROUPS
    DISCIPLINE_OVERALL
    DISCIPLINE_SUBGROUPS
    OTHER
  }

  input FilterOperatorObject {
    operator: Operator!
    value: JSON! # Use JSON scalar for the mixed value types
  }

  input QueryModifiers {
    dataTypes: [DataType!]  
    filters: JSON
    sort: SortInput
  }

  input SortInput {
    field: String!
    direction: OrderDirection!
  }
`;
