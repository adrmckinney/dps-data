export const GET_SUBGROUP_POPULATION = `
  query GetSubgroupPopulation($filters: FilterInput) {
    subgroupPopulation(filters: $filters) {
      id
      count
      year {
        id
        schoolYear
      }
      school {
        id
        name
        levelId
      }
      subgroup {
        id
        name
        typeId
      }
      grade {
        id
        name
        levelId
      }
    }
  }
`;

export type SubgroupPopulationResponse = {
    subgroupPopulation: {
        id: string;
        count: number;
        year: {
            id: string;
            schoolYear: string;
        };
        school: {
            id: string;
            name: string;
            levelId: number;
        };
        subgroup: {
            id: string;
            name: string;
            typeId: number;
        };
        grade: {
            id: string;
            name: string;
            levelId: number;
        };
    }[];
};
