import { IBuyNowConfig, IBuyNowLicenseConfig, IBuyNowLicenses } from './useBuyNow';
import { useMemo } from 'react';

export const useLicenseConfig = (buyNowConfig: IBuyNowConfig) => {
    const licenses = buyNowConfig.licenses.filter(license => !license.specialOffer);
    const specialOffersLicenses = buyNowConfig.licenses.filter(license => license.specialOffer)

    const licensesData = useMemo<IBuyNowLicenses | null>(() => {
        if (!buyNowConfig) {
            return null;
        }

        let normalizedLicensesData: IBuyNowLicenses = {};

        buyNowConfig?.licenses.map((license) => {
            normalizedLicensesData[license.purl] = license;
        });

        return normalizedLicensesData || null;
    }, [buyNowConfig]);

    const getLicenseData = (purl: string): IBuyNowLicenseConfig | null => {
        if (!licensesData) {
            return null;
        }
        return licensesData[purl] || null;
    };

    const getSelectedLicenseData = (): IBuyNowLicenseConfig | null => {
        if (!licenses) {
            return null;
        }
        let selectedLicense = licenses.find((license) => license.selected);

        return selectedLicense || licenses[0];
    };

    return {
        licenses,
        specialOffersLicenses,
        licensesData,
        getLicenseData,
        getSelectedLicenseData,
    };
};
