'use client';
import { ReactElement, useEffect } from 'react';
import { useEffectAfterMount, useTracking } from '../shared/hooks';
import { useSearchParams } from 'next/navigation';
import App from 'next/app';
import { isClient } from '@/app/(common)/shared/helpers/isClient';
import { usePlatformReporter } from '@/app/(common)/shared/hooks';
import { getUserAgent } from '@/app/(common)/shared/helpers';

interface ITrackingProvider {
    children: ReactElement;
    userAgent: string;
}

export const AppTrackingProvider = ({ children, userAgent }: ITrackingProvider) => {
    const [searchParams] = useSearchParams();
    usePlatformReporter();
    const { saveTrackingParams, syncTrackingParams, setUserAgent } = useTracking();

    useEffectAfterMount(() => {
        syncTrackingParams();
    }, [searchParams])

    useEffect(() => {
        setUserAgent(userAgent);
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
    console.log(`!@!! isClient()`, isClient())
    const userAgent = isClient() ? getUserAgent() : ctx.req.headers['user-agent'];

    return { userAgent, ...initialProps };
};
