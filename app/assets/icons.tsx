import {
    CheckCircleIcon,
    ChevronDownIcon,
    ChevronUpDownIcon,
    ChevronUpIcon,
    XMarkIcon,
} from '@heroicons/react/20/solid';
import { ComponentType } from 'react';

type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
const sizeMap: Record<IconSize, string> = {
    xs: 'h-3 w-3',
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6',
    xl: 'h-8 w-8',
};
interface IconWrapperProps {
    size?: IconSize;
    className?: string;
}

function wrapIcon(IconComponent: ComponentType<{ className?: string }>) {
    return function WrappedIcon({ size = 'md', className = '' }: IconWrapperProps) {
        return <IconComponent className={[sizeMap[size], className].join(' ')} />;
    };
}

export const Icon = {
    chevronDown: wrapIcon(ChevronDownIcon),
    chevronUp: wrapIcon(ChevronUpIcon),
    chevronUpDown: wrapIcon(ChevronUpDownIcon),
    check: wrapIcon(CheckCircleIcon),
    x: wrapIcon(XMarkIcon),
};
