import { AnalyticsBrowser } from '@segment/analytics-next';

export interface ISegmentEvent {
    eventName: string;
    properties: ICustomEventParams;
}

export type ICustomEventParams = { [key: string]: string | number | null | any };

export interface IAnalyticsProvider {
    analytics: AnalyticsBrowser;
    send(event: ISegmentEvent): void;
}