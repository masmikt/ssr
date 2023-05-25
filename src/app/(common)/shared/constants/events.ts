import { Platforms } from './general';

export enum GeneralEvents {
    View = 'View',
    PageView = 'PageView',
    ScanQrCode = 'ScanQrCode',
    DownloadButtonClick = 'DownloadButtonClick',
    PlayStoreButtonClick = 'PlayStoreButtonClick',
    AppStoreButtonClick = 'AppStoreButtonClick',
    ButtonClick = 'ButtonClick',
    ButtonClickCheckout = 'ButtonClickCheckout',
    IsMacOs = 'IsMacOs',
    IsWindows = 'IsWindows',
    IsAndroid = 'IsAndroid',
    IsIOS = 'IsIOS',
    LegalPagesClick = 'LegalPagesClick'
}

export enum CookiesBannerEvents {
    CookiesBannerShown = 'CookiesBannerShown',
    CookiesBannerClose = 'CookiesBannerClose',
    CookiesBannerAccepted = 'CookiesBannerAccepted',
    CookiesBannerDeclined = 'CookiesBannerDeclined',
    CookiesBannerPoliciesClick = 'CookiesBannerPoliciesClick',
}

export enum CheckoutEvents {
    CheckoutWidgetInit = 'CheckoutWidgetInit',
    PopupCheckoutClosed = 'PopupCheckoutClosed',
    HandleCheckoutPurchaseProcess = 'HandleCheckoutPurchaseProcess',
    HandleCustomCheckoutPurchaseProcess = 'HandleCustomCheckoutPurchaseProcess',
    IsMacOsCheckoutView = 'IsMacOsCheckoutView',
    IsIOsCheckoutView = 'IsIOsCheckoutView',
    IsAndroidCheckoutView = 'IsAndroidCheckoutView',
    IsWindowsCheckoutView = 'IsWindowsCheckoutView',
    IsOtherTypeDeviceCheckoutView = 'IsOtherTypeDeviceCheckoutView',
    CheckoutView = 'CheckoutView',
    CheckoutSubmitOrder = 'CheckoutSubmitOrder',
    CheckoutError = 'CheckoutError',
    CheckoutFormNotFound = 'CheckoutFormNotFound',
    CheckoutIsMacOsSubmitOrder = 'CheckoutIsMacOsSubmitOrder',
    CheckoutIsWindowsSubmitOrder = 'CheckoutIsWindowsSubmitOrder',
    CheckoutIsIOsSubmitOrder = 'CheckoutIsIOsSubmitOrder',
    CheckoutIsAndroidSubmitOrder = 'CheckoutIsAndroidSubmitOrder',
    CheckoutIsOtherTypeDeviceSubmitOrder = 'CheckoutIsOtherTypeDeviceSubmitOrder',
}

export const Events = {
    ...GeneralEvents,
    ...CheckoutEvents,
    ...CookiesBannerEvents,
};

export type IEventsPlatform = { [key in Platforms]?: string }

export const EventsPlatform: IEventsPlatform = {
    [Platforms.Mac]: 'macOS',
    [Platforms.Windows]: 'Windows',
    [Platforms.Linux]: 'Linux',
    [Platforms.iOS]: 'iOS',
    [Platforms.Android]: 'Android',
    [Platforms.Unknown]: 'Unknown',
}