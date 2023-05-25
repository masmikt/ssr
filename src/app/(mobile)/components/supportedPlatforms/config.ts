import IOS from 'public/images/mobile/components/supportedPlatforms/ios.svg';
import Desktop from 'public/images/mobile/components/supportedPlatforms/desktop.svg';
import Android from 'public/images/mobile/components/supportedPlatforms/android.svg';

interface ISupportedPlatformConfig {
    img: string;
    name: string;
}

type ISupportedPlatformsConfig = Array<ISupportedPlatformConfig>

export const SupportedPlatformsConfig: ISupportedPlatformsConfig = [
    {
        img: IOS,
        name: 'iOS',
    },
    {
        img: Android,
        name: 'Android',
    },
    {
        img: Desktop,
        name: 'macOS, Windows',
    },
]
