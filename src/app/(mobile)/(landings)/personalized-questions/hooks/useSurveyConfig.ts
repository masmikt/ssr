import { useCallback, useEffect, useMemo, useState } from 'react';
import {
    PersonalizedQuestionsPages,
    PersonalizedQuestionsTopics
} from '@/app/(mobile)/(landings)/personalized-questions/pageList';
import {
    IPageContentConfig,
    IPageFlowInfo,
    ISurveyAnswerConfig
} from '@/app/(mobile)/(landings)/personalized-questions/types';
import { useStorage } from '@/app/(common)/shared/hooks';

const PagesListConfig: Record<PersonalizedQuestionsTopics, PersonalizedQuestionsPages[]> = {
    [PersonalizedQuestionsTopics.TextAndCalls]: [
        PersonalizedQuestionsPages.PhoneTalks,
        PersonalizedQuestionsPages.CallRecording,
    ],
    [PersonalizedQuestionsTopics.DeviceAgainstSpyware]: [
        PersonalizedQuestionsPages.PhoneBattery,
        PersonalizedQuestionsPages.LightningUp,
    ],
    [PersonalizedQuestionsTopics.Location]: [
        PersonalizedQuestionsPages.FindPhoneInDiffLocation,
        PersonalizedQuestionsPages.PhoneTracking,
        PersonalizedQuestionsPages.KnowYourLocation,
    ],
    [PersonalizedQuestionsTopics.PersonalData]: [
        PersonalizedQuestionsPages.ProtectPersonalData,
        PersonalizedQuestionsPages.PhonePasscode,
    ],
    [PersonalizedQuestionsTopics.SocialMediaAccounts]: [
        PersonalizedQuestionsPages.ProtectSocialAccounts,
    ],
    [PersonalizedQuestionsTopics.OnlineAnonymity]: [
        PersonalizedQuestionsPages.OnlineActivity,
    ],
};

export const PersonalizedQuestionsPagesLocalStorageKey = 'PERSONALIZED_MOBILE_SURVEY_PAGES_LIST';
export const PersonalizedQuestionsTopicsLocalStorageKey = 'PERSONALIZED_MOBILE_SURVEY_TOPICS_LIST';

export const SurveyFinished = 'SURVEY_FINISHED';

export const useSurveyConfig = (config: Record<string, IPageContentConfig>) => {
    const { getItem, setItem } = useStorage();
    const [pagesList, setPagesList] = useState<PersonalizedQuestionsPages[] | null>(() => {
        const fromStorage = getItem(PersonalizedQuestionsPagesLocalStorageKey);
        return fromStorage || null;
    });
    const surveyConfig =
        useMemo<Record<PersonalizedQuestionsPages, IPageContentConfig> | null>(() => {
            if (!pagesList) {
                return null;
            }

            return pagesList.reduce((result: any, page: PersonalizedQuestionsPages) => {
                if (page in config) {
                    result[page] = config[page];
                }

                return result;
            }, {} as Record<PersonalizedQuestionsPages, IPageContentConfig>);
        }, [pagesList]);

    useEffect(() => {
        setItem(PersonalizedQuestionsPagesLocalStorageKey, pagesList);
    }, [pagesList])

    const totalFlowStep = useMemo(() => {
        return (pagesList?.length || 0) + 1;
    }, [pagesList]);

    const updateSurveyConfig = (activeTopics: Record<PersonalizedQuestionsTopics, boolean>) => {
        setItem(PersonalizedQuestionsTopicsLocalStorageKey, activeTopics);

        const surveyPagesList = (Object.entries(activeTopics) as unknown as [PersonalizedQuestionsTopics, boolean][])
            .reduce((result, [topic, isActive]) => {
                if (isActive) {
                    result.push(...PagesListConfig[topic]);
                }

                return result;
            }, [] as PersonalizedQuestionsPages[]);


        setPagesList(surveyPagesList);
    };

    const getSurveyPageConfig = useCallback((pageId: PersonalizedQuestionsPages): IPageContentConfig | null => {
        if (surveyConfig && surveyConfig[pageId]) {
            return surveyConfig[pageId];
        }

        return null;
    }, [surveyConfig]);

    const getSurveyStepByPage = (pageId: PersonalizedQuestionsPages | undefined) => {
        if (!pageId) {
            return 0;
        }

        return pagesList?.indexOf(pageId) || 0;
    };

    const getSurveyPageInfo = (pageId: PersonalizedQuestionsPages | undefined): IPageFlowInfo => {
        const currentStep = getSurveyStepByPage(pageId) + 1;

        return {
            totalSteps: totalFlowStep,
            currentStep: currentStep,
            flowProgress: currentStep <= 0 ? 0 : Math.ceil(((currentStep) / totalFlowStep) * 100),
        };
    };

    const getSurveyNextPage = (pageId?: PersonalizedQuestionsPages, surveyAnswerPageConfig?: ISurveyAnswerConfig): string => {
        if (pagesList?.length) {
            if (!pageId) {
                return pagesList[0];
            }

            let nextPageStep = 1;

            if (surveyAnswerPageConfig) {
                if (surveyAnswerPageConfig.nextPageId) {
                    return surveyAnswerPageConfig.nextPageId;
                }

                if (surveyAnswerPageConfig.skipNextPageId) {
                    nextPageStep += 1;
                }
            }

            const currentIndex = getSurveyStepByPage(pageId);
            const nextPageIndex = currentIndex + nextPageStep;

            if (nextPageIndex < pagesList.length) {
                return pagesList[nextPageIndex];
            } else {
                return SurveyFinished;
            }
        }

        return '';
    };

    return {
        getSurveyPageConfig,
        getSurveyPageInfo,
        getSurveyNextPage,
        updateSurveyConfig,
    };
};
