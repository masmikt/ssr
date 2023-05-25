import { useSendEvent } from '@/app/(common)/shared/hooks';
import { ButtonPlacements } from '@/app/(mobile)/(landings)/setup-flow/constants';
import { useLayoutContext } from '@/app/(common)/contexts';
import { SyntheticEvent } from 'react';
import { Events } from '@/app/(common)/shared/constants';

export const useCTAButton = (placement: ButtonPlacements) => {
    const { sendEvent } = useSendEvent();
    const { setIsRedirect } = useLayoutContext();

    const handleButtonClick = (event: SyntheticEvent) => {
        event.preventDefault();
        setIsRedirect?.(true);
        sendEvent(Events.ButtonClick, { placement });
        // startSurveyFlow();
    };

    // const startSurveyFlow = () => {
    //     navigate(`/${RoutesList.Land}/${LandingRoutesList.PersonalizedQuestionsMobile}${location.search}`);
    // }

    return {
        handleButtonClick
    }

}