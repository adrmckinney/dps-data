import { BarDatum } from '@nivo/bar';
import { ReactNode } from 'react';
import { GraphTypes, initialGraphConfig, useGraphContext } from '../context/graphContextProvider';
import { useVisualContext } from '../context/visualContextProvider';
import BarGraph from '../sharedComponents/graphs/BarGraph';
import LineGraph from '../sharedComponents/graphs/LineGraph';
import PieGraph from '../sharedComponents/graphs/PieGraph';

const Graph = () => {
    const { state: visualState } = useVisualContext();
    const { state: graphState } = useGraphContext();

    // const barData =
    //     visualState?.population_grade?.data?.map(entry => {
    //         return {
    //             x: entry.year.schoolYear,
    //             y: entry.count,
    //         };
    //     }) || [];
    // console.log('VIS STATE in Graph', visualState);
    // console.log('GRAPH STATE in Graph', graphState);

    const axes = graphState.type === 'bar' ? graphState.axes : {};
    const { primary, secondary } = graphState.graphConfig;
    const entitiesAreSet =
        primary.entity.length > 0 && secondary.every(group => group.entity.length > 0);

    const accessorsAreSet =
        primary.accessor.length > 0 &&
        secondary.every(group => {
            if (group.entity === 'count') return true;
            return group.accessor.length > 0;
        });

    const barData: BarDatum[] = [];
    if (
        entitiesAreSet &&
        accessorsAreSet &&
        graphState.type === 'bar' &&
        visualState.population_grade
    ) {
        for (const datum of visualState.population_grade.data) {
            const typedDatum = datum as Record<string, any>; // allow string indexing

            let barDatum: BarDatum | null = null;

            try {
                if (primary.entity !== 'count' && !primary.accessor.length) {
                    throw new Error('Accessor for primary axis not set');
                }

                // if (!secondaryAccessorsAreSet) {
                //     throw new Error('Accessor for secondary axis not set');
                // }

                barDatum = {
                    [primary.entity]:
                        primary.entity === 'count'
                            ? typedDatum[primary.entity]
                            : typedDatum[primary.entity][primary.accessor],
                };

                for (const key of secondary) {
                    barDatum[key.entity] =
                        key.entity === 'count'
                            ? typedDatum[key.entity]
                            : typedDatum[key.entity][key.accessor];
                }
                barData.push(barDatum);
            } catch (error) {
                console.error('Error creating bar datum:', error);
                // Optionally inform the user via toast, error state, or skip this item silently.
                barDatum = null; // or fallback to {}
            }
        }
    }

    const graphComponents: Record<GraphTypes, ReactNode> = {
        bar: (
            <BarGraph
                data={graphState.type === 'bar' && visualState.population_grade ? barData : []}
                colorScheme="category10"
                axes={axes}
                graphConfig={
                    graphState.type === 'bar' ? graphState.graphConfig : initialGraphConfig
                }
            />
        ),
        line: <LineGraph data={graphState.type === 'line' ? graphState.data : []} axes={axes} />,
        pie: <PieGraph data={graphState.type === 'pie' ? graphState.data : []} />,
    };

    const ActiveComponent = graphComponents[graphState.type];

    return <div className="h-screen">{ActiveComponent}</div>;
};

export default Graph;
