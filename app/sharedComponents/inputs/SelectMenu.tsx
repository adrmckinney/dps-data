import { Icon } from '@/app/assets/icons';
import { GraphAction } from '@/app/context/graphContextProvider';
import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';

export type SelectMenuOption = {
    id: number;
    label: string; // This is what is rendered
    key: string; // This will likely match the reducer keys
    type: GraphAction['type'];
    [key: string]: string | number;
};

type Props = {
    options: SelectMenuOption[];
    selected: SelectMenuOption;
    handleSelect: (option: SelectMenuOption) => void;
    disabled?: boolean;
};

const SelectMenu = ({ options, selected, handleSelect, disabled }: Props) => {
    return (
        <Listbox value={selected} onChange={handleSelect}>
            <Label className="block text-sm/6 font-medium text-gray-900">Assigned to</Label>
            <div className="relative mt-2">
                <ListboxButton
                    className="grid w-full cursor-default grid-cols-1 rounded-md bg-white py-1.5 pr-2 pl-3 text-left text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    disabled={disabled}
                >
                    <span className="col-start-1 row-start-1 truncate pr-6">{selected.label}</span>
                    <Icon.chevronUpDown
                        aria-hidden="true"
                        className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                    />
                    {/* <ChevronUpDownIcon
            aria-hidden="true"
            className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4"
          /> */}
                </ListboxButton>

                <ListboxOptions
                    transition
                    className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-hidden data-leave:transition data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0 sm:text-sm"
                >
                    {options.map(option => (
                        <ListboxOption
                            key={option.id}
                            value={option}
                            className="group relative cursor-default py-2 pr-4 pl-8 text-gray-900 select-none data-focus:bg-indigo-600 data-focus:text-white data-focus:outline-hidden"
                        >
                            <span className="block truncate font-normal group-data-selected:font-semibold">
                                {option.label}
                            </span>

                            <span className="absolute inset-y-0 left-0 flex items-center pl-1.5 text-indigo-600 group-not-data-selected:hidden group-data-focus:text-white">
                                <Icon.check aria-hidden="true" className="size-5" />
                                {/* <CheckIcon aria-hidden="true" className="size-5" /> */}
                            </span>
                        </ListboxOption>
                    ))}
                </ListboxOptions>
            </div>
        </Listbox>
    );
};

export default SelectMenu;
