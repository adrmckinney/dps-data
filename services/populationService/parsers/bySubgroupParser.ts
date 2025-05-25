import { NotFoundError } from '@/errors/AppError.ts';
import type { DataSource, School, SubGroup, Year } from '@prisma/client';
import { Prisma } from '@prisma/client';
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
        if (!row.Code) {
            continue; // Skip totals row
        }

        const school = schoolMap.get(+row.Code);
        if (!school) {
            throw new NotFoundError(`No school record found with school code ${row.Code}`);
        }

        for (const [key, value] of Object.entries(row)) {
            if (
                key.toLowerCase() === 'school - month one' ||
                key.toLowerCase() === 'code' ||
                key.toLowerCase() === 'totals' ||
                !value
            )
                continue;

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
