import {
    FeatureContext
} from '@/app/(mobile)/(landings)/(personalized)/personalized-experience/(pages)/feature/contexts/feature/useFeatureContext';
import {
    useFeature
} from '@/app/(mobile)/(landings)/(personalized)/personalized-experience/(pages)/feature/hooks/useFeature';
import PersonalizedFeatureContext
    from '@/app/(mobile)/(landings)/(personalized)/personalized-experience/(pages)/feature/contexts/personalizedFeatureContext/personalizedFeatureContext';


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
            <PersonalizedFeatureContext>
                {children}
            </PersonalizedFeatureContext>
        </FeatureContext.Provider>
    )
}

FeatureProvider.displayName = 'FeatureProvider';
export default FeatureProvider;