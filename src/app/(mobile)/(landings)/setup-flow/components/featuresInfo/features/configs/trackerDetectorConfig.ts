import TrackerDetectorImage from 'public/images/mobile/landings/setupFlow/features/tracking-detector.webp';
import TrackerDetectorImage2x from 'public/images/mobile/landings/setupFlow/features/tracking-detector@2x.webp';
import Spyware from 'public/images/common/features/spyware.svg';
import Location from 'public/images/common/features/location.svg';
import Safari from 'public/images/common/features/safari.svg';
import { ScreenNames } from '../../../../constants';

export const TrackerDetectorFeatureConfig = {
    name: ScreenNames.TrackerDetector,
    image: {
        default: TrackerDetectorImage,
        retina: TrackerDetectorImage2x
    },
    title: 'Tracker detector',
    text: 'Discover who tracks your location to spy on you.',
    features: [
        {
            name: 'secretly tracked',
            icon: Spyware,
            description: {
                text: 'Stop being secretly tracked',
            }
        },
        {
            name: 'location',
            icon: Location,
            description: {
                text: 'Protect your real location',
            }
        },
        {
            name: 'sees',
            icon: Safari,
            description: {
                text: 'Control who sees your location',
            }
        },
    ]
}