import { AppTrackingProvider } from './trackingProvider';
import { AnalyticsProvider } from './analyticsProvider';
import { ReactElement } from 'react';

interface IAppProvider {
    children: ReactElement;
}

const AppProviders = ({ children }: IAppProvider) => {
    return (
        <AnalyticsProvider>
            <AppTrackingProvider>
                {children}
            </AppTrackingProvider>
        </AnalyticsProvider>
    )
}

export default AppProviders;
