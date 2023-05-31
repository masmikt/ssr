'use client';
import { useSendEvent } from '@/app/(common)/shared/hooks';
import { useEffect, useMemo, useState } from 'react';
import { PersonalizedQuestionsTopics } from '@/app/(mobile)/(landings)/(personalized)/personalized-questions/pageList';
import { getActiveTopicLabels } from '@/app/(mobile)/(landings)/(personalized)/personalized-questions/config';
import { PersonalizedQuestionsEvents } from '@/app/(mobile)/(landings)/(personalized)/personalized-questions/events';
import { useSetupFlow } from '@/app/(mobile)/(landings)/(personalized)/personalized-questions/contexts/setupFlow';

export const useDashboard = () => {
    const { updateSurveyConfig, navigateTo, getSurveyNextPage } = useSetupFlow();
    const { sendEvent } = useSendEvent();
    const [navigate, setNavigate] = useState(false)
    const [activeTopics, setActiveTopics] = useState<Record<PersonalizedQuestionsTopics, boolean>>({
        [PersonalizedQuestionsTopics.TextAndCalls]: false,
        [PersonalizedQuestionsTopics.DeviceAgainstSpyware]: false,
        [PersonalizedQuestionsTopics.Location]: false,
        [PersonalizedQuestionsTopics.PersonalData]: false,
        [PersonalizedQuestionsTopics.SocialMediaAccounts]: false,
        [PersonalizedQuestionsTopics.OnlineAnonymity]: false,
    });
    const isButtonActive = useMemo(() => {
        return Object.values(activeTopics).filter(Boolean).length > 0;
    }, [activeTopics]);


    useEffect(() => {
        updateSurveyConfig(activeTopics);
    }, [activeTopics]);

    const handleTopicClick = (key: PersonalizedQuestionsTopics) => {
        setActiveTopics((currentState) => {
            return {
                ...currentState,
                [key]: !currentState[key],
            };
        });
    };

    const handleNextClick = () => {
        setNavigate(true);
        const nextPage = getSurveyNextPage();
        const topics = getActiveTopicLabels(activeTopics);
        if (topics.length) {
            sendEvent(
                PersonalizedQuestionsEvents.ConfigureCategoriesClick,
                {
                    categories: topics,
                    categoriesNumber: topics.length
                }
            );

            topics.map(topic => {
                sendEvent(
                    PersonalizedQuestionsEvents.SelectedConfigureCategory,
                    { category: topic }
                );
            })
        }

        navigateTo(nextPage);
    };


    return {
        activeTopics,
        handleTopicClick,
        navigate,
        handleNextClick,
        isButtonActive
    }
}