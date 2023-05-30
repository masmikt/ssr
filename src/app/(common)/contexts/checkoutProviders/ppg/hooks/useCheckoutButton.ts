import { useEffect, useState } from 'react';
import { usePPGIframeCheckoutContext } from '../iframe';
import { useSendEvent } from '@/app/(common)/shared/hooks';
import { BuyNowEvents } from '@/app/(common)/(pages)/buyNow';

export const usePPGCheckoutButton = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { sendEvent } = useSendEvent();
    const { openCheckout, isCheckoutOpen, selectedLicenseData } = usePPGIframeCheckoutContext();

    useEffect(() => {
        if (isCheckoutOpen) {
            setIsLoading(false);
        }
    }, [isCheckoutOpen]);

    const handleClick = async (ev: any) => {
        ev?.preventDefault();
        setIsLoading(true);
        await openCheckout?.();
        sendEvent(BuyNowEvents.BuyNowButtonClick, {
            purl: selectedLicenseData?.purl,
            planName: selectedLicenseData?.name
        });
    };

    return {
        handleClick,
        isLoading,
    }
}