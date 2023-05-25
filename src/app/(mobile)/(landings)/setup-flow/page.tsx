"use client";
import { BuyNowContext } from '@/app/(common)/(pages)/buyNow/hooks/useBuyNowContext';
import { IntroSection } from '@/app/(mobile)/(landings)/setup-flow/components/intro';
import { useEffect, useMemo, useState } from 'react';

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
            <main>
                <IntroSection />
            </main>
        </BuyNowContext.Provider>
    );
}
