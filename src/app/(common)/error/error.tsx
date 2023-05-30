import clsx from 'clsx';
import css from './error.module.scss';
import Image from 'next/image';
import ErrorFallbackImage from 'public/images/common/error/dog.svg';
import { Typography, TypographyVariants } from '@/app/(common)/components/typography';

const ErrorFallback = () => {
    return (
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
    );
};

export default ErrorFallback;