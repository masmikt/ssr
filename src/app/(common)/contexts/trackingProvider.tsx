'use client';
import { ReactElement, useEffect } from 'react';
import { useEffectAfterMount, usePathnameChange, useSendEvent, useTracking } from '../shared/hooks';
import { useSearchParams } from 'next/navigation';
import App from 'next/app';
import { isClient } from '@/app/(common)/shared/helpers/isClient';
import { usePlatformReporter } from '@/app/(common)/shared/hooks';
import { getUserAgent } from '@/app/(common)/shared/helpers';
import { Events } from '@/app/(common)/shared/constants';

interface ITrackingProvider {
    children: ReactElement;
    userAgent?: string;
}

export const AppTrackingProvider = ({ children, userAgent }: ITrackingProvider) => {
    const searchParams = useSearchParams();
    const { sendEvent } = useSendEvent();
    usePlatformReporter();
    usePathnameChange();
    const { saveTrackingParams, syncTrackingParams, setUserAgent } = useTracking();

    useEffectAfterMount(() => {
        syncTrackingParams();
    }, [searchParams])

    useEffect(() => {
        sendEvent(Events.View);
        if (userAgent) {
            setUserAgent(userAgent);
        }
        saveTrackingParams();
    }, []);

    return (
        <>
            {children}
        </>
    );
};

AppTrackingProvider.getInitialProps = async (ctx: any): Promise<any> => {
    const initialProps = await App.getInitialProps(ctx);
    const userAgent = isClient() ? getUserAgent() : ctx.req.headers['user-agent'];

    return { userAgent, ...initialProps };
};
