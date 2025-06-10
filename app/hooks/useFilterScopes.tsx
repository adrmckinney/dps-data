import { DataSet } from '@prisma/client';
import { useReferenceContext } from '../context/referenceContext';

const useFilterScopes = () => {
    const { state } = useReferenceContext();

    const isSubGroupInScope = (dataSetId: DataSet['id'], ids: Set<number>) => {
        const { subGroupToDataSet } = state;

        ids.forEach(id => {
            const isScoped = subGroupToDataSet.some(entry => {
                return entry.subGroupId === id && entry.dataSetId === dataSetId;
            });
            if (!isScoped) return false;
        });
        return true;
    };

    return { isSubGroupInScope };
};

export default useFilterScopes;
