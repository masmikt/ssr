import {
    createContext,
    MouseEventHandler,
    ReactNode, useCallback,
    useContext, useEffect, useState,
} from 'react';
import { ICustomEventsHandlers, usePPGIframeCheckout } from './usePPGIframeCheckout';
import { useLicenseConfig } from '@/app/(common)/(pages)/buyNow';
import {
    IBuyNowConfig,
    IBuyNowLicenseConfig,
    IBuyNowLicensesConfig
} from '@/app/(common)/(pages)/buyNow/hooks/useBuynow/types';
import { PPGCheckoutIframe } from '@/app/(common)/contexts/checkoutProviders/ppg/iframe/components';

export const PPGIframeCheckoutContext = createContext<Partial<PPGIframeCheckoutConsumerContext>>({});

export function usePPGIframeCheckoutContext() {
    const context = useContext(PPGIframeCheckoutContext);

    if (!context) {
        throw new Error(
            'usePPGCheckoutContext must be used within a PPG Iframe Checkout Provider'
        );
    }
    return context;
}

type PPGIframeCheckoutConsumerContext = {
    isCheckoutOpen: boolean;
    specialOffersLicenses: IBuyNowLicensesConfig | null;
    licenses: IBuyNowLicensesConfig | null;
    selectedLicenseData: IBuyNowLicenseConfig | null;
    selectLicense: (purl: string) => MouseEventHandler<HTMLElement>;
    openCheckout: (purl?: string) => void;
    closeCheckout: () => void;
};

interface IPPGIframeCheckoutProvider {
    children: ReactNode;
    buyNowConfig: IBuyNowConfig | undefined;
    customEventsHandlers?: ICustomEventsHandlers
}

const PPGIframeCheckoutProvider = (
    { children, buyNowConfig, customEventsHandlers }: IPPGIframeCheckoutProvider,
) => {
    const {
        isCheckoutOpen,
        getCheckoutLink,
        setIsCheckoutOpen,
        handleCloseCheckoutModal
    } = usePPGIframeCheckout(buyNowConfig, customEventsHandlers);
    const { licenses, getSelectedLicenseData, getLicenseData, specialOffersLicenses } =
        useLicenseConfig(buyNowConfig);
    const [selectedLicenseData, setSelectedLicenseData] =
        useState<IBuyNowLicenseConfig | null>(getSelectedLicenseData());
    const [checkoutLink, setCheckoutLink] = useState<string | undefined>(undefined);

    useEffect(() => {
        console.log(`!!!! PPGIframeCheckoutProvider`)
    }, [])

    useEffect(() => {
        if (!isCheckoutOpen) {
            setCheckoutLink(undefined);
        }
    }, [isCheckoutOpen]);

    const selectLicense = useCallback(
        (purl: string) => () => {
            const licenseData = getLicenseData(purl);
            setSelectedLicenseData(licenseData);
        },
        [selectedLicenseData]
    );

    const openCheckout = useCallback(async (purl?: string) => {
        console.log(`!!!! PPGIFRAME`);
        let selectedLicensePurl = purl || selectedLicenseData?.purl;
        console.log(`!!!! PPGIFRAME selectedLicensePurl`);

        if (!selectedLicensePurl) {
            return;
        }
        const checkoutLink = await getCheckoutLink(selectedLicensePurl) as string || undefined;
        setCheckoutLink(checkoutLink);
    }, [selectedLicenseData]);

    const closeCheckout = useCallback(() => {
        handleCloseCheckoutModal();
    }, [])

    return (
        <PPGIframeCheckoutContext.Provider
            value={{
                specialOffersLicenses,
                isCheckoutOpen,
                licenses,
                selectedLicenseData,
                selectLicense,
                openCheckout,
                closeCheckout,
            }}
        >
            {children}
            <PPGCheckoutIframe
                checkoutLink={checkoutLink}
                setIsCheckoutOpen={setIsCheckoutOpen}
            />
        </PPGIframeCheckoutContext.Provider>
    );
};
PPGIframeCheckoutProvider.displayName = 'PPGIframeCheckoutProvider';
export default PPGIframeCheckoutProvider;
