import { useEffect, useState } from 'react';
import {
    PersonalizedExperienceFeaturesPages, PersonalizedExperiencePages
} from '@/app/(mobile)/(landings)/(personalized)/personalized-experience/pagesList';
import { PersonalizedQuestionsTopics } from '@/app/(mobile)/(landings)/(personalized)/personalized-questions/pageList';
import { useRouter, useSearchParams } from 'next/navigation';
import {
    DefaultExperienceContextValue,
    IExperienceContext
} from '@/app/(mobile)/(landings)/(personalized)/personalized-experience/contexts/experience/useExperienceContext';
import {
    PersonalizedQuestionsTopicsLocalStorageKey
} from '@/app/(mobile)/(landings)/(personalized)/personalized-questions/hooks/useSurveyConfig';
import { useStorage } from '@/app/(common)/shared/hooks';
import { MobileLandingRoutesList } from '@/app/(mobile)/(landings)/pageList';

interface IFeaturesShowItem {
    topic: PersonalizedExperienceFeaturesPages;
    checkShow: (selectedTopicsFromStorage: Record<PersonalizedQuestionsTopics, boolean>) => boolean;
}

export const FeaturesShowConfig: IFeaturesShowItem[] = [
    {
        topic: PersonalizedExperienceFeaturesPages.SpywareDetector,
        checkShow: (selectedTopicsFromStorage) =>
            selectedTopicsFromStorage[PersonalizedQuestionsTopics.PersonalData] ||
            selectedTopicsFromStorage[PersonalizedQuestionsTopics.DeviceAgainstSpyware] ||
            selectedTopicsFromStorage[PersonalizedQuestionsTopics.OnlineAnonymity],
    },
    {
        topic: PersonalizedExperienceFeaturesPages.SocialMediaProtection,
        checkShow: (selectedTopicsFromStorage) => selectedTopicsFromStorage[PersonalizedQuestionsTopics.SocialMediaAccounts],
    },
    {
        topic: PersonalizedExperienceFeaturesPages.TrackerDetector,
        checkShow: (selectedTopicsFromStorage) => selectedTopicsFromStorage[PersonalizedQuestionsTopics.Location],
    },
    {
        topic: PersonalizedExperienceFeaturesPages.CallRecorderBlocker,
        checkShow: (selectedTopicsFromStorage) => selectedTopicsFromStorage[PersonalizedQuestionsTopics.PersonalData] ||
            selectedTopicsFromStorage[PersonalizedQuestionsTopics.TextAndCalls] ||
            selectedTopicsFromStorage[PersonalizedQuestionsTopics.DeviceAgainstSpyware],
    },
    {
        topic: PersonalizedExperienceFeaturesPages.ScreenRecordingDetector,
        checkShow: (selectedTopicsFromStorage) => selectedTopicsFromStorage[PersonalizedQuestionsTopics.DeviceAgainstSpyware]
    },
];

export const useExperienceFeaturesConfig = () => {
    const router = useRouter();
    const { getItem } = useStorage();
    const searchParams = useSearchParams();
    const [config, setConfig] = useState<IExperienceContext>(JSON.parse(JSON.stringify(DefaultExperienceContextValue)));

    useEffect(() => {
        const selectedTopicsFromStorage = getItem(PersonalizedQuestionsTopicsLocalStorageKey) || {};
        if (Object.values(selectedTopicsFromStorage).some(Boolean)) {
            setConfig({
                topics: selectedTopicsFromStorage,
                experiencePagesList: FeaturesShowConfig
                    .filter(({ checkShow }) => checkShow(selectedTopicsFromStorage))
                    .map(({ topic }) => topic),
            });
        } else {
            const searchParamsData = searchParams.toString() || '';
            const nextPage = `${MobileLandingRoutesList.PersonalizedExperienceMobile}/${PersonalizedExperiencePages.Feature}${searchParamsData.length ? `?${searchParamsData}` : ''}`;
            router.push(nextPage);
        }
    }, []);

    return config;
};
