import { Swiper, SwiperSlide } from 'swiper/react';
import css from './featureSlide.module.scss';
import clsx from 'clsx';
import Image from 'next/image';
import {
    useFeatureContext
} from '@/app/(mobile)/(landings)/(personalized)/personalized-experience/(pages)/feature/contexts/feature/useFeatureContext';
import { Swiper as SwiperClass } from 'swiper/types';
import { FadeIn } from '@/app/(common)/components/fadeIn';

const FeatureSlide = () => {
    const { config, handleFeatureSwipe } = useFeatureContext();

    const handleSwipe = (swiper: SwiperClass) => {
        handleFeatureSwipe?.(swiper);
    }
    if (!config) {
        return null;
    }
    return (
        <div className={clsx(css['feature__wrapper'], css[config?.className])}>
            <Swiper
                className={clsx(css['feature__info-container'])}
                onTouchEnd={handleSwipe}
            >
                <SwiperSlide className={css['feature__info-item']}>
                    <FadeIn
                        className={clsx(
                            css['feature__img-wrapper'],
                            css[config?.className]
                        )}
                    >
                        <Image
                            className={css['feature__img']}
                            width={272}
                            height={325}
                            src={config.images}
                            alt={config.title}
                        />
                    </FadeIn>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

FeatureSlide.displayName = 'FeatureSlide';
export default FeatureSlide;