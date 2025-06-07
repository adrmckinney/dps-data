export type DataSetKeys =
    | 'POPULATION_GRADE'
    | 'POPULATION_SUBGROUP'
    | 'DISCIPLINE_OVERALL'
    | 'DISCIPLINE_SUBGROUPS'
    | 'ACHIEVEMENT_OVERALL'
    | 'ACHIEVEMENT_SUBGROUPS'
    | (string & {}); // Will need to add more in the future so don't want to limit the options.
