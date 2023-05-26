"use client";
import { useEffect, useState } from 'react';
import { BuyNowContext } from '@/app/(common)/(pages)/buyNow/hooks/useBuyNowContext';
import { IntroSection } from '@/app/(mobile)/(landings)/setup-flow/components/intro';
import PPGIframeCheckoutProvider from '@/app/(common)/contexts/checkoutProviders/ppg/iframe/iframeCheckoutProvider';
import { Awards } from '@/app/(mobile)/(landings)/setup-flow/components/awards';

import dynamic from 'next/dynamic'
const TrustedBy = dynamic(() => import('@/app/(mobile)/(landings)/setup-flow/components/trustedBy/trustedBy'));
const FeaturesInfo = dynamic(() => import('@/app/(mobile)/(landings)/setup-flow/components/featuresInfo/featuresInfo'));
const Support = dynamic(() => import('@/app/(mobile)/(landings)/setup-flow/components/support/support'));
const InstructionsList = dynamic(() => import('@/app/(mobile)/(landings)/setup-flow/components/instructionsList/instructionsList'));
const UserRate = dynamic(() => import('@/app/(mobile)/(landings)/setup-flow/components/userRate/userRate'));
const Pricing = dynamic(() => import('@/app/(mobile)/(landings)/setup-flow/components/pricing/pricing'));
const ProtectDevices = dynamic(() => import('@/app/(mobile)/(landings)/setup-flow/components/protectDevices/protectDevices'));
const Comments = dynamic(() => import('@/app/(mobile)/(landings)/setup-flow/components/comments/comments'));
const StopSpied = dynamic(() => import('@/app/(mobile)/(landings)/setup-flow/components/stopSpied/stopSpied'));
const Footer = dynamic(() => import('@/app/(mobile)/(landings)/setup-flow/components/footer/footer'));


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
    const [buyNowConfig, setBuyNowConfig] = useState(undefined);

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