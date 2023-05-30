"use client";
import {
    SetupFlowContextProvider
} from '@/app/(mobile)/(landings)/(personalized)/personalized-questions/contexts/setupFlow';

export default function SurveyQuestionLayout({ children }: {
    children: React.ReactNode;
}) {
    return (
        <SetupFlowContextProvider>
            <div className={'px-s'}>
                {children}
            </div>
        </SetupFlowContextProvider>
    );
}