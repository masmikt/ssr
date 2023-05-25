export enum Platforms {
    Windows = 'Windows',
    Mac = 'macOS',
    Linux = 'Linux',
    Unknown = 'Unknown',
    Android = 'Android',
    iOS = 'iOS'
}

export enum MarketPlaces {
    AppStore = 'AppStore',
    GooglePlayMarket = 'GooglePlayMarket',
}

export enum Languages {
    En = 'en',
}

export enum InfrastructureSources {
    Clario = 'clario',
    Betelgeuse = 'betelgeuse',
}

export const InterstellarProductId = 305;

export enum Currencies {
    USD = 'USD',
    EUR = 'EUR',
}

export const DefaultIteration = 'it-1';
export const DefaultTrt = `${InterstellarProductId}_1`;

export const localStorageKeys = {
    osIsReported: 'OS_IS_REPORTED',
};

export const DefaultDownloadSystemLink = `https://dl2.clario.co/download/bundle_id/${DefaultTrt}`;
export const MobileDownloadLink = 'https://clario-antispy.onelink.me/zPqx/myo2h2ms';
export const MobileDownloadLinkIOS = 'https://apps.apple.com/us/app/clario-anti-spy/id1663473665';
export const MobileDownloadLinkAndroid = 'https://play.google.com/store/apps/details?id=com.clario.clario.mobile';
