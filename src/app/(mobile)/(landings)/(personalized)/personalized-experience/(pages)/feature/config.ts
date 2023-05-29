import { PersonalizedExperienceFeaturesPages } from '../pagesList';
import SpywareDetector from 'images/mobile/landings/personalizedExperience/spyware-detector.webp';
import SpywareDetector2x from 'images/mobile/landings/personalizedExperience/spyware-detector@2x.webp';
import MediaProtection from 'images/mobile/landings/personalizedExperience/media-protection.webp';
import MediaProtection2x from 'images/mobile/landings/personalizedExperience/media-protection@2x.webp';
import TrackerDetector from 'images/mobile/landings/personalizedExperience/tracker-detector.webp';
import TrackerDetector2x from 'images/mobile/landings/personalizedExperience/tracker-detector@2x.webp';
import CallRecorderBlocker from 'images/mobile/landings/personalizedExperience/call-recorder-blocker.webp';
import CallRecorderBlocker2x from 'images/mobile/landings/personalizedExperience/call-recorder-blocker@2x.webp';
import ScreenRecorderBlocker from 'images/mobile/landings/personalizedExperience/screen-recorder-blocker.webp';
import ScreenRecorderBlocker2x from 'images/mobile/landings/personalizedExperience/screen-recorder-blocker@2x.webp';


interface IFeatureImages {
    default: string;
    retina?: string;
}

export interface IFeaturesConfigItem {
    title: string;
    subtitle: string;
    className: string;
    images: IFeatureImages;
}

export const FeaturesConfig: Record<PersonalizedExperienceFeaturesPages, IFeaturesConfigItem> = {
    [PersonalizedExperienceFeaturesPages.SpywareDetector]: {
        title: 'Spyware detector',
        subtitle: 'Find apps secretly spying on you.',
        className: 'light-purple',
        images: {
            default: SpywareDetector,
            retina: SpywareDetector2x
        },
    },
    [PersonalizedExperienceFeaturesPages.SocialMediaProtection]: {
        title: 'Social media protection',
        subtitle: 'Avoid being stalked on social media.',
        className: 'light-blue',
        images: {
            default: MediaProtection,
            retina: MediaProtection2x,
        }
    },
    [PersonalizedExperienceFeaturesPages.TrackerDetector]: {
        title: 'Tracker detector',
        subtitle: 'Discover who tracks your location.',
        className: 'light-pink',
        images: {
            default: TrackerDetector,
            retina: TrackerDetector2x
        }
    },
    [PersonalizedExperienceFeaturesPages.CallRecorderBlocker]: {
        title: 'Call recording protection',
        subtitle: 'Learn if someone spies on your chats.',
        className: 'light-green',
        images: {
            default: CallRecorderBlocker,
            retina: CallRecorderBlocker2x
        }
    },
    [PersonalizedExperienceFeaturesPages.ScreenRecordingDetector]: {
        title: 'Recording detector',
        subtitle: 'Stop anyone from accessing your phone screen, cam, or mic.',
        className: 'light-purple',
        images: {
            default: ScreenRecorderBlocker,
            retina: ScreenRecorderBlocker2x
        }
    }
}