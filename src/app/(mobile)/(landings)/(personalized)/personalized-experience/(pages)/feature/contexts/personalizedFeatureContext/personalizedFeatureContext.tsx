import { useEffect, useState } from 'react';
import { PPGIframeCheckoutProvider } from '@/app/(common)/contexts/checkoutProviders';
import { BuyNowContext } from '@/app/(common)/(pages)/buyNow';

interface IPersonalizedFeatureContextProvider {
    children: React.ReactNode
}


async function getBuyNowConfig() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_PATH}/api/setup-flow`);
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to getBuyNowConfig');
    }

    const jsonResponse = await res.json();
    return JSON.parse(jsonResponse);
}

const PersonalizedFeatureContext = ({ children }: IPersonalizedFeatureContextProvider) => {
    const [buyNowConfig, setBuyNowConfig] = useState(undefined);

    useEffect(() => {
        getConfig();
    }, []);

    const getConfig = async () => {
        const config = await getBuyNowConfig();
        setBuyNowConfig(config);
    }

    if (!buyNowConfig) {
        return null;
    }

    return (
        <BuyNowContext.Provider
            value={{
                buyNowConfig,
            }}
        >
            <PPGIframeCheckoutProvider buyNowConfig={buyNowConfig}>
                {children}
            </PPGIframeCheckoutProvider>
        </BuyNowContext.Provider>
    )
}

PersonalizedFeatureContext.displayName = 'PersonalizedFeatureContext';
export default PersonalizedFeatureContext;