"use client";
import { useEffect, useState } from 'react';
import { BuyNowContext } from '@/app/(common)/(pages)/buyNow/hooks/useBuyNowContext';
import { IntroSection } from '@/app/(mobile)/(landings)/setup-flow/components/intro';
import PPGIframeCheckoutProvider from '@/app/(common)/contexts/checkoutProviders/ppg/iframe/iframeCheckoutProvider';
import { Awards } from '@/app/(mobile)/(landings)/setup-flow/components/awards';
import { TrustedBy } from '@/app/(mobile)/(landings)/setup-flow/components/trustedBy';
import { FeaturesInfo } from '@/app/(mobile)/(landings)/setup-flow/components/featuresInfo';
import { Support } from '@/app/(mobile)/(landings)/setup-flow/components/support';
import InstructionsList from '@/app/(mobile)/(landings)/setup-flow/components/instructionsList/instructionsList';
import { UserRate } from '@/app/(mobile)/(landings)/setup-flow/components/userRate';
import { Pricing } from '@/app/(mobile)/(landings)/setup-flow/components/pricing';
import { ProtectDevices } from '@/app/(mobile)/(landings)/setup-flow/components/protectDevices';
import { Comments } from '@/app/(mobile)/(landings)/setup-flow/components/comments';
import { StopSpied } from '@/app/(mobile)/(landings)/setup-flow/components/stopSpied';
import { Footer } from '@/app/(mobile)/(landings)/setup-flow/components/footer';

async function getBuyNowConfig() {
    const res = await fetch('/api/setup-flow');
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to getBuyNowConfig');
    }

    const jsonResponse = await res.json();
    return JSON.parse(jsonResponse);
}


export default async function SetupFlow() {
    const [buyNowConfig, setBuyNowConfig] = useState(null);

    useEffect(() => {
        getConfig();
    }, []);

    const getConfig = async () => {
        const config = await getBuyNowConfig();
        setBuyNowConfig(config);
    }

    return (
        <BuyNowContext.Provider
            value={{
                buyNowConfig,
            }}
        >
            <PPGIframeCheckoutProvider buyNowConfig={buyNowConfig}>
                <main>
                    <IntroSection />
                    <Awards />
                    <TrustedBy />
                    <FeaturesInfo />
                    <Support />
                    <InstructionsList />
                    <UserRate />
                    <Pricing />
                    <ProtectDevices />
                    <Comments />
                    <StopSpied />
                    <Footer />
                </main>
            </PPGIframeCheckoutProvider>
        </BuyNowContext.Provider>
    );
}
