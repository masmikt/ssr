"use client";
import css from './recommended.module.scss';
import { RecommendedConfig, RecommendedSources } from './config';
import Image from 'next/image'
import clsx from 'clsx';
import { ReactNode, useCallback } from 'react';
import { useSendEvent } from '@/app/(common)/shared/hooks';
import { Typography, TypographyVariants } from '@/app/(common)/components/typography';
import { Link } from '@/app/(common)/components/link';
import { SetupFlowEvents } from '@/app/(mobile)/(landings)/setup-flow/constants';

interface IRecommended {
    children?: ReactNode;
    className?: string;
    placement?: string;
}

const Recommended = ({ children, className, placement }: IRecommended) => {
    const { sendEvent } = useSendEvent()
    const handleLinkClick = useCallback((source: RecommendedSources) => {
        sendEvent(SetupFlowEvents.TrustClick, {
            placement: placement,
            source: source

        })
    }, []);
    return (
        <div className={clsx(css["recommended"], className)}>
            {children
                ? children
                : <Typography variant={TypographyVariants.h5} className={css["recommended__title"]}>
                    Trusted by
                </Typography>
            }
            <div className={css["recommended__companies"]}>
                {RecommendedConfig.map(recommended => (
                    <Link
                        className={css["recommended__company"]}
                        src={recommended.link}
                        key={recommended.name}
                        onClick={() => handleLinkClick(recommended.source)}>
                        <Image src={recommended.img} className={css["recommended__company-logo"]}
                               alt={recommended.name} />
                    </Link>
                ))}
            </div>
        </div>
    )
}

Recommended.displayName = 'Recommended';
export default Recommended;