import { useState } from 'react';
// import { useRouter } from 'next/router';
import { NavigateOptions } from 'next/dist/shared/lib/app-router-context';
import { MobileLandingRoutesList } from '@/app/(mobile)/(landings)/pageList';

export enum NavigationTypes {
    Answer = 'answer',
    Default = 'default',
}

export const useSurveyNavigation = () => {
    // const router = useRouter();
    const [isNavigating, setIsNavigating] = useState(false);
    // const { locationHistory, setLocationHistory } = useRouter();

    const navigateTo = (path: string | null | number, options: NavigateOptions | undefined = undefined, type = NavigationTypes.Default): void => {
        const delay = getNavigationDelayDuration(type);

        setIsNavigating(true);
        setTimeout(() => {
            let navigationPath = path;
            setIsNavigating(false);
            // if (typeof navigationPath === 'number') {
            //     const locationHistoryIndex = locationHistory.length - 1 - Math.abs(navigationPath);
            //     if (locationHistoryIndex >= 0) {
            //         navigationPath = locationHistory[locationHistoryIndex];
            //         setLocationHistory([...locationHistory].splice(0, locationHistoryIndex));
            //     }
            // }
            navigationPath = (getNavigationPath((navigationPath as string | null)));
            // const navigationPathWithParams = navigationPath + router.query;
            // router.push(navigationPathWithParams);
        }, delay);
    }

    const getNavigationPath = (path: string | null): string => {
        const defaultPath = MobileLandingRoutesList.PersonalizedQuestionsMobile;

        if (!path) {
            return defaultPath;
        }

        return path;
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
    }
}