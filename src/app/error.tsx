'use client';
import { useEffect } from 'react';
import css from './error.module.scss';
import { clsx } from 'clsx';
import Image from 'next/image'
import ErrorFallbackImage from 'public/images/common/error/dog.svg';
import { TypographyVariants, Typography } from '@/app/(common)/components/typography'

export default function Error({ error, reset }: {
    error: Error;
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="error-screen__layout">
            <div className={clsx(css['error-screen__container'])}>
                <Image src={ErrorFallbackImage} className={css['error-screen__image']} alt='error dog' />
                <Typography
                    className={css['error-screen__title']}
                    variant={TypographyVariants.h1}
                >
                    Ooops
                </Typography>
                <Typography variant={TypographyVariants.p2}>
                    something went wrong
                </Typography>
            </div>
        </div>
    );
}