'use client';
import { useSurveyConfig } from '@/app/(mobile)/(landings)/(personalized)/personalized-questions/hooks/useSurveyConfig';
import { useSurveyAnswers } from '@/app/(mobile)/(landings)/(personalized)/personalized-questions/hooks/useSurveyAnswers';
import { useSurveyNavigation } from '@/app/(mobile)/(landings)/(personalized)/personalized-questions/hooks/useSurveyNavigation';
import {
    useSetupFlowContext
} from '@/app/(mobile)/(landings)/(personalized)/personalized-questions/contexts/setupFlow/useSetupFlowContext';

interface ISetupFlowContext {
    children: React.ReactNode
}


const SetupFlowContextProvider = ({ children }: ISetupFlowContext) => {
    const { SetupFlowContext } = useSetupFlowContext();
    const {
        getSurveyPageConfig,
        getSurveyPageInfo,
        getSurveyNextPage,
        updateSurveyConfig
    } = useSurveyConfig();
    const { getSurveyAnswerForPage, setSurveyAnswerForPage } = useSurveyAnswers();
    const { navigateTo, isNavigating, navigateFinishSurvey } = useSurveyNavigation();

    return (
        <SetupFlowContext.Provider value={{
            getSurveyPageConfig,
            getSurveyPageInfo,
            getSurveyNextPage,
            getSurveyAnswerForPage,
            setSurveyAnswerForPage,
            navigateTo,
            updateSurveyConfig,
            isNavigating,
            navigateFinishSurvey
        }}>
            {children}
        </SetupFlowContext.Provider>
    )
}

SetupFlowContextProvider.displayName = 'SetupFlowContextProvider';
export default SetupFlowContextProvider;