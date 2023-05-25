import {
    IBuyNowConfig,
    IBuyNowLicenseConfig,
    IBuyNowLicenses, IBuyNowLicensesConfig
} from '@/app/(common)/(pages)/buyNow/hooks/useBuynow/types';

export const useLicenseConfig = (buyNowConfig: IBuyNowConfig | any) => {
    const buyNowLicenses = buyNowConfig ? (buyNowConfig.licenses as IBuyNowLicensesConfig) : null
    const licenses = buyNowLicenses ? buyNowLicenses.filter(license => !license.specialOffer) : null;
    const specialOffersLicenses = buyNowLicenses ? buyNowLicenses.filter(license => license.specialOffer) : null;

    const getLicenseDataInfo = () => {
            if (!buyNowConfig || !buyNowLicenses) {
                return null;
            }

            let normalizedLicensesData: IBuyNowLicenses = {};

        buyNowLicenses.map((license) => {
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
