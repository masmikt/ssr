import { Section, SectionColor } from '../section';
import css from './pricing.module.scss';
import { ScreenNames, ScrollAnchorId } from '../../constants';
import { Offer } from './offer';
import { Typography, TypographyVariants } from '@/app/(common)/components/typography';

const Pricing = () => {
    return (
        <Section
            color={SectionColor.Blue}
            className={css['pricing']}
            id={ScrollAnchorId}
            name={ScreenNames.Plans}>
            <div className={css['pricing__wrapper']}>
                <div className={css['pricing__bg-image']} />
            </div>
            <Typography className={css['pricing__title']} variant={TypographyVariants.h3}>
                Start your spy-free week for as low as
            </Typography>
            <Offer />
        </Section>
    )
}

Pricing.displayName = 'Pricing';
export default Pricing;