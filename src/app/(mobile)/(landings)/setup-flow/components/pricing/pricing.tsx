"use client";
import { Section, SectionColor } from '../section';
import css from './pricing.module.scss';
import { ScreenNames, ScrollAnchorId } from '../../constants';
import { Typography, TypographyVariants } from '@/app/(common)/components/typography';
import { Offer } from '@/app/(mobile)/(landings)/setup-flow/components/pricing/offer';
import { BuyNowContext } from '@/app/(common)/(pages)/buyNow';
import PPGIframeCheckoutProvider from '@/app/(common)/contexts/checkoutProviders/ppg/iframe/iframeCheckoutProvider';
import { useEffect, useState } from 'react';


async function getBuyNowConfig() {
    const res = await fetch('api/setup-flow');
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to getBuyNowConfig');
    }

    const jsonResponse = await res.json();
    return JSON.parse(jsonResponse);
}


const Pricing = () => {
    const [buyNowConfig, setBuyNowConfig] = useState(undefined);

    useEffect(() => {
        getConfig();
    }, []);

    const getConfig = async () => {
        const config = await getBuyNowConfig();
        setBuyNowConfig(config);
    }

    if (!buyNowConfig) {
        return null;
    }

    return (
        <BuyNowContext.Provider
            value={{
                buyNowConfig,
            }}
        >
            <PPGIframeCheckoutProvider buyNowConfig={buyNowConfig}>
                <Section
                    color={SectionColor.Blue}
                    className={css['pricing']}
                    id={ScrollAnchorId}
                    name={ScreenNames.Plans}>
                    <div className={css['pricing__wrapper']}>
                        <div className={css['pricing__bg-image']} />
                    </div>
                    <Typography className={css['pricing__title']} variant={TypographyVariants.h3}>
                        Start your spy-free week for as low as
                    </Typography>
                    <Offer />
                </Section>
            </PPGIframeCheckoutProvider>
        </BuyNowContext.Provider>
    )
}

Pricing.displayName = 'Pricing';
export default Pricing;