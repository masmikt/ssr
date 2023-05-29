import { createContext, useContext } from 'react';
import { Swiper as SwiperClass } from 'swiper/types';
import {
    IFeaturesConfigItem
} from '@/app/(mobile)/(landings)/(personalized)/personalized-experience/(pages)/feature/config';

export const FeatureContext = createContext<Partial<IFeatureContext>>({});

type IFeatureContext = {
    handleFeatureSwipe(swiper: SwiperClass): void;
    config: null | IFeaturesConfigItem;
    isLoading: boolean;
    handleNextClick(): void;
    isRedirectToCheckout: boolean;
};

export function useFeatureContext() {
    const context = useContext(FeatureContext);

    if (!context) {
        throw new Error(
            'useFeatureContext must be used within a Feature Provider',
        )
    }
    return context;
}