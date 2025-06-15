import { Icon } from '@/app/assets/icons';
import { Filter, FilterKeys, FilterSelection } from '@/app/ui/TopBar';
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/react';
import CheckBox from '../inputs/CheckBox';

type Props = {
    filters: Filter[];
    filterSelectionsMap: FilterSelection;
    notify: Record<FilterKeys, boolean>;
};

const OptionsPopover = ({ filters, filterSelectionsMap, notify }: Props) => {
    return (
        <PopoverGroup className="-mx-4 flex items-center divide-x divide-gray-200">
            {filters.map(section => (
                <Popover key={section.name} className="relative inline-block px-4 text-left">
                    <PopoverButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                        <span>{section.name}</span>
                        <span
                            className={[
                                'ml-1.5 rounded-sm bg-gray-200 px-1.5 py-0.5 text-xs font-semibold text-gray-700 tabular-nums',
                                notify[section.key as FilterKeys] ? 'animate-ping' : '',
                            ].join(' ')}
                        >
                            {filterSelectionsMap.get(section.key as FilterKeys)?.size}
                        </span>
                        <Icon.chevronDown
                            aria-hidden="true"
                            className="-mr-1 ml-1 size-5 shrink-0 text-gray-400 group-hover:text-gray-500"
                        />
                    </PopoverButton>

                    <PopoverPanel
                        transition
                        className={[
                            'absolute z-10 mt-2 origin-top-right rounded-md bg-white p-4 shadow-2xl ring-1 ring-black/5',
                            'transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in',
                            section.type === 'groupedFilterType' ? 'w-max -right-96' : 'right-0',
                        ].join(' ')}
                    >
                        <form
                            className={[
                                section.type === 'singleFilterType'
                                    ? 'space-y-4'
                                    : 'mx-auto grid max-w-7xl grid-cols-3 gap-x-4 px-4 text-sm sm:px-6 md:gap-x-6 lg:px-8',
                            ].join(' ')}
                        >
                            {section.type === 'singleFilterType'
                                ? section.options &&
                                  section.options
                                      .filter(o => o.show)
                                      .map((option, optionIdx) => (
                                          <div
                                              key={`${option.value}-${optionIdx}`}
                                              className="flex gap-3"
                                          >
                                              <CheckBox
                                                  section={section}
                                                  option={option}
                                                  optionIdx={optionIdx}
                                              />
                                          </div>
                                      ))
                                : section.groupOptions &&
                                  section.groupOptions.map(group => (
                                      <fieldset
                                          key={`${group.groupId}-${group.groupLabel}-${group.groupType}`}
                                          className="space-y-4"
                                      >
                                          <legend className="block font-bold text-gray-900 uppercase">
                                              {group.groupLabel}
                                          </legend>
                                          {group.options.map((option, optionIdx) => (
                                              <div
                                                  key={`${option.label}-${optionIdx}`}
                                                  className="flex gap-3"
                                              >
                                                  <CheckBox
                                                      section={section}
                                                      option={option}
                                                      optionIdx={optionIdx}
                                                  />
                                              </div>
                                          ))}
                                      </fieldset>
                                  ))}
                        </form>
                    </PopoverPanel>
                </Popover>
            ))}
        </PopoverGroup>
    );
};

export default OptionsPopover;
