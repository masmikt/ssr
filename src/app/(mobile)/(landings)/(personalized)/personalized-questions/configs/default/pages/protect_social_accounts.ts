import { PersonalizedQuestionsPages } from '@/app/(mobile)/(landings)/(personalized)/personalized-questions/pageList';
import {
    ButtonActions,
    CardTypes,
    IPageContentConfig
} from '@/app/(mobile)/(landings)/(personalized)/personalized-questions/types';
import {
    SurveyContentWrapper
} from '@/app/(mobile)/(landings)/(personalized)/personalized-questions/components/surveyContentWrapper';
import {
    SurveyTopWrapper
} from '@/app/(mobile)/(landings)/(personalized)/personalized-questions/components/surveyTopWrapper';
import {
    SurveyHeaderProgress
} from '@/app/(mobile)/(landings)/(personalized)/personalized-questions/components/surveyHeaderProgress';
import {
    SurveyContent
} from '@/app/(mobile)/(landings)/(personalized)/personalized-questions/components/surveyContent';
import { SurveyFooter } from '@/app/(mobile)/(landings)/(personalized)/personalized-questions/components/surveyFooter';
import { ButtonColor, ButtonVariant, ButtonWrapper } from '@/app/(common)/components/button';
import { SurveyButton } from '@/app/(mobile)/(landings)/(personalized)/personalized-questions/components/surveyButton';
import {
    SurveyAnswersMultiple
} from '@/app/(mobile)/(landings)/(personalized)/personalized-questions/components/surveyAnswersMultiple';

const PageContent = 'Which social media accounts do you want to protect?';

export const ProtectSocialAccountsConfig: IPageContentConfig = {
    id: PersonalizedQuestionsPages.ProtectSocialAccounts,
    cardType: CardTypes.Question,
    eventData: 'protect_social_accounts',
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
                                default: 'Which ',
                                highlighted: 'social media accounts ',
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
                                            label: 'Facebook',
                                            id: `${PersonalizedQuestionsPages.ProtectSocialAccounts}_facebook`,
                                        },
                                        {
                                            label: 'Instagram',
                                            id: `${PersonalizedQuestionsPages.ProtectSocialAccounts}_instagram`,
                                        },
                                        {
                                            label: 'Snapchat',
                                            id: `${PersonalizedQuestionsPages.ProtectSocialAccounts}_snapchat`,
                                        },
                                        {
                                            label: 'Twitter',
                                            id: `${PersonalizedQuestionsPages.ProtectSocialAccounts}_twitter`,
                                        },
                                        {
                                            label: 'Other',
                                            id: `${PersonalizedQuestionsPages.ProtectSocialAccounts}_other`,
                                        }
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