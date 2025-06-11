import type { FlatSubGroupCreateInput } from '../types/InsertQueryInputTypes.ts';
import type { SubGroupTypeEnumValue } from './SubGroupTypes.ts';
import { subGroupTypes } from './SubGroupTypes.ts';

export type SubGroupList = {
    name: string;
    abbreviation: (typeof SubGroupAbbreviations)[keyof typeof SubGroupAbbreviations];
    key: string;
    secondaryKey: string;
    typeId: SubGroupTypeEnumValue;
    dataSets: string[];
    collisions: (typeof SubGroupAbbreviations)[keyof typeof SubGroupAbbreviations][];
};

export const SubGroupAbbreviations = {
    // Race
    black: 'B',
    hispanic: 'H',
    white: 'W',
    americanIndian: 'I',
    asian: 'A',
    hawaiianPacific: 'HP',
    multiRacial: 'MR',
    other: 'O',

    // Gender
    male: 'M',
    female: 'F',

    // Race-Gender Combos
    blackMale: 'BM',
    blackFemale: 'BF',
    hispanicMale: 'HM',
    hispanicFemale: 'HF',
    whiteMale: 'WM',
    whiteFemale: 'WF',
    americanIndianMale: 'IM',
    americanIndianFemale: 'IF',
    asianMale: 'AM',
    asianFemale: 'AF',
    hawaiianPacificMale: 'HPM',
    hawaiianPacificFemale: 'HPF',
    multiRacialMale: 'MRM',
    multiRacialFemale: 'MRF',
    otherMale: 'OM',
    otherFemale: 'OF',

    // Exceptionality
    economicallyDisadvantaged: 'EDS',
    englishLearners: 'ELS',
    studentsWithDisabilities: 'SWD',
    gifted: 'AIG',

    // Overall
    all: 'ALL',
} as const;

export const RACE: SubGroupList[] = [
    {
        name: 'Black',
        abbreviation: SubGroupAbbreviations.black,
        key: 'B',
        secondaryKey: 'B',
        typeId: subGroupTypes.race.value,
        dataSets: ['POPULATION_SUBGROUP', 'DISCIPLINE_SUBGROUPS', 'ACHIEVEMENT_SUBGROUPS'],
        collisions: [SubGroupAbbreviations.blackMale, SubGroupAbbreviations.blackFemale],
    },
    {
        name: 'Hispanic',
        abbreviation: SubGroupAbbreviations.hispanic,
        key: 'H',
        secondaryKey: 'H',
        typeId: subGroupTypes.race.value,
        dataSets: ['POPULATION_SUBGROUP', 'DISCIPLINE_SUBGROUPS', 'ACHIEVEMENT_SUBGROUPS'],
        collisions: [SubGroupAbbreviations.hispanicMale, SubGroupAbbreviations.hispanicFemale],
    },
    {
        name: 'White',
        abbreviation: SubGroupAbbreviations.white,
        key: 'W',
        secondaryKey: 'W',
        typeId: subGroupTypes.race.value,
        dataSets: ['POPULATION_SUBGROUP', 'DISCIPLINE_SUBGROUPS', 'ACHIEVEMENT_SUBGROUPS'],
        collisions: [SubGroupAbbreviations.whiteMale, SubGroupAbbreviations.whiteFemale],
    },
    {
        name: 'American Indian',
        abbreviation: SubGroupAbbreviations.americanIndian,
        key: 'I',
        secondaryKey: 'I',
        typeId: subGroupTypes.race.value,
        dataSets: ['POPULATION_SUBGROUP'],
        collisions: [
            SubGroupAbbreviations.americanIndianMale,
            SubGroupAbbreviations.americanIndianFemale,
        ],
    },
    {
        name: 'Asian',
        abbreviation: SubGroupAbbreviations.asian,
        key: 'A',
        secondaryKey: 'A',
        typeId: subGroupTypes.race.value,
        dataSets: ['POPULATION_SUBGROUP'],
        collisions: [SubGroupAbbreviations.asianMale, SubGroupAbbreviations.asianFemale],
    },
    {
        name: 'Hawaiian Pacific',
        abbreviation: SubGroupAbbreviations.hawaiianPacific,
        key: 'HP',
        secondaryKey: 'HP',
        typeId: subGroupTypes.race.value,
        dataSets: ['POPULATION_SUBGROUP'],
        collisions: [
            SubGroupAbbreviations.hawaiianPacificMale,
            SubGroupAbbreviations.hawaiianPacificFemale,
        ],
    },
    {
        name: 'Multi Racial',
        abbreviation: SubGroupAbbreviations.multiRacial,
        key: 'MR',
        secondaryKey: 'MR',
        typeId: subGroupTypes.race.value,
        dataSets: ['POPULATION_SUBGROUP'],
        collisions: [
            SubGroupAbbreviations.multiRacialMale,
            SubGroupAbbreviations.multiRacialFemale,
        ],
    },
    {
        name: 'Other',
        abbreviation: SubGroupAbbreviations.other,
        key: 'O',
        secondaryKey: 'O',
        typeId: subGroupTypes.race.value,
        dataSets: ['POPULATION_SUBGROUP', 'DISCIPLINE_SUBGROUPS', 'ACHIEVEMENT_SUBGROUPS'],
        collisions: [SubGroupAbbreviations.otherMale, SubGroupAbbreviations.otherFemale],
    },
];

