import { Section } from '../section';
import css from './userRate.module.scss';
import { UserRatesAppsConfig } from './config';
import Image from 'next/image'
import { ScreenNames } from '../../constants';
import classNames from 'classnames';
import { Typography, TypographyComponents, TypographyVariants } from '@/app/(common)/components/typography';
import { Link } from '@/app/(common)/components/link';
import { TrustpilotReview } from '@/app/(mobile)/components/trustpilot';

const UserRate = () => {
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
                    >
                        <Image
                            className={classNames(css['user-rate__image'], css[`user-rate__image--${rateApp.name}`])}
                            alt={rateApp.name}
                            src={rateApp.img} />
                    </Link>
                ))}
            </div>
            <TrustpilotReview
                placement={ScreenNames.UsersRate}
                imageClassName={css['user-rate__trustpilot']}
            />
        </Section>
    );
};

UserRate.displayName = 'UserRate';
export default UserRate;