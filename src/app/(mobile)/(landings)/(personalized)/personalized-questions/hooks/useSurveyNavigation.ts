import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { NavigateOptions } from 'next/dist/shared/lib/app-router-context';
import { MobileLandingRoutesList } from '@/app/(mobile)/(landings)/pageList';
import {
    PersonalizedExperiencePages
} from '@/app/(mobile)/(landings)/(personalized)/personalized-experience/pagesList';

export enum NavigationTypes {
    Answer = 'answer',
    Default = 'default',
}

export const useSurveyNavigation = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [isNavigating, setIsNavigating] = useState(false);

    const navigateFinishSurvey = (path?: string | null | number) => {
        const searchParamsData = getSearchParamsPath();
        const navPath = path || `${MobileLandingRoutesList.PersonalizedExperienceMobile}/${PersonalizedExperiencePages.Preparing}`;
        const navigationPath = `${navPath}${searchParamsData}`.trim();
        router.push(navigationPath);
    }

    const navigateTo = (path: string | null | number, options: NavigateOptions | undefined = undefined, type = NavigationTypes.Default): void => {
        const delay = getNavigationDelayDuration(type);

        setIsNavigating(true);
        setTimeout(() => {
            const navigationPath = getNavigationPath(path);
            setIsNavigating(false);
            router.push(navigationPath);
        }, delay);
    }

    const getNavigationPath = (path: string | null | number) => {
        const searchParamsData = getSearchParamsPath();

        if (!path) {
            return `${MobileLandingRoutesList.PersonalizedQuestionsMobile}${searchParamsData}`.trim()
        }

        return `${MobileLandingRoutesList.PersonalizedQuestionsMobile}/${path}${searchParamsData}`.trim()
    }

    const getSearchParamsPath = () => {
        const searchParamsData = searchParams.toString();

        if (!searchParamsData.length) {
            return '';
        }

        return `?${searchParamsData}`;
    }

    const getNavigationDelayDuration = (type: NavigationTypes) => {
        switch (type) {
            case NavigationTypes.Answer:
                return 400;
            default:
                return 250;
        }
    }

    return {
        navigateTo,
        isNavigating,
        navigateFinishSurvey,
    }
}