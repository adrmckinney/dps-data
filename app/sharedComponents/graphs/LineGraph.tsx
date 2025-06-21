import { AxesConfig } from '@/app/context/graphContextProvider';
import type { AxisProps } from '@nivo/axes';
import { CategoricalColorSchemeId } from '@nivo/colors';
import { LineSeries, ResponsiveLine } from '@nivo/line';

type AxisKey = 'top' | 'right' | 'bottom' | 'left';
export type Axes = Partial<Record<AxisKey, AxisProps>>;

type Props = {
    data: LineSeries[];
    colorScheme?: CategoricalColorSchemeId;
    axes?: AxesConfig;
};

const LineGraph = ({ data, colorScheme = 'nivo', axes }: Props) => {
    return (
        <div className="h-1/2">
            <ResponsiveLine
                data={data}
                margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                xScale={{ type: 'point' }}
                yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: false }}
                axisBottom={axes?.bottom?.axisProps}
                axisTop={axes?.top?.axisProps}
                axisLeft={axes?.left?.axisProps}
                axisRight={axes?.right?.axisProps}
                colors={{ scheme: colorScheme }}
                pointSize={10}
                pointColor={{ theme: 'background' }}
                pointBorderWidth={2}
                pointBorderColor={{ from: 'serieColor' }}
                useMesh={true}
            />
        </div>
    );
};

export default LineGraph;
