import type { LevelEnumValue } from './LevelList.ts';
import { levels } from './LevelList.ts';

type SchoolList = {
    name: string;
    code: number;
    abbreviation: string;
    otherNames: string[];
    levelId: LevelEnumValue;
};

export const ELEMENTARY_SCHOOLS: SchoolList[] = [
    {
        name: 'Bethesda ',
        code: 320304,
        abbreviation: 'Bethesda',
        otherNames: ['Bethesda ES'],
        levelId: levels.elementary.value,
    },
    {
        name: 'Burton',
        code: 320308,
        abbreviation: 'Burton',
        otherNames: ['Burton ES'],
        levelId: levels.elementary.value,
    },
    {
        name: 'C. C. Spaulding',
        code: 320374,
        abbreviation: 'C. C. Spaulding',
        otherNames: ['C C Spaulding', 'C C Spaulding ES', 'Spaulding'],
        levelId: levels.elementary.value,
    },
    {
        name: 'Club Boulevard',
        code: 320318,
        abbreviation: 'Club Boulevard',
        otherNames: ['Club Boulevard ES'],
        levelId: levels.elementary.value,
    },
    {
        name: 'Creekside',
        code: 320319,
        abbreviation: 'Creekside',
        otherNames: ['Creekside ES'],
        levelId: levels.elementary.value,
    },
    {
        name: 'Eastway',
        code: 320310,
        abbreviation: 'Eastway',
        otherNames: ['Eastway ES'],
        levelId: levels.elementary.value,
    },
    {
        name: 'Easley',
        code: 320313,
        abbreviation: 'Easley',
        otherNames: ['Easley ES'],
        levelId: levels.elementary.value,
    },
    {
        name: 'E.K. Powe',
        code: 320363,
        abbreviation: 'E.K. Powe',
        otherNames: ['E.K. Powe ES', 'E K Powe'],
        levelId: levels.elementary.value,
    },
    {
        name: 'Eno Valley',
        code: 320315,
        abbreviation: 'Eno Valley',
        otherNames: ['Eno Valley ES', 'Eno Valley'],
        levelId: levels.elementary.value,
    },
    {
        name: 'Fayetteville Street',
        code: 320344,
        abbreviation: 'Fayetteville Street',
        otherNames: ['Fayetteville Street ES', 'Fayetteville'],
        levelId: levels.elementary.value,
    },
    {
        name: 'Forest View',
        code: 320332,
        abbreviation: 'Forest View',
        otherNames: ['Forest View ES'],
        levelId: levels.elementary.value,
    },
    {
        name: 'Glenn',
        code: 320320,
        abbreviation: 'Glenn',
        otherNames: ['Glenn ES'],
        levelId: levels.elementary.value,
    },
    {
        name: 'Hillandale',
        code: 320324,
        abbreviation: 'Hillandale',
        otherNames: ['Hillandale ES'],
        levelId: levels.elementary.value,
    },
    {
        name: 'Holt',
        code: 320328,
        abbreviation: 'Holt',
        otherNames: ['Holt ES'],
        levelId: levels.elementary.value,
    },
    {
        name: 'Hope Valley',
        code: 320327,
        abbreviation: 'Hope Valley',
        otherNames: ['Hope Valley ES'],
        levelId: levels.elementary.value,
    },
    {
        name: 'Lakewood',
        code: 320339,
        abbreviation: 'Lakewood',
        otherNames: ['Lakewood ES'],
        levelId: levels.elementary.value,
    },
    {
        name: 'Lyons Farm',
        code: 320349,
        abbreviation: 'Lyons Farm',
        otherNames: ['Lyons Farm ES'],
        levelId: levels.elementary.value,
    },
    {
        name: 'Mangum Elementary',
        code: 320348,
        abbreviation: 'Mangum Elementary',
        otherNames: ['Mangum Elementary ES', 'Mangum'],
        levelId: levels.elementary.value,
    },
    {
        name: 'Merrick-Moore',
        code: 320352,
        abbreviation: 'Merrick-Moore',
        otherNames: ['Merrick-Moore ES'],
        levelId: levels.elementary.value,
    },
    {
        name: 'Morehead Montessori',
        code: 320354,
        abbreviation: 'Morehead Montessori',
        otherNames: ['Morehead Montessori ES'],
        levelId: levels.elementary.value,
    },
    {
        name: 'Murray-Massenburg',
        code: 320351,
        abbreviation: 'Murray-Massenburg',
        otherNames: ['Murray-Massenburg ES'],
        levelId: levels.elementary.value,
    },
    {
        name: 'Oak Grove',
        code: 320360,
        abbreviation: 'Oak Grove',
        otherNames: ['Oak Grove ES'],
        levelId: levels.elementary.value,
    },
    {
        name: 'Parkwood',
        code: 320362,
        abbreviation: 'Parkwood',
        otherNames: ['Parkwood ES'],
        levelId: levels.elementary.value,
    },
    {
        name: 'W.G. Pearson',
        code: 320388,
        abbreviation: 'W.G. Pearson',
        otherNames: ['W.G. Pearson ES', 'W G Pearson'],
        levelId: levels.elementary.value,
    },
    {
        name: 'Pearsontown',
        code: 320364,
        abbreviation: 'Pearsontown',
        otherNames: ['Pearsontown ES', 'Pearsontown'],
        levelId: levels.elementary.value,
    },
    {
        name: 'R.N. Harris',
        code: 320367,
        abbreviation: 'R.N. Harris',
        otherNames: ['R.N. Harris ES', 'R N Harris'],
        levelId: levels.elementary.value,
    },
    {
        name: 'Sandy Ridge',
        code: 320369,
        abbreviation: 'Sandy Ridge',
        otherNames: ['Sandy Ridge ES'],
        levelId: levels.elementary.value,
    },
    {
        name: 'Southwest',
        code: 320372,
        abbreviation: 'Southwest',
        otherNames: ['Southwest MS'],
        levelId: levels.elementary.value,
    },
    {
        name: 'Spring Valley',
        code: 320376,
        abbreviation: 'Spring Valley',
        otherNames: ['Spring Valley ES'],
        levelId: levels.elementary.value,
    },
    {
        name: 'Watts',
        code: 320347,
        abbreviation: 'Watts',
        otherNames: ['Watts ES', 'George Watts'],
        levelId: levels.elementary.value,
    },
    {
        name: 'Y.E. Smith',
        code: 320400,
        abbreviation: 'Y.E. Smith',
        otherNames: ['Y.E. Smith ES', 'Y E Smith'],
        levelId: levels.elementary.value,
    },
];

