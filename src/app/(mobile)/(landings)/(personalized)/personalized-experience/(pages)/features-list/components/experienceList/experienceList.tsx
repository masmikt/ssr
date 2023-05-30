import css from './experienceList.module.scss';
import {
    PersonalizedExperienceFeatureList
} from '@/app/(mobile)/(landings)/(personalized)/personalized-experience/(pages)/features-list/config';
import Image from 'next/image';
import CheckmarkImage from 'public/images/common/checkmark.svg';
import { Typography, TypographyVariants } from '@/app/(common)/components/typography';
import {
    useExperienceContext
} from '@/app/(mobile)/(landings)/(personalized)/personalized-experience/contexts/experience/useExperienceContext';

const FeaturesExperienceList = () => {
    const { topics } = useExperienceContext();
    return (
        <ul className={css['features-list__list']}>
            {PersonalizedExperienceFeatureList.map(({ label, topic }) =>
                topics?.[topic] && <li className={css['features-list__item']} key={topic}>
                    <Image
                        className={css['features-list__img']}
                        src={CheckmarkImage}
                        width={16}
                        height={16}
                        alt='checkmark' />
                    <Typography variant={TypographyVariants.p3}>{label}</Typography>
                </li>)}
        </ul>
    );
}

FeaturesExperienceList.displayName = 'FeaturesExperienceList';
export default FeaturesExperienceList;