export const GENDER: SubGroupList[] = [
    {
        name: 'Male',
        abbreviation: SubGroupAbbreviations.male,
        key: 'M',
        secondaryKey: 'M',
        typeId: subGroupTypes.gender.value,
        dataSets: ['POPULATION_SUBGROUP', 'DISCIPLINE_SUBGROUPS', 'ACHIEVEMENT_SUBGROUPS'],
        collisions: [
            SubGroupAbbreviations.asianMale,
            SubGroupAbbreviations.blackMale,
            SubGroupAbbreviations.otherMale,
            SubGroupAbbreviations.whiteMale,
            SubGroupAbbreviations.hispanicMale,
            SubGroupAbbreviations.multiRacialMale,
            SubGroupAbbreviations.americanIndianMale,
            SubGroupAbbreviations.hawaiianPacificMale,
        ],
    },
    {
        name: 'Female',
        abbreviation: SubGroupAbbreviations.female,
        key: 'F',
        secondaryKey: 'F',
        typeId: subGroupTypes.gender.value,
        dataSets: ['POPULATION_SUBGROUP', 'DISCIPLINE_SUBGROUPS', 'ACHIEVEMENT_SUBGROUPS'],
        collisions: [
            SubGroupAbbreviations.asianFemale,
            SubGroupAbbreviations.blackFemale,
            SubGroupAbbreviations.otherFemale,
            SubGroupAbbreviations.whiteFemale,
            SubGroupAbbreviations.hispanicFemale,
            SubGroupAbbreviations.multiRacialFemale,
            SubGroupAbbreviations.americanIndianFemale,
            SubGroupAbbreviations.hawaiianPacificFemale,
        ],
    },
];

