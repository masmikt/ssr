import { useMemo } from 'react';
import { PPGCheckoutLink, PPGQueryParams } from './constants';
import { useSearchParams } from 'next/navigation';
import { useCommonCheckout } from '@/app/(common)/contexts/checkoutProviders/hooks';
import { IBuyNowConfig } from '@/app/(common)/(pages)/buyNow/hooks/useBuynow/types';

export const usePPGCheckout = (buyNowConfig: IBuyNowConfig | undefined) => {
    const baseCheckoutLink = PPGCheckoutLink;
    const searchParams = useSearchParams();
    const { getCommonCheckoutParams } = useCommonCheckout(buyNowConfig);
    const isTestingMode = useMemo(() => {
        return !!searchParams.get(PPGQueryParams.TestingMode);
    }, [searchParams]);

    const getCheckoutParams = async (purl: string) => {
        const commonCheckoutParams = await getCommonCheckoutParams(purl);

        let checkoutParams = {
            ...commonCheckoutParams,
        };

        if (isTestingMode) {
            const testingCheckoutParams = {
                'use-test-mode': true,
                'secret-key': searchParams.get(PPGQueryParams.TestingMode),
                emailoverride: searchParams.get(PPGQueryParams.Emailoverride),
            };

            checkoutParams = {
                ...checkoutParams,
                ...testingCheckoutParams,
            };
        }

        return checkoutParams;
    };

    return {
        baseCheckoutLink,
        getCheckoutParams,
    };
};
