import css from './pricingGuarantee.module.scss';
import clsx from 'clsx';
import Image from 'next/image'
import Downloads from 'public/images/common/guarantee/downloads.svg';
import MoneyBack from 'public/images/common/guarantee/money-back.svg';
import { Typography, TypographyVariants } from '@/app/(common)/components/typography';

const PricingGuarantee = () => {
    return (
        <div className={css['pricing-guarantee']}>
            <div
                className={clsx(css['pricing-guarantee__item'],
                    css['pricing-guarantee__item--left'])}>
                <Image src={MoneyBack} className={css['pricing-guarantee__item-icon']} alt="money back" />
                <Typography
                    className={css['pricing-guarantee__text']}
                    variant={TypographyVariants.p5}>
                    30-day money-back guarantee
                </Typography>
            </div>
            <div className={css['pricing-guarantee__item']}>
                <Image src={Downloads} alt="downloads" />
                <Typography
                    className={css['pricing-guarantee__text']}
                    variant={TypographyVariants.p5}>
                    100.000 + downloads
                </Typography>
            </div>
        </div>
    );
}

PricingGuarantee.displayName = 'PricingGuarantee';
export default PricingGuarantee;