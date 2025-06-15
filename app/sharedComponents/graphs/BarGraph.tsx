import { ResponsiveBar } from '@nivo/bar';
import { CategoricalColorSchemeId } from '@nivo/colors';

type Props = {
    colorScheme?: CategoricalColorSchemeId;
};

const data = [
    { country: 'AD', value: 20 },
    { country: 'AE', value: 45 },
    { country: 'AF', value: 32 },
];

const BarGraph = ({ colorScheme = 'nivo' }: Props) => {
    return (
        <div className="h-1/2">
            <ResponsiveBar
                data={data}
                keys={['value']}
                indexBy="country"
                margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                padding={0.3}
                layout="vertical"
                valueScale={{ type: 'linear' }}
                indexScale={{ type: 'band', round: true }}
                colors={{ scheme: colorScheme }}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'country',
                    legendPosition: 'middle',
                    legendOffset: 32,
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'value',
                    legendPosition: 'middle',
                    legendOffset: -40,
                }}
            />
        </div>
    );
};

export default BarGraph;
