import { DataSourceService } from '@/services/dataSoureService';
import { DisciplineService } from '@/services/disciplineService/disciplineService';
import { GradeService } from '@/services/gradeService';
import { LevelService } from '@/services/levelService';
import { SchoolService } from '@/services/schoolService';
import { SubgroupService } from '@/services/subgroupService';
import { SubgroupTypeService } from '@/services/subgroupTypeService';
import { SubjectService } from '@/services/subjectService';
import { VisualizationService } from '@/services/visualizationService';
import { YearService } from '@/services/yearService';
import { QueryModifiers } from '@/types/queryModifiers';

export const resolvers = {
    Query: {
        _empty: () => 'ok',
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
                dataSources,
            ] = await Promise.all([
                YearService.getYears(),
                GradeService.getGrades(),
                LevelService.getLevels(),
                SchoolService.getSchools(),
                DisciplineService.getDisciplines(),
                SubjectService.getSubjects(),
                SubgroupTypeService.getSubgroupTypes(),
                SubgroupService.getSubgroups(),
                DataSourceService.getDataSources(),
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
                dataSources,
            };
        },
        years: async () => await YearService.getYears(),
        schools: async () => await SchoolService.getSchools(),
        grades: async () => await GradeService.getGrades(),
        dataSources: async () => await DataSourceService.getDataSources(),
        visualizeData: async (_: unknown, { payload }: { payload: QueryModifiers }) => {
            return await VisualizationService.getVisualizeData(payload);
        },
    },
};
