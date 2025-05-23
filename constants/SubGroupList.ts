import type { SubGroupTypeEnumValue } from './SubGroupTypes.ts';
import { subGroupTypes } from './SubGroupTypes.ts';

type SubGroupList = {
    name: string;
    abbreviation: string;
    key: string;
    secondaryKey: string;
    typeId: SubGroupTypeEnumValue;
};

export const RACE: SubGroupList[] = [
    {
        name: 'Black',
        abbreviation: 'B',
        key: 'B',
        secondaryKey: 'B',
        typeId: subGroupTypes.race.value,
    },
    {
        name: 'Hispanic',
        abbreviation: 'H',
        key: 'H',
        secondaryKey: 'H',
        typeId: subGroupTypes.race.value,
    },
    {
        name: 'White',
        abbreviation: 'W',
        key: 'W',
        secondaryKey: 'W',
        typeId: subGroupTypes.race.value,
    },
    {
        name: 'American Indian',
        abbreviation: 'I',
        key: 'I',
        secondaryKey: 'I',
        typeId: subGroupTypes.race.value,
    },
    {
        name: 'Asian',
        abbreviation: 'A',
        key: 'A',
        secondaryKey: 'A',
        typeId: subGroupTypes.race.value,
    },
    {
        name: 'Hawaiian Pacific',
        abbreviation: 'HP',
        key: 'HP',
        secondaryKey: 'HP',
        typeId: subGroupTypes.race.value,
    },
    {
        name: 'Multi Racial',
        abbreviation: 'MR',
        key: 'MR',
        secondaryKey: 'MR',
        typeId: subGroupTypes.race.value,
    },
    {
        name: 'Other',
        abbreviation: 'O',
        key: 'O',
        secondaryKey: 'O',
        typeId: subGroupTypes.race.value,
    },
];

export const GENDER: SubGroupList[] = [
    {
        name: 'Male',
        abbreviation: 'M',
        key: 'M',
        secondaryKey: 'M',
        typeId: subGroupTypes.gender.value,
    },
    {
        name: 'Female',
        abbreviation: 'F',
        key: 'F',
        secondaryKey: 'F',
        typeId: subGroupTypes.gender.value,
    },
];

export const RACE_GENDER_COMBO: SubGroupList[] = [
    {
        name: 'Black Male',
        abbreviation: 'BM',
        key: 'Black - M',
        secondaryKey: 'Black - M',
        typeId: subGroupTypes['race-gender combo'].value,
    },
    {
        name: 'Black Female',
        abbreviation: 'BF',
        key: 'Black - F',
        secondaryKey: 'Black - F',
        typeId: subGroupTypes['race-gender combo'].value,
    },
    {
        name: 'Hispanic Male',
        abbreviation: 'HM',
        key: 'Hispanic - M',
        secondaryKey: 'Hispanic - M',
        typeId: subGroupTypes['race-gender combo'].value,
    },
    {
        name: 'Hispanic Female',
        abbreviation: 'HF',
        key: 'Hispanic - F',
        secondaryKey: 'Hispanic - F',
        typeId: subGroupTypes['race-gender combo'].value,
    },
    {
        name: 'White Male',
        abbreviation: 'WM',
        key: 'White - M',
        secondaryKey: 'White - M',
        typeId: subGroupTypes['race-gender combo'].value,
    },
    {
        name: 'White Female',
        abbreviation: 'WF',
        key: 'White - F',
        secondaryKey: 'White - F',
        typeId: subGroupTypes['race-gender combo'].value,
    },
    {
        name: 'American Indian Male',
        abbreviation: 'IM',
        key: 'American Indian - M',
        secondaryKey: 'American Indian - M',
        typeId: subGroupTypes['race-gender combo'].value,
    },
    {
        name: 'American Indian Female',
        abbreviation: 'IF',
        key: 'American Indian - F',
        secondaryKey: 'American Indian - F',
        typeId: subGroupTypes['race-gender combo'].value,
    },
    {
        name: 'Asian Male',
        abbreviation: 'AM',
        key: 'Asian - M',
        secondaryKey: 'Asian - M',
        typeId: subGroupTypes['race-gender combo'].value,
    },
    {
        name: 'Asian Female',
        abbreviation: 'AF',
        key: 'Asian - F',
        secondaryKey: 'Asian - F',
        typeId: subGroupTypes['race-gender combo'].value,
    },
    {
        name: 'Hawaiian Pacific Male',
        abbreviation: 'HPM',
        key: 'Hawaiian Pacific - M',
        secondaryKey: 'Hawaiian Pacific - M',
        typeId: subGroupTypes['race-gender combo'].value,
    },
    {
        name: 'Hawaiian Pacific Female',
        abbreviation: 'HPF',
        key: 'Hawaiian Pacific - F',
        secondaryKey: 'Hawaiian Pacific - F',
        typeId: subGroupTypes['race-gender combo'].value,
    },
    {
        name: 'Multi Racial Male',
        abbreviation: 'MRM',
        key: 'Multi Racial - M',
        secondaryKey: 'Multi Racial - M',
        typeId: subGroupTypes['race-gender combo'].value,
    },
    {
        name: 'Multi Racial Female',
        abbreviation: 'MRF',
        key: 'Multi Racial - F',
        secondaryKey: 'Multi Racial - F',
        typeId: subGroupTypes['race-gender combo'].value,
    },
    {
        name: 'Other Male',
        abbreviation: 'OM',
        key: 'OM',
        secondaryKey: 'OM',
        typeId: subGroupTypes['race-gender combo'].value,
    },
    {
        name: 'Other Female',
        abbreviation: 'OF',
        key: 'OF',
        secondaryKey: 'OF',
        typeId: subGroupTypes['race-gender combo'].value,
    },
];

export const EXCEPTIONALITY: SubGroupList[] = [
    {
        name: 'Economically Disadvantaged Students',
        abbreviation: 'EDS',
        key: 'EDS',
        secondaryKey: 'EDS',
        typeId: subGroupTypes.exceptionality.value,
    },
    {
        name: 'English Language Students',
        abbreviation: 'ELS',
        key: 'ELS',
        secondaryKey: 'ELS',
        typeId: subGroupTypes.exceptionality.value,
    },
    {
        name: 'Students with Disabilities',
        abbreviation: 'SWD',
        key: 'SWD',
        secondaryKey: 'SWD',
        typeId: subGroupTypes.exceptionality.value,
    },
    {
        name: 'Academically or Intellectually Gifted',
        abbreviation: 'AIG',
        key: 'AIG',
        secondaryKey: 'AIG',
        typeId: subGroupTypes.exceptionality.value,
    },
];

export const ALL_STUDENTS: SubGroupList[] = [
    {
        name: 'All Students',
        abbreviation: 'ALL',
        key: 'ALL',
        secondaryKey: 'ALL',
        typeId: subGroupTypes.overall.value,
    },
];

export const SUBGROUPS_SEED: SubGroupList[] = [
    ...ALL_STUDENTS,
    ...RACE,
    ...GENDER,
    ...RACE_GENDER_COMBO,
    ...EXCEPTIONALITY,
];

// Relevant subgroups for disciple data from DPS
export const DISCIPLINE_SUB_GROUPS = [
    ...ALL_STUDENTS,
    ...RACE_GENDER_COMBO,
    ...EXCEPTIONALITY.filter(item => item.abbreviation === 'SWD'),
];
