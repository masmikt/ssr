import SocialMediaProtectionImage from 'public/images/mobile/landings/setupFlow/features/social-media-protection.webp';
import SocialMediaProtectionImage2x from 'public/images/mobile/landings/setupFlow/features/social-media-protection@2x.webp';
import Instagram from 'public/images/common/features/instagram.svg';
import Antivirus from 'public/images/common/features/antivirus.svg';
import Alert from 'public/images/common/features/alert.svg';
import { ScreenNames } from '../../../../constants';


export const SocialMediaProtectionFeatureConfig = {
    name: ScreenNames.SocialMediaProtection,
    image: {
        default: SocialMediaProtectionImage,
        retina: SocialMediaProtectionImage2x
    },
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