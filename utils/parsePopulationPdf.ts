// import { PopulationRecord, RawPopulationRow } from '@/types/population';

// export function parsePopulationData(
//     raw: RawPopulationRow[],
//     link: { url: string },
//     year: number
// ): PopulationRecord[] {
//     const grades = [
//         'PK',
//         'KI',
//         '01',
//         '02',
//         '03',
//         '04',
//         '05',
//         '06',
//         '07',
//         '08',
//         '09',
//         '10',
//         '11',
//         '12',
//     ];

//     const records: RawPopulationRow[] = [];

//     for (const row of raw) {
//         for (const grade of grades) {
//             const rawValue = row[grade as keyof RawPopulationRow];
//             const value = rawValue && rawValue.trim() !== '' ? parseInt(rawValue, 10) : null;

//             if (value !== null) {
//                 records.push({
//                     Code: row.Code,
//                     grade,
//                     value,
//                     year,
//                     pdfSourceUrl: link.url,
//                 });
//             }
//         }
//     }

//     return records;
// }
