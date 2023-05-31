import Identity from 'public/images/common/features/identity.svg';
import Alert from 'public/images/common/features/alert.svg';
import Quarantining from 'public/images/common/features/quarantining.svg';
import SpywareDetectorImage from 'public/images/mobile/landings/setup-flow/features/spyware-detector.webp';
import { ScreenNames } from '@/app/(mobile)/(landings)/setup-flow/constants';

export const SpywareFeatureConfig = {
    name: ScreenNames.SpywareDetector,
    image: SpywareDetectorImage,
    title: 'Spyware detector',
    text: 'Find apps secretly spying on you and your data.',
    features: [
        {
            name: 'anti-spyware scan',
            icon: Identity,
            description: {
                text: 'Start full anti-spyware scan',
            }
        },
        {
            name: 'spyware detection',
            icon: Alert,
            description: {
                text: 'Get automatic spyware alerts',
            }
        },
        {
            name: 'threat quarantining',
            icon: Quarantining,
            description: {
                text: 'Spot suspicious app permissions',
            }
        },
    ]
}