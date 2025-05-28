import type { DataSource, School, Year } from '@prisma/client';
import { Prisma } from '@prisma/client';
import { NotFoundError } from '../../../errors/AppError.ts';
import type { RawPopulationRow } from '../../../types/population.ts';

export const snapShotParser = (
    rows: RawPopulationRow[],
    year: Year,
    dataSourceResponse: DataSource,
    schoolMap: Map<number, School>
): Prisma.PopulationSnapshotCreateManyInput[] => {
    const preparedSnapshotData: Prisma.PopulationSnapshotCreateManyInput[] = [];
    for (const row of rows) {
        // In 2015-2016 PDF, the code is Site code for one table and Site Code for another
        const schoolCode = row.Code ?? (row as Record<string, string | undefined>)['Site code'];

        if (!schoolCode) {
            // That last row in the table is Totals -> Ignore
            continue;
        }

        const school = schoolMap.get(+schoolCode);
        if (!school) {
            throw new NotFoundError(`No school record found with school code ${row.Code}`);
        }

        preparedSnapshotData.push({
            schoolId: school.id,
            yearId: year.id,
            preKindergarten: row.PK ? parseInt(row.PK) : null,
            kindergarten: row.KI ? parseInt(row.KI) : null,
            firstGrade: row['01'] ? parseInt(row['01']) : null,
            secondGrade: row['02'] ? parseInt(row['02']) : null,
            thirdGrade: row['03'] ? parseInt(row['03']) : null,
            fourthGrade: row['04'] ? parseInt(row['04']) : null,
            fifthGrade: row['05'] ? parseInt(row['05']) : null,
            sixthGrade: row['06'] ? parseInt(row['06']) : null,
            seventhGrade: row['07'] ? parseInt(row['07']) : null,
            eighthGrade: row['08'] ? parseInt(row['08']) : null,
            ninthGrade: row['09'] ? parseInt(row['09']) : null,
            tenthGrade: row['10'] ? parseInt(row['10']) : null,
            eleventhGrade: row['11'] ? parseInt(row['11']) : null,
            twelfthGrade: row['12'] ? parseInt(row['12']) : null,
            ungraded: row.XG !== undefined ? parseInt(row.XG) : null,
            studentTotal: row.StTtl !== undefined ? parseInt(row.StTtl) : 0,
            total: row.Total !== undefined ? parseInt(row.Total) : 0,
            pdfSourceId: dataSourceResponse.id,
        });
    }
    return preparedSnapshotData;
};
