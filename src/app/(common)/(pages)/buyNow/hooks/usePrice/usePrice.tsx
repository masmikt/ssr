import { IBuyNowConfig, IBuyNowLicenseConfig, IBuyNowPriceConfig } from '../useBuyNow';
import { Currencies } from '@/app/(common)/shared/constants';
import { objectOmitNull } from '@/app/(common)/shared/helpers';
import { CalculatedPeriodsNames, CurrenciesSymbols } from './constants';
import { useLicenseConfig } from '../useLicenseConfig';

const DefaultCurrency = Currencies.USD;

interface IFormattedLocalPrice {
    separator: string,
    integer: number,
    decimal: number,
    currencySymbol: string,
    formattedPrice: string
}

export interface IFullPriceInfo extends IBuyNowPriceConfig {
    pricePerCalculatedPeriod?: number,
    priceCalculatedPeriodName?: CalculatedPeriodsNames,
}

type INormalizedPriceInfo = {
    [key in Currencies]: IBuyNowPriceConfig
}

export const usePrice = (buyNowConfig: IBuyNowConfig) => {
    const { getLicenseData } = useLicenseConfig(buyNowConfig);

    const getDiscountPercent = (purl: string, currency = Currencies.USD): null | number => {
        const priceInfo = getPriceData(purl);

        if (!priceInfo || !priceInfo.previousPrice) {
            return null;
        }

        return Math.round(((priceInfo.previousPrice - priceInfo.value) / priceInfo.previousPrice) * 100);
    };

    const getPriceData = (purl: string): IBuyNowPriceConfig | null => {
        const license = getLicenseData(purl);

        if (!license) {
            return null;
        }

        const pricesInfo = getNormalizedPriceInfo(license);
        const priceInfo = pricesInfo[DefaultCurrency];

        if (!priceInfo) {
            return null;
        }

        return priceInfo;
    };

    const getPricePerCalculatedPeriod = (priceInfo: IBuyNowPriceConfig | null, licenseInfo: IBuyNowLicenseConfig | null): number | null => {
        if (!priceInfo || !licenseInfo) {
            return null;
        }
        const { calculatedPeriod, value, } = priceInfo;
        const { period } = licenseInfo;

        if (!calculatedPeriod) {
            return null;
        }

        if (!calculatedPeriod) {
            return null;
        }

        return Math.round(((value / period) * calculatedPeriod) * 100) / 100;
    }

    const getCalculatedPeriodName = (priceInfo: IBuyNowPriceConfig | null) => {
        if (!priceInfo) {
            return null;
        }
        const { calculatedPeriod } = priceInfo;

        if (!calculatedPeriod) {
            return null;
        }

        if (calculatedPeriod < 7) {
            return CalculatedPeriodsNames.Day
        }

        if (calculatedPeriod < 30) {
            return CalculatedPeriodsNames.Week
        }

        return CalculatedPeriodsNames.Month;
    }


    const getFullPriceData = (purl: string): IFullPriceInfo | null => {
        const priceInfo = getPriceData(purl);
        const licenseInfo = getLicenseData(purl);
        const pricePerCalculatedPeriod = getPricePerCalculatedPeriod(priceInfo, licenseInfo);
        const priceCalculatedPeriodName = getCalculatedPeriodName(priceInfo);


        return objectOmitNull({
            ...priceInfo,
            pricePerCalculatedPeriod,
            priceCalculatedPeriodName,
        }) as any;
    };

    const getNormalizedPriceInfo = (license: IBuyNowLicenseConfig): INormalizedPriceInfo => {
        const normalizedPriceInfo = license.price.reduce(
            (prices, price) => Object.assign(prices, { [price.currency]: price }), {});
        return normalizedPriceInfo as INormalizedPriceInfo;
    };

    // Before entering to the different regions, add a definition by IP of what the currency should be and a choice of price formatted config
    const getFormattedLocalPrice = (price = 0, currency?: string): IFormattedLocalPrice => {
        const [integer = 0, decimal = 0] = price.toString().split('.');
        const separator = '.';
        let currencySymbol = CurrenciesSymbols[DefaultCurrency];
        if (currency && CurrenciesSymbols[currency]) {
            currencySymbol = CurrenciesSymbols[currency];
        }

        return {
            separator,
            integer: Number(integer),
            decimal: Number(decimal),
            currencySymbol,
            formattedPrice: // example if 12.3 return $12.30
                `${currencySymbol}${integer}${separator}${decimal.toString().length < 2 ? decimal + '0' : decimal}`,
        };
    };
    return {
        getPriceData,
        getFormattedLocalPrice,
        getFullPriceData,
        getDiscountPercent,
    };
};