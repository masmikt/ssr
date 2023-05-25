import SpywareDetectorImage from 'public/images/mobile/landings/setupFlow/features/spyware-detector.webp';
import SpywareDetectorImage2x from 'public/images/mobile/landings/setupFlow/features/spyware-detector@2x.webp';
import Identity from 'public/images/common/features/identity.svg';
import Alert from 'public/images/common/features/alert.svg';
import Quarantining from 'public/images/common/features/quarantining.svg';
import { ScreenNames } from '../../../../constants';

export const SpywareFeatureConfig = {
    name: ScreenNames.SpywareDetector,
    image: {
        default: SpywareDetectorImage,
        retina: SpywareDetectorImage2x,
    },
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