'use client';
import css from './page.module.scss';
import { Typography, TypographyVariants } from '@/app/(common)/components/typography';
import { Loader } from '@/app/(common)/components/loader';
import { useSendEvent } from '@/app/(common)/shared/hooks';
import { useEffect } from 'react';
import { SECOND } from '@/app/(common)/shared/constants';
import { PersonalizedExperienceEvents } from '@/app/(mobile)/(landings)/(personalized)/personalized-experience/events';
import {
    PersonalizedExperiencePages
} from '@/app/(mobile)/(landings)/(personalized)/personalized-experience/pagesList';
import { useRouter, useSearchParams } from 'next/navigation';
import { MobileLandingRoutesList } from '@/app/(mobile)/(landings)/pageList';
import { FadeIn } from '@/app/(common)/components/fadeIn';

const TimoutDefaultDuration = 5 * SECOND;

export default async function Preparing() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { sendEvent } = useSendEvent();

    useEffect(() => {
        const timoutDuration = TimoutDefaultDuration;
        const searchParamsData = searchParams.toString() || '';
        const nextPage = `${MobileLandingRoutesList.PersonalizedExperienceMobile}/${PersonalizedExperiencePages.FeaturesList}${searchParamsData.length ? `?${searchParamsData}` : ''}`;
        sendEvent(PersonalizedExperienceEvents.PreparingExperienceShown, { timout: timoutDuration });
        const timeout = setTimeout(() => {
            router.push(nextPage);
        }, timoutDuration);

        return () => {
            clearTimeout(timeout);
        };
    }, []);

    return (
        <FadeIn className={css['preparing__container']}>
            <div className={css['preparing__animation-wrapper']}>
                <Loader
                    className={css['preparing__animation']}
                    animationClassName={css['preparing__animation-content']}
                    dotsClassName={css['preparing__animation-dots']} />
            </div>
            <Typography
                className={css['preparing__title']}
                variant={TypographyVariants.h5}>
                Preparing your personalized experience…
            </Typography>
        </FadeIn>
    );
}
