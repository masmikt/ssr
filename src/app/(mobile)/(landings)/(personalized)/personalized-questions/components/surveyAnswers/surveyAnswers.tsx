import { ChangeEvent, useMemo } from 'react';
import css from './surveyAnswers.module.scss';
import {
    ISetupFlowPagesParams,
    ISurveyAnswerConfig,
    ISurveyAnswersConfig
} from '@/app/(mobile)/(landings)/(personalized)/personalized-questions/types';
import { useSendEvent } from '@/app/(common)/shared/hooks';
import { useSetupFlow } from '@/app/(mobile)/(landings)/(personalized)/personalized-questions/contexts/setupFlow';
import { useParams } from 'next/navigation';
import { PersonalizedQuestionsEvents } from '@/app/(mobile)/(landings)/(personalized)/personalized-questions/events';
import { SurveyFinished } from '@/app/(mobile)/(landings)/(personalized)/personalized-questions/hooks/useSurveyConfig';
import {
    RadioButtonGroupMobile
} from '@/app/(mobile)/(landings)/(personalized)/personalized-questions/components/surveyAnswers/components';

export interface ISurveyAnswers {
    answersConfig: ISurveyAnswersConfig;
}

const SurveyAnswers = ({ answersConfig }: ISurveyAnswers) => {
    const params = useParams();
    const { pageId } = params as ISetupFlowPagesParams;
    const {
        getSurveyAnswerForPage,
        setSurveyAnswerForPage,
        getSurveyNextPage,
        getSurveyPageConfig,
        navigateTo,
        navigateFinishSurvey,
    } = useSetupFlow();
    const pageAnswers = (getSurveyAnswerForPage ? getSurveyAnswerForPage(pageId) : null) as ISurveyAnswersConfig | null;
    const { sendEvent } = useSendEvent();
    const checkedIds = useMemo(() => {
        if (!pageAnswers) {
            return null;
        }

        const checkedQuestionsId: string[] = [];
        pageAnswers.forEach(questionAnswer => {
            checkedQuestionsId.push(questionAnswer.id);
        })

        return checkedQuestionsId;
    }, [pageAnswers]);

    const navigateToNextPage = async (surveyAnswerInfo: ISurveyAnswersConfig | undefined, answer: ISurveyAnswerConfig) => {
        const nextPage = getSurveyNextPage(pageId, answer)
        const nextNavigatePage = nextPage;

        if (!nextNavigatePage || !navigateTo) {
            return;
        }

        const selectedAnswers = surveyAnswerInfo?.map(({ label }) => label);

        sendEvent(PersonalizedQuestionsEvents.NextQuestionClick,
            {
                question: getSurveyPageConfig(pageId)?.content,
                answers: selectedAnswers,
                pageName: pageId,
            });

        selectedAnswers?.map(answer => {
            sendEvent(PersonalizedQuestionsEvents.SelectedAnswer, {
                question: getSurveyPageConfig(pageId)?.content,
                answer: answer,
                pageName: pageId,
            });
        });

        if (nextNavigatePage === SurveyFinished) {
            sendEvent(PersonalizedQuestionsEvents.OpenPersonalizedExperienceClick, { pageName: pageId });
            navigateFinishSurvey();
        } else {
            navigateTo(nextNavigatePage);
        }
    };

    const handleChangeRadioGroup = (event: ChangeEvent<HTMLInputElement>) => {
        const surveyAnswerInfo = answersConfig.find((question: ISurveyAnswerConfig) => {
            return question.id === event.target.id;
        });

        if (!surveyAnswerInfo || !pageId || !setSurveyAnswerForPage) {
            return;
        }

        setSurveyAnswerForPage(pageId, [{ label: surveyAnswerInfo.label, id: surveyAnswerInfo.id }]);
        navigateToNextPage([surveyAnswerInfo], surveyAnswerInfo);
    };

    return (
        <RadioButtonGroupMobile
            fieldsetClassname={css['survey-answers__fiedset']}
            options={answersConfig}
            onChange={handleChangeRadioGroup}
            checkedIds={checkedIds} />
    );
};

SurveyAnswers.displayName = 'SurveyAnswers';
export default SurveyAnswers;
