import { Swiper as SwiperClass } from 'swiper/types';
import {
    useExperienceContext
} from '@/app/(mobile)/(landings)/(personalized)/personalized-experience/contexts/experience/useExperienceContext';
import {
    PersonalizedExperienceFeaturesPages,
    PersonalizedExperiencePages
} from '@/app/(mobile)/(landings)/(personalized)/personalized-experience/pagesList';
import { useSendEvent } from '@/app/(common)/shared/hooks';
import { PersonalizedExperienceEvents } from '@/app/(mobile)/(landings)/(personalized)/personalized-experience/events';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { usePPGCheckoutButton } from '@/app/(common)/contexts/checkoutProviders';
import {
    FeaturesConfig,
    IFeaturesConfigItem
} from '@/app/(mobile)/(landings)/(personalized)/personalized-experience/(pages)/feature/config';
import { MobileLandingRoutesList } from '@/app/(mobile)/(landings)/pageList';
import { BuyNowEvents } from '@/app/(common)/(pages)/buyNow';

const NavigateDirection = {
    prev: 'prev',
    next: 'next',
};

export const useFeature = () => {
    const { experiencePagesList } = useExperienceContext();
    const searchParams = useSearchParams();
    const router = useRouter();
    const params = useParams();
    const { pageId } = params as { pageId: PersonalizedExperienceFeaturesPages };
    const [config, setConfig] = useState<null | IFeaturesConfigItem>(null);
    const { sendEvent } = useSendEvent();
    const currIndex = experiencePagesList.indexOf(pageId);
    const nextNavigateIndex = currIndex + 1;
    const isRedirectToCheckout = nextNavigateIndex >= experiencePagesList.length;
    const { handleClick, isLoading } = usePPGCheckoutButton();

    useEffect(() => {
        const newConfig = FeaturesConfig[pageId as PersonalizedExperienceFeaturesPages];

        if (!newConfig) {
            return;
        }

        setConfig(newConfig);
    }, [pageId]);


    const navigatePrev = () => {
        router.back();
    };
    const handleFeatureSwipe = (swiperData: SwiperClass) => {
        if (swiperData.swipeDirection === NavigateDirection.prev) {
            navigatePrev();
            const nextPage =
                currIndex === 0
                    ? PersonalizedExperiencePages.FeaturesList
                    : experiencePagesList[currIndex - 1];
            sendEvent(PersonalizedExperienceEvents.FeatureSwipe, {
                direction: swiperData.swipeDirection,
                nextPage: nextPage,
                pageName: pageId,
            });
            return;
        }
        navigateNext();
        sendEvent(PersonalizedExperienceEvents.FeatureSwipe, {
            direction: swiperData.swipeDirection,
            nextPage: isRedirectToCheckout
                ? 'checkout'
                : experiencePagesList[nextNavigateIndex],
            pageName: pageId,
        });
    };

    const handleNextClick = async () => {
        console.log(`!!! navigateNext`)
        navigateNext();
        if (isRedirectToCheckout) {
            sendEvent(BuyNowEvents.BuyNowButtonClick);
            return;
        }
        sendEvent(PersonalizedExperienceEvents.FeatureNextClick, {
            pageName: pageId,
            nextPage: experiencePagesList[nextNavigateIndex],
        });
    };

    const navigateNext = () => {
        if (isRedirectToCheckout) {
            handleClick?.();
            return;
        }

        const nextFlowPage = experiencePagesList[nextNavigateIndex];
        const searchParamsData = searchParams.toString() || '';
        const nextPage = `${MobileLandingRoutesList.PersonalizedExperienceMobile}/${PersonalizedExperiencePages.Feature}/${nextFlowPage}${searchParamsData.length ? `?${searchParamsData}` : ''}`;
        router.push(nextPage);
    };


    return {
        handleFeatureSwipe,
        config,
        isLoading,
        handleNextClick,
        isRedirectToCheckout
    }

}