import Instagram from 'public/images/common/features/instagram.svg';
import Antivirus from 'public/images/common/features/antivirus.svg';
import Alert from 'public/images/common/features/alert.svg';
import SocialMediaProtectionImage from 'public/images/mobile/landings/setup-flow/features/social-media-protection.webp';
import { ScreenNames } from '@/app/(mobile)/(landings)/setup-flow/constants';


export const SocialMediaProtectionFeatureConfig = {
    name: ScreenNames.SocialMediaProtection,
    image: SocialMediaProtectionImage,
    title: 'Social media protection',
    text: 'Easily avoid social media account hacks.',
    features: [
        {
            name: 'uses accounts',
            icon: Instagram,
            description: {
                text: 'Track suspicious login activity',
            }
        },
        {
            name: 'revoke access',
            icon: Antivirus,
            description: {
                text: 'Revoke access for other users',
            }
        },
        {
            name: 'login alerts',
            icon: Alert,
            description: {
                text: 'Get unauthorized login alerts',
            }
        },
    ]
}