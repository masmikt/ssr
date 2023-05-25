import css from './checkoutIframe.module.scss';
import clsx from 'clsx';
import { useCallback } from 'react';
import { IFrame } from '@/app/(common)/components/iframe';

interface IPPGCheckoutIframe {
    checkoutLink: string | undefined;
    setIsCheckoutOpen: (state: boolean) => void;
}

const PPGCheckoutIframe = ({ checkoutLink, setIsCheckoutOpen }: IPPGCheckoutIframe) => {
    if (!checkoutLink) {
        return null;
    }
    const handleLoadIframe = useCallback(() => {
        setIsCheckoutOpen(true);
    }, []);

    return (
        <div className={clsx(css['ppg-checkout-iframe__wrapper'])}>
            <IFrame
                src={checkoutLink}
                className={css['ppg-checkout-iframe']}
                onLoad={handleLoadIframe}
                loading='lazy'
            />
        </div>
    );
};

PPGCheckoutIframe.displayName = 'PPGCheckoutIframe';
export default PPGCheckoutIframe;