export const MIDDLE_SCHOOLS: SchoolList[] = [
    {
        name: 'Brogden',
        code: 320306,
        abbreviation: 'Brogden',
        otherNames: ['Brogden MS'],
        levelId: levels.middleSchool.value,
    },
    {
        name: 'Carrington',
        code: 320316,
        abbreviation: 'Carrington',
        otherNames: ['Carrington MS'],
        levelId: levels.middleSchool.value,
    },
    {
        name: 'Githens',
        code: 320366,
        abbreviation: 'Githens',
        otherNames: ['Githens MS', 'Sherwood Githens'],
        levelId: levels.middleSchool.value,
    },
    {
        name: 'Lakewood Montessori',
        code: 320342,
        abbreviation: 'Lakewood Montessori',
        otherNames: ['Lakewood Montessori MS', 'Lakewood Middle'],
        levelId: levels.middleSchool.value,
    },
    {
        name: 'Little River',
        code: 320340,
        abbreviation: 'Little River',
        otherNames: ['Little River MS'],
        levelId: levels.middleSchool.value,
    },
    {
        name: 'Lowes Grove',
        code: 320346,
        abbreviation: 'Lowes Grove',
        otherNames: ['Lowes Grove MS', "Lowe's Grove"],
        levelId: levels.middleSchool.value,
    },
    {
        name: 'Lucas',
        code: 320343,
        abbreviation: 'Lucas',
        otherNames: ['Lucas MS'],
        levelId: levels.middleSchool.value,
    },
    {
        name: 'Neal',
        code: 320355,
        abbreviation: 'Neal',
        otherNames: ['Neal MS'],
        levelId: levels.middleSchool.value,
    },
    {
        name: 'Rogers-Herr',
        code: 320370,
        abbreviation: 'Rogers-Herr',
        otherNames: ['Rogers-Herr MS'],
        levelId: levels.middleSchool.value,
    },
    {
        name: 'Shepard',
        code: 320338,
        abbreviation: 'Shepard',
        otherNames: ['Shepard MS'],
        levelId: levels.middleSchool.value,
    },
];

