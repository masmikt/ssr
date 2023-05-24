// import Image from 'next/image';
import { clsx } from 'clsx';
import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';
// import TrustPilotImage from '@/../public/images/mobile/components/trustpilot/trust-pilot-review.svg?url';
import { Link } from '@/app/(common)/components/link';

interface ITrustpilotReview extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement> {
    className?: string;
    imageClassName?: string;
}

const TrustpilotReview = ({ className, imageClassName, ...rest }: ITrustpilotReview) => {
    return (
        <Link src="https://www.trustpilot.com/review/clario.co" className={clsx(className)} {...rest}>
            {/*<Image className={clsx(imageClassName)} src={TrustPilotImage} alt="Trust pilot rate¬" />*/}
        </Link>
    );
}

TrustpilotReview.displayName = 'TrustpilotReview';
export default TrustpilotReview;