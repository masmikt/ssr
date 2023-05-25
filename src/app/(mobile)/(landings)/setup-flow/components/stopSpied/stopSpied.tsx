import css from './stopSpied.module.scss';
import { Section } from '@/app/(mobile)/(landings)/setup-flow/components/section';
import { Typography, TypographyComponents, TypographyVariants } from '@/app/(common)/components/typography';
import { ButtonWrapper } from '@/app/(common)/components/button';
import { ScrollButton } from '@/app/(mobile)/(landings)/setup-flow/components/scrollButton';
import { ButtonPlacements } from '@/app/(mobile)/(landings)/setup-flow/constants';

const StopSpied = () => {
    return (
        <Section className={css['stop-spied']}>
            <Typography
                variant={TypographyVariants.h2}
                component={TypographyComponents.div}
                className={css['stop-spied__title']}>
                <p>Stop your</p>
                <p>
                    <span className={css['stop-spied__title--highlighted']}>
                      phone from being spied on
                    </span>
                    .
                </p>
            </Typography>
            <ButtonWrapper className={css['stop-spied__button']}>
                <ScrollButton placement={ButtonPlacements.Footer}>
                    Protect me now
                </ScrollButton>
            </ButtonWrapper>
        </Section>
    );
}

StopSpied.displayName = 'StopSpied';
export default StopSpied;