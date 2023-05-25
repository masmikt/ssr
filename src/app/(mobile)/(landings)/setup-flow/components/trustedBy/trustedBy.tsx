import css from './trustedBy.module.scss';
import { Section, SectionColor } from '../section';
import { ScreenNames } from '../../constants';
import { Typography, TypographyVariants } from '@/app/(common)/components/typography';
import { Recommended } from '@/app/(mobile)/components/recommended';

const TrustedBy = () => {
    return (
        <Section
            className={css['trusted-by']}
            color={SectionColor.White}
            name={ScreenNames.TrustBlock}>
            <div className={css['trusted-by__content']}>
                <Recommended placement={ScreenNames.TrustBlock}>
                    <Typography variant={TypographyVariants.h4} className={css["trusted-by__title"]}>
                        Trust Clario just like top-tier reviewers do.
                    </Typography>
                </Recommended>
            </div>
        </Section>
    )

}
TrustedBy.displayName = 'TrustedBy';
export default TrustedBy;