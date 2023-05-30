import { Section } from '../section';
import css from './intro.module.scss';
import { Typography, TypographyComponents, TypographyVariants } from '@/app/(common)/components/typography';
import { clsx } from 'clsx';
import { SetupFlowEvents, ScreenNames, TrustSources } from '../../constants';
import { useCallback } from 'react';
import { useSendEvent } from '@/app/(common)/shared/hooks';
import dynamic from 'next/dynamic';
const TrustpilotReview = dynamic(() => import('@/app/(mobile)/components/trustpilot/trustpilot'));
const IntroButton = dynamic(() => import('./introButton/introButton'));
const SupportedPlatforms = dynamic(() => import('@/app/(mobile)/components/supportedPlatforms/supportedPlatforms'));
const FeaturesList = dynamic(() => import('@/app/(mobile)/(landings)/setup-flow/components/featuresList/featuresList'));
const PresentationVideo = dynamic(() => import('@/app/(mobile)/(landings)/setup-flow/components/presentationVideo/presentationVideo'));

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
                onClick={handleTrustPilotLinkClick}
            />
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