import { useSendEvent } from '@/app/(common)/shared/hooks';
import { ButtonPlacements } from '@/app/(mobile)/(landings)/setup-flow/constants';
import { useLayoutContext } from '@/app/(common)/contexts';
import { SyntheticEvent } from 'react';
import { Events } from '@/app/(common)/shared/constants';
import { useRouter, useSearchParams } from 'next/navigation';
import { MobileLandingRoutesList } from '@/app/(mobile)/(landings)/pageList';

export const useCTAButton = (placement: ButtonPlacements) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { sendEvent } = useSendEvent();
    const { setIsRedirect } = useLayoutContext();

    const handleButtonClick = (event: SyntheticEvent) => {
        event.preventDefault();
        setIsRedirect?.(true);
        sendEvent(Events.ButtonClick, { placement });
        startSurveyFlow();
    };

    const startSurveyFlow = () => {
        const searchParamsData = searchParams.toString() || '';
        const nextPage = `${MobileLandingRoutesList.PersonalizedQuestionsMobile}${searchParamsData.length ? `?${searchParamsData}` : ''}`;
        router.push(nextPage);
    }

    return {
        handleButtonClick
    }
}