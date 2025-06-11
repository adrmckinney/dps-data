import { DataSet, GradePopulation, SubGroupPopulation } from '@prisma/client';

export type QueryModifierResponse =
    | { dataSetId: DataSet['id']; type: 'population_grade'; data: GradePopulationResponse[] }
    | { dataSetId: DataSet['id']; type: 'population_subgroup'; data: SubGroupPopulationResponse[] };

export type GradePopulationResponse = Pick<
    GradePopulation,
    'id' | 'count' | 'createdAt' | 'gradeId' | 'pdfSourceId' | 'schoolId' | 'updatedAt' | 'yearId'
>;

export type SubGroupPopulationResponse = Pick<
    SubGroupPopulation,
    | 'id'
    | 'schoolId'
    | 'subGroupId'
    | 'yearId'
    | 'count'
    | 'pdfSourceId'
    | 'createdAt'
    | 'updatedAt'
>;
