"use client";
import { ReactNode } from 'react';
import { useFixedHeaderLayout } from '@/app/(common)/contexts';
import { LayoutContext } from '@/app/(common)/contexts/layoutProvider/hooks';

interface IFixedHeaderLayout {
    children: ReactNode;
}

const FixedHeaderLayout = ({ children }: IFixedHeaderLayout) => {
    const { isHeaderFixed, setIsHeaderFixed, setIsRedirect } = useFixedHeaderLayout();

    return (
        <LayoutContext.Provider value={{
            isHeaderFixed,
            setIsHeaderFixed,
            setIsRedirect
        }}>
            {children}
        </LayoutContext.Provider>
    )
}

FixedHeaderLayout.displayName = 'FixedHeaderLayout';
export default FixedHeaderLayout;