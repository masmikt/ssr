"use client";
import { createContext, useContext } from 'react';

export const LayoutContext = createContext<Partial<ILayoutConsumerContext>>({});

export type ILayoutConsumerContext = {
    isHeaderFixed: boolean;
    setIsHeaderFixed(isHeaderFixed: boolean): void;
    setIsRedirect(redirect: boolean): void;
};

export function useLayoutContext() {
    const context = useContext(LayoutContext);

    if (!context) {
        throw new Error(
            'useLayoutContext must be used within a Layout Provider',
        )
    }
    return context;
}