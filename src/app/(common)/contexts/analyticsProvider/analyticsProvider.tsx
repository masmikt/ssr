'use client';
import React, { ReactNode, useEffect } from 'react'
import { objectOmitNull } from '@/app/(common)/shared/helpers';
import { ISegmentEvent, ICustomEventParams, IAnalyticsProvider } from './types';
import { useTracking } from '@/app/(common)/shared/hooks';
import { AnalyticsBrowser } from '@segment/analytics-next';

const AnalyticsContext = React.createContext<Partial<IAnalyticsProvider>>({});

interface IAnalyticsProviderProps {
    children: ReactNode;
}

const AnalyticsProvider = ({ children }: IAnalyticsProviderProps) => {
    const { getSegmentKey, getSid } = useTracking();
    const writeKey = getSegmentKey();

    const analytics = React.useMemo(() => {
        return AnalyticsBrowser.load({ writeKey })
    }, [writeKey]);

    useEffect(() => {
        analytics.setAnonymousId(getSid());
    }, [analytics])

    const send = async (event: ISegmentEvent) => {
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
        <AnalyticsContext.Provider value={{ analytics, send }}>
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