export const HIGH_SCHOOLS: SchoolList[] = [
    {
        name: 'City of Medicine',
        code: 320317,
        abbreviation: 'CMA',
        otherNames: ['City of Medicine HS', 'City of Med'],
        levelId: levels.highSchool.value,
    },
    {
        name: 'Clement Early College',
        code: 320309,
        abbreviation: 'ECHS',
        otherNames: ['Clement Early College HS', 'Clement'],
        levelId: levels.highSchool.value,
    },
    {
        name: 'Creative Studies',
        code: 320314,
        abbreviation: 'SCS',
        otherNames: ['Creative Studies HS', 'School for Creative Studies'],
        levelId: levels.highSchool.value,
    },
    {
        name: 'Durham School of the Arts',
        code: 320323,
        abbreviation: 'DSA',
        otherNames: ['DSA HS'],
        levelId: levels.highSchool.value,
    },
    {
        name: 'Hillside',
        code: 320325,
        abbreviation: 'HHS',
        otherNames: ['Hillside HS'],
        levelId: levels.highSchool.value,
    },
    {
        name: 'Durham School of Technology',
        code: 320701,
        abbreviation: 'DST',
        otherNames: ['Hillside New Tech', 'Hillside Tech'],
        levelId: levels.highSchool.value,
    },
    {
        name: 'Hospital School',
        code: 320336,
        abbreviation: 'HSHS',
        otherNames: ['Hospital School HS'],
        levelId: levels.highSchool.value,
    },
    {
        name: 'IGNITE',
        code: 320401,
        abbreviation: 'IGNITE',
        otherNames: ['IGNITE Academy'],
        levelId: levels.highSchool.value,
    },
    {
        name: 'Jordan',
        code: 320312,
        abbreviation: 'JHS',
        otherNames: ['Jordan HS'],
        levelId: levels.highSchool.value,
    },
    {
        name: 'Lakeview',
        code: 320341,
        abbreviation: 'LHS',
        otherNames: ['Lakeview HS'],
        levelId: levels.highSchool.value,
    },
    {
        name: 'Middle College',
        code: 320353,
        abbreviation: 'MCHS',
        otherNames: ['Middle College HS', 'Midd College'],
        levelId: levels.highSchool.value,
    },
    {
        name: 'Northern',
        code: 320356,
        abbreviation: 'NHS',
        otherNames: ['Northern HS'],
        levelId: levels.highSchool.value,
    },
    {
        name: 'Performance Learning Ctr',
        code: 320322,
        abbreviation: 'PLC',
        otherNames: ['Performance Learning Ctr HS', 'Performance Learning Center'],
        levelId: levels.highSchool.value,
    },
    {
        name: 'Riverside',
        code: 320365,
        abbreviation: 'RHS',
        otherNames: ['Riverside HS'],
        levelId: levels.highSchool.value,
    },
    {
        name: 'Southern',
        code: 320368,
        abbreviation: 'SHS',
        otherNames: ['Southern HS'],
        levelId: levels.highSchool.value,
    },
];

export const SCHOOLS_SEED: SchoolList[] = [
    ...ELEMENTARY_SCHOOLS,
    ...MIDDLE_SCHOOLS,
    ...HIGH_SCHOOLS,
] as const;