export const RACE_GENDER_COMBO: SubGroupList[] = [
    {
        name: 'Black Male',
        abbreviation: SubGroupAbbreviations.blackMale,
        key: 'Black - M',
        secondaryKey: 'Black - M',
        typeId: subGroupTypes['race-gender combo'].value,
        dataSets: ['POPULATION_SUBGROUP', 'DISCIPLINE_SUBGROUPS', 'ACHIEVEMENT_SUBGROUPS'],
        collisions: [SubGroupAbbreviations.black, SubGroupAbbreviations.male],
    },
    {
        name: 'Black Female',
        abbreviation: SubGroupAbbreviations.blackFemale,
        key: 'Black - F',
        secondaryKey: 'Black - F',
        typeId: subGroupTypes['race-gender combo'].value,
        dataSets: ['POPULATION_SUBGROUP', 'DISCIPLINE_SUBGROUPS', 'ACHIEVEMENT_SUBGROUPS'],
        collisions: [SubGroupAbbreviations.black, SubGroupAbbreviations.female],
    },
    {
        name: 'Hispanic Male',
        abbreviation: SubGroupAbbreviations.hispanicMale,
        key: 'Hispanic - M',
        secondaryKey: 'Hispanic - M',
        typeId: subGroupTypes['race-gender combo'].value,
        dataSets: ['POPULATION_SUBGROUP', 'DISCIPLINE_SUBGROUPS', 'ACHIEVEMENT_SUBGROUPS'],
        collisions: [SubGroupAbbreviations.hispanic, SubGroupAbbreviations.male],
    },
    {
        name: 'Hispanic Female',
        abbreviation: SubGroupAbbreviations.hispanicFemale,
        key: 'Hispanic - F',
        secondaryKey: 'Hispanic - F',
        typeId: subGroupTypes['race-gender combo'].value,
        dataSets: ['POPULATION_SUBGROUP', 'DISCIPLINE_SUBGROUPS', 'ACHIEVEMENT_SUBGROUPS'],
        collisions: [SubGroupAbbreviations.hispanic, SubGroupAbbreviations.female],
    },
    {
        name: 'White Male',
        abbreviation: SubGroupAbbreviations.whiteMale,
        key: 'White - M',
        secondaryKey: 'White - M',
        typeId: subGroupTypes['race-gender combo'].value,
        dataSets: ['POPULATION_SUBGROUP', 'DISCIPLINE_SUBGROUPS', 'ACHIEVEMENT_SUBGROUPS'],
        collisions: [SubGroupAbbreviations.white, SubGroupAbbreviations.male],
    },
    {
        name: 'White Female',
        abbreviation: SubGroupAbbreviations.whiteFemale,
        key: 'White - F',
        secondaryKey: 'White - F',
        typeId: subGroupTypes['race-gender combo'].value,
        dataSets: ['POPULATION_SUBGROUP', 'DISCIPLINE_SUBGROUPS', 'ACHIEVEMENT_SUBGROUPS'],
        collisions: [SubGroupAbbreviations.white, SubGroupAbbreviations.female],
    },
    {
        name: 'American Indian Male',
        abbreviation: SubGroupAbbreviations.americanIndianMale,
        key: 'American Indian - M',
        secondaryKey: 'American Indian - M',
        typeId: subGroupTypes['race-gender combo'].value,
        dataSets: ['POPULATION_SUBGROUP'],
        collisions: [SubGroupAbbreviations.americanIndian, SubGroupAbbreviations.male],
    },
    {
        name: 'American Indian Female',
        abbreviation: SubGroupAbbreviations.americanIndianFemale,
        key: 'American Indian - F',
        secondaryKey: 'American Indian - F',
        typeId: subGroupTypes['race-gender combo'].value,
        dataSets: ['POPULATION_SUBGROUP'],
        collisions: [SubGroupAbbreviations.americanIndian, SubGroupAbbreviations.female],
    },
    {
        name: 'Asian Male',
        abbreviation: SubGroupAbbreviations.asianMale,
        key: 'Asian - M',
        secondaryKey: 'Asian - M',
        typeId: subGroupTypes['race-gender combo'].value,
        dataSets: ['POPULATION_SUBGROUP'],
        collisions: [SubGroupAbbreviations.asian, SubGroupAbbreviations.male],
    },
    {
        name: 'Asian Female',
        abbreviation: SubGroupAbbreviations.asianFemale,
        key: 'Asian - F',
        secondaryKey: 'Asian - F',
        typeId: subGroupTypes['race-gender combo'].value,
        dataSets: ['POPULATION_SUBGROUP'],
        collisions: [SubGroupAbbreviations.asian, SubGroupAbbreviations.female],
    },
    {
        name: 'Hawaiian Pacific Male',
        abbreviation: SubGroupAbbreviations.hawaiianPacificMale,
        key: 'Hawaiian Pacific - M',
        secondaryKey: 'Hawaiian Pacific - M',
        typeId: subGroupTypes['race-gender combo'].value,
        dataSets: ['POPULATION_SUBGROUP'],
        collisions: [SubGroupAbbreviations.hawaiianPacific, SubGroupAbbreviations.male],
    },
    {
        name: 'Hawaiian Pacific Female',
        abbreviation: SubGroupAbbreviations.hawaiianPacificFemale,
        key: 'Hawaiian Pacific - F',
        secondaryKey: 'Hawaiian Pacific - F',
        typeId: subGroupTypes['race-gender combo'].value,
        dataSets: ['POPULATION_SUBGROUP'],
        collisions: [SubGroupAbbreviations.hawaiianPacific, SubGroupAbbreviations.female],
    },
    {
        name: 'Multi Racial Male',
        abbreviation: SubGroupAbbreviations.multiRacialMale,
        key: 'Multi Racial - M',
        secondaryKey: 'Multi Racial - M',
        typeId: subGroupTypes['race-gender combo'].value,
        dataSets: ['POPULATION_SUBGROUP'],
        collisions: [SubGroupAbbreviations.multiRacial, SubGroupAbbreviations.male],
    },
    {
        name: 'Multi Racial Female',
        abbreviation: SubGroupAbbreviations.multiRacialFemale,
        key: 'Multi Racial - F',
        secondaryKey: 'Multi Racial - F',
        typeId: subGroupTypes['race-gender combo'].value,
        dataSets: ['POPULATION_SUBGROUP'],
        collisions: [SubGroupAbbreviations.multiRacial, SubGroupAbbreviations.female],
    },
    {
        name: 'Other Male',
        abbreviation: SubGroupAbbreviations.otherMale,
        key: 'OM',
        secondaryKey: 'OM',
        typeId: subGroupTypes['race-gender combo'].value,
        dataSets: ['POPULATION_SUBGROUP', 'DISCIPLINE_SUBGROUPS', 'ACHIEVEMENT_SUBGROUPS'],
        collisions: [SubGroupAbbreviations.other, SubGroupAbbreviations.male],
    },
    {
        name: 'Other Female',
        abbreviation: SubGroupAbbreviations.otherFemale,
        key: 'OF',
        secondaryKey: 'OF',
        typeId: subGroupTypes['race-gender combo'].value,
        dataSets: ['POPULATION_SUBGROUP', 'DISCIPLINE_SUBGROUPS', 'ACHIEVEMENT_SUBGROUPS'],
        collisions: [SubGroupAbbreviations.other, SubGroupAbbreviations.female],
    },
];

