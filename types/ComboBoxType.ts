export type ComboboxOption = {
    key: number | string; // A unique key used for mapping options
    id: number; // The primary key for the data
    label: string; // What is rendered in the combobox
    name: string; // The name of the combobox input that is needed for the handleSelect
    queryName: string; // The name for the input field that queries the list of options
};
