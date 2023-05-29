import { createContext, useContext } from 'react';
import { ISetupFlowConsumerContext } from '@/app/(mobile)/(landings)/personalized-questions/types';

export const SetupFlowContext = createContext<ISetupFlowConsumerContext>({} as ISetupFlowConsumerContext);

export function useSetupFlowContext() {
    const context = useContext(SetupFlowContext);

    if (!context) {
        throw new Error(
            'useSetupFlowContext must be used within a Setup Flow Provider',
        )
    }

    return {
        SetupFlowContext,
        context
    };
}

export const useSetupFlow = () => useContext(SetupFlowContext);