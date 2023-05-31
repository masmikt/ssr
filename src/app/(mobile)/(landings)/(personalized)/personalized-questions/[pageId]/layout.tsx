import {
    SetupFlowContextProvider
} from '@/app/(mobile)/(landings)/(personalized)/personalized-questions/contexts/setupFlow';

export default function SurveyQuestionLayout({ children }: {
    children: React.ReactNode;
}) {
    return (
        <SetupFlowContextProvider>
            {children}
        </SetupFlowContextProvider>
    );
}