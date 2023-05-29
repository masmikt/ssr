import {
    SetupFlowContext,
    useSetupFlowContext
} from '@/app/(mobile)/(landings)/personalized-questions/contexts/useSetupFlowContext';
import { useSurveyConfig } from '@/app/(mobile)/(landings)/personalized-questions/hooks/useSurveyConfig';
import { PersonalizedQuestionsComponentsConfig } from '@/app/(mobile)/(landings)/personalized-questions/configs';
import { useSurveyAnswers } from '@/app/(mobile)/(landings)/personalized-questions/hooks/useSurveyAnswers';
import { useSurveyNavigation } from '@/app/(mobile)/(landings)/personalized-questions/hooks/useSurveyNavigation';

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
    } = useSurveyConfig(PersonalizedQuestionsComponentsConfig);
    const { getSurveyAnswerForPage, setSurveyAnswerForPage } = useSurveyAnswers();
    const { navigateTo, isNavigating } = useSurveyNavigation();

    return (<SetupFlowContext.Provider value={{
            getSurveyPageConfig,
            getSurveyPageInfo,
            getSurveyNextPage,
            getSurveyAnswerForPage,
            setSurveyAnswerForPage,
            navigateTo,
            updateSurveyConfig,
            isNavigating,
        }}>
            {children}
        </SetupFlowContext.Provider>
    )
}

SetupFlowContextProvider.displayName = 'SetupFlowContextProvider';
export default SetupFlowContextProvider;