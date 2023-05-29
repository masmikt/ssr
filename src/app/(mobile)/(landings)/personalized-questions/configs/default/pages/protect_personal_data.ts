import { ButtonActions, CardTypes, IPageContentConfig } from '@/app/(mobile)/(landings)/personalized-questions/types';
import { PersonalizedQuestionsPages } from '@/app/(mobile)/(landings)/personalized-questions/pageList';
import { SurveyContentWrapper } from '@/app/(mobile)/(landings)/personalized-questions/components/surveyContentWrapper';
import { SurveyTopWrapper } from '@/app/(mobile)/(landings)/personalized-questions/components/surveyTopWrapper';
import { SurveyHeaderProgress } from '@/app/(mobile)/(landings)/personalized-questions/components/surveyHeaderProgress';
import { SurveyContent } from '@/app/(mobile)/(landings)/personalized-questions/components/surveyContent';
import { SurveyFooter } from '@/app/(mobile)/(landings)/personalized-questions/components/surveyFooter';
import { ButtonColor, ButtonVariant, ButtonWrapper } from '@/app/(common)/components/button';
import { SurveyButton } from '@/app/(mobile)/(landings)/personalized-questions/components/surveyButton';
import {
    SurveyAnswersMultiple
} from '@/app/(mobile)/(landings)/personalized-questions/components/surveyAnswersMultiple';


const PageContent = 'Okay, what type of personal data do you want to protect?';

export const ProtectPersonalDataConfig: IPageContentConfig = {
    id: PersonalizedQuestionsPages.ProtectPersonalData,
    cardType: CardTypes.Question,
    eventData: 'protect_personal_data',
    content: PageContent,
    components: [
        {
            id: 'contentWrapper',
            component: SurveyContentWrapper,
            children: [
                {
                    id: 'header',
                    component: SurveyTopWrapper,
                    children: [
                        {
                            id: 'header',
                            component: SurveyHeaderProgress,
                            title: {
                                default: 'Okay, what type of ',
                                highlighted: 'personal data ',
                                defaultAdd: 'do you want to protect?'
                            },
                            subtitle: 'Pick as many options as you want.'
                        },
                        {
                            id: 'content',
                            component: SurveyContent,
                            children: [
                                {
                                    id: 'answers',
                                    component: SurveyAnswersMultiple,
                                    answersConfig: [
                                        {
                                            label: 'Messages',
                                            id: `${PersonalizedQuestionsPages.ProtectPersonalData}_messages`,
                                        },
                                        {
                                            label: 'Photos',
                                            id: `${PersonalizedQuestionsPages.ProtectPersonalData}_photos`,
                                        },
                                        {
                                            label: 'Contacts',
                                            id: `${PersonalizedQuestionsPages.ProtectPersonalData}_contacts`,
                                        },
                                        {
                                            label: 'Passwords',
                                            id: `${PersonalizedQuestionsPages.ProtectPersonalData}_passwords`,
                                        },
                                        {
                                            label: 'Financial data',
                                            id: `${PersonalizedQuestionsPages.ProtectPersonalData}_financial-data`,
                                        },
                                    ]
                                },
                            ],

                        },
                    ]
                },
                {
                    id: 'footer',
                    component: SurveyFooter,
                    children: [
                        {
                            id: 'buttonWrapper',
                            component: ButtonWrapper,
                            children: [
                                {
                                    id: 'buttonAccept',
                                    component: SurveyButton,
                                    children: 'Next',
                                    variant: ButtonVariant.Border,
                                    color: ButtonColor.Secondary,
                                    action: ButtonActions.Next,
                                },
                            ]
                        },
                    ]
                }
            ]
        },
    ],
};