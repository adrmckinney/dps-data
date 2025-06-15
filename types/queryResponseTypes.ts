import type {
    DataSet,
    Grade,
    GradePopulation,
    Level,
    School,
    SubGroup,
    SubGroupPopulation,
    SubGroupType,
    Year,
} from '@prisma/client';

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

export type HydratedQueryModifierResponse = Hydrate<QueryModifierResponse>;

type Hydrate<T extends QueryModifierResponse> = T extends {
    type: 'population_grade';
}
    ? Omit<T, 'data'> & { data: HydratedGradePopulation[] }
    : T extends { type: 'population_subgroup' }
    ? Omit<T, 'data'> & { data: HydratedSubGroupPopulation[] }
    : never;

export type HydratedGradePopulation = Omit<
    GradePopulationResponse,
    'gradeId' | 'schoolId' | 'yearId'
> & {
    grade: HydratedGrade;
    school: HydratedSchool;
    year: HydratedYear;
};

export type HydratedSubGroupPopulation = Omit<
    SubGroupPopulationResponse,
    'subGroupId' | 'schoolId' | 'yearId'
> & {
    subGroup: HydratedSubGroup;
    school: HydratedSchool;
    year: HydratedYear;
};

export type HydratedGrade = Omit<Grade, 'createdAt' | 'updatedAt'> & {
    level: Omit<Level, 'createdAt' | 'updatedAt'>;
};
export type HydratedSchool = Omit<School, 'createdAt' | 'updatedAt'> & {
    level: Omit<Level, 'createdAt' | 'updatedAt'>;
};
export type HydratedSubGroup = Omit<SubGroup, 'createdAt' | 'updatedAt'> & {
    type: Omit<SubGroupType, 'createdAt' | 'updatedAt'>;
};
export type HydratedYear = Omit<Year, 'createdAt' | 'updatedAt'>;
