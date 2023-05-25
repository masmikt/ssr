import { Section, SectionColor } from '../section';
import css from './support.module.scss';
import Image from 'next/image'
import clsx from 'clsx';
import SupportImageRetina from 'public/images/mobile/landings/setupFlow/support/support-image@2x.webp';
import { ScrollButton } from '../scrollButton';
import { ButtonPlacements, ScreenNames } from '../../constants';
import { Typography, TypographyVariants } from '@/app/(common)/components/typography';
import { ButtonWrapper } from '@/app/(common)/components/button';

const Support = () => {
    return (
        <Section color={SectionColor.White} className={css['support']} name={ScreenNames.Experts}>
            <div className={css['support__header']}>
                <Typography
                    variant={TypographyVariants.h3}
                    className={css['support__title']}>
                    Not sure that the app can solve your problem?
                </Typography>
                <Typography
                    variant={TypographyVariants.p2}
                    className={clsx(css['support__text'])}>
                    You'll have Clario experts ready to jump in and help you, 24/7, just when you need them.
                </Typography>
            </div>
            <Image
                src={SupportImageRetina} alt="support image"
                className={css['support__image']} />
            <ButtonWrapper className={css['support__button']}>
                <ScrollButton placement={ButtonPlacements.Experts}>
                    Protect me now
                </ScrollButton>
            </ButtonWrapper>
        </Section>
    );
};

Support.displayName = 'Support';
export default Support;