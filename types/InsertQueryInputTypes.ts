export type FlatLevelToDataSetCreateInput = {
    levelId: number;
    dataSetId: number;
};

export type FlatSubGroupCreateInput = {
    name: string;
    abbreviation: string;
    key: string;
    secondaryKey: string;
    typeId: number;
};

export type FlatSubGroupToDataSetCreateInput = {
    subGroupId: number;
    dataSetId: number;
};

export type FlatGradeToDataSetCreateInput = {
    gradeId: number;
    dataSetId: number;
};

export type FlatDisciplineToDataSetCreateInput = {
    disciplineId: number;
    dataSetId: number;
};

export type FlatSubjectToDataSetCreateInput = {
    subjectId: number;
    dataSetId: number;
};
