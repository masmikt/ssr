import { FC, memo, useCallback, useMemo } from 'react';
import Image from 'next/image'
import css from './awards.module.scss';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import clsx from 'clsx';
import { useSendEvent } from '@/app/(common)/shared/hooks';
import { AwardsList, AwardsNames } from '@/app/(mobile)/(landings)/setup-flow/components/awards/config';
import { ScreenNames, SetupFlowEvents, TrustSources } from '@/app/(mobile)/(landings)/setup-flow/constants';
import { Section } from '@/app/(mobile)/(landings)/setup-flow/components/section';
import { Link } from '@/app/(common)/components/link';

interface AwardsSectionProps {
    type?: 'black' | 'white';
}

const Awards: FC<AwardsSectionProps> = memo(({ type = 'black' }) => {
    const { sendEvent } = useSendEvent();
    const awardsConfig = useMemo(() => {
        let commonAwards = [AwardsList[AwardsNames.GoldenKitty], AwardsList[AwardsNames.MacWorld]];
        let platformDependsAwards = [AwardsList[AwardsNames.AppStore], AwardsList[AwardsNames.GooglePlay]]
        const config = [...platformDependsAwards, ...commonAwards];
        return [...config];
    }, []);

    const handleSwipe = () => {
        sendEvent(SetupFlowEvents.TrustsSliderClick)
    };

    const handleAwardClick = useCallback((source: TrustSources) => {
        sendEvent(SetupFlowEvents.TrustClick, {
            placement: ScreenNames.TrustSlider,
            source: source

        })
    }, []);

    return (
        <Section
            className={clsx(css['awards-section__container'], {
                [css.white]: type === 'white',
            })}
            name={ScreenNames.TrustSlider}>
            <Swiper
                spaceBetween={15}
                slidesPerView={3}
                centeredSlides={true}
                loop={true}
                modules={[Navigation, Pagination, Autoplay]}
                grabCursor={true}
                onTouchEnd={handleSwipe}
                className={css['awards-section__slider']}
            >
                {awardsConfig.map((award) => (
                    <SwiperSlide key={award.name}>
                        <Link
                            className={css["awards-section__award"]}
                            src={award.link} key={award.name}
                            onClick={() => handleAwardClick(award.source)}>
                            <Image className={css['awards-section__image']} src={award.img} alt={award.name} />
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Section>)
});

Awards.displayName = 'Awards';
export default Awards;