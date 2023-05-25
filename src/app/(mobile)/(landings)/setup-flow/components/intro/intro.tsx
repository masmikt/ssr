"use client";
import { Section } from '../section';
import css from './intro.module.scss';
import { Typography, TypographyComponents, TypographyVariants } from '@/app/(common)/components/typography';
import { TrustpilotReview } from '@/app/(mobile)/components/trustpilot';
import { clsx } from 'clsx';
import { IntroButton } from './introButton';
import { SetupFlowEvents, ScreenNames, TrustSources } from '../../constants';
import { useCallback } from 'react';
import { useSendEvent } from '@/app/(common)/shared/hooks';
import { SupportedPlatforms } from '@/app/(mobile)/components/supportedPlatforms';
import { FeaturesList } from '@/app/(mobile)/(landings)/setup-flow/components/featuresList';
import { PresentationVideo } from '@/app/(mobile)/(landings)/setup-flow/components/presentationVideo';

const IntroSection = () => {
    const { sendEvent } = useSendEvent();
    const handleTrustPilotLinkClick = useCallback(() => {
        sendEvent(SetupFlowEvents.TrustClick, {
            placement: ScreenNames.TopBlock,
            source: TrustSources.TrustPilot

        })
    }, []);
    return (
        <Section
            color='grey'
            className={css['intro__section']}
            name={ScreenNames.TopBlock}>
            <Typography
                variant={TypographyVariants.h2}
                component={TypographyComponents.div}
                className={css['intro__title']}>
                Stop your
                <span className={clsx(css['intro__title--highlighted'])}>{` phone from being spied on.`}</span>
            </Typography>
            <Typography
                variant={TypographyVariants.p2}
                component={TypographyComponents.p}
                className={clsx(css['intro__text'], 'mt-xs')}>
                Try Clario, a smart anti-spy app that effectively protects your privacy.
            </Typography>
            <TrustpilotReview
                className={clsx(css['intro__trust-pilot'], 'mt-l', 'mb-s')}
                onClick={handleTrustPilotLinkClick} />
            <IntroButton />
            <SupportedPlatforms className={'mt-l'} />
            <PresentationVideo />
            <Typography variant={TypographyVariants.h5}>The anti-spy Clario app can:</Typography>
            <FeaturesList className={'mt-s'} />
        </Section>
    );
}

IntroSection.displayName = 'IntroSection';
export default IntroSection;