import { AxesConfig, GraphConfig } from '@/app/context/graphContextProvider';
import type { AxisProps } from '@nivo/axes';
import { BarDatum, ResponsiveBar } from '@nivo/bar';
import { CategoricalColorSchemeId } from '@nivo/colors';

type AxisKey = 'top' | 'right' | 'bottom' | 'left';
export type Axes = Partial<Record<AxisKey, AxisProps>>;

type Props = {
    data: BarDatum[];
    colorScheme?: CategoricalColorSchemeId;
    axes?: AxesConfig;
    graphConfig: GraphConfig;
};

const BarGraph = ({ data, colorScheme = 'nivo', axes, graphConfig }: Props) => {
    console.log('data', data);
    console.log('axes', axes);
    console.log('graphConfig', graphConfig);
    return (
        <div className="h-1/2">
            <ResponsiveBar
                data={data}
                keys={graphConfig.secondary.map(keys => keys.entity)} // on vertical -> y axis ['']
                indexBy={graphConfig.primary.entity} // on vertical -> x axis
                margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                padding={0.3}
                layout={graphConfig.layout}
                valueScale={{ type: 'linear' }}
                indexScale={{ type: 'band', round: true }}
                colors={{ scheme: colorScheme }}
                axisBottom={axes?.bottom?.active ? axes?.bottom?.axisProps : undefined}
                axisTop={axes?.top?.active ? axes?.top?.axisProps : undefined}
                axisLeft={axes?.left?.active ? axes?.left?.axisProps : undefined}
                axisRight={axes?.right?.active ? axes?.right?.axisProps : undefined}
            />
        </div>
    );
};

export default BarGraph;
