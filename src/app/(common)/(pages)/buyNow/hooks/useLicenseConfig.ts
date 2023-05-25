import {
    IBuyNowConfig,
    IBuyNowLicenseConfig,
    IBuyNowLicenses
} from '@/app/(common)/(pages)/buyNow/hooks/useBuynow/types';

export const useLicenseConfig = (buyNowConfig: IBuyNowConfig | null) => {
    const licenses = buyNowConfig ? buyNowConfig.licenses.filter(license => !license.specialOffer) : null;
    const specialOffersLicenses = buyNowConfig ? buyNowConfig?.licenses.filter(license => license.specialOffer) : null;

    const getLicenseDataInfo = () => {
            if (!buyNowConfig) {
                return null;
            }

            let normalizedLicensesData: IBuyNowLicenses = {};

        buyNowConfig?.licenses.map((license) => {
                normalizedLicensesData[license.purl] = license;
            });

            return normalizedLicensesData || null;
    }

    const getLicenseData = (purl: string): IBuyNowLicenseConfig | null => {
        const licensesData = getLicenseDataInfo();

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
        getLicenseData,
        getSelectedLicenseData,
    };
};
