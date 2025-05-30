import BaseButton, { BaseButtonProps } from './BaseButton';

const CancelButton = (props: Omit<BaseButtonProps, 'className'>) => {
    return (
        <BaseButton className="bg-gray-100 text-gray-800 hover:bg-gray-200 rounded-md" {...props} />
    );
};

export default CancelButton;
