import { createContext, useContext } from 'react';
import { IBuyNowConfig } from './useBuyNow';

export const BuyNowContext = createContext<Partial<BuyNowConsumerContext>>({});

type BuyNowConsumerContext = {
    buyNowConfig: IBuyNowConfig;
};

export function useBuyNowContext() {
    const context = useContext(BuyNowContext);

    if (!context) {
        throw new Error(
            'useBuyNowContext must be used within a BuyNow Provider',
        )
    }
    return context;
}