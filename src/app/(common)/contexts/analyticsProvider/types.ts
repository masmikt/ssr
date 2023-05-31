
export interface ISegmentEvent {
    eventName: string;
    properties: ICustomEventParams;
}

export type ICustomEventParams = { [key: string]: string | number | null | any };

export interface IAnalyticsProvider {
    send(event: ISegmentEvent): void;
}