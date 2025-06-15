import { CategoricalColorSchemeId } from '@nivo/colors';
import { useVisualContext } from '../context/visualContextProvider';
import BarGraph from '../sharedComponents/graphs/BarGraph';
type Props = {
    colorScheme?: CategoricalColorSchemeId;
};

const Graph = ({ colorScheme = 'nivo' }: Props) => {
    const { state } = useVisualContext();

    console.log('state in Graph', state);
    return (
        <div className="h-screen">
            <BarGraph colorScheme="category10" />
        </div>
    );
};

export default Graph;
