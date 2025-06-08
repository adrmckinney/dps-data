import type { DataSet } from '@prisma/client';
import type { DataSetKeys } from '../types/dataSetKeys.ts';

type ConstList = {
    name: string;
    dataSets: DataSetKeys[];
    [key: string]: unknown;
};

type FilterSets = {
    id: number;
    name: string;
    [key: string]: unknown;
};

export async function insertDataSetPivotRows<T extends string>(
    dataSets: DataSet[],
    filterSets: FilterSets[],
    constList: ConstList[],
    filterKey: T,
    serviceFn: (input: { [K in T]: number } & { dataSetId: number }) => Promise<void>
) {
    for (let i = 0; i < filterSets.length; i++) {
        const targetDataSetKeys: DataSetKeys[] | undefined = constList.find(
            l => l.name === filterSets[i].name
        )?.dataSets;
        if (!targetDataSetKeys) continue;
        const filterId = filterSets[i].id;
        for (const dataSetKey of targetDataSetKeys) {
            const dataSetId = dataSets.find(ds => ds.key === dataSetKey)?.id;
            if (!filterId || !dataSetId) continue;

            await serviceFn({ [filterKey]: filterId, dataSetId } as { [K in T]: number } & {
                dataSetId: number;
            });
        }
    }
}
