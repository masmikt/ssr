import clsx from 'clsx';
import css from './supportedPlatform.module.scss';
import Image from 'next/image'
import { Typography, TypographyVariants } from '@/app/(common)/components/typography';

interface ISupportedPlatform {
    img: string;
    name: string;
    className?: string;
}

const SupportedPlatform = ({ img, name, className }: ISupportedPlatform) => {
    return (
        <div className={clsx(css['supported-platform'], className)}>
            <Image src={img} className={css['supported-platform__icon']} alt={name} />
            <Typography variant={TypographyVariants.p4} bold>{name}</Typography>
        </div>
    );
}


SupportedPlatform.displayName = 'SupportedPlatform';
export default SupportedPlatform;