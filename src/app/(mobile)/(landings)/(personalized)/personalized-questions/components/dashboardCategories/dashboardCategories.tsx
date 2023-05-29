import DashboardCategoriesList
    from '@/app/(mobile)/(landings)/(personalized)/personalized-questions/components/dashboardCategories/dashboardCategoriesList';
import dynamic from 'next/dynamic'

const DashboardButton = dynamic(() => import('@/app/(mobile)/(landings)/(personalized)/personalized-questions/components/dashboardButton/dashboardButton'));
import {
    SetupFlowContextProvider
} from '@/app/(mobile)/(landings)/(personalized)/personalized-questions/contexts/setupFlow';
import DashboardCategoriesProvider
    from '@/app/(mobile)/(landings)/(personalized)/personalized-questions/contexts/dashboardCategories/dashboardCategoriesProvider';

const DashboardCategories = () => {
    return (
        <SetupFlowContextProvider>
            <DashboardCategoriesProvider>
                <DashboardCategoriesList />
                <DashboardButton />
            </DashboardCategoriesProvider>
        </SetupFlowContextProvider>
    );
}

DashboardCategories.displayName = 'DashboardCategories';
export default DashboardCategories;