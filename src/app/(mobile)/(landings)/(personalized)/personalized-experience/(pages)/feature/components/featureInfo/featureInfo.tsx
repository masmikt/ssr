import clsx from 'clsx';
import css from './featureInfo.module.scss';
import { Typography, TypographyVariants } from '@/app/(common)/components/typography';
import {
    useExperienceContext
} from '@/app/(mobile)/(landings)/(personalized)/personalized-experience/contexts/experience/useExperienceContext';

const FeatureInfo = () => {
    const { experiencePagesList } = useExperienceContext();
    return (
        <div className={clsx(css['feature__info-wrapper'])}>
            <Typography
                className={css['feature__title']}
                variant={TypographyVariants.h5}
            >
                {/*{config.title}*/}
            </Typography>
            <Typography
                variant={TypographyVariants.p3}
                className={css['feature__text']}
            >
                {/*{config.subtitle}*/}
            </Typography>
            <ul className={css['feature__circle-container']}>
                {experiencePagesList.map((id) => (
                    <li
                        className={clsx(css['feature__circle'], {
                            // [css.active]: id === pageId,
                        })}
                        key={id}
                    />
                ))}
            </ul>
        </div>
    );
}

FeatureInfo.displayName = 'FeatureInfo';
export default FeatureInfo;