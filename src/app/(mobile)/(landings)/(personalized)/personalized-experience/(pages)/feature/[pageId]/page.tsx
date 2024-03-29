"use client";
import css from './page.module.scss';
import 'swiper/swiper.min.css';
import FeatureSlide
    from '@/app/(mobile)/(landings)/(personalized)/personalized-experience/(pages)/feature/components/featureSlide/featureSlide';
import FeatureInfo
    from '@/app/(mobile)/(landings)/(personalized)/personalized-experience/(pages)/feature/components/featureInfo/featureInfo';
import FeatureButton
    from '@/app/(mobile)/(landings)/(personalized)/personalized-experience/(pages)/feature/components/featureButton/featureButton';
import FeatureProvider
    from '@/app/(mobile)/(landings)/(personalized)/personalized-experience/(pages)/feature/contexts/feature/featureProvider';
import PersonalizedFeatureContext
    from '@/app/(mobile)/(landings)/(personalized)/personalized-experience/(pages)/feature/contexts/personalizedFeatureContext/personalizedFeatureContext';


const FeatureItem = () => {
    return (
        <PersonalizedFeatureContext>
            <FeatureProvider>
                <div className={css['feature__content']}>
                    <div className={css['feature__container']}>
                        <FeatureSlide />
                        <FeatureInfo />
                        <FeatureButton />
                    </div>
                </div>
            </FeatureProvider>
        </PersonalizedFeatureContext>
    );
}

export default FeatureItem;
