import { PPGCheckoutTypes } from './ppg';
import { Events, Platforms } from '@/app/(common)/shared/constants';

export const CheckoutViewEvents: Record<string, string> = {
    [Platforms.Windows]: Events.IsWindowsCheckoutView,
    [Platforms.Mac]: Events.IsMacOsCheckoutView,
    [Platforms.iOS]: Events.IsIOsCheckoutView,
    [Platforms.Android]: Events.IsAndroidCheckoutView,
    Other: Events.IsOtherTypeDeviceCheckoutView
}

export const CheckoutSubmitOrderEvents: Record<string, string> = {
    [Platforms.Windows]: Events.CheckoutIsWindowsSubmitOrder,
    [Platforms.Mac]: Events.CheckoutIsMacOsSubmitOrder,
    [Platforms.iOS]: Events.CheckoutIsIOsSubmitOrder,
    [Platforms.Android]: Events.CheckoutIsAndroidSubmitOrder,
    Other: Events.CheckoutIsOtherTypeDeviceSubmitOrder
}

export const CheckoutTypes: any = {
    ...PPGCheckoutTypes,
}