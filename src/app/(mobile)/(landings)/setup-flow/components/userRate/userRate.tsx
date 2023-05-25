import { Section } from '../section';
import css from './userRate.module.scss';
import { UserRatesAppsConfig } from './config';
import Image from 'next/image'
import { ScreenNames, SetupFlowEvents, TrustSources } from '../../constants';
import classNames from 'classnames';
import { useCallback } from 'react';
import { Typography, TypographyComponents, TypographyVariants } from '@/app/(common)/components/typography';
import { Link } from '@/app/(common)/components/link';
import { useSendEvent } from '@/app/(common)/shared/hooks';
import { TrustpilotReview } from '@/app/(mobile)/components/trustpilot';

const UserRate = () => {
    const { sendEvent } = useSendEvent();
    const handleAppRateClick = useCallback((source: TrustSources) => {
        sendEvent(SetupFlowEvents.TrustClick, {
            placement: ScreenNames.UsersRate,
            source: source

        })
    }, []);

    return (
        <Section className={css['user-rate']} name={ScreenNames.UsersRate}>
            <Typography
                variant={TypographyVariants.h3}
                component={TypographyComponents.div}
                className={css['user-rate__title']}>
                Users rate us very highly.
            </Typography>
            <div className={css['user-rate__list']}>
                {UserRatesAppsConfig.map(rateApp => (
                    <Link
                        className={css["user-rate__link"]}
                        src={rateApp.link}
                        key={rateApp.name}
                        onClick={() => handleAppRateClick(rateApp.source)}>
                        <Image
                            className={classNames(css['user-rate__image'], css[`user-rate__image--${rateApp.name}`])}
                            alt={rateApp.name}
                            src={rateApp.img} />
                    </Link>
                ))}
            </div>
            <TrustpilotReview
                imageClassName={css['user-rate__trustpilot']}
                onClick={() => handleAppRateClick(TrustSources.TrustPilot)} />
        </Section>
    );
};

UserRate.displayName = 'UserRate';
export default UserRate;