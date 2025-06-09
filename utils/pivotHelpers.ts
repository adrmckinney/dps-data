import type { DataSet } from '@prisma/client';
import type { DataSetKeys } from '../types/dataSetKeys.ts';

type DimensionMap = {
    name: string;
    dataSets: DataSetKeys[];
    [key: string]: unknown;
};

type DimensionRecords = {
    id: number;
    name: string;
    [key: string]: unknown;
};

/**
 * Generates pivot table input records for linking `DataSet`s to dimension records
 * such as `Level`, `Subject`, or `Subgroup`.
 *
 * This function builds input objects for a Prisma `createMany` operation that
 * populates join tables (e.g. `LevelToDataSet`). It maps each dimension record
 * (fetched from the database) to its associated `DataSet`s as defined in a local
 * configuration object (`dimensionMap`).
 *
 * ### Example use case:
 * You want to create multiple records in the `LevelToDataSet` table, where each `Level`
 * is associated with one or more `DataSet`s based on hardcoded logic. You pass in:
 * - `dataSets`: a list of available `DataSet`s from the database
 * - `dimensionRecords`: a list of `Level` (or `Subject`, etc.) records from the database
 * - `dimensionMap`: a hardcoded map that includes dimension name + `dataSetKeys`
 * - `filterKey`: the column name for the dimension (`levelId`, `subjectId`, etc.)
 *
 * ### Params:
 * @param {DataSet[]} dataSets - The full list of `DataSet` records from the database.
 * @param {DimensionRecords[]} dimensionRecords - DB records of a given dimension (e.g., all `Level`s or `Subject`s).
 * @param {DimensionMap[]} dimensionMap - A hardcoded map that links each dimension name to its corresponding `dataSetKeys`.
 * @param {keyof T} filterKey - The property name to use for linking (`levelId`, `subjectId`, etc.).
 *
 * ### Returns:
 * @returns {T[]} - An array of pivot input records shaped like `{ [filterKey]: id, dataSetId: id }`, suitable for use in a `createMany` call.
 *
 * ### Notes:
 * - If a `dimensionRecord` has no matching entry in the `dimensionMap`, it will be skipped.
 * - If a mapped `dataSetKey` is not found in the `dataSets` array, that entry is also skipped.
 */
export function generateDataSetPivotInput<T extends { [key: string]: unknown }>(
    dataSets: DataSet[],
    dimensionRecords: DimensionRecords[],
    dimensionMap: DimensionMap[],
    filterKey: keyof T
): T[] {
    const input: T[] = [];

    for (let i = 0; i < dimensionRecords.length; i++) {
        const targetDataSetKeys: DataSetKeys[] | undefined = dimensionMap.find(
            l => l.name === dimensionRecords[i].name
        )?.dataSets;
        if (!targetDataSetKeys) continue;

        const filterId = dimensionRecords[i].id;
        for (const dataSetKey of targetDataSetKeys) {
            const dataSetId = dataSets.find(ds => ds.key === dataSetKey)?.id;
            if (!filterId || !dataSetId) continue;

            input.push({
                [filterKey]: filterId,
                dataSetId,
            } as unknown as T);
        }
    }

    return input;
}
