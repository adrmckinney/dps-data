import { MyPieDatum } from '@/app/context/graphContextProvider';
import { CategoricalColorSchemeId } from '@nivo/colors';
import { ResponsivePie } from '@nivo/pie';

type Props = {
    data: MyPieDatum[];
    colorScheme?: CategoricalColorSchemeId;
    slices?: {
        labels?: boolean;
        legends?: boolean;
    };
};

const PieGraph = ({ data, colorScheme = 'nivo', slices }: Props) => {
    return (
        <div className="h-1/2">
            <ResponsivePie
                data={data}
                margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                innerRadius={0.5}
                padAngle={0.7}
                cornerRadius={3}
                colors={{ scheme: colorScheme }}
                borderWidth={1}
                borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
                enableArcLabels={slices?.labels ?? true}
                arcLabel="value"
                arcLabelsSkipAngle={10}
                arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
                legends={
                    slices?.legends ?? true
                        ? [
                              {
                                  anchor: 'bottom',
                                  direction: 'row',
                                  justify: false,
                                  translateX: 0,
                                  translateY: 56,
                                  itemsSpacing: 0,
                                  itemWidth: 100,
                                  itemHeight: 18,
                                  itemTextColor: '#999',
                                  symbolSize: 18,
                                  symbolShape: 'circle',
                                  effects: [
                                      {
                                          on: 'hover',
                                          style: {
                                              itemTextColor: '#000',
                                          },
                                      },
                                  ],
                              },
                          ]
                        : []
                }
            />
        </div>
    );
};

export default PieGraph;
