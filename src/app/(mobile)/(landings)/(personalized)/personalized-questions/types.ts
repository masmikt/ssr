import {
    PersonalizedQuestionsPages,
    PersonalizedQuestionsTopics
} from '@/app/(mobile)/(landings)/(personalized)/personalized-questions/pageList';
import { NavigateOptions } from 'next/dist/shared/lib/app-router-context';

export type ISetupFlowPagesParams = {
    pageId?: PersonalizedQuestionsPages;
}

export interface ISetupFlowConsumerContext {
    getSurveyPageConfig(pageId: PersonalizedQuestionsPages | undefined): IPageContentConfig | null;

    getSurveyPageInfo(pageId: PersonalizedQuestionsPages | undefined): IPageFlowInfo;

    getSurveyNextPage(pageId?: PersonalizedQuestionsPages, surveyAnswerPageConfig?: ISurveyAnswerConfig): string;

    getSurveyAnswerForPage(pageId: PersonalizedQuestionsPages | undefined): ISurveyAnswersConfig | null;

    setSurveyAnswerForPage(pageId: PersonalizedQuestionsPages, answer: ISurveyAnswersConfig | undefined): void;

    navigateTo(path: string | number | null, options?: NavigateOptions, type?: string): void;

    navigateFinishSurvey(path?: string | number | null, options?: NavigateOptions, type?: string): void;

    updateSurveyConfig(activeTopics: Record<PersonalizedQuestionsTopics, boolean>): void;

    isNavigating: boolean;
}

export interface IPageFlowInfo {
    totalSteps: number,
    currentStep: number,
    flowProgress: number,
}

export type ISurveyAnswersConfig = ISurveyAnswerConfig[];

export type INextPageId = PersonalizedQuestionsPages;

export interface ISurveyAnswerConfig {
    id: string;
    label: string;
    nextPageId?: INextPageId;
    skipNextPageId?: boolean;
}

export interface IPageContentConfig {
    id: PersonalizedQuestionsPages;
    components: IComponents;
    eventData: string,
    content: string,
    cardType: CardTypes,
}


export interface IComponent {
    id: string,
    component: any,
    children?: IComponent[] | string,

    [key: string]: any;
}

export type IComponents = IComponent[];

export enum CardTypes {
    Question = 'question',
    Card = 'card',
}

export enum ButtonActions {
    Skip = 'skip',
    Next = 'next'
}
