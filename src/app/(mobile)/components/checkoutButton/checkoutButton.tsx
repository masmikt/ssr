import css from './checkoutButton.module.scss';
import classNames from 'classnames';
import Image from 'next/image'
import { Button } from '@/app/(common)/components/button';
import { usePPGCheckoutButton } from '@/app/(common)/contexts/checkoutProviders';
import { ReactNode } from 'react';


export interface ICheckoutButton {
    children?: ReactNode;
    className?: string;
}

const CheckoutButton = ({ children = 'Protect me now', className, }: ICheckoutButton) => {
    const { isLoading, handleClick } = usePPGCheckoutButton();

    return (
        <Button
            disabled={isLoading}
            className={classNames(css['checkout-button'], className, {
                [css.loading]: isLoading
            })}
            onClick={handleClick}
        >
            {isLoading ?
                <Image
                    className={css['checkout-button__loading-img']}
                    src={'/images/common/triple-dots-jump.gif'}
                    width={47}
                    height={47}
                    alt='Loading' />
                : children}

        </Button>
    )
}

CheckoutButton.displayName = 'CheckoutButton';
export default CheckoutButton;