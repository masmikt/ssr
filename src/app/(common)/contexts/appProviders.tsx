import { Suspense } from 'react';
import { AppTrackingProvider } from './trackingProvider';
import { AnalyticsProvider } from './analyticsProvider';
import { Loader } from '@/app/(common)/components/loader';

interface IAppProvider {
    children: any;
}

const AppProviders = ({ children }: IAppProvider) => {
    return (
        <Suspense fallback={<Loader />}>
            <AnalyticsProvider>
                <AppTrackingProvider>
                    {children}
                </AppTrackingProvider>
            </AnalyticsProvider>
        </Suspense>
    )
}

export default AppProviders;
