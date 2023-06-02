'use client';
import css from './section.module.scss';
import clsx from 'clsx';
import { DetailedHTMLProps, HTMLAttributes, ReactNode, useLayoutEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useSendEvent } from '@/app/(common)/shared/hooks';
import { SetupFlowEvents } from '@/app/(mobile)/(landings)/setup-flow/constants';

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
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0,
    });

    // const { sendEvent } = useSendEvent();
    //
    useLayoutEffect(() => {
        if (!entry || !entry.isIntersecting || !name) {
            return;
        }
        // sendEvent(SetupFlowEvents.ScreenShown, { screen: name })
    }, [inView]);

    return (
        <section className={clsx(css['section'], css[`section--${color}`], className)} {...rest} ref={ref}>
            {children}
        </section>
    );
}

Section.displayName = 'Section';
export default Section;