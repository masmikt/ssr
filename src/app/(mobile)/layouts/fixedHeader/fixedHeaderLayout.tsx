import { ReactNode } from 'react';
// import { LayoutContext, useFixedHeaderLayout } from '../../hooks';

interface IFixedHeaderLayout {
    children: ReactNode;
}

const FixedHeaderLayout = ({ children }: IFixedHeaderLayout) => {
    // const { isHeaderFixed, setIsHeaderFixed, setIsRedirect } = useFixedHeaderLayout();
    return (
        <>
            FixedHeaderLayout
        </>
        // <LayoutContext.Provider value={{
        //     isHeaderFixed,
        //     setIsHeaderFixed,
        //     setIsRedirect
        // }}>
        //     {children}
        // </LayoutContext.Provider>
    )
}

FixedHeaderLayout.displayName = 'FixedHeaderLayout';
export default FixedHeaderLayout;