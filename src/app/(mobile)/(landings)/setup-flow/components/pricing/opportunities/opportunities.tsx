import css from './opportunities.module.scss';
import { Typography, TypographyVariants } from '@/app/(common)/components/typography';
import { FeaturesList } from '../../featuresList';
import { OpportunitiesConfig } from './config';

const Opportunities = () => {
    return (
        <div className={css['opportunities']}>
            <Typography className={css['opportunities__title']} variant={TypographyVariants.h5}>
                What you get:
            </Typography>
            <FeaturesList
                listItems={OpportunitiesConfig}
                iconClassName={css['opportunities__item-icon']}
                itemClassName={css['opportunities__feature']}
                className={css['opportunities__features']}
            />
        </div>
    );
}

Opportunities.displayName = 'Opportunities';
export default Opportunities;