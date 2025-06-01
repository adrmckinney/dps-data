import { DisciplineService } from '@/services/disciplineService';
import { GradeService } from '@/services/gradeService';
import { LevelService } from '@/services/levelService';
import { PopulationService } from '@/services/populationService/populationService';
import { SchoolService } from '@/services/schoolService';
import { SubgroupService } from '@/services/subgroupService';
import { SubgroupTypeService } from '@/services/subgroupTypeService';
import { SubjectService } from '@/services/subjectService';
import { YearService } from '@/services/yearService';
import { FilterPayload } from '@/types/queryFilters';

export const resolvers = {
    Query: {
        referenceData: async () => {
            const [
                years,
                grades,
                levels,
                schools,
                disciplines,
                subjects,
                subgroupTypes,
                subgroups,
            ] = await Promise.all([
                YearService.getYears(),
                GradeService.getGrades(),
                LevelService.getLevels(),
                SchoolService.getSchools(),
                DisciplineService.getDisciplines(),
                SubjectService.getSubjects(),
                SubgroupTypeService.getSubgroupTypes(),
                SubgroupService.getSubgroups(),
            ]);

            return {
                years,
                grades,
                levels,
                schools,
                disciplines,
                subjects,
                subgroupTypes,
                subgroups,
            };
        },
        years: async () => await YearService.getYears(),
        schools: async () => await SchoolService.getSchools(),
        grades: async () => await GradeService.getGrades(),
        subgroupPopulation: async (_: unknown, { filters }: { filters: FilterPayload }) => {
            PopulationService.getFilteredSubgroupPopulation(filters);
            return [];
        },
        gradePopulation: async (_: unknown, { filters }: { filters: FilterPayload }) => {
            PopulationService.getFilteredGradePopulation(filters);
            return [];
        },
    },
};
