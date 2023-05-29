import {
    DashboardContext,
    useDashboardContext
} from '@/app/(mobile)/(landings)/(personalized)/personalized-questions/contexts/dashboardCategories/useDashboardContext';
import { useDashboard } from '@/app/(mobile)/(landings)/(personalized)/personalized-questions/hooks/useDashboard';

interface IDashboardCategoriesProvider {
    children: React.ReactNode
}

const DashboardCategoriesProvider = ({ children }: IDashboardCategoriesProvider) => {
    const { DashboardContext } = useDashboardContext();
    const { activeTopics, handleTopicClick, navigate, handleNextClick, isButtonActive } = useDashboard();

    return (
        <DashboardContext.Provider
            value={{
                activeTopics,
                handleTopicClick,
                navigate,
                handleNextClick,
                isButtonActive
            }}>
            {children}
        </DashboardContext.Provider>
    )
}

DashboardCategoriesProvider.displayName = 'DashboardCategoriesProvider';
export default DashboardCategoriesProvider;