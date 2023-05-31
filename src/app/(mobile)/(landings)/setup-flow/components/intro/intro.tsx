import css from './intro.module.scss';
import { Typography, TypographyComponents, TypographyVariants } from '@/app/(common)/components/typography';
import { clsx } from 'clsx';
import { TrustpilotReview } from '@/app/(mobile)/components/trustpilot';
import { IntroButton } from './introButton';
import { SupportedPlatforms } from '@/app/(mobile)/components/supportedPlatforms';
import { FeaturesList } from '@/app/(mobile)/(landings)/setup-flow/components/featuresList';
import { Section } from '@/app/(mobile)/(landings)/setup-flow/components/section';
import { ScreenNames } from '@/app/(mobile)/(landings)/setup-flow/constants';


const IntroSection = () => {
    return (
        <Section
            color='grey'
            name={ScreenNames.TopBlock}
            className={css['intro__section']}
        >
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
            <TrustpilotReview className={clsx(css['intro__trust-pilot'], 'mt-l', 'mb-s')} />
            <IntroButton />
            <SupportedPlatforms className={'mt-l'} />
            <Typography variant={TypographyVariants.h5}>The anti-spy Clario app can:</Typography>
            <FeaturesList className={'mt-s'} />
        </Section>
    );
}

IntroSection.displayName = 'IntroSection';
export default IntroSection;