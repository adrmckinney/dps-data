import { ActiveFilter } from '@/app/ui/TopBar';

type Props = {
    activeFilter: ActiveFilter;
    handleUpdateFilterSelectMap: (name: string, value: number) => void;
};

const ActiveFilterPill = ({ activeFilter, handleUpdateFilterSelectMap }: Props) => {
    return (
        <>
            <span
                key={`${activeFilter.id}-${activeFilter.title}-${activeFilter.label}`}
                className="m-1 inline-flex items-center rounded-full border border-gray-200 bg-white py-1.5 pr-2 pl-3 text-sm font-medium text-gray-900"
            >
                <span className="flex flex-col px-0.5">
                    <span className="text-xs">{activeFilter.title}</span>
                    <span>{activeFilter.label}</span>
                </span>
                <button
                    type="button"
                    className="ml-1 inline-flex size-4 shrink-0 rounded-full p-1 text-gray-400 hover:bg-gray-200 hover:text-gray-500"
                    onClick={() => handleUpdateFilterSelectMap(activeFilter.title, activeFilter.id)}
                >
                    <span className="sr-only">Remove filter for {activeFilter.label}</span>
                    <svg fill="none" stroke="currentColor" viewBox="0 0 8 8" className="size-2">
                        <path d="M1 1l6 6m0-6L1 7" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                </button>
            </span>
        </>
    );
};

export default ActiveFilterPill;
