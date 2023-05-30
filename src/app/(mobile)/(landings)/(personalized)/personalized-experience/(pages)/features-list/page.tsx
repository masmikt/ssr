"use client";
import Image from 'next/image'
import css from './page.module.scss';
import FeatureImage from 'public/images/mobile/landings/personalized-experience/features-list/feature-list.svg';
import { Typography, TypographyVariants } from '@/app/(common)/components/typography';
import ExperienceList
    from '@/app/(mobile)/(landings)/(personalized)/personalized-experience/(pages)/features-list/components/experienceList/experienceList';
import FeaturesExperienceButton
    from '@/app/(mobile)/(landings)/(personalized)/personalized-experience/(pages)/features-list/components/expirienceButton/expirienceButton';
import { FadeIn } from '@/app/(common)/components/fadeIn';

const FeatureList = () => {
    return (
        <div className={css['features-list__layout-content']}>
            <FadeIn className={css['features-list__container']}>
                <div className={css['features-list__info-container']}>
                    <Image
                        src={FeatureImage}
                        className={css[css['features-list__info-image']]}
                        width={232}
                        height={114}
                        alt='feature list info'
                    />
                    <Typography
                        className={css['features-list__title']}
                        variant={TypographyVariants.h3}>
                        Your <span className={css['features-list__important']}>personalized app</span> is ready!
                    </Typography>
                    <ExperienceList />
                </div>
            </FadeIn>
            <FeaturesExperienceButton />
        </div>
    );
};

export default FeatureList;