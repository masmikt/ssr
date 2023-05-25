import { PaymentProviders } from '../../../../shared';

export type IBuyNowPriceConfig = {
    currency: string;
    value: number;
    fullPrice?: number;
    pricePerPeriod?: number;
    newPrice?: number;
    previousPrice?: number;
    calculatedPeriod?: number;
    discount?: number;
};

export type IBuyNowLicensesConfig = Array<IBuyNowLicenseConfig>;
export type IBuyNowLicenses = {
    [key: string]: IBuyNowLicenseConfig;
}

export type IBuyNowLicenseConfig = {
    price: Array<IBuyNowPriceConfig>,
    period: number,
    name: string,
    purl: string,
    periodText?: string,
    devices: number,
    products?: Array<number>,
    sku?: Array<string>,
    selected?: boolean,
    specialOffer?: boolean,
    popular?: boolean,
}

//  Warning: PPG automatically select currency, but our bn will show usd
export interface IBuyNowConfig {
    language: string;
    customTYPage?: string,
    paymentProvider?: PaymentProviders | string,
    licenses: IBuyNowLicensesConfig
}