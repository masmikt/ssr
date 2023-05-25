import { Platforms } from '../constants';

const macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K', 'macOS'];
const windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'];
const iosPlatforms = ['iPhone', 'iPad', 'iPod'];

export function getRawPlatform(): string {
    if (window.navigator?.platform) {
        return window.navigator?.platform;
    }

    //@ts-ignore
    const userAgent = window.navigator?.userAgentData;

    if (userAgent) {
        return userAgent?.platform;
    }

    return '';
}

export function getUserAgent(): string {
    return window.navigator?.userAgent || '';
}

export function getPlatform(): Platforms {
    const platform = getRawPlatform();
    const userAgent = getUserAgent();
    let os = Platforms.Unknown;

    if (macosPlatforms.indexOf(platform) !== -1) {
        os = Platforms.Mac;
    } else {
        // @ts-ignore
        if (iosPlatforms.indexOf(platform) !== -1 || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1 && !window.MSStream) {
            os = Platforms.iOS;
        } else if (windowsPlatforms.indexOf(platform) !== -1) {
            os = Platforms.Windows;
        } else if (/Android/.test(userAgent)) {
            os = Platforms.Android;
        } else if (!os && /Linux/.test(platform)) {
            os = Platforms.Android;
        }
    }

    return os;
}

export function isIOS() {
    const platform = getRawPlatform();
    const userAgent = getUserAgent();
    return [
            'iPad Simulator',
            'iPhone Simulator',
            'iPod Simulator',
            'iPad',
            'iPhone',
            'iPod'
        ].includes(platform)
        // iPad on iOS 13 detection
        || (userAgent.includes("Mac") && "ontouchend" in document)
}