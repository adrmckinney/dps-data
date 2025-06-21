import { FormChangeType } from '@/types/formChangeTypes';
import { HTMLInputTypeAttribute } from 'react';

type Props = {
    label?: string;
    name: string;
    value: string;
    id?: string;
    placeholder?: string;
    type?: HTMLInputTypeAttribute;
    handleChange: (e: FormChangeType) => void;
};

const SideBarInput = ({
    label = '',
    name,
    value = '',
    id = '',
    placeholder = '',
    type = 'text',
    handleChange,
}: Props) => {
    return (
        <>
            <div
                className={[
                    'rounded-md bg-white px-3 pt-2.5 pb-1.5',
                    'outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-sky-600',
                ].join(' ')}
            >
                <label
                    htmlFor={id.length > 0 ? id : name}
                    className={['block text-xs font-medium text-gray-900'].join(' ')}
                >
                    {label}
                </label>
                <input
                    id={id.length > 0 ? id : name}
                    name={name}
                    value={value}
                    type={type}
                    placeholder={placeholder}
                    className="block w-full text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                    onChange={handleChange}
                />
            </div>
        </>
    );
};

export default SideBarInput;
