'use client';
import React, { ReactNode } from 'react'
import { objectOmitNull } from '@/app/(common)/shared/helpers';
import { ISegmentEvent, ICustomEventParams, IAnalyticsProvider } from './types';
import { useTracking } from '@/app/(common)/shared/hooks';

const AnalyticsContext = React.createContext<Partial<IAnalyticsProvider>>({});

interface IAnalyticsProviderProps {
    children: ReactNode;
}

const AnalyticsProvider = ({ children }: IAnalyticsProviderProps) => {
    const { getSegmentKey, getSid } = useTracking();
    let analytics: any = null;

    const initAnalytics = async () => {
        if (analytics) {
            return;
        }

        const { AnalyticsBrowser } = (await import('@segment/analytics-next'));
        const writeKey = getSegmentKey();
        analytics = AnalyticsBrowser.load({ writeKey });
        analytics.setAnonymousId(getSid());
    }

    const send = async (event: ISegmentEvent) => {
        if (!analytics) {
            await initAnalytics();
        }
        const properties = objectOmitNull(event.properties, false) as ICustomEventParams;

        analytics?.track(event.eventName, properties);

        if (event.properties.cardType) {
            const properties = objectOmitNull({
                ...event.properties,
                eventName: event.eventName,
            }, false) as ICustomEventParams;
            analytics?.track('action', properties);
        }
    }

    return (
        <AnalyticsContext.Provider
            value={{ analytics, send }}
        >
            {children}
        </AnalyticsContext.Provider>
    )
}

export default AnalyticsProvider;

// Create an analytics hook that we can use with other components.
export const useAnalytics = () => {
    const result = React.useContext(AnalyticsContext)
    if (!result) {
        throw new Error('Context used outside of its Provider!')
    }
    return result
}