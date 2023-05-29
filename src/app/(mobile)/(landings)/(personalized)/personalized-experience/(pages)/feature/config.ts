import {
    PersonalizedExperienceFeaturesPages
} from '@/app/(mobile)/(landings)/(personalized)/personalized-experience/pagesList';

export interface IFeaturesConfigItem {
    title: string;
    subtitle: string;
    className: string;
    images: string;
}

export const FeaturesConfig: any = {
    [PersonalizedExperienceFeaturesPages.SpywareDetector]: {
        title: 'Spyware detector',
        subtitle: 'Find apps secretly spying on you.',
        className: 'light-purple',
        images: '/images/mobile/landings/personalized-experience/feature/spyware-detector@2x.webp',
    },
    [PersonalizedExperienceFeaturesPages.SocialMediaProtection]: {
        title: 'Social media protection',
        subtitle: 'Avoid being stalked on social media.',
        className: 'light-blue',
        images: '/images/mobile/landings/personalized-experience/feature/media-protection@2x.webp'
    },
    [PersonalizedExperienceFeaturesPages.TrackerDetector]: {
        title: 'Tracker detector',
        subtitle: 'Discover who tracks your location.',
        className: 'light-pink',
        images: '/images/mobile/landings/personalized-experience/feature/tracker-detector@2x.webp'
    },
    [PersonalizedExperienceFeaturesPages.CallRecorderBlocker]: {
        title: 'Call recording protection',
        subtitle: 'Learn if someone spies on your chats.',
        className: 'light-green',
        images: '/images/mobile/landings/personalized-experience/feature/call-recorder-blocker@2x.webp'
    },
    [PersonalizedExperienceFeaturesPages.ScreenRecordingDetector]: {
        title: 'Recording detector',
        subtitle: 'Stop anyone from accessing your phone screen, cam, or mic.',
        className: 'light-purple',
        images: '/images/mobile/landings/personalized-experience/feature/screen-recorder-blocker@2x.webp'
    }
}