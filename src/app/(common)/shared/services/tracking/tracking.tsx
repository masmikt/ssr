import { setCookie, getCookie, CookieValueTypes } from 'cookies-next';
import { TrackingParams } from '../../constants';
import { isClient } from '@/app/(common)/shared/helpers/isClient';
import { ReadonlyURLSearchParams } from 'next/navigation';

export interface ITrackingParamsConfig {
    cookiesParams?: Array<TrackingParams>,
    sessionStorageParams?: Array<TrackingParams>
}

const SessionStorageParams: Array<TrackingParams> = [
    TrackingParams.Iteration,
    TrackingParams.Cbt,
    TrackingParams.Email,
    TrackingParams.CustomTYPage,
    TrackingParams.UserAgent,
];
const CookiesParams: Array<TrackingParams> = [
    TrackingParams.Sid,
    TrackingParams.CookiesGaCid,
];

const TrackingParamsConfig: ITrackingParamsConfig = {
    cookiesParams: CookiesParams,
    sessionStorageParams: SessionStorageParams,
};


export class TrackingProvider {
    private sessionStorageParams: Array<TrackingParams>;
    private cookiesParams: Array<TrackingParams> = []
    private trackingParamsStorageKey: string = 'TRACKING_PARAMS';
    private trackingParamsCookiesKey: string = 'get_params_landings';

    constructor(private searchParams: ReadonlyURLSearchParams | URLSearchParams, private readonly trackingParamsConfig = TrackingParamsConfig) {
        this.sessionStorageParams = this.trackingParamsConfig.sessionStorageParams || [];
        this.searchParams = searchParams;
        this.cookiesParams = this.trackingParamsConfig.cookiesParams || [];
    }

    private getStorage(name: TrackingParams) {
        if (!isClient()) {
            return;
        }
        return this.sessionStorageParams.includes(name) ? window.sessionStorage : window.localStorage;
    }

    private getParamsFromStorage(storage: Storage | undefined) {
        if (!storage) {
            return null;
        }
        const params = this.getStorageValue(this.trackingParamsStorageKey, storage) || 'null';
        return JSON.parse(params);
    }

    private getStorageValue(key: string, storage: Storage) {
        if (!isClient()) {
            return null;
        }
        try {
            // Save to local storage
            if (isClient()) {
                (storage as Storage).getItem(key)
            }
        } catch (error) {
            // A more advanced implementation would handle the error case
            console.log(error)
        }
    }

    private setStorageValue(key: string, value: string, storage = localStorage) {
        try {
            // Save to storage
            if (isClient()) {
                (storage as Storage).setItem(key, JSON.stringify(value))
            }
        } catch (error) {
            // A more advanced implementation would handle the error case
            console.log(error)
        }
    }

    private getParamFromStorage<T>(name: TrackingParams): T | string | null {
        const storage = this.getStorage(name);
        const storageParams = this.getParamsFromStorage(storage);

        if (!storageParams) {
            return null;
        }

        if (storageParams[name]) {
            return storageParams[name];
        }
        return null;
    }

    getParam<T>(paramName: TrackingParams): string | T | null {
        return (
            getCookie(paramName)
            || new URLSearchParams((this.searchParams as any))?.get(paramName)
            || this.getParamFromStorage<T>(paramName)
        ) as string | T | null;
    }


    setParams<T>(params: { [key in TrackingParams]?: unknown }): void {
        this.setStorageParams(params);
        this.setCookiesParams(params);
    }

    setStorageParams(newParams: { [key in TrackingParams]?: unknown }): void {
        Object.entries(newParams).map(([paramName, value]) => {
            this.setStorageParam((paramName as TrackingParams), value);
        });
    }

    setCookiesParams(newParams: { [key in TrackingParams]?: unknown }): void {
        Object.entries(newParams).map(([paramName, value]) => {
            if (this.cookiesParams.includes((paramName as TrackingParams))) {
                this.setCookieParam(paramName, value);
            }
        });
        this.setCookieParam(this.trackingParamsCookiesKey, newParams);
    }

    setCookieParam(name = this.trackingParamsCookiesKey, value: unknown): void {
        setCookie(name, value);
    }

    getCookieParam(name = this.trackingParamsCookiesKey): CookieValueTypes {
        return getCookie(name);
    }

    setStorageParam<T>(paramName: TrackingParams, value: T | string): void {
        const paramValue = typeof value !== 'string' ? JSON.stringify(value) : value;
        const storage = this.getStorage(paramName);
        if (!storage) {
            return;
        }
        const params = this.getParamsFromStorage(storage);
        const updatedParams = { ...params, [paramName]: paramValue };
        this.setStorageValue(this.trackingParamsStorageKey, updatedParams, storage);
    }

    syncParam<T>(paramName: TrackingParams, value: T): void {
        const paramFromStorage = this.getParamFromStorage(paramName);
        if (!paramFromStorage && value) {
            this.setStorageParam(paramName, value);
        }
    }
}