import { useLayoutContext } from '@/app/(common)/contexts';
import { useRef } from 'react';
import { ButtonPlacements } from '@/app/(mobile)/(landings)/setup-flow/constants';
import { ScrollButton } from '@/app/(mobile)/(landings)/setup-flow/components/scrollButton';

const IntroButton = () => {
    const { setIsHeaderFixed } = useLayoutContext();
    const ref: any = useRef<HTMLDivElement>();
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
        <div ref={ref}>
            <ScrollButton placement={ButtonPlacements.TopBlock}>
                Protect me now
            </ScrollButton>
        </div>
    );
}

IntroButton.displayName = 'IntroButton';
export default IntroButton;
