"use client";
import clsx from 'clsx';
import css from './expirienceButton.module.scss';
import { Button, ButtonColor, ButtonSize } from '@/app/(common)/components/button';
import { PersonalizedExperienceEvents } from '@/app/(mobile)/(landings)/(personalized)/personalized-experience/events';
import {
    PersonalizedExperiencePages
} from '@/app/(mobile)/(landings)/(personalized)/personalized-experience/pagesList';
import { useCallback } from 'react';
import {
    useExperienceContext
} from '@/app/(mobile)/(landings)/(personalized)/personalized-experience/contexts/experience/useExperienceContext';
import { useRouter, useSearchParams } from 'next/navigation';
import { useSendEvent } from '@/app/(common)/shared/hooks';
import { MobileLandingRoutesList } from '@/app/(mobile)/(landings)/pageList';

const FeaturesExperienceButton = () => {
    const { topics, experiencePagesList } = useExperienceContext();
    const router = useRouter();
    const searchParams = useSearchParams();
    const { sendEvent } = useSendEvent();

    const handleNextClick = useCallback(() => {
        sendEvent(PersonalizedExperienceEvents.FeatureListNextClick, {
            topics: JSON.stringify(topics),
            experiencePagesList: JSON.stringify(experiencePagesList)
        });
        const searchParamsData = searchParams.toString() || '';
        const nextPage = `/${MobileLandingRoutesList.PersonalizedExperienceMobile}/${PersonalizedExperiencePages.Feature}/${experiencePagesList[0]}${searchParamsData.length ? `?${searchParamsData}` : ''}`;
        router.push(nextPage);
    }, []);

    return (
        <Button
            className={clsx(css['features-list__button'])}
            size={ButtonSize.ExtraLarge} color={ButtonColor.Info}
            onClick={handleNextClick}>
            Next
        </Button>
    )
}
FeaturesExperienceButton.displayName = 'FeaturesExperienceButton';
export default FeaturesExperienceButton;