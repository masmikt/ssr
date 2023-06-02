// import AppTrackingProvider from './trackingProvider';
import { AnalyticsProvider } from './analyticsProvider';
import { Suspense } from 'react';
import { IChildrenWrapper } from '@/app/(common)/shared/types/common';


const AppProviders = ({ children }: IChildrenWrapper) => {
    return (
        <Suspense>
            <AnalyticsProvider>
                {/*<AppTrackingProvider>*/}
                {children}
                {/*</AppTrackingProvider>*/}
            </AnalyticsProvider>
        </Suspense>
    )
}

export default AppProviders;
