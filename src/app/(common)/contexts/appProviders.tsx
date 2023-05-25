import { AppTrackingProvider } from './trackingProvider';
import { AnalyticsProvider } from './analyticsProvider';

interface IAppProvider {
    children: any;
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
