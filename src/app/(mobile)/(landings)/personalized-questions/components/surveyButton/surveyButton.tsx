import { Button, IButton } from '@/app/(common)/components/button';
import css from './surveyButton.module.scss';
import { useParams } from 'next/navigation';
import { useSetupFlow } from '@/app/(mobile)/(landings)/personalized-questions/contexts';
import { useSendEvent } from '@/app/(common)/shared/hooks';
import { useMemo, useState } from 'react';
import { PersonalizedQuestionsEvents } from '@/app/(mobile)/(landings)/personalized-questions/events';
import { SurveyFinished } from '@/app/(mobile)/(landings)/personalized-questions/hooks/useSurveyConfig';
import clsx from 'clsx';
// import { useRouter } from 'next/router';
import { MobileLandingRoutesList } from '@/app/(mobile)/(landings)/pageList';
import { ISetupFlowPagesParams } from '@/app/(mobile)/(landings)/personalized-questions/types';

class ButtonActions {
}

export interface ISurveyButton extends IButton {
    action: ButtonActions,
    disabled?: boolean;
}

const SurveyButton = ({ action, disabled = false, children, ...props }: ISurveyButton) => {
    // const router = useRouter();
    const params = useParams();
    const { pageId } = params as ISetupFlowPagesParams;
    const {
        getSurveyNextPage,
        navigateTo,
        getSurveyAnswerForPage,
        getSurveyPageConfig,
        isNavigating,
    } = useSetupFlow();
    const { sendEvent } = useSendEvent();
    const [hideButton, setHideButton] = useState(false);
    const answers = useMemo(() => {
        return getSurveyAnswerForPage ? getSurveyAnswerForPage(pageId) : null;
    }, [pageId, getSurveyAnswerForPage]);
    const isDisabled = useMemo(() => {
        return disabled || isNavigating || !answers?.length;
    }, [disabled, isNavigating, answers]);
    const nextPage = useMemo(() => {
        if (!getSurveyNextPage) {
            return null;
        }

        return getSurveyNextPage(pageId);
    }, [getSurveyNextPage]);

    const handleButtonClick = async () => {
        if (!nextPage || !navigateTo) {
            return;
        }
        setHideButton(true);

        const selectedAnswers = answers?.map(({ label }) => label);

        sendEvent(PersonalizedQuestionsEvents.NextQuestionClick,
            {
                question: getSurveyPageConfig(pageId)?.content,
                answers: selectedAnswers,
                pageName: pageId,
            });

        selectedAnswers?.map(answer => {
            sendEvent(PersonalizedQuestionsEvents.SelectedAnswer,
                {
                    question: getSurveyPageConfig(pageId)?.content,
                    answer: answer,
                    pageName: pageId,
                });
        })
        if (nextPage === SurveyFinished) {
            sendEvent(PersonalizedQuestionsEvents.OpenPersonalizedExperienceClick, { pageName: pageId });
            // router.push({ pathname: MobileLandingRoutesList.PersonalizedExperienceMobile, query: router.query });
        } else {
            navigateTo(nextPage);
        }
    };

    return (
        <>
            {hideButton
                ? null
                : <Button
                    {...props}
                    children={answers ? 'Next' : children}
                    onClick={handleButtonClick}
                    disabled={isDisabled}
                    className={clsx(css['survey-button'], {
                        [css['survey-button--hide']]: isDisabled,
                    })}
                />}
        </>
    );
};

SurveyButton.displayName = 'SurveyButton';
export default SurveyButton;
