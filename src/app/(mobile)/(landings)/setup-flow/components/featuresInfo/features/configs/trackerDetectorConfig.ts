import Spyware from 'public/images/common/features/spyware.svg';
import Location from 'public/images/common/features/location.svg';
import Safari from 'public/images/common/features/safari.svg';
import TrackerDetectorImage from 'public/images/mobile/landings/setup-flow/features/tracking-detector.webp';
import { ScreenNames } from '@/app/(mobile)/(landings)/setup-flow/constants';

export const TrackerDetectorFeatureConfig = {
    name: ScreenNames.TrackerDetector,
    image: TrackerDetectorImage,
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