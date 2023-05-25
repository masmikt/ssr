'use client';
import css from './header.module.scss';
import { clsx } from 'clsx';
import { FC, memo } from 'react';
import { Logo } from '@/app/(common)/components/logo';
import { useLayoutContext } from '@/app/(common)/contexts';

interface IHeaderProps {
    className?: string;
    logoClassName?: string;
}

const MobileHeader: FC<IHeaderProps> = memo(({ className, logoClassName = '' }) => {
    const { isHeaderFixed } = useLayoutContext();
    return (
        <header className={clsx(css['header'], className, {
            [css['show']]: !isHeaderFixed
        })}>
            <Logo className={clsx(css['header__logo'], logoClassName)} />
        </header>
    );
});

MobileHeader.displayName = 'MobileHeader';
export default MobileHeader;
