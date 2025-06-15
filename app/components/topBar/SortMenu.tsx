import { Icon } from '@/app/assets/icons';
import { SortOption } from '@/app/ui/TopBar';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';

type Props = {
    sortOptions: SortOption[];
};

const SortMenu = ({ sortOptions }: Props) => {
    return (
        <>
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                        Sort
                        <Icon.chevronDown
                            aria-hidden="true"
                            className="-mr-1 ml-1 size-5 shrink-0 text-gray-400 group-hover:text-gray-500"
                        />
                    </MenuButton>
                </div>

                <MenuItems
                    transition
                    className="absolute left-0 z-10 mt-2 w-40 origin-top-left rounded-md bg-white shadow-2xl ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                >
                    <div className="py-1">
                        {sortOptions.map(option => (
                            <MenuItem key={option.name}>
                                <a
                                    href={option.href}
                                    className={[
                                        option.current
                                            ? 'font-medium text-gray-900'
                                            : 'text-gray-500',
                                        'block px-4 py-2 text-sm data-focus:bg-gray-100 data-focus:outline-hidden',
                                    ].join(' ')}
                                >
                                    {option.name}
                                </a>
                            </MenuItem>
                        ))}
                    </div>
                </MenuItems>
            </Menu>
        </>
    );
};

export default SortMenu;
