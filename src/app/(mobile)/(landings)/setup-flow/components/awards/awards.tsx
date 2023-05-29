import { FC, useCallback, useMemo } from 'react';
import Image from 'next/image'
import css from './awards.module.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import clsx from 'clsx';
import { useSendEvent } from '@/app/(common)/shared/hooks';
import { AwardsList, AwardsNames } from '@/app/(mobile)/(landings)/setup-flow/components/awards/config';
import { ScreenNames, SetupFlowEvents, TrustSources } from '@/app/(mobile)/(landings)/setup-flow/constants';
import { Section } from '@/app/(mobile)/(landings)/setup-flow/components/section';
import { Link } from '@/app/(common)/components/link';

interface AwardsSectionProps {
    type?: 'black' | 'white';
}

const Awards = ({ type = 'black' }: AwardsSectionProps) => {
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

    const settings = {
        infinite: true,
        speed: 300,
        variableWidth: true,
        beforeChange: handleSwipe,
        className: css['awards-section__slide']
    };


    return (
        <Section
            className={clsx(css['awards-section__container'], {
                [css.white]: type === 'white',
            })}
            name={ScreenNames.TrustSlider}>
            <Slider {...settings} className={css['awards-section__slider']}>
                {awardsConfig.map((award) => (
                    <Link
                        className={css["awards-section__award"]}
                        src={award.link} key={award.name}
                        onClick={() => handleAwardClick(award.source)}>
                        <Image className={css['awards-section__image']} src={award.img} alt={award.name} />
                    </Link>
                ))}
            </Slider>
        </Section>)
};

Awards.displayName = 'Awards';
export default Awards;