// "use client";
import { ReactNode } from 'react';
// import { useFixedHeaderLayout, LayoutContext } from '@/app/(common)/contexts/layoutProvider/hooks';

interface IFixedHeaderLayout {
    children: ReactNode;
}

const FixedHeaderLayout = ({ children }: IFixedHeaderLayout) => {
    return null;
    // const { isHeaderFixed, setIsHeaderFixed, setIsRedirect } = useFixedHeaderLayout();
    // return (
    //     <LayoutContext.Provider value={{
    //         isHeaderFixed,
    //         setIsHeaderFixed,
    //         setIsRedirect
    //     }}>
    //         {children}
    //     </LayoutContext.Provider>
    // )
}

FixedHeaderLayout.displayName = 'FixedHeaderLayout';
export default FixedHeaderLayout;