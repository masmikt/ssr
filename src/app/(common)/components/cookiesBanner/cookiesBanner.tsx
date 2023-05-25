"use client";
import clsx from 'clsx';
import { setCookie, getCookie } from 'cookies-next';
import css from './cookiesBanner.module.scss';
import { useCallback, useEffect, useState } from 'react';
import { useSendEvent } from '@/app/(common)/shared/hooks';
import { Events } from '@/app/(common)/shared/constants';
import { Typography, TypographyComponents, TypographyVariants } from '@/app/(common)/components/typography';
import { Link } from '@/app/(common)/components/link';
import { Button, ButtonColor, ButtonSize, ButtonVariant } from '@/app/(common)/components/button';

interface ICookiesBanner {
    className?: string;
}

const CookiesBannerKey = 'consent_disagree';
const TestCookiesBannerKey = 'COOKIES_BANNER_SHOW';

const CookiesBanner = ({ className }: ICookiesBanner) => {
    const [showBanner, setShowBanner] = useState(false);
    const { sendEvent } = useSendEvent();

    useEffect(() => {
        const consentValue = getCookie(CookiesBannerKey);
        const localShowCookiesBanner = localStorage.getItem(TestCookiesBannerKey);

        if (localShowCookiesBanner && consentValue == null) {
            setShowBanner(true);
            return;
        }

        if (consentValue == null) {
            setShowBanner(true);
        }
    }, []);

    useEffect(() => {
        sendEvent(Events.CookiesBannerShown);
    }, []);

    const hideBanner = () => {
        setShowBanner(false);
    }

    const handleCloseBannerClick = useCallback(() => {
        sendEvent(Events.CookiesBannerClose);
        setCookie(CookiesBannerKey, false);
        hideBanner();
    }, []);

    const handleAccept = useCallback(() => {
        setCookie(CookiesBannerKey, false);
        sendEvent(Events.CookiesBannerAccepted);
        hideBanner();
    }, []);

    const handleDeclined = useCallback(() => {
        setCookie(CookiesBannerKey, true);
        sendEvent(Events.CookiesBannerDeclined);
        hideBanner();
    }, []);

    const handlePolicyClick = useCallback(() => {
        sendEvent(Events.CookiesBannerPoliciesClick);
    }, []);

    return (
        <>
            {showBanner
                ? <div className={clsx(css['cookies-banner'], className)}>
                    <div className={css['cookies-banner__container']}>
                        <div className={css["cookies-banner__close"]} onClick={handleCloseBannerClick} />
                        <Typography
                            variant={TypographyVariants.p5} className={css["cookies-banner__text"]}
                            component={TypographyComponents.div}>
                            We use cookies for your best online experience. See our
                            <Link
                                src="https://clario.co/cookie-policy/" className={css["cookies-banner__link"]}
                                onClick={handlePolicyClick}>
                                Cookie Policy.
                            </Link>
                        </Typography>
                        <div className={css["cookies-banner__controls"]}>
                            <Button
                                size={ButtonSize.Small}
                                variant={ButtonVariant.Border}
                                color={ButtonColor.Info}
                                className={css["cookies-banner__button--mobile"]}
                                onClick={handleDeclined}>
                                No
                            </Button>
                            <Button
                                size={ButtonSize.Small}
                                variant={ButtonVariant.Filled}
                                color={ButtonColor.Primary}
                                className={css["cookies-banner__button--mobile"]}
                                onClick={handleAccept}>
                                Ok
                            </Button>
                            <Button
                                size={ButtonSize.Large}
                                variant={ButtonVariant.Border}
                                color={ButtonColor.Info}
                                className={clsx(css["cookies-banner__button--desktop"], css['decline'])}
                                onClick={handleDeclined}>
                                Disagree
                            </Button>
                            <Button
                                size={ButtonSize.Large}
                                variant={ButtonVariant.Filled}
                                color={ButtonColor.Info}
                                className={clsx(css["cookies-banner__button--desktop"], css['agree'])}
                                onClick={handleAccept}>
                                Agree
                            </Button>
                        </div>
                    </div>
                </div>
                : null
            }
        </>
    );
}

CookiesBanner.displayName = 'CookiesBanner';
export default CookiesBanner;