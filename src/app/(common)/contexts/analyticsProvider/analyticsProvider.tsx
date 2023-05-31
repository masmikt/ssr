'use client';
import React, { ReactNode, useState } from 'react'
import { ISegmentEvent, ICustomEventParams, IAnalyticsProvider } from './types';
import { useTracking } from '@/app/(common)/shared/hooks';
import { objectOmitNull } from '@/app/(common)/shared/helpers';

const AnalyticsContext = React.createContext<Partial<IAnalyticsProvider>>({});

interface IAnalyticsProviderProps {
    children: ReactNode;
}

const AnalyticsProvider = ({ children }: IAnalyticsProviderProps) => {
    const [analytics, setAnalytics] = useState<any | null>(null);
    const { getSegmentKey, getSid } = useTracking();

    const loadSegment = async () => {
        const writeKey = getSegmentKey();
        let analyticsBrowser = ((await import('@segment/analytics-next')).AnalyticsBrowser);
        const analytics = analyticsBrowser.load({ writeKey });
        analytics.setAnonymousId(getSid());
        setAnalytics(analytics);
    }

    const send = async (event: ISegmentEvent) => {
        if (!analytics) {
            await loadSegment();
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
        <AnalyticsContext.Provider value={{ send }}>
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