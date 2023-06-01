'use client';
import css from './fixedHeader.module.scss';
import classNames from 'classnames';
import { Button } from '@/app/(common)/components/button';
import { Logo } from '@/app/(common)/components/logo';
import { ButtonPlacements } from '@/app/(mobile)/(landings)/setup-flow/constants';
import { useCTAButton } from '@/app/(mobile)/(landings)/setup-flow/hooks';

interface IHeaderProps {
    isHeaderFixed: boolean;
    className?: string;
}

const FixedHeader = ({ className, isHeaderFixed = false}: IHeaderProps) => {
    const { handleButtonClick } = useCTAButton(ButtonPlacements.Header);

    return (
        <header className={classNames(css['header-fixed'], className, {
            [css['show']]: isHeaderFixed
        })}>
            <Logo className={css['header-fixed__logo']} />
            <Button
                onClick={handleButtonClick}
                className={classNames(css['header-fixed__button'], className)}>
                Protect me now
            </Button>
        </header>
    );
};

FixedHeader.displayName = 'FixedHeader';
export default FixedHeader;