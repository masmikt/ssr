import { ButtonActions, CardTypes, IPageContentConfig } from '@/app/(mobile)/(landings)/personalized-questions/types';
import { PersonalizedQuestionsPages } from '@/app/(mobile)/(landings)/personalized-questions/pageList';
import { SurveyContentWrapper } from '@/app/(mobile)/(landings)/personalized-questions/components/surveyContentWrapper';
import { SurveyTopWrapper } from '@/app/(mobile)/(landings)/personalized-questions/components/surveyTopWrapper';
import { SurveyHeaderProgress } from '@/app/(mobile)/(landings)/personalized-questions/components/surveyHeaderProgress';
import { SurveyContent } from '@/app/(mobile)/(landings)/personalized-questions/components/surveyContent';
import { SurveyAnswers } from '@/app/(mobile)/(landings)/personalized-questions/components/surveyAnswers';
import { SurveyFooter } from '@/app/(mobile)/(landings)/personalized-questions/components/surveyFooter';
import { ButtonColor, ButtonVariant, ButtonWrapper } from '@/app/(common)/components/button';
import { SurveyButton } from '@/app/(mobile)/(landings)/personalized-questions/components/surveyButton';

const PageContent = 'Has your phone has been lightning up with no reason?';

export const LightningUpConfig: IPageContentConfig = {
    id: PersonalizedQuestionsPages.LightningUp,
    cardType: CardTypes.Question,
    eventData: 'lightning_up',
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
                                default: 'Has your phone has been ',
                                highlighted: 'lightning up ',
                                defaultAdd: 'with no reason?'
                            },
                        },
                        {
                            id: 'content',
                            component: SurveyContent,
                            children: [
                                {
                                    id: 'answers',
                                    component: SurveyAnswers,
                                    answersConfig: [
                                        {
                                            label: 'Yes',
                                            id: `${PersonalizedQuestionsPages.KnowYourLocation}_yes`,
                                        },
                                        {
                                            label: 'No',
                                            id: `${PersonalizedQuestionsPages.KnowYourLocation}_no`,
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
                                    disabled: true,
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