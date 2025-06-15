import {
    HydratedGrade,
    HydratedGradePopulation,
    HydratedQueryModifierResponse,
    HydratedSchool,
    HydratedSubGroup,
    HydratedYear,
    QueryModifierResponse,
} from '@/types/queryResponseTypes';
import { Grade, School, SubGroup, Year } from '@prisma/client';
import { useReferenceContext } from '../context/referenceContext';

const useHydrateApiData = () => {
    const { state } = useReferenceContext();

    const hydrateGradePopulationData = (
        data: QueryModifierResponse
    ): HydratedQueryModifierResponse | null => {
        if (data.type !== 'population_grade') return null;

        const hydratedData: HydratedGradePopulation[] = data.data.map(datum => {
            const school = getSchoolAndLevel(datum.schoolId);
            const grade = getGradeAndLevel(datum.gradeId);
            const year = getYear(datum.yearId);

            return {
                ...datum,
                school,
                grade,
                year,
            };
        });

        return {
            ...data,
            data: hydratedData,
        };
    };

    const hydrateSubGroupPopulationData = (
        data: QueryModifierResponse
    ): HydratedQueryModifierResponse | null => {
        if (data.type !== 'population_subgroup') return null;
        const hydratedData = data.data.map(datum => {
            const year = getYear(datum.yearId);
            const school = getSchoolAndLevel(datum.schoolId);
            const subGroup = getSubGroupAndSubGroupType(datum.subGroupId);

            return {
                ...datum,
                school,
                year,
                subGroup,
            };
        });

        return {
            ...data,
            data: hydratedData,
        };
    };

    const getYear = (yearId: Year['id']): HydratedYear => {
        const year = state.years.find(y => y.id === yearId);
        if (!year) {
            throw new Error(`Missing year for yearId ${yearId}`);
        }
        return omitTimestamps(year)!;
    };

    const getSubGroupAndSubGroupType = (subGroupId: SubGroup['id']): HydratedSubGroup => {
        const subGroupData = state.subGroups.find(sg => sg.id === subGroupId);
        const subGroupType = state.subGroupTypes.find(sgt => sgt.id === subGroupData?.typeId);

        if (!subGroupData || !subGroupType) {
            throw new Error(`Missing subGroupData or subGroupType for subGroupId: ${subGroupId}`);
        }

        return {
            ...omitTimestamps(subGroupData)!,
            type: omitTimestamps(subGroupType)!,
        };
    };

    const getSchoolAndLevel = (schoolId: School['id']): HydratedSchool => {
        const schoolData = state.schools.find(s => s.id === schoolId);
        const level = state.levels.find(l => l.id === schoolData?.levelId);

        if (!schoolData || !level) {
            throw new Error(`Missing school or level for schoolId: ${schoolId}`);
        }

        return {
            ...omitTimestamps(schoolData)!,
            level: omitTimestamps(level)!,
        };
    };

    const getGradeAndLevel = (gradeId: Grade['id']): HydratedGrade => {
        const gradeData = state.grades.find(g => g.id === gradeId);
        const level = gradeData ? state.levels.find(l => l.id === gradeData.levelId) : undefined;

        if (!gradeData || !level) {
            throw new Error(`Missing grade or level for gradeId: ${gradeId}`);
        }

        return {
            ...omitTimestamps(gradeData)!,
            level: omitTimestamps(level)!,
        };
    };

    return { hydrateGradePopulationData, hydrateSubGroupPopulationData };
};

export default useHydrateApiData;

function omitTimestamps<T extends { createdAt: Date; updatedAt: Date }>(
    obj: T | undefined
): Omit<T, 'createdAt' | 'updatedAt'> | undefined {
    if (!obj) return undefined;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { createdAt, updatedAt, ...rest } = obj;
    return rest as Omit<T, 'createdAt' | 'updatedAt'>;
}
