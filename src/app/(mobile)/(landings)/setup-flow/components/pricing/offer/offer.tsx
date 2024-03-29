import css from './offer.module.scss';
import { Opportunities } from '../opportunities';
import classNames from 'classnames';
import { PricingGuarantee } from '../pricingGuarantee';
import SpecialOfferTimer from '../timer/specialOfferTimer';
import { ButtonWrapper } from '@/app/(common)/components/button';
import { Typography, TypographyComponents, TypographyVariants } from '@/app/(common)/components/typography';
import { CheckoutButton } from '@/app/(mobile)/components/checkoutButton';
import { useBuyNowContext, useLicenseConfig, usePrice } from '@/app/(common)/(pages)/buyNow';
import { Price } from '@/app/(mobile)/(landings)/setup-flow/components/pricing/price';


const Offer = () => {
    const context = useBuyNowContext();
    const { buyNowConfig } = context;
    const { getSelectedLicenseData } = useLicenseConfig(buyNowConfig);
    const licenceInfo = getSelectedLicenseData();
    const { getPriceData, getFormattedLocalPrice } = usePrice(buyNowConfig);

    if (!licenceInfo) {
        return null;
    }
    const priceData = getPriceData(licenceInfo.purl);
    const {
        decimal,
        integer,
        currencySymbol,
        formattedPrice
    } = getFormattedLocalPrice(priceData?.value, priceData?.currency);

    return (
        <div className={css['offer']}>
            <SpecialOfferTimer />
            <Price decimal={decimal} integer={integer} currencySymbol={currencySymbol} />
            <Opportunities />
            <ButtonWrapper className={css['offer__button-wrapper']}>
                <CheckoutButton className={css['offer__button']}>
                    {`Try for ${formattedPrice}`}
                </CheckoutButton>
            </ButtonWrapper>
            <Typography
                component={TypographyComponents.p}
                variant={TypographyVariants.p5}
                className={classNames(css['offer__terms'])}>
                By clicking above, you agree to try 7 days of Clario for $2.99 as a special offer.
                After your special period offer ends, you will be automatically billed 34.95 USD for every month.
                Cancel anytime or manage your subscription in your Clario account.
            </Typography>
            <PricingGuarantee />
        </div>
    )
}

Offer.displayName = 'Offer';
export default Offer;