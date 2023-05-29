import { createContext, useContext } from 'react';
import {
    IDashboardContextConsumerContext
} from '@/app/(mobile)/(landings)/personalized-questions/contexts/dashboardCategories/types';

export const DashboardContext = createContext<IDashboardContextConsumerContext>({} as IDashboardContextConsumerContext);

export function useDashboardContext() {
    const context = useContext(DashboardContext);

    if (!context) {
        throw new Error(
            'useDashboardContext must be used within a Dashboard Provider',
        )
    }

    return {
        DashboardContext,
        context
    };
}

export const useDashboardCategories = () => useContext(DashboardContext);
