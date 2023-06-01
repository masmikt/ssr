import css from './header.module.scss';
import { clsx } from 'clsx';
import { FC } from 'react';
import { DefaultLogo } from '@/app/(common)/components/logo';

interface IHeaderProps {
    className?: string;
    logoClassName?: string;
}

const MobileHeader: FC<IHeaderProps> = ({ className, logoClassName = '' }) => {
    return (
        <header className={clsx(css['header'], className, {
            [css['show']]: true,
        })}>
            <DefaultLogo className={clsx(css['header__logo'], logoClassName)} />
        </header>
    );
};

MobileHeader.displayName = 'MobileHeader';
export default MobileHeader;
