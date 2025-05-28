import type { DataSource, School, SubGroup, Year } from '@prisma/client';
import { Prisma } from '@prisma/client';
import { NotFoundError } from '../../../errors/AppError.ts';
import type { RawPopulationRow } from '../../../types/population.ts';

export const bySubgroupParser = (
    rows: RawPopulationRow[],
    year: Year,
    dataSourceResponse: DataSource,
    schoolMap: Map<number, School>,
    subGroupMap: Map<string, SubGroup>
): Prisma.SubgroupPopulationCreateManyInput[] => {
    const preparedByGradeData: Prisma.SubgroupPopulationCreateManyInput[] = [];

    for (const row of rows) {
        // In 2015-2016 PDF, the code is Site code for one table and Site Code - PMR Mo.1 for another
        const schoolCode =
            row.Code ?? (row as Record<string, string | undefined>)['Site Code - PMR Mo.1'];
        if (!schoolCode || schoolCode === 'TOTALS') {
            continue; // Skip totals row
        }

        const school = schoolMap.get(+schoolCode);
        if (!school) {
            throw new NotFoundError(`No school record found with school code ${row.Code}`);
        }

        for (const [key, value] of Object.entries(row)) {
            if (
                key.toLowerCase() === 'school - month one' ||
                key.toLowerCase() === 'code' ||
                key.toLowerCase() === 'site code - pmr mo.1' ||
                key.toLowerCase() === 'totals' ||
                !value
            ) {
                continue;
            }

            const subgroup = subGroupMap.get(key);
            if (!subgroup) {
                continue;
            }

            preparedByGradeData.push({
                schoolId: school.id,
                yearId: year.id,
                subgroupId: subgroup.id,
                count: parseInt(value),
                pdfSourceId: dataSourceResponse.id,
            });
        }
    }
    return preparedByGradeData;
};
