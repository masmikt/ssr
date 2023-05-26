"use client";
import { useEffect, useState } from 'react';

export const useFixedHeaderLayout = () => {
    const [isHeaderFixed, setIsHeaderFixed] = useState(false);
    const [isLandscape, setIsLandscape] = useState(false);
    const [isRedirecting, setIsRedirect] = useState(false);
    const [shownPricing, setShownPricing] = useState<boolean>(false);
    const [isAnchorScrolling, setIsAnchorScrolling] = useState<boolean>(false);

    const setPricingShown = () => {
        setShownPricing(true)
    }

    const changeFixedHeaderState = (value: boolean) => {
        if (isLandscape || isRedirecting) {
            return;
        }
        setIsHeaderFixed(value);
    }

    useEffect(() => {
        const mediaQueryList = window.matchMedia("(orientation: landscape)");
        const handleOrientationChange = (mediaQueryList: any) => {
            if (mediaQueryList.matches) {
                setIsHeaderFixed(true);
                setIsLandscape(true);
                return;
            }
            setIsHeaderFixed(false);
            setIsLandscape(false);
        }
        mediaQueryList.addEventListener("change", handleOrientationChange);

        return () => {
            setIsHeaderFixed(false);
        }
    }, []);


    return {
        isHeaderFixed,
        setIsHeaderFixed: changeFixedHeaderState,
        setIsRedirect,
        isAnchorScrolling,
        setPricingShown,
        setIsAnchorScrolling
    }
}