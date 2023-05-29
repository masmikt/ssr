'use client';
import React, { ReactNode, useEffect } from 'react'
import { AnalyticsBrowser } from '@segment/analytics-next'
import { objectOmitNull } from '@/app/(common)/shared/helpers';
import { ISegmentEvent, ICustomEventParams, IAnalyticsProvider } from './types';
import { useTracking } from '@/app/(common)/shared/hooks';

const AnalyticsContext = React.createContext<Partial<IAnalyticsProvider>>({});

interface IAnalyticsProviderProps {
    children: ReactNode;
}

export const AnalyticsProvider = ({ children }: IAnalyticsProviderProps) => {
    const { getSegmentKey, getSid } = useTracking();
    const writeKey = getSegmentKey();

    const analytics = React.useMemo(() => {
        return AnalyticsBrowser.load({ writeKey })
    }, [writeKey]);

    useEffect(() => {
        analytics.setAnonymousId(getSid());
    }, [analytics])

    const send = (event: ISegmentEvent) => {
        const properties = objectOmitNull(event.properties, false) as ICustomEventParams;

        analytics.track(event.eventName, properties);

        if (event.properties.cardType) {
            const properties = objectOmitNull({
                ...event.properties,
                eventName: event.eventName,
            }, false) as ICustomEventParams;
            analytics.track('action', properties);
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

// Create an analytics hook that we can use with other components.
export const useAnalytics = () => {
    const result = React.useContext(AnalyticsContext)
    if (!result) {
        throw new Error('Context used outside of its Provider!')
    }
    return result
}