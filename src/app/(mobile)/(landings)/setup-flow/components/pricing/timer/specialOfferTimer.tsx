import { useEffect, useState } from 'react';
import { Countdown } from '@bradgarropy/use-countdown/dist/types/types';
import { ICountDownInfo } from './timer';
import { Timer } from './index';
import { SetupFlowEvents } from '../../../constants';
import { useSendEvent, useTracking } from '@/app/(common)/shared/hooks';

export const SpecialOfferKey = 'survey-flow__special-offer';

const SpecialOfferTimer = () => {
    const { sendEvent } = useSendEvent()
    const { getIteration } = useTracking();
    const [countDownInfo, setCountdownInfo] = useState<ICountDownInfo | null>(null);
    const [isCompleted, setIsCompleted] = useState(false);
    const [showTimer, setShowTimer] = useState(false);

    useEffect(() => {
        getCountDownInfo();
    }, []);

    useEffect(() => {
        if (countDownInfo && !isCompleted) {
            sendEvent(SetupFlowEvents.TimerShown);
            setShowTimer(true);
            return;
        }

        setShowTimer(false);
    }, [countDownInfo, isCompleted]);

    const handleTimerCompleted = () => {
        setIsCompleted(true);
        sendEvent(SetupFlowEvents.TimerEnded);
    }

    const saveCountDownInfo = (countdown: Countdown) => {
        const iteration = getIteration();
        localStorage.setItem(`${SpecialOfferKey}--${iteration}`, JSON.stringify(countdown))
    }

    const getCountDownInfo = () => {
        const info = {
            minutes: 30,
            seconds: 0,
        };

        const iteration = getIteration();
        const saveInfo = JSON.parse(localStorage.getItem(`${SpecialOfferKey}-${iteration}`) || 'null');

        if (saveInfo) {
            setCountdownInfo({ minutes: saveInfo.minutes, seconds: saveInfo.seconds });
            setIsCompleted(saveInfo.isInactive)
            return;
        }
        setCountdownInfo(info);
    }

    return (showTimer
            ? <Timer
                countDownInfo={countDownInfo}
                saveCountDownInfo={saveCountDownInfo}
                handleTimerCompleted={handleTimerCompleted} />
            : null
    );

}

SpecialOfferTimer.displayName = 'SpecialOfferTimer';
export default SpecialOfferTimer;