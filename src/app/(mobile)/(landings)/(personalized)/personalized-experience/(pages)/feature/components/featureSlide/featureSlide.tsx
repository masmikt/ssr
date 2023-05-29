import { Swiper, SwiperSlide } from 'swiper/react';
import css from './featureSlide.module.scss';
import clsx from 'clsx';
import Image from 'next/image';

const FeatureSlide = () => {
    return (
        <Swiper
            className={css['feature__info-container']}
            // onTouchEnd={handleFeatureSwipe}
        >
            <SwiperSlide className={css['feature__info-item']}>
                <div
                    className={clsx(
                        css['feature__img-wrapper'],
                        // css[config.className]
                    )}
                >
                    {/*<Image*/}
                    {/*    className={css['feature__img']}*/}
                    {/*    width={272}*/}
                    {/*    height={325}*/}
                    {/*    // src={config.images.default}*/}
                    {/*    // alt={config.title}*/}
                    {/*/>*/}
                </div>
            </SwiperSlide>
        </Swiper>
    );
}

FeatureSlide.displayName = 'FeatureSlide';
export default FeatureSlide;