import { PersonalizedQuestionsPages } from '@/app/(mobile)/(landings)/(personalized)/personalized-questions/pageList';
import { ButtonActions, CardTypes, IPageContentConfig } from '@/app/(mobile)/(landings)/(personalized)/personalized-questions/types';
import { SurveyContentWrapper } from '@/app/(mobile)/(landings)/(personalized)/personalized-questions/components/surveyContentWrapper';
import { SurveyTopWrapper } from '@/app/(mobile)/(landings)/(personalized)/personalized-questions/components/surveyTopWrapper';
import { SurveyHeaderProgress } from '@/app/(mobile)/(landings)/(personalized)/personalized-questions/components/surveyHeaderProgress';
import { SurveyContent } from '@/app/(mobile)/(landings)/(personalized)/personalized-questions/components/surveyContent';
import { SurveyFooter } from '@/app/(mobile)/(landings)/(personalized)/personalized-questions/components/surveyFooter';
import { ButtonColor, ButtonVariant, ButtonWrapper } from '@/app/(common)/components/button';
import { SurveyButton } from '@/app/(mobile)/(landings)/(personalized)/personalized-questions/components/surveyButton';
import { SurveyAnswers } from '@/app/(mobile)/(landings)/(personalized)/personalized-questions/components/surveyAnswers';

const PageContent = 'Does someone seem to know what you talk about on the phone call?';

export const PhoneTalksConfig: IPageContentConfig = {
    id: PersonalizedQuestionsPages.PhoneTalks,
    cardType: CardTypes.Question,
    eventData: 'phone_talks',
    content: PageContent,
    components: [
        {
            id: 'contentWrapper',
            component: SurveyContentWrapper,
            children: [
                {
                    id: 'topWrapper',
                    component: SurveyTopWrapper,
                    children: [
                        {
                            id: 'header',
                            component: SurveyHeaderProgress,
                            title: {
                                default: 'Does someone seem to know what you ',
                                highlighted: 'talk about on the phone call',
                                defaultAdd: '?'
                            }
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
                                            id: `${PersonalizedQuestionsPages.PhoneTalks}_yes`,
                                        },
                                        {
                                            label: 'No',
                                            id: `${PersonalizedQuestionsPages.PhoneTalks}_no`,
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
                                    action: ButtonActions.Skip,
                                },
                            ]
                        },
                    ]
                }
            ]
        },
    ],
};