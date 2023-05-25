import { Currencies } from '@/app/(common)/shared/constants';

export const CurrenciesSymbols: { [key: string]: string } = {
    [Currencies.USD]: '$',
    [Currencies.EUR]: '€',
};

export enum CalculatedPeriodsNames {
    Day = 'day',
    Week = 'week',
    Month = 'month'
}