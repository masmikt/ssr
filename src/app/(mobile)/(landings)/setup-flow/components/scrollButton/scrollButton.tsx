"use client";
import { FC, ReactNode } from 'react';
import clsx from 'clsx';
import css from './scrollButton.module.scss';
import { ButtonPlacements } from '../../constants';
import { Button } from '@/app/(common)/components/button';
import { useCTAButton } from '@/app/(mobile)/(landings)/setup-flow/hooks';

interface IScrollButtonProps {
    placement: ButtonPlacements;
    children?: ReactNode;
    className?: string;
}

const ScrollButton: FC<IScrollButtonProps> = ({ children, placement, className }) => {
    const { handleButtonClick } = useCTAButton(placement);

    return (
        <Button
            onClick={handleButtonClick}
            className={clsx(css['scroll-button'], className)}>
            {children}
        </Button>
    );
};

export default ScrollButton;