import { ScopedFiltersOptions } from '@/types/queryModifiers';
import { DataSet } from '@prisma/client';

type PivotWithDataSet = { dataSetId: number; [key: string]: number | Date };

/**
 * Determines whether a given item should be visible based on selected dataset IDs.
 *
 * This function checks if a specific `itemId` (associated via a `foreignKey`)
 * exists in any of the pivot records that also match one of the `selectedDataSetIds`.
 *
 * If no `selectedDataSetIds` are provided or the set is empty, the function returns `true`,
 * treating all items as visible.
 *
 * @template T - The shape of pivot records, which must include a `dataSetId` and at least one other key.
 * @template K - A key of `T` (excluding `dataSetId`) used as the foreign key to match against `itemId`.
 *
 * @param {T[]} pivotData - An array of pivot records connecting foreign entities to dataset IDs.
 * @param {Set<number> | undefined} selectedDataSetIds - A set of selected dataset IDs to match against.
 * @param {K} foreignKey - The key on the pivot record to compare to the `itemId`.
 * @param {number} itemId - The ID of the item (e.g., a subgroup, grade, etc.) being tested for visibility.
 * @returns {boolean} - Returns `true` if the item should be visible, otherwise `false`.
 */
export function isVisible<T extends PivotWithDataSet, K extends Exclude<keyof T, 'dataSetId'>>(
    pivotData: T[],
    selectedDataSetIds: Set<number> | undefined,
    foreignKey: K,
    itemId: number
): boolean {
    if (!selectedDataSetIds || selectedDataSetIds.size === 0) return true;

    return pivotData.some(entry => {
        const foreignId = entry[foreignKey];
        return foreignId === itemId && selectedDataSetIds.has(entry.dataSetId);
    });
}

export function isFilterInScope<T extends PivotWithDataSet>(
    pivotData: T[],
    dataSetId: DataSet['id'],
    ids: Set<number>,
    filterKey: ScopedFiltersOptions
) {
    let isScoped = true;
    ids.forEach(id => {
        const isIdScoped = pivotData.some(entry => {
            return entry[filterKey] === id && entry.dataSetId === dataSetId;
        });
        if (!isIdScoped) isScoped = false;
    });
    return isScoped;
}
