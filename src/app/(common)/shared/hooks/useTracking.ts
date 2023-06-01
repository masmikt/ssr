'use client';
import { TrackingProvider } from '@/app/(common)/shared/services/tracking';
import { TrackingParams, EventsPlatform, DefaultIteration } from '../constants';
import { useSearchParams } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';
import { getPlatform } from '../helpers';

export interface IMarketingAttribution {
    arm: string;
    utm: {
        medium: string;
        source: string;
        campaign: string;
        term: string;
        content: string;
        campaignId: string;
        campaignAdsetId: string;
        campaignAdId: string;
    };
}

export const useTracking = () => {
    const searchParams = useSearchParams();
    const trackingProvider = new TrackingProvider(searchParams);

    const syncTrackingParams = () => {
        for (let [paramName, value] of searchParams.entries()) {
            trackingProvider.syncParam(paramName as TrackingParams, value);
        }
    };

    const getTrackingParam = <T>(paramName: TrackingParams): T | string | null => {
        return trackingProvider.getParam<T>(paramName);
    };

    const getFbc = <T>(): T | string | null => {
        const fbc = trackingProvider.getParam<T>(TrackingParams.Fbc);
        if (!fbc) {
            const fbclid = trackingProvider.getParam<T>(TrackingParams.Fbclid);
            if (fbclid) {
                const generatedFbc = `fb.1.${new Date().valueOf()}.${fbclid}`;
                trackingProvider.setParams({
                    [TrackingParams.Fbc]: generatedFbc,
                });
                return generatedFbc;
            }
        }
        return fbc;
    };

    const getFacebookPixelId = (): string => {
        const id = trackingProvider.getParam<string>(TrackingParams.FbPixelId);
        return id || '756468248094092';
    };

    const getFbp = <T>(): T | string | null => {
        const fbp = trackingProvider.getParam<T>(TrackingParams.Fbp);
        if (!fbp) {
            const generatedFbp = `fb.1.${new Date().valueOf()}.${Math.floor(
                Math.random() * 10000000000
            )}`;
            trackingProvider.setParams({
                [TrackingParams.Fbp]: generatedFbp,
            });
            return generatedFbp;
        }
        return fbp;
    };

    const getGaCid = (): string => {
        const cid =
            trackingProvider.getParam<string>(TrackingParams.CookiesGaCid) ||
            trackingProvider.getParam<string>(TrackingParams.CookiesGa) ||
            trackingProvider.getParam<string>(TrackingParams.CookiesGaId);
        if (!cid) {
            const id = uuidv4();
            trackingProvider.setParams({ [TrackingParams.CookiesGaCid]: id });
            return id;
        }
        return cid;
    };

    const getMarketing = (): IMarketingAttribution => {
        return ({
            utm: {
                medium:
                    getTrackingParam(TrackingParams.UtmMedium) ||
                    getTrackingParam(TrackingParams.OriginalUtmMedium) ||
                    '',
                source:
                    getTrackingParam(TrackingParams.UtmSource) ||
                    getTrackingParam(TrackingParams.OriginalUtmSource) ||
                    '',
                campaign:
                    getTrackingParam(TrackingParams.UtmCampaign) ||
                    getTrackingParam(TrackingParams.OriginalUtmCampaign) ||
                    '',
                term:
                    getTrackingParam(TrackingParams.UtmTerm) ||
                    getTrackingParam(TrackingParams.OriginalUtmTerm) ||
                    '',
                content:
                    getTrackingParam(TrackingParams.UtmContent) ||
                    getTrackingParam(TrackingParams.OriginalUtmContent) ||
                    '',
                campaignId: getTrackingParam(TrackingParams.UtmCampaignId) || '',
                campaignAdsetId:
                    getTrackingParam(TrackingParams.UtmCampaignAdsetId) || '',
                campaignAdId: getTrackingParam(TrackingParams.UtmCampaignAdId) || '',
            },
            arm: getTrackingParam(TrackingParams.Arm) || '',
        } as IMarketingAttribution);
    };

    const getSegmentKey = (): string => {
        const segmentKeySearchParams = searchParams.get(TrackingParams.SegmentKey);
        let segmentKey = trackingProvider.getCookieParam(TrackingParams.SegmentKey);

        if (segmentKeySearchParams && segmentKeySearchParams !== segmentKey) {
            trackingProvider.setCookieParam(
                TrackingParams.SegmentKey,
                segmentKeySearchParams
            );
            return segmentKeySearchParams;
        }

        if (!segmentKey) {
            segmentKey = process.env.NEXT_PUBLIC_SEGMENT_KEY;
            trackingProvider.setCookieParam(TrackingParams.SegmentKey, segmentKey);
        }

        return (segmentKey as string);
    };

    const getQueries = () => {
        const params: { [key: string]: string } = {};

        for (let [key, value] of searchParams.entries()) {
            params[key] = value;
        }
        return params;
    };

    const getSid = (): string => {
        const sidFromSearchParams = searchParams.get(TrackingParams.Sid);
        let sid = trackingProvider.getCookieParam(TrackingParams.Sid);

        if (sidFromSearchParams && sidFromSearchParams !== sid) {
            trackingProvider.setCookieParam(TrackingParams.Sid, sidFromSearchParams);
            return sidFromSearchParams;
        }

        if (!sid) {
            sid = uuidv4();
            trackingProvider.setCookieParam(TrackingParams.Sid, sid);
        }

        return (sid as string);
    };

    const getTrackingParams = (): { [key in TrackingParams]?: string } => {
        const params = getQueries();
        const gaCid = getGaCid() as string;
        return ({
            ...params,
            [TrackingParams.GaCid]: gaCid,
        } as { [key in TrackingParams]?: string });
    };

    const saveTrackingParams = async () => {
        const params = await getTrackingParams();
        trackingProvider.setParams(params);
    };

    const getUserAgent = () => {
        return navigator.userAgent;
    };
    const getIteration = () => {
        return (
            trackingProvider.getParam<string>(TrackingParams.Iteration) ||
            DefaultIteration
        );
    };

    const getCustomTYPage = () => {
        return trackingProvider.getParam<string | null>(TrackingParams.CustomTYPage);
    };

    const getTypeDevice = () => {
        return EventsPlatform[getPlatform()] || getPlatform();
    };

    const getUserEmail = () => {
        return trackingProvider.getParam<string>(TrackingParams.Email) || null;
    };

    const setUserEmail = (userEmail: string | null) => {
        return trackingProvider.setParams({ [TrackingParams.Email]: userEmail });
    };

    const setUserAgent = (userAgent: string | null) => {
        return trackingProvider.setParams({ [TrackingParams.UserAgent]: userAgent });
    };

    return {
        getGaCid,
        getTrackingParam,
        getQueries,
        getTrackingParams,
        saveTrackingParams,
        getSid,
        getUserAgent,
        getIteration,
        getTypeDevice,
        syncTrackingParams,
        getSegmentKey,
        getMarketing,
        getUserEmail,
        setUserEmail,
        getCustomTYPage,
        getFbc,
        getFbp,
        getFacebookPixelId,
        setUserAgent,
    };
};