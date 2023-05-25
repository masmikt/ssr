import css from './price.module.scss';
import { Typography, TypographyVariants } from '@/app/(common)/components/typography';

interface IPrice {
    decimal: number,
    integer: number,
    currencySymbol: string,
}

const Price = ({ decimal, integer, currencySymbol }: IPrice) => {

    return (
        <div className={css['price__info-container']}>
            <Typography className={css['price__info']} variant={TypographyVariants.h4}>
                    <span className={css['price__large']}>
                        <span className={css['price__currency']}>{currencySymbol}</span>
                        {integer}
                        <sup className={css['price__small']}>{decimal}</sup>
                    </span>
                <span className={css['price__slash']}>/7 days</span>
            </Typography>
        </div>
    )
}

Price.displayName = 'Price';
export default Price;