import { Section, SectionColor } from '../section';
import css from './instructionsList.module.scss';
import { Instructions } from './instructions';
import { ScreenNames } from '../../constants';
import { Typography, TypographyComponents, TypographyVariants } from '@/app/(common)/components/typography';

const InstructionsList = () => {
    return (
        <Section color={SectionColor.White} className={css['start-use-instructions']} name={ScreenNames.Steps}>
            <Typography
                variant={TypographyVariants.h3}
                component={TypographyComponents.div}
                className={css['instructions__title']}>
                <p>All you need to do is</p>
                <p>
                    <span className={css['instructions__title--highlighted']}>
                        3 easy steps
                    </span>
                    .
                </p>
            </Typography>
            {/*<Instructions />*/}
        </Section>
    );
};

InstructionsList.displayName = 'StartUsing';
export default InstructionsList;