'use client';
import Image from 'next/image';
import { clsx } from 'clsx';
import { AnchorHTMLAttributes, DetailedHTMLProps, useCallback } from 'react';
import TrustPilotImage from 'public/images/mobile/components/trustpilot/trust-pilot-review.svg';
import { Link } from '@/app/(common)/components/link';
import { useSendEvent } from '@/app/(common)/shared/hooks';
import { ScreenNames, SetupFlowEvents, TrustSources } from '@/app/(mobile)/(landings)/setup-flow/constants';

interface ITrustpilotReview extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement> {
    className?: string;
    placement?: ScreenNames;
    imageClassName?: string;
}

const TrustpilotReview = ({ className, imageClassName, placement, ...rest }: ITrustpilotReview) => {
    const { sendEvent } = useSendEvent();
    const handleAppRateClick = useCallback(() => {
        if (!placement) {
            return;
        }
        sendEvent(SetupFlowEvents.TrustClick, {
            placement: placement,
            source: TrustSources.TrustPilot

        })
    }, []);
    return (
        <Link src="https://www.trustpilot.com/review/clario.co" className={clsx(className)} {...rest}
              onClick={handleAppRateClick}>
            <Image className={clsx(imageClassName)} src={TrustPilotImage} alt="Trust pilot rate¬" />
        </Link>
    );
}

TrustpilotReview.displayName = 'TrustpilotReview';
export default TrustpilotReview;