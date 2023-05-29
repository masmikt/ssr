import {
    ExperienceContext
} from '@/app/(mobile)/(landings)/(personalized)/personalized-experience/contexts/experience/useExperienceContext';
import {
    useExperienceFeaturesConfig
} from '@/app/(mobile)/(landings)/(personalized)/personalized-experience/hooks/useExperienceFeaturesConfig';

interface IExperienceProvider {
    children: React.ReactNode
}

const ExperienceProvider = ({ children }: IExperienceProvider) => {
    const config = useExperienceFeaturesConfig();

    return (
        <ExperienceContext.Provider value={config}>
            {children}
        </ExperienceContext.Provider>
    )
}

ExperienceProvider.displayName = 'ExperienceProvider';
export default ExperienceProvider;