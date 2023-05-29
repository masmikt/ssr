import { useEffect, useState } from "react";
import { ISurveyAnswersConfig } from '../types';
import { useStorage, useTracking } from '@/app/(common)/shared/hooks';
import { isEmptyObject } from '@/app/(common)/shared/helpers';
import { PersonalizedQuestionsPages } from '@/app/(mobile)/(landings)/personalized-questions/pageList';

export type ISurveyAnswers = {
    [key in PersonalizedQuestionsPages]?: ISurveyAnswersConfig;
}

export const BuyNowAnswersPointsKey = 'questions_result_survey_mobile_';
export const PersonalQuestionsAnswersKey = 'personal_mobile_questions_answers';

export const useSurveyAnswers = () => {
    const { getItem, setItem } = useStorage();
    const { getIteration } = useTracking();
    const iteration = getIteration();
    const getSurveyAnswersFromStorage = (): ISurveyAnswers => {
        return getItem(PersonalQuestionsAnswersKey) || {};
    }
    const [surveyAnswers, setAnswers] = useState<ISurveyAnswers>(getSurveyAnswersFromStorage());

    useEffect(() => {
        initializeSurveyAnswers();
    }, []);

    const initializeSurveyAnswers = () => {
        const answers = getSurveyAnswersFromStorage();
        setSurveyAnswers(answers);
        setAnswersForBuyNow(answers);
    }

    const getSurveyAnswerForPage = (pageId: PersonalizedQuestionsPages | undefined): ISurveyAnswersConfig | null => {
        if (!pageId || isEmptyObject(surveyAnswers)) {
            return null;
        }

        return surveyAnswers[pageId] || null;
    };

    const setSurveyAnswerForPage = (pageId: PersonalizedQuestionsPages, answers: ISurveyAnswersConfig | undefined): void => {
        if (!pageId) {
            return;
        }
        const updatedAnswers = prepareUpdatedAnswers(pageId, answers);
        setSurveyAnswers(updatedAnswers);
        setAnswersForBuyNow(updatedAnswers);
    }

    const prepareUpdatedAnswers = (pageId: PersonalizedQuestionsPages, answers: ISurveyAnswersConfig | undefined) => {
        const updatedAnswers = { ...surveyAnswers };
        updatedAnswers[pageId] = answers;
        return updatedAnswers;
    }

    const calculateAnswersPoints = (updatedAnswers: ISurveyAnswers): number => {
        let points = 0;
        Object.values(updatedAnswers).map((surveyAnswers) => {
            surveyAnswers.map((surveyAnswer) => {
                points += 0;
            });
        });

        return points;
    }

    const setSurveyAnswers = (answers: ISurveyAnswers): void => {
        setAnswers(answers);
        saveDataToStorage(PersonalQuestionsAnswersKey, answers);
    }

    const setAnswersForBuyNow = (answers: ISurveyAnswers): void => {
        const answerPoints = calculateAnswersPoints(answers);
        saveDataToStorage(`${BuyNowAnswersPointsKey}${iteration}`, answerPoints);
    }

    const saveDataToStorage = (key: string, data: any): void => {
        setItem(key, data);
    }

    return {
        getSurveyAnswerForPage,
        setSurveyAnswerForPage,
        surveyAnswers,
    }
}