import {
    FeatureContext
} from '@/app/(mobile)/(landings)/(personalized)/personalized-experience/(pages)/feature/contexts/feature/useFeatureContext';
import {
    useFeature
} from '@/app/(mobile)/(landings)/(personalized)/personalized-experience/(pages)/feature/hooks/useFeature';

interface IFeatureProvider {
    children: React.ReactNode
}

const FeatureProvider = ({ children }: IFeatureProvider) => {
    const { handleFeatureSwipe, config, isLoading, handleNextClick, isRedirectToCheckout } = useFeature();

    return (
        <FeatureContext.Provider
            value={{
                handleFeatureSwipe,
                config,
                isLoading,
                handleNextClick,
                isRedirectToCheckout
            }}>
            {children}
        </FeatureContext.Provider>
    )
}

FeatureProvider.displayName = 'FeatureProvider';
export default FeatureProvider;