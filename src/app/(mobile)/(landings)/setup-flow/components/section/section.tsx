// 'use client';
import css from './section.module.scss';
import { DetailedHTMLProps, HTMLAttributes, ReactNode, useRef } from 'react';
// import { useInView } from 'react-intersection-observer';
// import { useIntersectionObserver } from 'src/common/shared';
// import { useMobileSendEvent } from 'src/mobile/hooks';
// import { SetupFlowEvents, ScreenNames } from '../../constants';
// import { useBuyNowContext } from '../../hooks';

export enum SectionColor {
    White = 'white',
    Grey = 'grey',
    Dark = 'dark',
    Blue = 'blue'
}

interface IBestAntiSpySection extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
    children: ReactNode;
    name?: string,
    color?: SectionColor | any;
    className?: string;
}

const Section = ({ className = '', children, color = SectionColor.White, name, ...rest }: IBestAntiSpySection) => {
    // const { ref, inView, entry } = useInView({
    //     /* Optional options */
    //     threshold: 0,
    // });

    // const { sendEvent } = useMobileSendEvent();
    // const { isAnchorScrolling, setPricingShown } = useBuyNowContext();
    //
    // useLayoutEffect(() => {
    //     if (!entry || !entry.isIntersecting || !name) {
    //         return;
    //     }
    //
    //     // if (name === ScreenNames.Plans) {
    //     //     setPricingShown?.();
    //     // }
    //     //
    //     // if (isAnchorScrolling) {
    //     //     return;
    //     // }
    //     // sendEvent(SetupFlowEvents.ScreenShown, { screen: name })
    // }, [entry]);

    return (
        <section className={`${css['section']}, ${css[`section--${color}`]}, ${className}`} {...rest}>
            {children}
        </section>
    );
}

Section.displayName = 'Section';
export default Section;