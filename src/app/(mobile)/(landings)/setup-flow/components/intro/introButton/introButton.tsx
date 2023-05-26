import { useLayoutContext } from '@/app/(common)/contexts';
import { useLayoutEffect } from 'react';
import { ButtonPlacements } from '@/app/(mobile)/(landings)/setup-flow/constants';
import { ScrollButton } from '@/app/(mobile)/(landings)/setup-flow/components/scrollButton';
import { useInView } from 'react-intersection-observer';

const IntroButton = () => {
    const { setIsHeaderFixed } = useLayoutContext();
    const { ref, inView } = useInView({
        threshold: 0,
    });

    useLayoutEffect(() => {
        setIsHeaderFixed?.(!inView);
    }, [inView]);

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
