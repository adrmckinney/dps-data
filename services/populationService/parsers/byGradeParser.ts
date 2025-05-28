import type { DataSource, Grade, School, Year } from '@prisma/client';
import { Prisma } from '@prisma/client';
import { NotFoundError } from '../../../errors/AppError.ts';
import type { RawPopulationRow } from '../../../types/population.ts';

export const byGradeParser = (
    rows: RawPopulationRow[],
    year: Year,
    dataSourceResponse: DataSource,
    schoolMap: Map<number, School>,
    gradesMap: Map<string, Grade>
): Prisma.GradePopulationCreateManyInput[] => {
    const preparedByGradeData: Prisma.GradePopulationCreateManyInput[] = [];

    for (const row of rows) {
        // In 2015-2016 PDF, the code is Site code for one table and Site Code for another
        const schoolCode = row.Code ?? (row as Record<string, string | undefined>)['Site code'];
        if (!schoolCode) {
            continue; // Skip totals row
        }

        const school = schoolMap.get(+schoolCode);
        if (!school) {
            throw new NotFoundError(`No school record found with school code ${row.Code}`);
        }

        for (const [key, value] of Object.entries(row)) {
            if (
                key.toLowerCase() === 'code' ||
                key.toLowerCase() === 'site code' ||
                key.toLowerCase() === 'school' ||
                key.toLowerCase() === 'xg' ||
                key.toLowerCase() === 'stttl' ||
                key.toLowerCase() === 'total' ||
                !value
            )
                continue;

            const grade = gradesMap.get(key);
            if (!grade) {
                throw new NotFoundError(`No grade record found with grade abbreviation ${key}`);
            }

            preparedByGradeData.push({
                schoolId: school.id,
                yearId: year.id,
                gradeId: grade.id,
                count: parseInt(value),
                pdfSourceId: dataSourceResponse.id,
            });
        }
    }
    return preparedByGradeData;
};
