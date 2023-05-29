import { createContext, useContext } from 'react';
import { PersonalizedQuestionsTopics } from '@/app/(mobile)/(landings)/(personalized)/personalized-questions/pageList';
import {
    PersonalizedExperienceFeaturesPages
} from '@/app/(mobile)/(landings)/(personalized)/personalized-experience/pagesList';

export interface IExperienceContext {
    topics: Record<PersonalizedQuestionsTopics, boolean>;
    experiencePagesList: PersonalizedExperienceFeaturesPages[];
}

export const DefaultExperienceContextValue = {topics: {
        [PersonalizedQuestionsTopics.TextAndCalls]: true,
        [PersonalizedQuestionsTopics.DeviceAgainstSpyware]: true,
        [PersonalizedQuestionsTopics.Location]: true,
        [PersonalizedQuestionsTopics.SocialMediaAccounts]: true,
        [PersonalizedQuestionsTopics.PersonalData]: true,
        [PersonalizedQuestionsTopics.OnlineAnonymity]: true,
    }, experiencePagesList: [
        PersonalizedExperienceFeaturesPages.SpywareDetector,
        PersonalizedExperienceFeaturesPages.SocialMediaProtection,
        PersonalizedExperienceFeaturesPages.TrackerDetector,
        PersonalizedExperienceFeaturesPages.CallRecorderBlocker,
        PersonalizedExperienceFeaturesPages.ScreenRecordingDetector,
    ]}

export const ExperienceContext = createContext<IExperienceContext>(JSON.parse(JSON.stringify(DefaultExperienceContextValue)));

export function useExperienceContext() {
    const context = useContext(ExperienceContext);

    if (!context) {
        throw new Error(
            'useExperienceContext must be used within a ExperienceContext Provider',
        )
    }

    return context;
}