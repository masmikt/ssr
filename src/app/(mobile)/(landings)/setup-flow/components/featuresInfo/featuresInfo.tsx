import css from './featuresInfo.module.scss';
import { Features } from './features';
import { Typography, TypographyVariants } from '@/app/(common)/components/typography';

const FeaturesInfo = () => {
    return (
        <div className={css['features-info']}>
            <Typography variant={TypographyVariants.h3} className={css['features-info__title']}>
                Clario helps you easily avoid spying.
            </Typography>
            <Features />
        </div>
    );
};

FeaturesInfo.displayName = 'FeaturesInfo';
export default FeaturesInfo;