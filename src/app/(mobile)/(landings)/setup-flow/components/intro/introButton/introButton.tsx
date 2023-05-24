// import { ScrollButton } from '../../scrollButton';
// import { ButtonPlacements } from '../../../constants';
// import { useLayoutEffect, useRef } from 'react';
// import { useLayoutContext } from 'src/mobile/hooks';
// import { useIntersectionObserver } from 'src/common/shared';


const IntroButton = () => {
    // const { setIsHeaderFixed } = useLayoutContext();
    // const ref: any = useRef<HTMLDivElement>();
    // const entry = useIntersectionObserver(ref, {});
    //
    // useLayoutEffect(() => {
    //     if (!entry) {
    //         return;
    //     }
    //
    //     setIsHeaderFixed?.(!entry.isIntersecting);
    // }, [entry]);

    return (
        <>
            IntroButton
        </>
        // <div ref={ref}>
        //     <ScrollButton placement={ButtonPlacements.TopBlock}>
        //         Protect me now
        //     </ScrollButton>
        // </div>
    );
}

IntroButton.displayName = 'IntroButton';
export default IntroButton;
