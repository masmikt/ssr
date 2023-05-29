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

const PageContent = 'Do you remember finding your phone somewhere different to where you left it?';

export const FindPhoneInDiffLocationConfig: IPageContentConfig = {
    id: PersonalizedQuestionsPages.FindPhoneInDiffLocation,
    cardType: CardTypes.Question,
    eventData: 'find_phone_in_diff_location',
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
                                default: 'Do you remember finding your phone',
                                highlighted: ` somewhere different to where you \n left it?`,
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
                                            id: `${PersonalizedQuestionsPages.FindPhoneInDiffLocation}_yes`,
                                        },
                                        {
                                            label: 'No',
                                            id: `${PersonalizedQuestionsPages.FindPhoneInDiffLocation}_no`,
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