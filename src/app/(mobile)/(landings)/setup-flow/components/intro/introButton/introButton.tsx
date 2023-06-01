"use client";
import { ButtonPlacements } from '@/app/(mobile)/(landings)/setup-flow/constants';
import { ScrollButton } from '@/app/(mobile)/(landings)/setup-flow/components/scrollButton';
import { useInView } from 'react-intersection-observer';
import dynamic from 'next/dynamic';

const FixedHeader = dynamic(() => import("@/app/(mobile)/(landings)/setup-flow/components/fixedHeader/fixedHeader"), {
    ssr: false,
});

const IntroButton = () => {
    const { ref, inView } = useInView({
        threshold: 0,
    });

    return (
        <>
            <FixedHeader isHeaderFixed={!inView} />
            <div ref={ref}>
                <ScrollButton placement={ButtonPlacements.TopBlock}>
                    Protect me now
                </ScrollButton>
            </div>
        </>
    );
}

IntroButton.displayName = 'IntroButton';
export default IntroButton;