export const EXCEPTIONALITY: SubGroupList[] = [
    {
        name: 'Economically Disadvantaged Students',
        abbreviation: SubGroupAbbreviations.economicallyDisadvantaged,
        key: 'EDS',
        secondaryKey: 'EDS',
        typeId: subGroupTypes.exceptionality.value,
        dataSets: ['ACHIEVEMENT_SUBGROUPS'],
        collisions: [],
    },
    {
        name: 'English Language Students',
        abbreviation: SubGroupAbbreviations.englishLearners,
        key: 'ELS',
        secondaryKey: 'ELS',
        typeId: subGroupTypes.exceptionality.value,
        dataSets: ['ACHIEVEMENT_SUBGROUPS'],
        collisions: [],
    },
    {
        name: 'Students with Disabilities',
        abbreviation: SubGroupAbbreviations.studentsWithDisabilities,
        key: 'SWD',
        secondaryKey: 'SWD',
        typeId: subGroupTypes.exceptionality.value,
        dataSets: ['DISCIPLINE_SUBGROUPS', 'ACHIEVEMENT_SUBGROUPS'],
        collisions: [],
    },
    {
        name: 'Academically or Intellectually Gifted',
        abbreviation: SubGroupAbbreviations.gifted,
        key: 'AIG',
        secondaryKey: 'AIG',
        typeId: subGroupTypes.exceptionality.value,
        dataSets: ['ACHIEVEMENT_SUBGROUPS'],
        collisions: [],
    },
];

export const ALL_STUDENTS: SubGroupList[] = [
    {
        name: 'All Students',
        abbreviation: SubGroupAbbreviations.all,
        key: 'ALL',
        secondaryKey: 'ALL',
        typeId: subGroupTypes.overall.value,
        dataSets: ['POPULATION_SUBGROUP', 'DISCIPLINE_SUBGROUPS', 'ACHIEVEMENT_SUBGROUPS'],
        collisions: [
            // Race
            SubGroupAbbreviations.black,
            SubGroupAbbreviations.hispanic,
            SubGroupAbbreviations.white,
            SubGroupAbbreviations.americanIndian,
            SubGroupAbbreviations.asian,
            SubGroupAbbreviations.hawaiianPacific,
            SubGroupAbbreviations.multiRacial,
            SubGroupAbbreviations.other,

            // Gender
            SubGroupAbbreviations.male,
            SubGroupAbbreviations.female,

            // Race-Gender Combos
            SubGroupAbbreviations.blackMale,
            SubGroupAbbreviations.blackFemale,
            SubGroupAbbreviations.hispanicMale,
            SubGroupAbbreviations.hispanicFemale,
            SubGroupAbbreviations.whiteMale,
            SubGroupAbbreviations.whiteFemale,
            SubGroupAbbreviations.americanIndianMale,
            SubGroupAbbreviations.americanIndianFemale,
            SubGroupAbbreviations.asianMale,
            SubGroupAbbreviations.asianFemale,
            SubGroupAbbreviations.hawaiianPacificMale,
            SubGroupAbbreviations.hawaiianPacificFemale,
            SubGroupAbbreviations.multiRacialMale,
            SubGroupAbbreviations.multiRacialFemale,
            SubGroupAbbreviations.otherMale,
            SubGroupAbbreviations.otherFemale,

            // Exceptionality
            SubGroupAbbreviations.economicallyDisadvantaged,
            SubGroupAbbreviations.englishLearners,
            SubGroupAbbreviations.studentsWithDisabilities,
            SubGroupAbbreviations.gifted,
        ],
    },
];

export const subGroupsList: SubGroupList[] = [
    ...ALL_STUDENTS,
    ...RACE,
    ...GENDER,
    ...RACE_GENDER_COMBO,
    ...EXCEPTIONALITY,
];

export const SUBGROUPS_SEED: FlatSubGroupCreateInput[] = subGroupsList.map(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ({ dataSets, collisions, ...rest }) => rest
);

// Relevant subGroups for discipline data from DPS
export const DISCIPLINE_SUB_GROUPS = [
    ...ALL_STUDENTS,
    ...RACE_GENDER_COMBO,
    ...EXCEPTIONALITY.filter(item => item.abbreviation === 'SWD'),
];
