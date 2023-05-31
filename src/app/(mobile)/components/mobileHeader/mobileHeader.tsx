'use client';
import css from './header.module.scss';
import { clsx } from 'clsx';
import { FC, memo } from 'react';
import { Logo } from '@/app/(common)/components/logo';

interface IHeaderProps {
    className?: string;
    logoClassName?: string;
}

const MobileHeader: FC<IHeaderProps> = memo(({ className, logoClassName = '' }) => {
    return (
        <header className={clsx(css['header'], className, {
            [css['show']]: true,
        })}>
            <Logo className={clsx(css['header__logo'], logoClassName)} />
        </header>
    );
});

MobileHeader.displayName = 'MobileHeader';
export default MobileHeader;
