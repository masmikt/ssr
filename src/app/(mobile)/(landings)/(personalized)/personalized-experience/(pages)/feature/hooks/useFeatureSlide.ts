import { Swiper as SwiperClass } from 'swiper/types';
import { useRouter } from 'next/router';
import {
    useExperienceContext
} from '@/app/(mobile)/(landings)/(personalized)/personalized-experience/contexts/experience/useExperienceContext';
import {
    PersonalizedExperiencePages
} from '@/app/(mobile)/(landings)/(personalized)/personalized-experience/pagesList';
import { useSendEvent } from '@/app/(common)/shared/hooks';
import { PersonalizedExperienceEvents } from '@/app/(mobile)/(landings)/(personalized)/personalized-experience/events';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import { usePPGIframeCheckoutContext } from '@/app/(common)/contexts/checkoutProviders';

const NavigateDirection = {
    prev: 'prev',
    next: 'next',
};

export const useFeatureSlide = () => {
    const { experiencePagesList } = useExperienceContext();
    const router = useRouter();
    const params = useParams();
    const { pageId } = params;
    const { sendEvent } = useSendEvent();
    const currIndex = experiencePagesList.indexOf(pageId);
    const nextNavigateIndex = currIndex + 1;
    const isRedirectToCheckout = nextNavigateIndex >= experiencePagesList.length;
    const [isLoading, setIsLoading] = useState(false);
    const { openCheckout, isCheckoutOpen } = usePPGIframeCheckoutContext();


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

    const navigateNext = () => {
        if (isRedirectToCheckout) {
            setIsLoading(true);
            openCheckout?.();
            return;
        }

        const nextPage = experiencePagesList[nextNavigateIndex];
//@todo add push
    };


    return {
        handleFeatureSwipe
    }

}