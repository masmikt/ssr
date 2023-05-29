import { SyntheticEvent, useMemo } from 'react';
import css from './surveyAnswersMultiple.module.scss'
import CheckboxButtonGroupMobile from './components/checkboxButtonMobile/checkboxButtonGroupMobile';
import { useParams } from 'next/navigation';
import { useSetupFlow } from '@/app/(mobile)/(landings)/(personalized)/personalized-questions/contexts/setupFlow';
import {
    ISetupFlowPagesParams,
    ISurveyAnswerConfig,
    ISurveyAnswersConfig
} from '@/app/(mobile)/(landings)/(personalized)/personalized-questions/types';

export interface ISurveyAnswers {
    answersConfig: ISurveyAnswersConfig;
}

const SurveyAnswersMultiple = ({ answersConfig }: ISurveyAnswers) => {
    const params = useParams();
    const { pageId } = params as ISetupFlowPagesParams;
    const {
        getSurveyAnswerForPage,
        setSurveyAnswerForPage
    } = useSetupFlow();
    const pageAnswers = (getSurveyAnswerForPage ? getSurveyAnswerForPage(pageId) : null) as ISurveyAnswersConfig | null;

    const checkedIds = useMemo(() => {
        if (!pageAnswers) {
            return null;
        }

        const checkedQuestionsId: string[] = [];

        pageAnswers.forEach(questionAnswer => {
            checkedQuestionsId.push(questionAnswer.id);
        });

        return checkedQuestionsId;
    }, [pageAnswers]);

    const handleCheckboxGroup = (event: SyntheticEvent<HTMLInputElement>) => {
        let newPageAnswers = pageAnswers ? pageAnswers : [];
        const surveyAnswerInfo = answersConfig.find((question: ISurveyAnswerConfig) => {
            // @ts-ignore
            return question.id === event.target.id;
        });

        if (!surveyAnswerInfo || !pageId || !setSurveyAnswerForPage) {
            return;
        }

        if (newPageAnswers.find(({ id }) => surveyAnswerInfo.id === id)) {
            newPageAnswers = newPageAnswers.filter(({ id }) => surveyAnswerInfo.id !== id);
        } else {
            newPageAnswers = [...newPageAnswers, surveyAnswerInfo];
        }

        setSurveyAnswerForPage(pageId, newPageAnswers);
    }

    return (
        <CheckboxButtonGroupMobile
            fieldsetClassname={css['survey-answers__fieldset']}
            options={answersConfig as any}
            onClick={handleCheckboxGroup}
            checkedIds={checkedIds} />
    );
}

SurveyAnswersMultiple.displayName = 'SurveyAnswersMultiple';
export default SurveyAnswersMultiple;