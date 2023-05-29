import { ButtonActions, CardTypes, IPageContentConfig } from '@/app/(mobile)/(landings)/personalized-questions/types';
import { PersonalizedQuestionsPages } from '@/app/(mobile)/(landings)/personalized-questions/pageList';
import { SurveyContentWrapper } from '@/app/(mobile)/(landings)/personalized-questions/components/surveyContentWrapper';
import { SurveyTopWrapper } from '@/app/(mobile)/(landings)/personalized-questions/components/surveyTopWrapper';
import { SurveyHeaderProgress } from '@/app/(mobile)/(landings)/personalized-questions/components/surveyHeaderProgress';
import { SurveyContent } from '@/app/(mobile)/(landings)/personalized-questions/components/surveyContent';
import { SurveyFooter } from '@/app/(mobile)/(landings)/personalized-questions/components/surveyFooter';
import { ButtonColor, ButtonVariant, ButtonWrapper } from '@/app/(common)/components/button';
import { SurveyButton } from '@/app/(mobile)/(landings)/personalized-questions/components/surveyButton';
import { SurveyAnswers } from '@/app/(mobile)/(landings)/personalized-questions/components/surveyAnswers';

const PageContent = 'Does someone know your phone passcode?';

export const PhonePasscodeConfig: IPageContentConfig = {
    id: PersonalizedQuestionsPages.PhonePasscode,
    cardType: CardTypes.Question,
    eventData: 'phone_passcode',
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
                                default: 'Does someone know your ',
                                highlighted: 'phone passcode',
                                defaultAdd: '?'
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
                                            id: `${PersonalizedQuestionsPages.PhonePasscode}_yes`,
                                        },
                                        {
                                            label: 'No',
                                            id: `${PersonalizedQuestionsPages.PhonePasscode}_no`,
                                        },
                                        {
                                            label: 'Not sure',
                                            id: `${PersonalizedQuestionsPages.PhonePasscode}_not-sure`,
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