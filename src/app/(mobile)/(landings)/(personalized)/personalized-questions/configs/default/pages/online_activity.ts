import { PersonalizedQuestionsPages } from '@/app/(mobile)/(landings)/(personalized)/personalized-questions/pageList';
import { ButtonActions, CardTypes, IPageContentConfig } from '@/app/(mobile)/(landings)/(personalized)/personalized-questions/types';
import { SurveyContentWrapper } from '@/app/(mobile)/(landings)/(personalized)/personalized-questions/components/surveyContentWrapper';
import { SurveyTopWrapper } from '@/app/(mobile)/(landings)/(personalized)/personalized-questions/components/surveyTopWrapper';
import { SurveyHeaderProgress } from '@/app/(mobile)/(landings)/(personalized)/personalized-questions/components/surveyHeaderProgress';
import { SurveyContent } from '@/app/(mobile)/(landings)/(personalized)/personalized-questions/components/surveyContent';
import { SurveyFooter } from '@/app/(mobile)/(landings)/(personalized)/personalized-questions/components/surveyFooter';
import { ButtonColor, ButtonVariant, ButtonWrapper } from '@/app/(common)/components/button';
import { SurveyButton } from '@/app/(mobile)/(landings)/(personalized)/personalized-questions/components/surveyButton';
import {
    SurveyAnswersMultiple
} from '@/app/(mobile)/(landings)/(personalized)/personalized-questions/components/surveyAnswersMultiple';

const PageContent = 'What online activity do you want to hide?';

export const OnlineActivityConfig: IPageContentConfig = {
    id: PersonalizedQuestionsPages.OnlineActivity,
    cardType: CardTypes.Question,
    eventData: 'online_activity',
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
                                default: 'What',
                                highlighted: ' online activity ',
                                defaultAdd: 'do you want to hide?'
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
                                            label: 'Site tracking',
                                            id: `${PersonalizedQuestionsPages.OnlineActivity}_site-tracking`,
                                        },
                                        {
                                            label: 'Browsing history',
                                            id: `${PersonalizedQuestionsPages.OnlineActivity}_browsing-history`,
                                        },
                                        {
                                            label: 'Passwords',
                                            id: `${PersonalizedQuestionsPages.OnlineActivity}_Passwords`,
                                        },
                                        {
                                            label: 'Location and IP address',
                                            id: `${PersonalizedQuestionsPages.OnlineActivity}_location-and-IP-address`,
                                        },
                                        {
                                            label: 'Ad and site banners',
                                            id: `${PersonalizedQuestionsPages.OnlineActivity}_ad-and-site-banners`,
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