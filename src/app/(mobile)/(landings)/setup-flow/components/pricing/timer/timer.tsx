import css from './timer.module.scss';
import classNames from 'classnames';
import useCountdown from "@bradgarropy/use-countdown"
import { useEffect } from 'react';
import { Typography, TypographyComponents, TypographyVariants } from '@/app/(common)/components/typography';

export interface ICountDownInfo {
    minutes: number;
    seconds: number;
}

interface ITimer {
    countDownInfo: ICountDownInfo | null;

    saveCountDownInfo(countDownInfo: ICountDownInfo): void;

    handleTimerCompleted(): void;
}

const Timer = ({ countDownInfo, saveCountDownInfo, handleTimerCompleted }: ITimer) => {
    if (!countDownInfo) {
        return null;
    }
    const countdown = useCountdown({
        minutes: countDownInfo.minutes,
        seconds: countDownInfo.seconds,
        format: "mm:ss",
        onCompleted: handleTimerCompleted,
    });

    useEffect(() => {
        saveCountDownInfo(countdown);
    }, [countdown])

    return (
        <div className={css['timer']}>
            <div className={css['timer__text-info']}>
                <Typography variant={TypographyVariants.p5} className={css['timer__text']}>
                    Special offer valid for
                </Typography>
            </div>
            <div className={css['timer__time-info']}>
                <Typography
                    component={TypographyComponents.span}
                    variant={TypographyVariants.h5}
                    className={classNames(css['timer__text'], css['timer__time'])}>
                    {countdown.formatted}
                </Typography>
                <Typography
                    component={TypographyComponents.span} variant={TypographyVariants.p5}
                    className={css['timer__text']}>
                    min
                </Typography>
            </div>
        </div>
    );
}

Timer.displayName = 'Timer';
export default Timer;